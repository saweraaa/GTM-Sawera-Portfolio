import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Rule } from "@/components/ui/Rule";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-line bg-linen/60">
      <Container className="py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="type-label">Currently</p>
            <p className="mt-3 max-w-[34ch] text-muted">{SITE.availability}</p>

            <a
              href={`mailto:${SITE.email}`}
              data-cursor="link"
              className="link-underline mt-8 inline-block font-display text-[clamp(1.4rem,3.2vw,2.25rem)] leading-tight text-ink"
            >
              {SITE.email}
            </a>

            <p className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-muted">
              {SITE.location} · {SITE.timezone}
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-4 lg:col-start-7">
            <p className="type-label">Site</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {SITE.footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    data-cursor="link"
                    className="link-underline text-sm text-muted hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-2">
            <p className="type-label">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={SITE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                  data-cursor="link"
                  className="group inline-flex items-center gap-1 text-sm text-muted hover:text-ink"
                >
                  LinkedIn
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
              <li>
                <a
                  href={SITE.cv.commercial}
                  download
                  data-cursor="link"
                  className="text-sm text-muted hover:text-ink"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Rule className="mt-16" />

        <div className="mt-6 flex flex-col gap-3 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {SITE.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            Designed and built in Faisalabad
          </p>
        </div>
      </Container>
    </footer>
  );
}
