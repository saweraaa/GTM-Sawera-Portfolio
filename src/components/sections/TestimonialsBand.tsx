import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// TODO: replace placeholder testimonials with real client quotes
const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "[QUOTE — 1-2 sentences on the EHR outbound engine work, deliverability setup, and discovery calls booked with US clinic owners]",
    name: "[Name]",
    role: "[Role, Company]",
  },
  {
    quote:
      "[QUOTE — 1-2 sentences on the full-stack training cohort, practical curriculum delivery, and student project outcomes]",
    name: "[Name]",
    role: "[Role, Company]",
  },
  {
    quote:
      "[QUOTE — 1-2 sentences on general GTM engineering collaboration, data enrichment pipelines, and HubSpot CRM architecture]",
    name: "[Name]",
    role: "[Role, Company]",
  },
];

export interface TestimonialsBandProps {
  eyebrow?: string;
  title?: string;
  lede?: string;
  testimonials?: Testimonial[];
}

export function TestimonialsBand({
  eyebrow = "Proof",
  title = "Don't take my word for it.",
  lede,
  testimonials = DEFAULT_TESTIMONIALS,
}: TestimonialsBandProps) {
  return (
    <section className="bg-bone py-24 lg:py-32">
      <Container>
        <Reveal>
          <p className="type-label">{eyebrow}</p>
          <h2 className="type-display-m mt-4 max-w-[18ch]">{title}</h2>
          {lede && <p className="type-lead mt-4">{lede}</p>}
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16 lg:gap-8">
          {testimonials.map((item, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <div className="flex h-full flex-col justify-between rounded-card border border-line bg-linen/50 p-6 sm:p-8">
                <blockquote className="text-base leading-relaxed text-ink sm:text-[1.0625rem]">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <footer className="mt-8 border-t border-line/70 pt-4">
                  <cite className="not-italic text-sm">
                    <span className="font-medium text-ink">— {item.name}</span>
                    <span className="text-muted">, {item.role}</span>
                  </cite>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
