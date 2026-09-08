import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  onPlum = false,
}: {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "right";
  className?: string;
  onPlum?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "right" && "lg:items-end lg:text-right",
        className
      )}
    >
      <div className="flex items-baseline gap-4">
        {index && (
          <span
            aria-hidden
            className="type-display-m text-gold/45 leading-none tabular-nums"
          >
            {index}
          </span>
        )}
        {eyebrow && <span className="type-label">{eyebrow}</span>}
      </div>

      <h2 className={cn("type-display-l max-w-[16ch]", onPlum && "text-on-plum")}>
        {title}
      </h2>

      {lede && (
        <p className={cn("type-lead", align === "right" && "lg:ml-auto")}>
          {lede}
        </p>
      )}
    </Reveal>
  );
}
