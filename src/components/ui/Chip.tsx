import { cn } from "@/lib/utils";

const tones = {
  neutral: "border-line text-muted",
  garnet: "border-garnet/35 text-garnet bg-garnet/5",
  sage: "border-sage/40 text-sage bg-sage/5",
  gold: "border-gold/45 text-gold bg-gold/5",
} as const;

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
