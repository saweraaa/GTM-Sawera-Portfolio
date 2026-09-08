import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, caseStudySchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Chip } from "@/components/ui/Chip";
import { CtaBand } from "@/components/sections/CtaBand";
import { CASE_STUDIES, getCaseStudy } from "@/content/work";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found" };

  return buildMetadata({
    title: study.title,
    description: study.summary.slice(0, 158),
    path: `/work/${study.slug}`,
    image: `/work/${study.slug}/opengraph-image`,
    keywords: [study.category, ...study.stack, "case study"],
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          caseStudySchema({
            title: study.title,
            description: study.summary,
            slug: study.slug,
            image: study.cover,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: study.title, path: `/work/${study.slug}` },
          ]),
        ]}
      />

      <article>
        <header className="pb-14 pt-36 lg:pt-48">
          <Container>
            <Link
              href="/work"
              data-cursor="link"
              className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted hover:text-garnet"
            >
              <ArrowLeft className="size-3.5" />
              All case studies
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Chip tone={study.category === "Applied AI" ? "sage" : "garnet"}>
                {study.category}
              </Chip>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                {study.year}
              </span>
            </div>

            <TextReveal
              as="h1"
              className="type-display-l mt-6 max-w-[20ch]"
              lines={[study.title]}
            />

            <Reveal delay={0.2}>
              <p className="type-lead mt-7">{study.kicker}</p>

              <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="type-label">Organisation</dt>
                  <dd className="mt-2 text-ink">{study.org}</dd>
                </div>
                <div>
                  <dt className="type-label">Role</dt>
                  <dd className="mt-2 text-ink">{study.role}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="type-label">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {study.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </Container>
        </header>

        <Container bleed>
          <Reveal>
            <SmartImage
              src={study.cover}
              alt={study.title}
              width={2000}
              height={1250}
              priority
              sizes="100vw"
              className="aspect-16/10 w-full rounded-xl2 object-cover"
              wrapperClassName="aspect-16/10 w-full rounded-xl2"
            />
          </Reveal>
        </Container>

        {/* Metrics */}
        <Container className="py-16 lg:py-20">
          <Reveal>
            <dl className="grid gap-8 border-y border-line py-10 sm:grid-cols-2 lg:grid-cols-4">
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-none text-garnet">
                    {m.value}
                  </dd>
                  <dt className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>

        {/* Body */}
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="type-label">The situation</p>
                <p className="prose-measure mt-4 text-lg text-ink">{study.summary}</p>
              </Reveal>

              <Reveal className="mt-14">
                <p className="type-label">The problem</p>
                <p className="prose-measure mt-4 text-muted">{study.challenge}</p>
              </Reveal>

              <Reveal className="mt-14">
                <p className="type-label">What I did</p>
                <ol className="mt-6 flex flex-col gap-10">
                  {study.approach.map((a, i) => (
                    <li key={a.title} className="border-t border-line pt-6">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="type-title mt-3 max-w-[26ch]">{a.title}</h2>
                      <p className="prose-measure mt-3 text-muted">{a.body}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <div className="lg:sticky lg:top-32">
                  <p className="type-label">Outcome</p>
                  <ul className="mt-5 space-y-4 border-t border-line pt-5">
                    {study.outcome.map((o) => (
                      <li key={o} className="flex gap-3 text-sm text-muted">
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-garnet"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                  {study.note && (
                    <p className="mt-6 border-l-2 border-gold/60 pl-4 text-xs text-muted">
                      {study.note}
                    </p>
                  )}
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>

        {/* Next */}
        <Container className="py-24">
          <Reveal>
            <p className="type-label">Keep reading</p>
            <ul className="mt-8 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/work/${o.slug}`}
                    data-cursor="link"
                    className="group flex items-start justify-between gap-6"
                  >
                    <span>
                      <span className="type-label">{o.category}</span>
                      <span className="type-title mt-2 block max-w-[24ch]">{o.title}</span>
                    </span>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-garnet transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </article>

      <CtaBand />
    </>
  );
}
