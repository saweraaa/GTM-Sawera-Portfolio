"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { PIPELINE_STAGES } from "@/content/stack";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function PipelineDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const noMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const raw = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const height = useTransform(raw, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <Container>
        <div className="relative">
          {/* Rail */}
          <div
            aria-hidden
            className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-line md:block"
          >
            <motion.div
              className="w-px bg-garnet"
              style={{ height: noMotion ? "100%" : height }}
            />
          </div>

          <ol className="flex flex-col gap-14">
            {PIPELINE_STAGES.map((stage) => (
              <li key={stage.step} className="relative md:pl-16">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 hidden size-10 place-items-center rounded-full border border-line bg-bone font-mono text-xs text-garnet md:grid"
                >
                  {stage.step}
                </span>

                <div className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-garnet md:hidden">
                      {stage.step}
                    </span>
                    <p className="type-label text-gold">{stage.name}</p>
                  </div>

                  <h3 className="type-title max-w-[22ch]">{stage.headline}</h3>
                  <p className="prose-measure text-muted">{stage.body}</p>

                  <ul className="mt-2 flex flex-wrap gap-2">
                    {stage.tools.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
