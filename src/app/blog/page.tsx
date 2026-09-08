import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { CtaBand } from "@/components/sections/CtaBand";
import { POSTS } from "@/content/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Notes on GTM Engineering, Applied AI and Teaching",
  description:
    "Working notes on building B2B outbound systems, evaluating retrieval-augmented generation, and teaching developers at scale. Written from live projects, not from theory.",
  path: "/blog",
  keywords: [
    "GTM engineering blog",
    "B2B outbound writing",
    "RAG notes",
    "cold email deliverability guide",
  ],
});

export default function BlogPage() {
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Notes", path: "/blog" },
        ])}
      />

      <PageHeader
        eyebrow="Notes"
        titleLines={["Working notes,", "not thought leadership."]}
        lede="Things I have had to figure out on live projects, written down while they are still fresh enough to be specific."
      />

      <Container>
        <ul className="divide-y divide-line border-y border-line">
          {sorted.map((post, i) => (
            <Reveal key={post.slug} as="li" delay={i * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                data-cursor="link"
                className="group grid gap-4 py-10 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-3">
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                    {formatDate(post.date)}
                  </p>
                  <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                    {post.readingTime}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <h2 className="type-display-m max-w-[22ch] transition-colors duration-300 group-hover:text-garnet">
                    {post.title}
                  </h2>
                  <p className="prose-measure mt-4 text-muted">{post.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-1 lg:justify-self-end">
                  <ArrowUpRight className="size-6 text-garnet transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>

      <CtaBand />
    </>
  );
}
