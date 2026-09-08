import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AuroraMesh } from "@/components/visual/AuroraMesh";
import { SITE } from "@/content/site";

export function CtaBand({
  title = "Pipeline should be a system, not a scramble.",
  body = "Tell me what is happening in the funnel right now. I will tell you what I would fix first, whether or not we end up working together.",
  primaryLabel = "Start a conversation",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="band-plum relative overflow-hidden">
      <AuroraMesh />
      <Container className="relative py-24 text-center lg:py-36">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
          <p className="type-label">Next step</p>
          <h2 className="type-display-l mt-5 text-on-plum">{title}</h2>
          <p className="type-lead mt-6">{body}</p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="onPlum" size="lg">
              {primaryLabel}
            </Button>
            <Button
              href={`mailto:${SITE.email}`}
              variant="outline"
              size="lg"
              external
              className="border-on-plum/35 text-on-plum hover:border-on-plum hover:text-on-plum"
            >
              Email directly
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
