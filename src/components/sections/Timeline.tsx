"use client";

import { Fragment, useRef, useState } from "react";
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
  research: "Research",
};

const KIND_COLOR: Record<string, string> = {
  work: "text-garnet",
  teaching: "text-gold",
  education: "text-sage",
  honour: "text-garnet",
  research: "text-sage",
};

const FILTER_TABS = [
  { id: "all", label: "All" },
  { id: "work", label: "Industry" },
  { id: "teaching", label: "Teaching" },
  { id: "research", label: "Research" },
] as const;

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const noMotion = useReducedMotionSafe();
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const raw = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const height = useTransform(raw, [0, 1], ["0%", "100%"]);

  const filteredItems =
    activeFilter === "all"
      ? TIMELINE
      : TIMELINE.filter((item) => item.kind === activeFilter);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <Container>
        {/* Category filter tabs */}
        <div className="mb-12 flex flex-wrap items-center gap-2.5">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={cn(
                  "inline-flex items-center rounded-pill border px-4 py-1.5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer",
                  isActive
                    ? "border-garnet bg-garnet text-bone shadow-[0_4px_14px_-4px_var(--garnet)]"
                    : "border-line text-muted hover:border-garnet/50 hover:text-ink bg-transparent"
                )}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

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
            {filteredItems.map((item, i) => (
              <Fragment key={`${item.title}-${i}`}>
                <li className="relative md:pl-12">
                  <span
                    aria-hidden
                    className="absolute left-[-4px] top-2 hidden size-2 rounded-full bg-garnet md:block"
                  />
                  <Reveal key={`${item.title}-${activeFilter}`}>
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
                        {KIND_LABEL[item.kind] ?? item.kind}
                      </span>
                    </div>

                    <h3 className="type-title mt-3 font-medium">{item.title}</h3>
                    <p className="mt-1 text-sm italic text-garnet">{item.org}</p>
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

                {/* Lightweight visual break after 4th entry in full timeline */}
                {activeFilter === "all" && i === 3 && (
                  <li className="relative my-4 md:my-6 md:pl-12 list-none">
                    <Reveal>
                      <div className="rounded-card border border-line bg-linen/50 p-6 sm:p-8">
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                          <div className="max-w-lg">
                            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-garnet">
                              Operating principle
                            </span>
                            <blockquote className="mt-2 font-display text-lg leading-snug text-ink sm:text-xl">
                              &ldquo;Every workflow I figure out ends up in a session, a doc, or a cohort. It is the fastest quality check I know.&rdquo;
                            </blockquote>
                          </div>
                          <div className="shrink-0 sm:border-l sm:border-line sm:pl-8">
                            <span className="font-display text-3xl text-garnet sm:text-4xl">
                              5
                            </span>
                            <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                              Cohorts delivered
                            </p>
                          </div>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                )}
              </Fragment>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
