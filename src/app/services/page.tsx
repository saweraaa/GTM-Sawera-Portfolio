import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, professionalServiceSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { SERVICES, PROCESS, FAQS } from "@/content/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Services, Outbound Builds, GTM Audits and AI Workflow Engineering",
  description:
    "Four ways to work together: a full outbound engine build, a GTM systems audit, AI workflow engineering, and technical training or speaking. Fixed fee, written scope, documented handover.",
  path: "/services",
  keywords: [
    "B2B lead generation services",
    "outbound system build",
    "GTM audit",
    "HubSpot CRM setup consultant",
    "cold email infrastructure setup",
    "AI automation consultant",
    "web development training Pakistan",
  ],
});

const accentText = {
  garnet: "text-garnet",
  sage: "text-sage",
  gold: "text-gold",
} as const;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          professionalServiceSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <PageHeader
        eyebrow="How we can work together"
        titleLines={["Four engagements.", "One operating principle."]}
        lede="You should end up owning a system, not renting a person. Every engagement is fixed fee against a written scope, and every one finishes with documentation your team can run from."
      />

      <Container>
        <div className="border-t border-line">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <article className="grid gap-8 border-b border-line py-14 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span
                      aria-hidden
                      className={cn(
                        "font-display text-2xl tabular-nums",
                        accentText[s.accent]
                      )}
                    >
                      {s.index}
                    </span>
                    <h2 className="type-display-m">{s.title}</h2>
                  </div>
                  <p className="mt-5 text-muted">{s.summary}</p>
                  <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                    {s.timeline}
                  </p>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="type-label">Who it is for</p>
                  <p className="mt-2 text-ink">{s.forWho}</p>

                  <p className="type-label mt-8">What you receive</p>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-muted">
                        <span
                          aria-hidden
                          className={cn("mt-2 size-1.5 shrink-0 rounded-full bg-current", accentText[s.accent])}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">How it runs</p>
            <h2 className="type-display-m mt-4 max-w-[16ch]">
              Four steps, no surprises
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <li className="border-t border-line pt-6">
                  <span className="font-display text-3xl text-gold/60 tabular-nums">
                    {p.step}
                  </span>
                  <h3 className="type-title mt-3">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-linen/50 py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">Before you write</p>
            <h2 className="type-display-m mt-4 mb-10 max-w-[16ch]">
              Common questions
            </h2>
          </Reveal>
          <Accordion items={FAQS} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
