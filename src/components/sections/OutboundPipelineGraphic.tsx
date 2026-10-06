"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Stage = {
  step: string;
  title: string;
  highlight?: boolean;
  badgeTone?: "sage" | "garnet" | "neutral";
  detail: string | null;
};

const STAGES: Stage[] = [
  {
    step: "01",
    title: "Blank CRM",
    highlight: false,
    detail: null,
  },
  {
    step: "02",
    title: "ICP Defined",
    highlight: false,
    detail: null,
  },
  {
    step: "03",
    title: "Prospects Sourced",
    highlight: false,
    detail: "Sales Navigator + Apollo",
  },
  {
    step: "04",
    title: "Outreach",
    highlight: true,
    detail: "LinkedIn + Email",
  },
  {
    step: "05",
    title: "Meetings",
    highlight: false,
    badgeTone: "sage",
    detail: "US clinic decision-makers",
  },
];

export function OutboundPipelineGraphic() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl2 border border-line bg-linen/40 p-6 sm:p-10 lg:p-12">
      {/* Top eyebrow */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <span className="type-label">System Architecture · Outbound Funnel</span>
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
          Healthcare B2B Motion
        </span>
      </div>

      {/* Pipeline stages */}
      <div className="mt-8 flex flex-col gap-3 lg:grid lg:grid-cols-5 lg:gap-3">
        {STAGES.map((stage, idx) => {
          const isLast = idx === STAGES.length - 1;

          return (
            <div key={stage.step} className="flex flex-col items-center lg:block">
              {/* Stage Card */}
              <div
                className={cn(
                  "relative flex w-full flex-col justify-between rounded-card border p-5 transition-colors duration-200",
                  stage.highlight
                    ? "border-garnet/40 bg-bone/90 shadow-sm"
                    : "border-line bg-bone/60"
                )}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-garnet">
                      Stage {stage.step}
                    </span>
                  </div>

                  <h3 className="font-display text-base font-medium uppercase tracking-tight text-ink sm:text-lg mt-2">
                    {stage.title}
                  </h3>
                </div>

                <div className="min-h-7 mt-4 flex items-center">
                  {stage.detail ? (
                    <span
                      className={cn(
                        "inline-flex items-center rounded-pill border px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.12em]",
                        stage.highlight
                          ? "border-garnet/30 bg-garnet/5 text-garnet font-medium"
                          : stage.badgeTone === "sage"
                          ? "border-sage/40 bg-sage/5 text-sage font-medium"
                          : "border-line bg-linen/60 text-muted"
                      )}
                    >
                      {stage.detail}
                    </span>
                  ) : (
                    <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-muted/50">
                      —
                    </span>
                  )}
                </div>
              </div>

              {/* Mobile / Tablet Connector */}
              {!isLast && (
                <div className="my-1.5 flex items-center justify-center text-muted lg:hidden">
                  <ArrowDown className="size-4 text-garnet/70" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Process flow narrative footer */}
      <div className="mt-8 border-t border-line pt-5 text-center">
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
          Blank system <span className="text-garnet">→</span> structured prospecting{" "}
          <span className="text-garnet">→</span> multi-channel outreach{" "}
          <span className="text-garnet">→</span> booked conversations
        </p>
      </div>
    </div>
  );
}
