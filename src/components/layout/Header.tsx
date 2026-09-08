"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { cn } from "@/lib/utils";
import { SITE } from "@/content/site";
import { useScrolled } from "@/hooks/useScrolled";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";
import { Menu } from "lucide-react";

export function Header() {
  const scrolled = useScrolled(80);
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);
  const closeNav = useCallback(() => setNavOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[80] transition-all duration-500 ease-[var(--ease-out-expo)]",
          scrolled
            ? "border-b border-line bg-bone/80 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6"
        )}
      >
        <Container className="flex items-center justify-between gap-6">
          <Link
            href="/"
            data-cursor="link"
            className="group flex items-baseline gap-2"
            aria-label={`${SITE.name}, home`}
          >
            <span className="font-display text-xl tracking-tight">
              Sawera<span className="text-garnet">.</span>
            </span>
            <span className="hidden font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted sm:inline">
              GTM Engineer
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {SITE.nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cursor="link"
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "link-underline text-sm transition-colors duration-300",
                    active ? "text-garnet" : "text-ink hover:text-garnet"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button href="/contact" size="sm" className="hidden sm:inline-flex">
              Let us talk
            </Button>
            <button
              type="button"
              onClick={() => setNavOpen(true)}
              aria-label="Open menu"
              aria-expanded={navOpen}
              aria-controls="mobile-site-menu"
              data-cursor="link"
              className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={navOpen} onClose={closeNav} />
    </>
  );
}
