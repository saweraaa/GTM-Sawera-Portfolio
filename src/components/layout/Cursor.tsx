"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Mode = "default" | "link" | "view";

export function Cursor() {
  const noMotion = useReducedMotionSafe();
  const finePointer = useMediaQuery("(pointer: fine)");
  const active = !noMotion && finePointer;

  const [mode, setMode] = useState<Mode>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.55 });

  useEffect(() => {
    if (!active) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      const value = el?.getAttribute("data-cursor") as Mode | null;
      setMode(value ?? "default");
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [active, x, y]);

  if (!active) return null;

  const ringSize = mode === "view" ? 84 : mode === "link" ? 66 : 34;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[95] rounded-full bg-ink mix-blend-difference"
        style={{ x, y, width: 8, height: 8, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible && mode === "default" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[94] flex items-center justify-center rounded-full border border-garnet"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? 1 : 0,
          backgroundColor:
            mode === "default" ? "rgba(179,58,99,0)" : "rgba(179,58,99,1)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
      >
        {mode === "view" && (
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-bone">
            View
          </span>
        )}
      </motion.div>
    </>
  );
}
