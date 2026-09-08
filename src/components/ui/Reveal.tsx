"use client";

import { motion } from "motion/react";
import { fadeUp, reduced, stagger } from "@/lib/motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const noMotion = useReducedMotionSafe();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      variants={noMotion ? reduced : fadeUp}
      transition={{ delay: noMotion ? 0 : delay }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className,
  delayChildren = 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
}) {
  const noMotion = useReducedMotionSafe();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={noMotion ? reduced : stagger(delayChildren)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const noMotion = useReducedMotionSafe();
  return (
    <motion.div className={className} variants={noMotion ? reduced : fadeUp}>
      {children}
    </motion.div>
  );
}
