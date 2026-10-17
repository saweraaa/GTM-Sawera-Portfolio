import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Pillars } from "@/components/sections/Pillars";
import { StackMarquee } from "@/components/sections/StackMarquee";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { SpeakingStrip } from "@/components/sections/SpeakingStrip";
import { TestimonialsBand } from "@/components/sections/TestimonialsBand";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "GTM Engineer and LinkedIn Positioning for Founders | Sawera Nadeem",
  description:
    "LinkedIn positioning and B2B outreach for software, AI and agency founders, backed by GTM engineering: outbound systems, enrichment and CRM architecture. Sawera Nadeem, Faisalabad, Pakistan.",
  path: "/",
  keywords: [
    "Sawera Nadeem",
    "GTM engineer",
    "go to market engineer Pakistan",
    "B2B outbound systems",
    "lead generation specialist",
    "healthcare SaaS pipeline",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Pillars />
      <StackMarquee />
      <FeaturedWork />
      <SpeakingStrip />
      <TestimonialsBand />
      <CtaBand />
    </>
  );
}
