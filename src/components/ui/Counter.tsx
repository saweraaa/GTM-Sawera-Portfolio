"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const noMotion = useReducedMotionSafe();

  useEffect(() => {
    if (noMotion) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setDisplay(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, noMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {(noMotion ? value : display).toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
