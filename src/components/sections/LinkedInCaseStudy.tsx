import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const PROFILE_REVIEW_URL = "";
const LINKEDIN_POST_URL = "";

const images = [
  {
    src: "/images/linkedin-case-study/header.webp",
    alt: "Before and after comparison of Sawera's LinkedIn profile header and profile banner.",
    width: 1500,
    height: 768,
    caption:
      "Header: new banner, a headline that names who I help, and followers visible next to connections.",
  },
  {
    src: "/images/linkedin-case-study/about-services.webp",
    alt: "Before and after comparison of Sawera's LinkedIn About section and services.",
    width: 1500,
    height: 1032,
    caption:
      "About and services: a founder-focused hook, three clear services, and a simple next step.",
  },
  {
    src: "/images/linkedin-case-study/what-changed-featured.webp",
    alt: "A table comparing LinkedIn profile changes, alongside the new Featured section.",
    width: 1500,
    height: 668,
    caption:
      "What changed: every section before and after, plus a new Featured section.",
  },
];

const changes = [
  {
    label: "Positioning",
    text: "LinkedIn positioning and B2B outreach for software, AI and agency founders.",
  },
  {
    label: "Profile rewrite",
    text: "headline, banner, About, services, skills and Featured.",
  },
  {
    label: "Next step",
    text: "a quick 3-point review of a founder's profile.",
  },
];

export function LinkedInCaseStudy() {
  return (
    <section id="linkedin-case-study" className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Case study"
          title={<>Case study: how I repositioned my own LinkedIn</>}
          lede="From a three-identity developer profile to one clear offer for tech and agency founders."
        />

        <Reveal>
          <p className="mt-8 max-w-4xl text-muted">
            My LinkedIn said &apos;Software Developer | B2B Growth Specialist |
            Tech Trainer &amp; Mentor.&apos; Three identities, no audience, no
            clear offer. I rewrote it the way I would for a client: one audience
            (software, AI and agency founders), one outcome, one next step.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <Reveal key={image.src}>
              <figure className="h-full overflow-hidden rounded-xl2 border border-line bg-linen/40">
                <a
                  href={image.src}
                  aria-label={`Open full image: ${image.caption}`}
                  className="group block overflow-hidden bg-linen"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                    loading="lazy"
                    className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </a>
                <figcaption className="p-5 text-sm leading-relaxed text-muted">
                  {image.caption}
                </figcaption>
                <span className="sr-only">Image {index + 1} of 3</span>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <h3 className="type-display-m">What I did</h3>
            <ul className="mt-5 space-y-3">
              {changes.map((item) => (
                <li key={item.label} className="flex gap-3 text-sm sm:text-base">
                  <span aria-hidden="true" className="mt-1 text-garnet">•</span>
                  <span>
                    <strong className="font-medium text-ink">{item.label}:</strong>{" "}
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            {PROFILE_REVIEW_URL && (
              <Button href={PROFILE_REVIEW_URL} external size="md">
                Get a quick 3-point review
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Button>
            )}
            {LINKEDIN_POST_URL && (
              <Button href={LINKEDIN_POST_URL} external variant="outline" size="md">
                View the LinkedIn post
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Button>
            )}
          </div>
        </Reveal>

        <p className="mt-10 text-xs text-muted">
          Concept case study from my own profile. No results are claimed.
        </p>
      </Container>
    </section>
  );
}
