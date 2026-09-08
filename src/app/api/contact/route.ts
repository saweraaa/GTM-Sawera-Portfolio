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
    if (data.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Spam layer 2: humans take longer than three seconds to fill this in.
    if (data.startedAt && Date.now() - data.startedAt < 3000) {
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

    const to = [
      {
        email: process.env.CONTACT_TO_EMAIL!,
        name: process.env.CONTACT_TO_NAME ?? "Sawera Nadeem",
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
    return NextResponse.json(
      { error: "Could not send right now. Please email saweranadeem8063@gmail.com directly." },
      { status: 500 }
    );
  }
}
