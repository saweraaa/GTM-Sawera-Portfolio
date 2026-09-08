"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const noMotion = useReducedMotionSafe();

  // Never hijack scrolling for someone who has asked the OS not to animate.
  if (noMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
