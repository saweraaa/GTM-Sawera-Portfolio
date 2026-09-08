import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { Accordion } from "@/components/ui/Accordion";
import { PipelineDiagram } from "@/components/sections/PipelineDiagram";
import { CtaBand } from "@/components/sections/CtaBand";
import { TOOL_STACK } from "@/content/stack";
import { FAQS } from "@/content/services";

export const metadata: Metadata = buildMetadata({
  title: "GTM Engineering, the Six-Stage Outbound System I Build",
  description:
    "What GTM engineering is, how a B2B outbound system is architected stage by stage, and the tools behind each one. Written from live experience selling healthcare AI into US clinics.",
  path: "/gtm-engineering",
  keywords: [
    "GTM engineering",
    "what is a GTM engineer",
    "go to market engineer",
    "B2B outbound system",
    "outbound architecture",
    "email deliverability",
    "HubSpot pipeline architecture",
    "lead enrichment and scoring",
    "healthcare SaaS outbound",
  ],
});

const GTM_FAQS = [
  {
    q: "What is a GTM engineer?",
    a: "A GTM engineer builds and maintains the system that turns a market into a pipeline, rather than working the pipeline personally. The output is infrastructure: data sourcing, enrichment logic, scoring, sending infrastructure, CRM architecture and reporting. The test of a good one is whether the system still books meetings when a different person sits in the chair.",
  },
  {
    q: "How is that different from a sales development representative?",
    a: "An SDR is measured on meetings booked. A GTM engineer is measured on whether the machine that books them is documented, instrumented and transferable. Both matter, but they are different jobs and they fail in different ways.",
  },
  {
    q: "Do you need to write code to do this?",
    a: "Not for the first eighty percent. The premium appears at the edge cases: when two tools need to talk in a way neither vendor anticipated, or ten thousand records need classifying against a definition no filter supports. That is where a non-technical operator stops and an engineer keeps going.",
  },
  ...FAQS.slice(0, 3),
];

export default function GtmEngineeringPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "GTM Engineering", path: "/gtm-engineering" },
          ]),
          faqSchema(GTM_FAQS),
        ]}
      />

      <PageHeader
        eyebrow="The discipline"
        titleLines={["Pipeline is a system,", "not a personality."]}
        lede="Most outbound fails for infrastructure reasons, not creative ones. This is the six-stage architecture I build, in the order I build it, with the parts that break first called out honestly."
        meta={[
          { label: "Market", value: "US healthcare, B2B SaaS" },
          { label: "Channels", value: "Email, LinkedIn" },
          { label: "CRM", value: "HubSpot" },
          { label: "Typical build", value: "4 to 6 weeks" },
        ]}
      />

      <Container>
        <Reveal className="prose-measure space-y-6 border-t border-line pt-14 text-muted">
          <p>
            The title started appearing around 2024 and nobody could agree what it meant.
            The pattern is clear enough now to describe honestly: a GTM engineer builds the
            machine that turns a market into a pipeline. Not the person working the
            pipeline. The person who builds the thing the pipeline runs on.
          </p>
          <p>
            That distinction changes what good looks like. A sales development
            representative is measured on meetings booked. A GTM engineer is measured on
            whether the system still books meetings when somebody else is running it.
          </p>
          <p className="border-l-2 border-garnet pl-5 text-ink">
            I run this system today for SynaCare, an AI-first electronic health record sold
            into clinics and hospitals across the United States. It is one of the hardest
            cold markets there is, which makes it a useful place to test whether an
            architecture actually holds.
          </p>
        </Reveal>
      </Container>

      <PipelineDiagram />

      {/* Tooling, split honestly */}
      <section className="border-t border-line py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="type-label">The stack</p>
                <h2 className="type-display-m mt-4 max-w-[14ch]">
                  Tools I run, and tools I build with.
                </h2>
                <p className="type-lead mt-5">
                  The stack turns over roughly every twelve months, so tool fluency has a
                  short half life. Systems thinking does not.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="type-label text-garnet">Operated daily</p>
                <ul className="mt-5 divide-y divide-line border-y border-line">
                  {TOOL_STACK.operated.map((t) => (
                    <li key={t.name} className="flex flex-wrap items-baseline gap-x-4 py-4">
                      <span className="min-w-[11rem] font-display text-lg">{t.name}</span>
                      <span className="text-sm text-muted">{t.note}</span>
                      <span className="ml-auto font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                        {t.category}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="type-label mt-12 text-sage">
                  The engineering layer I bring on top
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {TOOL_STACK.buildsWith.map((t) => (
                    <li key={t.name}>
                      <Chip tone="sage">{t.name}</Chip>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What breaks first */}
      <section className="bg-linen/50 py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">Maintenance, not strategy</p>
            <h2 className="type-display-m mt-4 max-w-[18ch]">What breaks first, and why</h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Deliverability",
                b: "Degrades gradually and then all at once. Domain reputation is the one asset in the system you cannot buy back quickly.",
              },
              {
                t: "List decay",
                b: "Healthcare operations roles turn over fast. A six month old list is a different list, not an older one.",
              },
              {
                t: "CRM drift",
                b: "Stages get added ad hoc until the funnel report stops meaning anything. Definitions have to be enforced, not agreed.",
              },
              {
                t: "Message fatigue",
                b: "When the addressable list is small, the same sequence cannot run forever. Rotation has to be planned in from day one.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 0.05}>
                <div className="h-full border-t border-line pt-6">
                  <h3 className="type-title">{item.t}</h3>
                  <p className="mt-3 text-sm text-muted">{item.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">Questions</p>
            <h2 className="type-display-m mt-4 mb-10 max-w-[16ch]">
              The things people actually ask
            </h2>
          </Reveal>
          <Accordion items={GTM_FAQS} />
        </Container>
      </section>

      <CtaBand
        title="Want this built for your team?"
        body="Send me what the funnel looks like today. I will come back with what I would fix first, in order."
        primaryLabel="Scope a build"
      />
    </>
  );
}
