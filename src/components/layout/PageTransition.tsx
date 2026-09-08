"use client";

import { motion } from "motion/react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { EASE_IN_OUT } from "@/lib/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const noMotion = useReducedMotionSafe();

  if (noMotion) return <>{children}</>;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] origin-top bg-garnet"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease: EASE_IN_OUT }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
