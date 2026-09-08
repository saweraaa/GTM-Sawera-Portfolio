import { TOOL_STACK } from "@/content/stack";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";

export function StackMarquee() {
  return (
    <section aria-label="Tools and technologies" className="border-y border-line py-14">
      <Container className="mb-8">
        <Reveal>
          <p className="type-label">The stack I work in</p>
        </Reveal>
      </Container>
      <Marquee items={TOOL_STACK.marquee} speed={46} />
    </section>
  );
}
