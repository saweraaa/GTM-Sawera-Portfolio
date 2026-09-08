import Link from "next/link";
import { Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { AuroraMesh } from "@/components/visual/AuroraMesh";

const SHIELDS = [
  "University of Central Punjab",
  "University of Agriculture Faisalabad",
  "National Incubation Center, Faisalabad",
];

export function SpeakingStrip() {
  return (
    <section className="band-plum relative overflow-hidden">
      <AuroraMesh />

      <Container className="relative py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="type-label">02 · Teaching and speaking</p>
              <h2 className="type-display-l mt-5 max-w-[14ch] text-on-plum">
                Three institutions handed me a shield for it.
              </h2>
              <p className="type-lead mt-6">
                I run a twelve-week government-funded full-stack programme, teach at
                Virtual University, and step onto university stages when someone needs a
                working developer rather than a slide deck.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/speaking" variant="onPlum" size="lg">
                  Speaking and workshops
                </Button>
                <Link
                  href="/contact"
                  data-cursor="link"
                  className="link-underline inline-flex items-center text-sm text-on-plum"
                >
                  Invite me to speak
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={0.1}>
              <ul className="flex flex-col divide-y divide-on-plum/15 border-y border-on-plum/15">
                {SHIELDS.map((s) => (
                  <li key={s} className="flex items-center gap-4 py-5">
                    <Award className="size-5 shrink-0 text-gold" aria-hidden />
                    <span className="text-on-plum">{s}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-on-plum-muted">
                Guest Speaker Shields awarded
              </p>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
