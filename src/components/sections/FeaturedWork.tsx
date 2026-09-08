import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_WORK } from "@/content/work";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title={<>Systems, not screenshots.</>}
          lede="Three engagements that show the range: a revenue engine, a research pipeline, and a curriculum that runs at national scale."
        />

        <div className="mt-16 flex flex-col gap-20 lg:mt-24 lg:gap-28">
          {FEATURED_WORK.map((c, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={c.slug}>
                <article
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-12",
                    flipped && "lg:[direction:rtl]"
                  )}
                >
                  <Link
                    href={`/work/${c.slug}`}
                    data-cursor="view"
                    className="group relative block overflow-hidden rounded-xl2 lg:col-span-7 lg:[direction:ltr]"
                    aria-label={`Read the case study: ${c.title}`}
                  >
                    <SmartImage
                      src={c.cover}
                      alt={c.title}
                      width={1600}
                      height={1000}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="aspect-16/10 w-full scale-[1.02] object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-100"
                      wrapperClassName="aspect-16/10 w-full rounded-xl2"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-xl2 ring-1 ring-inset ring-ink/8"
                    />
                  </Link>

                  <div className="lg:col-span-5 lg:[direction:ltr]">
                    <div className="flex flex-wrap items-center gap-3">
                      <Chip tone={c.category === "Applied AI" ? "sage" : "garnet"}>
                        {c.category}
                      </Chip>
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                        {c.year}
                      </span>
                    </div>

                    <h3 className="type-display-m mt-5">
                      <Link
                        href={`/work/${c.slug}`}
                        className="link-underline"
                        data-cursor="link"
                      >
                        {c.title}
                      </Link>
                    </h3>

                    <p className="mt-4 text-muted">{c.kicker}</p>

                    <dl className="mt-7 grid grid-cols-2 gap-5 border-t border-line pt-6">
                      {c.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <dt className="sr-only">{m.label}</dt>
                          <dd className="font-display text-2xl text-garnet">
                            {m.value}
                          </dd>
                          <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </dl>

                    <Link
                      href={`/work/${c.slug}`}
                      data-cursor="link"
                      className="group/link mt-7 inline-flex items-center gap-2 text-sm text-ink"
                    >
                      <span className="link-underline">Read the case study</span>
                      <ArrowUpRight className="size-4 text-garnet transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20 flex justify-center">
          <Button href="/work" variant="outline" size="lg">
            All case studies
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
