"use client";

import { motion } from "motion/react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function UnderlineSwash({ delay = 0.9 }: { delay?: number }) {
  const noMotion = useReducedMotionSafe();

  return (
    <svg
      aria-hidden
      viewBox="0 0 300 18"
      preserveAspectRatio="none"
      className="absolute -bottom-1 left-0 h-[0.42em] w-full text-garnet"
    >
      <motion.path
        d="M2 12C48 5 96 3 148 6c46 3 92 7 150 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: noMotion ? 1 : 0, opacity: noMotion ? 1 : 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={
          noMotion
            ? { duration: 0.01 }
            : { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }
        }
      />
    </svg>
  );
}
