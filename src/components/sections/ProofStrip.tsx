import { HEADLINE_METRICS } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ProofStrip() {
  return (
    <section aria-label="Key results" className="border-y border-line bg-linen/50">
      <Container className="py-16 lg:py-20">
        <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {HEADLINE_METRICS.map((m) => (
            <RevealItem key={m.label}>
              <div className="flex flex-col gap-2">
                <span className="font-display text-[clamp(2.75rem,5vw,4rem)] leading-none text-garnet">
                  <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </span>
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink">
                  {m.label}
                </span>
                <p className="max-w-[28ch] text-sm text-muted">{m.note}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
