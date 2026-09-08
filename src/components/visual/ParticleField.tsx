"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function ParticleField() {
  const noMotion = useReducedMotionSafe();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const active = !noMotion && isDesktop;

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: { onHover: { enable: true, mode: "bubble" }, resize: { enable: true } },
        modes: { bubble: { distance: 140, size: 5, opacity: 0.65, duration: 2 } },
      },
      particles: {
        number: { value: 26, density: { enable: true, width: 1200, height: 800 } },
        color: { value: ["#E7CBC8", "#C79A5B", "#B33A63"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.14, max: 0.45 },
          animation: { enable: true, speed: 0.5, sync: false },
        },
        size: { value: { min: 1.5, max: 4 } },
        links: { enable: false },
        move: {
          enable: true,
          speed: { min: 0.15, max: 0.5 },
          direction: "top",
          straight: false,
          outModes: { default: "out" },
          random: true,
        },
      },
    }),
    []
  );

  if (!active) return null;

  return (
    <ParticlesProvider init={initializeParticles}>
      <Particles
        id="petals"
        options={options}
        className="pointer-events-none absolute inset-0 -z-10"
      />
    </ParticlesProvider>
  );
}

async function initializeParticles(engine: Engine) {
  await loadSlim(engine);
}
