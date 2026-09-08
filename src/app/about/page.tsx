import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, profilePageSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Timeline } from "@/components/sections/Timeline";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { ABOUT_INTRO, VALUES, CREDENTIALS } from "@/content/profile";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "About Sawera Nadeem, GTM Engineer, Researcher and Trainer",
  description:
    "From full-stack developer to GTM engineer. The background, the credentials and the working principles behind the systems I build for B2B teams and the cohorts I teach.",
  path: "/about",
  type: "profile",
  keywords: [
    "Sawera Nadeem biography",
    "GTM engineer Faisalabad",
    "MS Computer Science Pakistan",
    "MERN stack trainer",
    "NAVTTC trainer",
  ],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          profilePageSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <PageHeader
        eyebrow="About"
        titleLines={["I did not switch", "from engineering.", "I redirected it."]}
      />

      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal className="prose-measure space-y-6 text-muted">
              {ABOUT_INTRO.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg text-ink" : undefined}>
                  {p}
                </p>
              ))}
            </Reveal>

            <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-4">
              <Button href="/resume" size="lg">
                Full resume
              </Button>
              <Button href={SITE.socials.linkedin} variant="outline" size="lg" external>
                Connect on LinkedIn
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <SmartImage
                src="/images/sawera-about.jpg"
                alt="Sawera Nadeem working at her desk in Faisalabad"
                width={1200}
                height={1500}
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-4/5 w-full rounded-xl2 object-cover"
                wrapperClassName="aspect-4/5 w-full rounded-xl2"
              />
              <p className="mt-4 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                Faisalabad, Pakistan
              </p>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Values */}
      <section className="mt-24 border-y border-line bg-linen/40 py-20 lg:mt-32 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">How I work</p>
            <h2 className="type-display-m mt-4 max-w-[14ch]">Four things I do not bend on</h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="border-t border-line pt-6">
                  <h3 className="type-title max-w-[20ch]">{v.title}</h3>
                  <p className="prose-measure mt-3 text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Container className="pt-20">
        <Reveal>
          <p className="type-label">The path</p>
          <h2 className="type-display-m mt-4 max-w-[16ch]">Where this came from</h2>
        </Reveal>
      </Container>

      <Timeline />

      {/* Credentials */}
      <section className="py-20 lg:py-24">
        <Container>
          <Reveal>
            <p className="type-label">Credentials and recognition</p>
          </Reveal>
          <ul className="mt-8 grid gap-x-8 gap-y-4 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {CREDENTIALS.map((c) => (
              <li key={`${c.name}-${c.issuer}`} className="flex flex-col">
                <span className="text-ink">{c.name}</span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                  {c.issuer}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Curious how any of this applies to your funnel?"
        body="The first conversation is a diagnosis, not a pitch. Bring the messy version."
      />
    </>
  );
}
