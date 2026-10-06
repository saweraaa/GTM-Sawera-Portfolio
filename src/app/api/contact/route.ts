import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendEmail, upsertContact } from "@/lib/brevo";
import { notificationEmail, autoReplyEmail } from "@/lib/email-templates";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    const limited = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000);
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many messages from this address. Please try again later." },
        { status: 429 }
      );
    }

    const json = await req.json().catch(() => null);
    if (!json) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Spam layer 1: honeypot must be empty.
    if (data.website && data.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Spam layer 2: automated bots submit almost instantly (<1 second).
    if (
      process.env.NODE_ENV !== "development" &&
      data.startedAt &&
      Date.now() - data.startedAt < 1000
    ) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Spam layer 3: link-stuffed bodies.
    const linkCount = (data.message.match(/https?:\/\//g) ?? []).length;
    if (linkCount > 3) {
      return NextResponse.json(
        { error: "Please remove some links from your message." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY?.trim();
    if (!apiKey) {
      console.error("[contact] BREVO_API_KEY is missing or unconfigured in environment");
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet (missing BREVO_API_KEY). Please set BREVO_API_KEY in .env.local or Vercel, or email saweranadeem8063@gmail.com directly.",
        },
        { status: 503 }
      );
    }

    const to = [
      {
        email: process.env.CONTACT_TO_EMAIL?.trim() || "saweranadeem8063@gmail.com",
        name: process.env.CONTACT_TO_NAME?.trim() || "Sawera Nadeem",
      },
    ];

    // The notification is the one that must not fail.
    await sendEmail({
      to,
      subject: `New enquiry: ${data.name}${data.company ? `, ${data.company}` : ""}`,
      htmlContent: notificationEmail(data),
      textContent: `${data.name} (${data.email})\nInterest: ${data.projectType}\n\n${data.message}`,
      replyTo: { email: data.email, name: data.name },
      tags: ["website-contact"],
    });

    // The auto-reply and contact sync are best-effort.
    await Promise.allSettled([
      sendEmail({
        to: [{ email: data.email, name: data.name }],
        subject: "Thanks for getting in touch",
        htmlContent: autoReplyEmail(data.name),
        textContent: `Hi ${data.name.split(" ")[0]}, your message has arrived. I reply personally, usually within one working day. Sawera Nadeem`,
        tags: ["website-autoreply"],
      }),
      upsertContact(data.email, data.name, data.company || undefined),
    ]);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] send failed:", err);
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      { error: `Could not send right now (${message}). Please email saweranadeem8063@gmail.com directly.` },
      { status: 500 }
    );
  }
}
