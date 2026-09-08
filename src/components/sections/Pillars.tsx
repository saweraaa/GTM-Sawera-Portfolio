import { PILLARS } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";

export function Pillars() {
  return (
    <section className="py-24 lg:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="type-label">Three disciplines, one job</p>
                <h2 className="type-display-l mt-5 max-w-[12ch]">
                  Most people pick one. I did not.
                </h2>
                <p className="type-lead mt-6">
                  The overlap is the whole point. Selling technical products is easier
                  when you have shipped them, and building AI into a revenue stack is
                  safer when you have had to evaluate it properly.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col">
              {PILLARS.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06}>
                  <article className="group py-12 first:pt-0">
                    <div className="flex items-baseline gap-5">
                      <span
                        aria-hidden
                        className="font-display text-2xl leading-none text-gold/50 tabular-nums"
                      >
                        {p.index}
                      </span>
                      <h3 className="type-display-m">{p.title}</h3>
                    </div>

                    <p className="mt-5 font-display text-xl text-garnet">{p.lede}</p>
                    <p className="prose-measure mt-4 text-muted">{p.body}</p>

                    <p className="mt-5 border-l-2 border-gold/50 pl-4 text-sm text-ink">
                      {p.proof}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t}>
                          <Chip tone={p.id === "ai" ? "sage" : "neutral"}>{t}</Chip>
                        </li>
                      ))}
                    </ul>

                    {i < PILLARS.length - 1 && <Rule className="mt-12" />}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
