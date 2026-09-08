import type { Metadata } from "next";
import { Mail, MapPin, ExternalLink, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Sawera Nadeem",
  description:
    "Start a conversation about an outbound engine build, a GTM audit, AI workflow engineering, a speaking invitation or a role. Replies within one working day.",
  path: "/contact",
  keywords: [
    "contact Sawera Nadeem",
    "hire a GTM engineer",
    "book a speaker Pakistan",
    "B2B lead generation consultant contact",
  ],
});

const CHANNELS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: ExternalLink, label: "LinkedIn", value: "sawera-nadeem", href: SITE.socials.linkedin },
  { icon: MapPin, label: "Based in", value: SITE.location },
  { icon: Clock, label: "Time zone", value: SITE.timezone },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHeader
        eyebrow="Contact"
        titleLines={["Tell me what is", "actually happening."]}
        lede="The messier the description, the more useful the first call. I reply to everything personally, usually within one working day."
      />

      <Container className="pb-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-32">
                <p className="type-label">Direct channels</p>
                <ul className="mt-6 space-y-6 border-t border-line pt-6">
                  {CHANNELS.map((c) => {
                    const Icon = c.icon;
                    const content = (
                      <span className="flex items-start gap-4">
                        <Icon className="mt-0.5 size-4 shrink-0 text-garnet" aria-hidden />
                        <span>
                          <span className="block font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                            {c.label}
                          </span>
                          <span className="mt-1 block text-ink">{c.value}</span>
                        </span>
                      </span>
                    );

                    return (
                      <li key={c.label}>
                        {c.href ? (
                          <a
                            href={c.href}
                            data-cursor="link"
                            className="group block"
                            {...(c.href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-10 rounded-card border border-line bg-linen/60 p-6">
                  <p className="type-label">Good to know</p>
                  <p className="mt-3 text-sm text-muted">
                    I hold overlapping hours with both US Eastern and Pacific time, so a
                    call in your morning is usually workable.
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </>
  );
}
