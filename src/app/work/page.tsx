import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Chip } from "@/components/ui/Chip";
import { CtaBand } from "@/components/sections/CtaBand";
import { CASE_STUDIES } from "@/content/work";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies, GTM Systems, Applied AI and Curriculum Design",
  description:
    "Five engagements in detail: an outbound engine for healthcare AI, an Urdu clinical retrieval pipeline, a national full-stack curriculum, a marketplace build and a counterfeit-detection model fix.",
  path: "/work",
  keywords: [
    "GTM case study",
    "B2B outbound case study",
    "healthcare AI sales case study",
    "RAG project",
    "full stack curriculum design",
  ],
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />

      <PageHeader
        eyebrow="Case studies"
        titleLines={["The work, with", "the numbers attached."]}
        lede="Five engagements across go-to-market, applied AI, product engineering and curriculum design. Each one includes what was actually hard about it."
      />

      <Container>
        <ul className="grid gap-x-8 gap-y-16 border-t border-line pt-14 md:grid-cols-2">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.slug} as="li" delay={(i % 2) * 0.06}>
              <article className="group flex h-full flex-col">
                <Link
                  href={`/work/${c.slug}`}
                  data-cursor="view"
                  className="relative block overflow-hidden rounded-xl2"
                  aria-label={`Read the case study: ${c.title}`}
                >
                  <SmartImage
                    src={c.cover}
                    alt={c.title}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="aspect-16/10 w-full scale-[1.03] object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-100"
                    wrapperClassName="aspect-16/10 w-full rounded-xl2"
                  />
                </Link>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Chip tone={c.category === "Applied AI" ? "sage" : "garnet"}>
                    {c.category}
                  </Chip>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    {c.year}
                  </span>
                </div>

                <h2 className="type-title mt-4">
                  <Link href={`/work/${c.slug}`} className="link-underline" data-cursor="link">
                    {c.title}
                  </Link>
                </h2>

                <p className="mt-3 flex-1 text-sm text-muted">{c.kicker}</p>

                <Link
                  href={`/work/${c.slug}`}
                  data-cursor="link"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-garnet"
                >
                  Read it
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>

      <CtaBand />
    </>
  );
}
