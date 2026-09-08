import { Container } from "./Container";
import { TextReveal } from "./TextReveal";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  titleLines,
  lede,
  meta,
  className,
}: {
  eyebrow: string;
  titleLines: React.ReactNode[];
  lede?: string;
  meta?: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <header className={cn("pb-16 pt-36 lg:pb-20 lg:pt-48", className)}>
      <Container>
        <p className="type-label">{eyebrow}</p>

        <TextReveal
          as="h1"
          className="type-display-l mt-6 max-w-[18ch]"
          lines={titleLines}
          delay={0.1}
        />

        {lede && (
          <Reveal delay={0.25}>
            <p className="type-lead mt-8">{lede}</p>
          </Reveal>
        )}

        {meta && (
          <Reveal delay={0.3}>
            <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    {m.label}
                  </dt>
                  <dd className="mt-2 text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
