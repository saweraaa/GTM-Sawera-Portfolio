"use client";

import { useEffect, useRef } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

type Blob = {
  x: number; y: number; r: number;
  dx: number; dy: number; color: string;
};

export function AuroraMesh({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const noMotion = useReducedMotionSafe();

  useEffect(() => {
    if (noMotion) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const blobs: Blob[] = [
      { x: w * 0.22, y: h * 0.32, r: Math.max(w, h) * 0.42, dx: 0.16, dy: 0.11, color: "179, 58, 99" },
      { x: w * 0.78, y: h * 0.58, r: Math.max(w, h) * 0.38, dx: -0.13, dy: -0.09, color: "199, 154, 91" },
      { x: w * 0.52, y: h * 0.82, r: Math.max(w, h) * 0.34, dx: 0.09, dy: -0.14, color: "126, 144, 128" },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const b of blobs) {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < -b.r * 0.3 || b.x > w + b.r * 0.3) b.dx *= -1;
        if (b.y < -b.r * 0.3 || b.y > h + b.r * 0.3) b.dy *= -1;

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.color}, 0.22)`);
        g.addColorStop(0.55, `rgba(${b.color}, 0.07)`);
        g.addColorStop(1, `rgba(${b.color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [noMotion]);

  if (noMotion) return null;

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={className ?? "pointer-events-none absolute inset-0 size-full opacity-70"}
    />
  );
}
