"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

/**
 * Returns true only after mount, so server and client markup match.
 * Every animated component in this project gates on this.
 */
export function useReducedMotionSafe() {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
