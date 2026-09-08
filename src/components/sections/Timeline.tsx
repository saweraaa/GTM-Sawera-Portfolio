"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { TIMELINE } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const KIND_LABEL: Record<string, string> = {
  work: "Industry",
  teaching: "Teaching",
  education: "Education",
  honour: "Recognition",
};

const KIND_COLOR: Record<string, string> = {
  work: "text-garnet",
  teaching: "text-gold",
  education: "text-sage",
  honour: "text-garnet",
};

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const noMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const raw = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const height = useTransform(raw, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <Container>
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 top-1 hidden h-[calc(100%-1rem)] w-px bg-line md:block"
          >
            <motion.div
              className="w-px bg-garnet"
              style={{ height: noMotion ? "100%" : height }}
            />
          </div>

          <ol className="flex flex-col gap-12 md:gap-16">
            {TIMELINE.map((item, i) => (
              <li key={`${item.title}-${i}`} className="relative md:pl-12">
                <span
                  aria-hidden
                  className="absolute left-[-4px] top-2 hidden size-2 rounded-full bg-garnet md:block"
                />
                <Reveal>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                      {item.period}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[0.6875rem] uppercase tracking-[0.16em]",
                        KIND_COLOR[item.kind]
                      )}
                    >
                      {KIND_LABEL[item.kind]}
                    </span>
                  </div>

                  <h3 className="type-title mt-3">{item.title}</h3>
                  <p className="mt-1 text-sm text-garnet">{item.org}</p>
                  <p className="prose-measure mt-3 text-muted">{item.body}</p>

                  {item.highlights && (
                    <ul className="mt-5 space-y-2 border-l border-line pl-5">
                      {item.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted">
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
