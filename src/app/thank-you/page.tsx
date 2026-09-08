import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Message received",
  description: "Your message has been sent.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <Container className="flex min-h-[80vh] flex-col justify-center py-32">
      <p className="type-label">Received</p>
      <TextReveal
        as="h1"
        className="type-display-l mt-5 max-w-[16ch]"
        lines={["Thank you.", "It is in my inbox."]}
      />
      <Reveal delay={0.25}>
        <p className="type-lead mt-7">
          A confirmation email is on its way. I reply to everything personally, usually
          within one working day. If it is urgent, replying to that email reaches me
          fastest.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/gtm-engineering" size="lg">
            Read how I build outbound systems
          </Button>
          <Button href="/" variant="outline" size="lg">
            Back to home
          </Button>
        </div>
      </Reveal>
    </Container>
  );
}
