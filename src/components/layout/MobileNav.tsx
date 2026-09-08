"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { SITE } from "@/content/site";
import { EASE_OUT } from "@/lib/motion";

const LINKS = [
  { label: "Home", href: "/" },
  ...SITE.nav,
  { label: "Services", href: "/services" },
  { label: "Notes", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement | null;

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const focusFirst = requestAnimationFrame(() => {
      dialogRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    });

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(focusableSelector) ?? []
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(focusFirst);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-site-menu"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[100] flex flex-col bg-plum px-6 py-6 text-on-plum"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-xl">
              Sawera<span className="text-garnet">.</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid size-10 place-items-center rounded-full border border-on-plum/25"
            >
              <X className="size-4" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-14 flex flex-1 flex-col gap-1">
            {LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + i * 0.05, duration: 0.55, ease: EASE_OUT }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block border-b border-on-plum/12 py-4 font-display text-[2rem] leading-none"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="mt-10 space-y-2">
            <a
              href={`mailto:${SITE.email}`}
              className="block font-mono text-xs uppercase tracking-[0.16em] text-on-plum-muted"
            >
              {SITE.email}
            </a>
            <a
              href={SITE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-xs uppercase tracking-[0.16em] text-on-plum-muted"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
