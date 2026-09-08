"use client";

import { motion } from "motion/react";
import { maskLine } from "@/lib/motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/utils";

export function TextReveal({
  lines,
  className,
  lineClassName,
  as: Tag = "h1",
  delay = 0,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "p" | "div";
  delay?: number;
}) {
  const noMotion = useReducedMotionSafe();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn("block", lineClassName)}
            initial={noMotion ? { opacity: 0 } : "hidden"}
            animate={noMotion ? { opacity: 1 } : "show"}
            variants={noMotion ? undefined : maskLine}
            transition={
              noMotion
                ? { duration: 0.01 }
                : { delay: delay + i * 0.075 }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
