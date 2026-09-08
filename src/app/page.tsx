import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Pillars } from "@/components/sections/Pillars";
import { StackMarquee } from "@/components/sections/StackMarquee";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { SpeakingStrip } from "@/components/sections/SpeakingStrip";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Sawera Nadeem, GTM Engineer and AI Systems Builder",
  description:
    "GTM Engineer building B2B outbound systems, enrichment pipelines and CRM architecture for healthcare AI. MS Computer Science researcher and web development trainer in Faisalabad, Pakistan.",
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
      <CtaBand />
    </>
  );
}
