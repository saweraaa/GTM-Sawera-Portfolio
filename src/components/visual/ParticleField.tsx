"use client";

import { useMemo } from "react";
import { useTheme } from "next-themes";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function ParticleField() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const noMotion = useReducedMotionSafe();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: isDesktop ? 60 : 30,
      detectRetina: true,
      resize: { enable: true },
      interactivity: {
        events: { onHover: { enable: !noMotion && isDesktop, mode: "bubble" } },
        modes: { bubble: { distance: 140, size: 5, opacity: 0.65, duration: 2 } },
      },
      particles: {
        number: {
          value: isDesktop ? 26 : 24,
          density: { enable: isDesktop, width: 1200, height: 800 },
        },
        // tsParticles v4 reads colors from paint; particles.color is ignored.
        paint: {
          color: {
            value: isDark
              ? ["#E7CBC8", "#E0B87C", "#E5799B"]
              : ["#B33A63", "#956A35", "#8E2B4D"],
          },
        },
        shape: { type: "circle" },
        opacity: {
          value: isDark ? { min: 0.14, max: 0.45 } : { min: 0.3, max: 0.6 },
          animation: { enable: !noMotion, speed: 0.5, sync: false },
        },
        size: { value: { min: 1.5, max: 4 } },
        links: { enable: false },
        move: {
          enable: !noMotion,
          speed: { min: 0.15, max: 0.5 },
          direction: "top",
          straight: false,
          outModes: { default: "out" },
          random: true,
        },
      },
    }),
    [isDark, isDesktop, noMotion]
  );

  if (resolvedTheme === undefined) return null;

  return (
    <ParticlesProvider init={initializeParticles}>
      <Particles
        id="petals"
        options={options}
        className="pointer-events-none absolute inset-0 z-0"
      />
    </ParticlesProvider>
  );
}

async function initializeParticles(engine: Engine) {
  await loadSlim(engine);
}
