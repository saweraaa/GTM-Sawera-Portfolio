"use client";

import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function Marquee({
  items,
  speed = 42,
  className,
}: {
  items: readonly string[];
  speed?: number;
  className?: string;
}) {
  const noMotion = useReducedMotionSafe();
  const doubled = [...items, ...items];

  return (
    <div className={cn("mask-fade-x group relative overflow-hidden", className)}>
      <ul
        className={cn(
          "flex w-max items-center gap-12",
          !noMotion && "animate-[marquee_var(--marquee-duration)_linear_infinite]",
          "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {doubled.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center gap-12"
          >
            <span className="font-display text-[clamp(1.1rem,2vw,1.6rem)] whitespace-nowrap text-ink/70">
              {item}
            </span>
            <span aria-hidden className="size-1.5 rounded-full bg-gold/60" />
          </li>
        ))}
      </ul>
    </div>
  );
}
