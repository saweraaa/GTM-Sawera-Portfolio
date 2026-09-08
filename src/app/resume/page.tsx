import type { Metadata } from "next";
import { Download } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Timeline } from "@/components/sections/Timeline";
import { CtaBand } from "@/components/sections/CtaBand";
import { CREDENTIALS } from "@/content/profile";
import { TOOL_STACK } from "@/content/stack";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Resume and CV, Sawera Nadeem",
  description:
    "Full professional history, credentials and downloadable CVs. Commercial version for GTM and business development roles, academic version for faculty and research positions.",
  path: "/resume",
  keywords: [
    "Sawera Nadeem CV",
    "Sawera Nadeem resume",
    "GTM engineer resume",
    "MS Computer Science CV Pakistan",
  ],
});

const SKILL_GROUPS = [
  {
    group: "Go-to-market",
    items: [
      "B2B outbound architecture",
      "Lead generation and prospecting",
      "Enrichment and lead scoring",
      "Email deliverability",
      "CRM design and pipeline ops",
      "Sales funnel reporting",
      "Negotiation and deal closing",
      "Hiring and team leadership",
    ],
  },
  {
    group: "AI and research",
    items: [
      "Retrieval-augmented generation",
      "LLM evaluation",
      "Prompt engineering",
      "Agentic workflows",
      "Convolutional neural networks",
      "Image preprocessing pipelines",
    ],
  },
  {
    group: "Engineering",
    items: [
      "JavaScript, ES6+",
      "Python",
      "PHP",
      "C++ and Java",
      "React and Next.js",
      "Node.js and Express",
      "Laravel",
      "MySQL and MongoDB",
      "Git and GitHub",
    ],
  },
  {
    group: "Teaching",
    items: [
      "Curriculum design",
      "Live instruction and labs",
      "Assessment design",
      "Mentorship",
      "Public speaking",
    ],
  },
];

export default function ResumePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resume", path: "/resume" },
        ])}
      />

      <PageHeader
        eyebrow="Resume"
        titleLines={["Two versions,", "because there are", "two audiences."]}
        lede="The commercial CV leads with pipeline, revenue systems and the GTM stack. The academic CV leads with research, teaching load and curriculum design. Take whichever fits."
      />

      <Container>
        <Reveal className="grid gap-6 border-y border-line py-10 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div>
              <p className="type-label">For commercial roles</p>
              <h2 className="type-title mt-2">GTM and business development CV</h2>
              <p className="mt-2 text-sm text-muted">
                Outbound systems, pipeline metrics, CRM architecture, growth leadership.
              </p>
            </div>
            <Button href={SITE.cv.commercial} download className="self-start">
              Download PDF
              <Download className="size-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="type-label">For academic roles</p>
              <h2 className="type-title mt-2">Faculty and research CV</h2>
              <p className="mt-2 text-sm text-muted">
                Teaching record, invited talks, research projects, technical coursework.
              </p>
            </div>
            <Button
              href={SITE.cv.academic}
              download
              variant="outline"
              className="self-start"
            >
              Download PDF
              <Download className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>

      <Timeline />

      <section className="border-t border-line py-20">
        <Container>
          <Reveal>
            <p className="type-label">Skills</p>
            <h2 className="type-display-m mt-4 max-w-[16ch]">What I actually use</h2>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.05}>
                <div className="border-t border-line pt-5">
                  <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-garnet">
                    {g.group}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((s) => (
                      <li key={s} className="text-sm text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <p className="type-label">Tools operated daily</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {TOOL_STACK.operated.map((t) => (
                <li key={t.name}>
                  <Chip tone="garnet">{t.name}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <p className="type-label">Credentials, certifications and recognition</p>
            <ul className="mt-5 grid gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {CREDENTIALS.map((c) => (
                <li key={`${c.name}-${c.issuer}`}>
                  <span className="block text-ink">{c.name}</span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                    {c.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Hiring, or just curious?"
        body="Either is fine. Send a note and I will reply personally."
        primaryLabel="Get in touch"
      />
    </>
  );
}
