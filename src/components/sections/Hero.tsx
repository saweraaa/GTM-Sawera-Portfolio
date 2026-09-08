"use client";

import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SITE } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { SmartImage } from "@/components/ui/SmartImage";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { UnderlineSwash } from "@/components/visual/UnderlineSwash";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const ParticleField = dynamic(
  () => import("@/components/visual/ParticleField"),
  { ssr: false }
);

export function Hero() {
  const noMotion = useReducedMotionSafe();

  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-48">
      <ParticleField />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Left: the pitch */}
          <div className="lg:col-span-7">
            <motion.p
              className="type-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Faisalabad, Pakistan · Working with US teams
            </motion.p>

            <TextReveal
              as="h1"
              className="type-display-xl mt-6"
              delay={0.15}
              lines={[
                "I build the",
                "systems that fill",
                <span key="pipe" className="relative inline-block">
                  the pipeline.
                  <UnderlineSwash delay={1.1} />
                </span>,
              ]}
            />

            <motion.p
              className="type-lead mt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: noMotion ? 0.01 : 0.8,
                delay: noMotion ? 0 : 0.75,
              }}
            >
              And I teach the people who run them. GTM Engineer, MS Computer
              Science researcher, and the person a founder calls when outbound
              needs to become a system instead of a habit.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: noMotion ? 0.01 : 0.8,
                delay: noMotion ? 0 : 0.9,
              }}
            >
              <Magnetic>
                <Button href="/gtm-engineering" size="lg">
                  See how I build it
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Magnetic>
              <Button href="/work" variant="outline" size="lg">
                Case studies
              </Button>
            </motion.div>

            <motion.div
              className="mt-14 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: noMotion ? 0 : 1.2, duration: 0.8 }}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-sage" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {SITE.availability}
              </p>
            </motion.div>
          </div>

          {/* Right: the portrait, printed-frame treatment */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: noMotion ? 0.01 : 1.1,
              delay: noMotion ? 0 : 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <VerticalLabel className="absolute -left-2 top-8 hidden lg:block">
              Sawera Nadeem · GTM Engineer
            </VerticalLabel>

            <div className="relative ml-auto w-full max-w-[420px]">
              {/* Offset colour block behind the photo */}
              <div
                aria-hidden
                className="absolute inset-0 translate-x-[18px] translate-y-[18px] rounded-xl2 bg-blush"
              />
              <SmartImage
                src="/images/sawera-hero.jpg"
                alt="Sawera Nadeem, GTM Engineer and web development trainer, Faisalabad"
                width={840}
                height={1120}
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="relative aspect-3/4 w-full rounded-xl2 object-cover"
                wrapperClassName="relative aspect-3/4 w-full rounded-xl2"
              />
            </div>

            <p className="mt-5 text-right font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
              Techloset Solutions · SynaCare
            </p>
          </motion.div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-muted lg:mt-28">
          <ArrowDown className="size-4 animate-bounce" aria-hidden />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em]">
            Scroll
          </span>
        </div>
      </Container>
    </section>
  );
}
