import type { Variants } from "motion/react";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const SPRING = {
  type: "spring" as const,
  stiffness: 260,
  damping: 30,
  mass: 0.8,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const stagger = (delayChildren = 0.05, staggerChildren = 0.06): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

/** Line rising out of an overflow-hidden mask. */
export const maskLine: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.05, ease: EASE_OUT } },
};

export const reduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};
