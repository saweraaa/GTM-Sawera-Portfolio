import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description:
    "What data this website collects, why, how long it is kept, and how to have it removed.",
  path: "/privacy",
});

const SECTIONS = [
  {
    h: "What this site collects",
    p: "Only what you type into the contact form: your name, email address, optional company name, the enquiry type and budget band you select, and your message. Nothing else is collected and there are no advertising trackers on this site.",
  },
  {
    h: "How the form works",
    p: "Submissions are validated on the server and delivered by Brevo, a transactional email provider. Two emails are generated: a notification to Sawera Nadeem and a confirmation to you. If a mailing list id is configured, your name and email may also be stored as a contact record so future updates can be sent. You can opt out of those at any time using the unsubscribe link.",
  },
  {
    h: "Analytics",
    p: "The site uses Vercel Analytics and Vercel Speed Insights, which measure page views and loading performance in aggregate. They do not use cookies and do not build a cross-site profile of you.",
  },
  {
    h: "How long data is kept",
    p: "Enquiry emails are retained in Sawera's mailbox for as long as the conversation is commercially relevant, and deleted on request. Contact records stored with Brevo are removed on request or on unsubscribe.",
  },
  {
    h: "Your rights",
    p: "You can ask for a copy of anything held about you, ask for it to be corrected, or ask for it to be deleted. Email the address below and it will be handled promptly.",
  },
  {
    h: "Security",
    p: "The site is served over HTTPS with strict transport security. API keys are held as server-side environment variables and are never exposed to the browser.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        titleLines={["Privacy notice"]}
        lede="Short, because the site collects very little."
      />

      <Container className="pb-24">
        <div className="prose-measure space-y-10 border-t border-line pt-12">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2 className="type-title">{s.h}</h2>
              <p className="mt-3 text-muted">{s.p}</p>
            </section>
          ))}

          <section>
            <h2 className="type-title">Contact</h2>
            <p className="mt-3 text-muted">
              For any privacy request, email{" "}
              <a href={`mailto:${SITE.email}`} className="link-underline text-ink">
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
            Last updated: 7 September 2026
          </p>
        </div>
      </Container>
    </>
  );
}
