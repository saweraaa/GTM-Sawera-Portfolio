import type { Metadata } from "next";
import { Award } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, courseSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Chip } from "@/components/ui/Chip";
import { CtaBand } from "@/components/sections/CtaBand";
import { TALKS, SPEAKING_TOPICS, SPEAKING_GALLERY } from "@/content/speaking";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Speaking, Workshops and Training Programmes",
  description:
    "Invited talks and hands-on workshops on GTM engineering, retrieval-augmented generation and full-stack development. Delivered at UCP, UAF, NIC Faisalabad, NAVTTC and Virtual University of Pakistan.",
  path: "/speaking",
  keywords: [
    "tech speaker Pakistan",
    "web development trainer Faisalabad",
    "MERN stack workshop",
    "university guest lecture technology",
    "NAVTTC trainer",
    "invite a speaker Pakistan",
  ],
});

export default function SpeakingPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Speaking", path: "/speaking" },
          ]),
          courseSchema({
            name: "Laravel and MERN Full-Stack Programme",
            description:
              "A twelve week government-funded full-stack course covering HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, Laravel, MySQL and Git.",
            provider: "NAVTTC",
          }),
        ]}
      />

      <PageHeader
        eyebrow="Speaking and teaching"
        titleLines={["A working developer,", "not a slide deck."]}
        lede="I teach what I do this week, not what I did five years ago. Sessions run from a 60 minute seminar to a twelve week programme, in person or remote."
        meta={[
          { label: "Institutions", value: "UCP, UAF, NIC, VU, NAVTTC" },
          { label: "Cohorts delivered", value: "5 remote batches" },
          { label: "Shields awarded", value: "3" },
          { label: "Formats", value: "60 minutes to 12 weeks" },
        ]}
      />

      {/* Gallery */}
      <Container bleed className="pb-20">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-4">
            {SPEAKING_GALLERY.map((g, i) => (
              <SmartImage
                key={g.src}
                src={g.src}
                alt={g.alt}
                width={1400}
                height={933}
                sizes="(max-width: 768px) 100vw, 40vw"
                priority={i === 0}
                className={cn(
                  "w-full rounded-xl2 object-cover",
                  g.span === "lg" ? "md:col-span-2 aspect-3/2" : "aspect-square"
                )}
                wrapperClassName={cn(
                  "w-full rounded-xl2",
                  g.span === "lg" ? "md:col-span-2 aspect-3/2" : "aspect-square"
                )}
              />
            ))}
          </div>
        </Reveal>
      </Container>

      {/* Topics */}
      <section className="border-t border-line py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">What I speak about</p>
            <h2 className="type-display-m mt-4 max-w-[16ch]">
              Four sessions, ready to run
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {SPEAKING_TOPICS.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <article className="border-t border-line pt-6">
                  <h3 className="type-title max-w-[24ch]">{t.title}</h3>
                  <p className="prose-measure mt-3 text-muted">{t.body}</p>
                  <p className="mt-4">
                    <Chip tone="gold">{t.audience}</Chip>
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Record */}
      <section className="bg-linen/40 py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">The record</p>
            <h2 className="type-display-m mt-4 max-w-[18ch]">
              Where I have taught and spoken
            </h2>
          </Reveal>

          <ul className="mt-12 divide-y divide-line border-y border-line">
            {TALKS.map((t, i) => (
              <Reveal key={`${t.title}-${i}`} as="li">
                <div className="grid gap-4 py-7 lg:grid-cols-12 lg:gap-8">
                  <div className="lg:col-span-3">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                      {t.year}
                    </p>
                    <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-garnet">
                      {t.kind}
                    </p>
                  </div>
                  <div className="lg:col-span-6">
                    <h3 className="type-title">{t.title}</h3>
                    <p className="mt-2 text-sm text-muted">{t.body}</p>
                  </div>
                  <div className="lg:col-span-3">
                    <p className="text-sm text-ink">{t.venue}</p>
                    {t.honour && (
                      <p className="mt-2 inline-flex items-center gap-2 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-gold">
                        <Award className="size-3.5" aria-hidden />
                        {t.honour}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Need a speaker who has shipped the thing?"
        body="Send the audience, the date and the outcome you want. I will shape a session around it."
        primaryLabel="Invite me to speak"
      />
    </>
  );
}
