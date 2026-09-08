# Sawera Nadeem, Personal Brand Portfolio
## Complete Build Specification & Implementation Guide

> **This document is the single source of truth.** An engineering agent should be able to
> read it top to bottom and ship a production site without asking questions.
> Every file is given in full. Every command is given in order.
>
> **Version:** 1.0
> **Stack:** Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + Motion 13 + Lenis 1.3
> + tsParticles 4 + Brevo transactional email
> **Deploy target:** Vercel

---

## Contents

| Part | What is in it |
|---|---|
| [0](#0-how-to-use-this-document) | How to use this document, and the hard rules |
| [1](#part-1-the-brief--the-positioning) | The brief, the brand thesis, audiences, proof points |
| [2](#part-2-information-architecture) | Routes, navigation, machine-facing files |
| [3](#part-3-the-design-system) | Colour, typography, layout, motion, photography |
| [4](#part-4-tech-stack) | Stack with pinned versions |
| [5](#part-5-setup-commands) | Every command, in order |
| [6](#part-6-environment--brevo-setup) | Environment variables and the Brevo account steps |
| [7](#part-7-asset-checklist) | Images, PDFs, icons |
| [8](#part-8-complete-file-tree) | Full file tree |
| [9](#part-9-every-file-in-full) | **All 88 files, complete and copy-pasteable** |
| [10](#part-10-seo-implementation) | Keyword map, what is implemented, post-launch setup, tools |
| [11](#part-11-accessibility--performance) | A11y checklist and performance targets |
| [12](#part-12-deployment) | Vercel, domain, email deliverability verification |
| [13](#part-13-build-qa-checklist) | The checklist to clear before handover |
| [14](#part-14-troubleshooting) | Symptom, cause, fix |
| [15](#part-15-what-to-do-after-launch) | Immediate, first month, ongoing |
| [A](#appendix-a-copy-voice-guide) | Copy voice guide for future edits |
| [B](#appendix-b-section-order-on-the-home-page-and-why) | Why the home page is ordered the way it is |

**Shortest possible path if you just want to build:** Part 5, then Part 6, then create every
file in Part 9 in order, then Part 13.

---

## 0. How To Use This Document

1. Read **Part 1 to 4** first. Do not skip the design system. The entire point of this
   build is that it must *not* look like a generic AI template.
2. Run the commands in **Part 5** exactly as written.
3. Create files in the order given in **Part 9**. Every file is complete and copy-pasteable.
4. Swap in the real assets listed in **Part 7**.
5. Work through the checklists in **Parts 10 to 13** before calling it done.

### Hard rules for this build

| Rule | Why |
|---|---|
| No em dashes anywhere in copy, code or comments | Client preference. Use commas, colons, or short hyphens. |
| No purple-to-blue gradient on dark navy | The single biggest "AI generated" visual tell. |
| No emoji used as UI icons | Use `lucide-react` or inline SVG. |
| `Inter` is not the display face | Overexposed. Display is `Fraunces`, body is `Geist`. |
| Every animation respects `prefers-reduced-motion` | Accessibility, and a real quality signal. |
| Every route ships its own `metadata` and JSON-LD | This is an SEO-first build. |
| Never centre every section | The layout language is asymmetric and editorial. |
| Copy is rewritten, never pasted from the CV | Bullet points read as a resume. Prose reads as a brand. |

---

# PART 1: The Brief & The Positioning

## 1.1 Who this site is for

**Sawera Nadeem.** Faisalabad, Pakistan. She occupies an intersection almost nobody
occupies cleanly, and the whole site exists to make that intersection obvious within four
seconds of landing.

She is three things at once:

| Pillar | Evidence |
|---|---|
| **Go-To-Market Engineer** | Senior Manager, Business Development & Growth at Techloset Solutions. Owns B2B outbound for SynaCare, an AI-first EHR sold into US clinics and hospitals. |
| **AI / ML Engineer & Researcher** | MS Computer Science. Thesis on Healthcare RAG for clinical decision support in Urdu. Research in multimodal and agentic RAG for agriculture. Debugged a ResNet50 counterfeit-detection pipeline for a client. |
| **Educator & Public Speaker** | NAVTTC government trainer, Virtual University of Pakistan, incoming instructor at Saylani Mass IT Training Center. Invited speaker at UCP, UAF and NIC Faisalabad, each of which awarded her a Guest Speaker Shield. |

## 1.2 The brand thesis

Most business development people cannot build. Most engineers cannot sell. Almost none of
either group can teach. She does all three, which is the literal definition of the role the
market began paying a premium for in 2025 and 2026: the **GTM Engineer**.

**Primary tagline. Use verbatim in the hero.**

> **I build the systems that fill the pipeline.**
> *And I teach the people who run them.*

**Secondary positioning line. Use in meta descriptions and the About intro.**

> GTM Engineer and AI systems builder. I design outbound engines, enrichment pipelines and
> CRM architecture for B2B teams selling into healthcare, then hand over the playbook so
> the team can run it without me.

**One-line bio. Use for LinkedIn, OG description and JSON-LD.**

> Sawera Nadeem is a GTM Engineer and MS Computer Science researcher who builds B2B
> outbound systems for healthcare AI and trains developers across Pakistan.

## 1.3 The three audiences

| Audience | Lands on | Must feel within 10 seconds | Converts by |
|---|---|---|---|
| **Founder or head of sales** hiring for GTM | `/` then `/gtm-engineering` | "She has built this exact system before and can show me numbers." | Booking a call from `/contact` |
| **University, bootcamp or training body** | `/speaking` | "She is credentialed, has taught at scale, and three institutions have honoured her." | Speaking enquiry form |
| **Recruiter or hiring manager** | `/resume` | "Verifiable, current, downloadable." | CV download plus email |

## 1.4 Verified proof points

Use these numbers. Do not invent new ones.

- **100 to 300** qualified leads generated through combined LinkedIn Sales Navigator, Apollo.io and Instantly campaigns
- **~20** discovery meetings booked with clinic owners, practice managers and hospital decision makers
- **~500** targeted LinkedIn connections grown among US healthcare operators
- **5** remote training batches delivered to national and international students
- **3** institutions have awarded her a Guest Speaker Shield: UCP, UAF, NIC Faisalabad
- **3.7** CGPA, BS Software Engineering, University of Agriculture Faisalabad
- **3 months**, the duration of the NAVTTC Laravel full-stack course she runs

## 1.5 Honesty guardrail for the building agent

The CVs evidence hands-on operation of **Apollo.io, LinkedIn Sales Navigator, Instantly,
HubSpot, Trello and Google Analytics**. The site may additionally present **Clay,
Smartlead, HeyReach, n8n, Make** and similar, but only under a clearly separate heading
such as *Systems I build with* or *Evaluating*. It must never imply certification or years
of production use in tools the CV does not evidence.

Keep `src/content/stack.ts` split into `operated` and `buildsWith` groups so this
distinction survives future edits.

---

# PART 2: Information Architecture

A deliberately multi-page site. Each route is a standalone SEO surface with its own title,
description, canonical URL, OG image and structured data.

```
/                    Home. The four-second pitch.
/about               Story, timeline, credentials, the human layer.
/services            Four engagement types with deliverables and process.
/gtm-engineering     PILLAR PAGE. The deep technical explainer. Main SEO asset.
/work                Case study index.
/work/[slug]         Individual case studies. Five seeded.
/speaking            Talks, workshops, institutions, booking.
/resume              Interactive CV plus two PDF downloads.
/blog                Notes index.
/blog/[slug]         Individual articles. Three seeded.
/contact             Brevo-powered form plus direct channels.
/thank-you           Post-submission confirmation. noindex.
/privacy             Privacy notice. Required because the form collects data.
404 / error          Branded, never the framework default.
```

**Machine-facing routes**

```
/sitemap.xml           app/sitemap.ts
/robots.txt            app/robots.ts
/manifest.webmanifest  app/manifest.ts
/opengraph-image       opengraph-image.tsx, per route
/llms.txt              static file in /public
/api/contact           POST, Node runtime
```

## 2.1 Navigation

**Header, desktop.** Logotype left. Then `Work · GTM Engineering · Speaking · About`
centre-right. Then a theme toggle and a `Let us talk` pill button far right. The header is
transparent over the hero and gains a hairline border plus backdrop blur after 80px of
scroll.

**Header, mobile.** Logotype plus hamburger. The panel is a full-screen sheet with large
serif links that stagger in, and contact details plus socials pinned at the bottom.

**Footer.** Three columns. Column one is a short manifesto sentence plus the email address
as a large clickable serif link. Column two is site navigation. Column three is socials
plus a "currently" status line. A bottom bar carries copyright, a `Privacy` link and a
build credit.

---

# PART 3: The Design System

## 3.1 Direction: "Editorial Atelier"

Think an independent print magazine that happens to be about revenue engineering. Warm
paper, deep plum ink, a garnet rose accent used with restraint, hairline rules, oversized
section numerals, and a lot of confident empty space. Feminine because of the palette, the
serif and the softness of the curves. Professional because of the typographic discipline
and the density of real numbers.

This is chosen deliberately as the opposite of the default template look. The recognisable
AI-portfolio aesthetic is dark navy, glassmorphism, violet gradients and Inter. Every one
of those is banned here.

## 3.2 Colour tokens

Warm, low-glare, readable. Values are checked for WCAG AA against their intended pairing.

### Light theme, default

| Token | Hex | Role |
|---|---|---|
| `--color-bone` | `#FAF6F3` | Page background. Warm off-white, never `#FFFFFF`. |
| `--color-linen` | `#F1E8E2` | Secondary surface, cards, alternating bands. |
| `--color-blush` | `#E7CBC8` | Soft tint. Chips, highlight fills, particle colour. |
| `--color-garnet` | `#B33A63` | **Primary accent.** Links, CTAs, underlines, active states. |
| `--color-plum` | `#3D1E36` | Deep aubergine. Inverted sections, display headings. |
| `--color-ink` | `#241A20` | Body text. Near-black with a plum undertone. |
| `--color-muted` | `#6E5C63` | Secondary text, captions, metadata. |
| `--color-gold` | `#C79A5B` | Micro accent. Section numerals, rules, award badges. |
| `--color-sage` | `#7E9080` | Rare accent, reserved for engineering and research tags. |
| `--color-line` | `rgb(36 26 32 / 0.12)` | Hairline rules and borders. |

### Dark theme

| Token | Hex | Role |
|---|---|---|
| `--color-bone` | `#171115` | Page background. Deep plum-black. |
| `--color-linen` | `#211820` | Secondary surface. |
| `--color-blush` | `#4A2E37` | Soft tint. |
| `--color-garnet` | `#E5799B` | Primary accent, lightened for contrast. |
| `--color-plum` | `#F1E1EA` | Inverts to a pale tint on dark. |
| `--color-ink` | `#F4EAE6` | Body text. |
| `--color-muted` | `#B3A0A8` | Secondary text. |
| `--color-gold` | `#E0B87C` | Micro accent. |
| `--color-sage` | `#9DB3A0` | Engineering tags. |
| `--color-line` | `rgb(244 234 230 / 0.14)` | Hairlines. |

**Usage ratio.** Roughly 70 percent bone or linen, 18 percent ink text, 7 percent plum
inverted bands, 4 percent garnet, 1 percent gold. Garnet is a spice, not a base.

## 3.3 Typography

| Role | Family | Source | Notes |
|---|---|---|---|
| Display | **Fraunces** | `next/font/google`, variable | Optical-size, `SOFT` and `WONK` axes give it a handmade warmth no default serif has. |
| Body and UI | **Geist Sans** | `geist/font/sans` | Modern, neutral, self-hosted, zero layout shift. |
| Mono and data | **Geist Mono** | `geist/font/mono` | Metrics, tool names, stack labels, case-study stats. This mono layer is what makes the site read as *engineered*. |

### Type scale, fluid

```
display-xl   clamp(3.25rem, 9vw, 7.5rem)     Hero headline. Fraunces 300, wonk on.
display-l    clamp(2.5rem, 6vw, 4.5rem)      Page titles.
display-m    clamp(1.9rem, 4vw, 3rem)        Section headings.
title        clamp(1.35rem, 2.2vw, 1.75rem)  Card titles.
body-l       1.125rem / 1.7                  Lead paragraphs.
body         1.0625rem / 1.75                Default. Max width 68ch.
small        0.9375rem / 1.6                 Captions.
label        0.75rem mono, 0.14em tracking, uppercase
```

### Typographic rules

- Headings use `text-balance`. Paragraphs use `text-pretty`.
- Body copy never exceeds `68ch`.
- Section numerals such as `01` render in Fraunces at `display-m`, gold, 40 percent opacity.
- Vertical edge labels use `writing-mode: vertical-rl`, mono, uppercase, tracked out.

## 3.4 Layout language

- **Grid.** 12 columns, `gap-6` mobile, `gap-8` desktop. Max content width `1240px`, with a
  wider `1440px` bleed container for marquees and imagery.
- **Asymmetry rule.** No two consecutive sections share the same content alignment.
  Alternate left-anchored (cols 1 to 7), right-anchored (cols 6 to 12) and full-bleed.
- **Hairlines over shadows.** Borders are `1px solid var(--color-line)`. Shadows appear only
  on the sticky header and on hovering cards, and are warm-tinted, never neutral grey.
- **Radii.** `--radius-sm: 6px`, `--radius: 14px`, `--radius-lg: 24px`, `--radius-pill: 999px`.
  Images and feature cards use `--radius-lg`. Buttons use `--radius-pill`.
- **Grain.** A fixed, `pointer-events-none`, 3.5 percent opacity SVG turbulence overlay sits
  above the background across the whole site. This single detail does more than any other to
  kill the flat generated feel.

## 3.5 Motion system

Motion has a grammar. Everything uses the same three curves.

```ts
easeOut   = [0.16, 1, 0.3, 1]     // entrances, reveals
easeInOut = [0.65, 0, 0.35, 1]    // transitions, curtains
spring    = { type: "spring", stiffness: 260, damping: 30, mass: 0.8 }
```

Durations: micro `0.2s`, standard `0.6s`, dramatic `1.1s`. Stagger `0.06s` per child.

### Signature interactions to build

1. **Lenis smooth scroll**, site-wide, `lerp: 0.09`, not mounted under reduced motion.
2. **Curtain page transition.** A garnet panel wipes across on route change.
3. **Hero mask reveal.** Headline lines sit in `overflow-hidden` wrappers and rise into place
   with a `0.07s` stagger. The accent phrase gets an SVG underline that draws itself via
   `pathLength` once the text settles.
4. **Custom cursor.** A `10px` ink dot with a trailing `36px` ring. The ring scales to `2.4x`
   and fills garnet over links, and swaps to a `View` label over case cards. Fine pointer only.
5. **Petal particle field.** tsParticles slim, hero only. 26 particles, blush and gold, slow
   upward drift, no links, no click interaction. Dynamically imported, skipped on mobile and
   under reduced motion.
6. **Aurora mesh.** A hand-written canvas of three slow radial blobs behind plum sections.
   Zero dependencies, about sixty lines.
7. **Counting metrics.** Numbers animate from zero when their block enters the viewport, once.
8. **Stack marquee.** Infinite horizontal scroll of tool wordmarks, paused on hover, edges
   masked with a gradient.
9. **Pinned pillars.** The three-pillar section pins while a progress rail fills and the copy
   cross-fades between pillars.
10. **Card reveal.** Case study images scale from `1.06` to `1` inside a `clip-path` wipe.
11. **Scroll progress bar.** A 2px garnet bar at the very top of the viewport.
12. **Timeline draw.** On `/about`, a vertical line draws its `pathLength` as you scroll and
    each milestone fades in when the line reaches it.
13. **Theme toggle** with a crossfade, plus `disableTransitionOnChange` to avoid flashes.

### Reduced motion contract

When `prefers-reduced-motion: reduce` is set: Lenis is not mounted, the cursor is not
mounted, particles are not mounted, the aurora canvas is not mounted, all reveals collapse
to a `0.01s` opacity fade, and the marquee is static.

## 3.6 Photography direction

Her photo is on the site. Treat it editorially, never as an avatar.

- **Hero portrait.** Portrait crop around `3:4`, placed in the right column, deliberately
  bleeding past the section's bottom rule. Light warm grade. Behind it, a solid
  `--color-blush` rectangle offset `18px` down and right, creating a printed-frame effect.
  A rotated mono caption runs along the left edge.
- **About portrait.** Wider, more candid, full-bleed within its column, gold hairline rule
  above and a mono caption below.
- **Speaking page.** A small gallery of session photos in an uneven grid, two large cells
  and three small.

Never use a circular avatar. Never add a purple gradient overlay.

---

# PART 4: Tech Stack

| Concern | Choice | Pinned version |
|---|---|---|
| Framework | Next.js App Router | `16.3.4` |
| React | React and React DOM | `19.2.8` |
| Styling | Tailwind CSS v4, CSS-first, no JS config | `4.3.3` |
| Animation | Motion, formerly Framer Motion | `13.2.0` |
| Smooth scroll | Lenis via `lenis/react` | `1.3.26` |
| Particles | `@tsparticles/react` plus `@tsparticles/slim` | `4.4.0` |
| Fonts | `geist` package plus `next/font/google` Fraunces | `geist@1.6.1` |
| Icons | `lucide-react` | `1.41.0` |
| Theme | `next-themes` | `0.4.6` |
| Forms | `react-hook-form`, `zod`, `@hookform/resolvers` | `7.87.0`, `4.5.4`, `5.9.1` |
| Toasts | `sonner` | `2.0.8` |
| Class utils | `clsx` plus `tailwind-merge` | `2.1.1`, `3.6.0` |
| Email | Brevo REST API v3 called with `fetch`, no SDK | n/a |
| Analytics | `@vercel/analytics`, `@vercel/speed-insights` | `2.0.1`, `1.2.0` |

**Why the Brevo REST API rather than `@getbrevo/brevo`:** the SDK changed its entire surface
between v5 and v6. A single `fetch` POST to `https://api.brevo.com/v3/smtp/email` has no
version risk, no cold-start cost, and is about fifteen lines of code.

---

# PART 5: Setup Commands

Run these in order, from the folder where the project should live.

```bash
npx create-next-app@16.3.4 sawera-portfolio --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --no-git
```

```bash
cd sawera-portfolio
```

```bash
npm install motion@13.2.0 lenis@1.3.26 @tsparticles/react@4.4.0 @tsparticles/slim@4.4.0 next-themes@0.4.6 lucide-react@1.41.0 clsx@2.1.1 tailwind-merge@3.6.0 react-hook-form@7.87.0 zod@4.5.4 @hookform/resolvers@5.9.1 sonner@2.0.8 geist@1.6.1 @vercel/analytics@2.0.1 @vercel/speed-insights@1.2.0
```

```bash
npm install -D sharp
```

```bash
mkdir -p src/components/ui src/components/layout src/components/sections src/content src/lib src/hooks public/images/work public/cv
```

Development server:

```bash
npm run dev
```

Production check, run before every deploy:

```bash
npm run build
```

Initialise git only after the first successful build:

```bash
git init && git add -A && git commit -m "feat: Sawera Nadeem portfolio"
```

---

# PART 6: Environment & Brevo Setup

## 6.1 Brevo dashboard steps, do these first

1. Create a free account at `brevo.com`. The free tier allows 300 transactional emails per
   day, far more than a portfolio contact form needs.
2. Open **Senders, Domains & Dedicated IPs**, go to the **Senders** tab, add the sending
   address and verify it via the confirmation email. A form cannot send from an unverified
   sender.
3. Strongly recommended: add the site domain under the **Domains** tab and publish the
   `DKIM`, `DMARC` and Brevo verification DNS records it gives you. Without domain
   authentication, notification emails land in spam.
4. Open **SMTP & API**, go to the **API Keys** tab and generate a **v3 API key**. Copy it
   once; it is never shown again.
5. Optional: create a **Contacts list** named `Website Enquiries` and note its numeric id so
   submissions can also be saved as contacts.

## 6.2 `.env.local`

Never commit this file. `.env.example` is committed, `.env.local` is not.

```
# Public
NEXT_PUBLIC_SITE_URL=https://saweranadeem.com

# Brevo transactional email
BREVO_API_KEY=xkeysib-replace-me
BREVO_SENDER_EMAIL=hello@saweranadeem.com
BREVO_SENDER_NAME=Sawera Nadeem Website
CONTACT_TO_EMAIL=saweranadeem8063@gmail.com
CONTACT_TO_NAME=Sawera Nadeem

# Optional, also saves the submitter to a Brevo contact list
BREVO_CONTACT_LIST_ID=

# Fill in after Google Search Console verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

On Vercel, add every one of these under **Project Settings, Environment Variables**, for
Production, Preview and Development.

---

# PART 7: Asset Checklist

Place these in `/public` before the final build. The build succeeds without them, but the
site will render fallback blocks.

| Path | What | Spec |
|---|---|---|
| `public/images/sawera-hero.jpg` | Hero portrait | 3:4 portrait, min 1200x1600, warm grade |
| `public/images/sawera-about.jpg` | About portrait | 4:5 or 3:2, min 1400px wide |
| `public/images/speaking-1.jpg` | Session photo | 3:2 landscape |
| `public/images/speaking-2.jpg` | Session photo | 3:2 landscape |
| `public/images/speaking-3.jpg` | Shield or award photo | square |
| `public/images/work/synacare.jpg` | Case cover | 16:10, min 1600px |
| `public/images/work/healthcare-rag.jpg` | Case cover | 16:10 |
| `public/images/work/navttc.jpg` | Case cover | 16:10 |
| `public/images/work/gamexchange.jpg` | Case cover | 16:10 |
| `public/images/work/image-authentication.jpg` | Case cover | 16:10 |
| `public/cv/Sawera-Nadeem-GTM-CV.pdf` | Business development CV | from the provided PDF |
| `public/cv/Sawera-Nadeem-Academic-CV.pdf` | Faculty CV | export the DOCX to PDF |
| `public/favicon.ico` | Favicon | 32x32 |
| `public/apple-touch-icon.png` | iOS icon | 180x180 |
| `public/icon-192.png`, `public/icon-512.png` | PWA icons | as named |

**While assets are missing:** `SmartImage` in Part 9 falls back to a linen block with a gold
hairline and the mono label `IMAGE PENDING`, so layout never collapses.
---

# PART 8: Complete File Tree

```
sawera-portfolio/
├─ public/
│  ├─ images/
│  │  ├─ sawera-hero.jpg
│  │  ├─ sawera-about.jpg
│  │  ├─ speaking-1.jpg  speaking-2.jpg  speaking-3.jpg
│  │  └─ work/
│  │     ├─ synacare.jpg
│  │     ├─ healthcare-rag.jpg
│  │     ├─ navttc.jpg
│  │     ├─ gamexchange.jpg
│  │     └─ image-authentication.jpg
│  ├─ cv/
│  │  ├─ Sawera-Nadeem-GTM-CV.pdf
│  │  └─ Sawera-Nadeem-Academic-CV.pdf
│  ├─ llms.txt
│  ├─ favicon.ico
│  ├─ apple-touch-icon.png
│  ├─ icon-192.png
│  └─ icon-512.png
│
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                 Root shell, fonts, providers, JSON-LD
│  │  ├─ template.tsx               Page transition wrapper
│  │  ├─ page.tsx                   Home
│  │  ├─ globals.css                Design tokens + base layer
│  │  ├─ not-found.tsx
│  │  ├─ error.tsx
│  │  ├─ sitemap.ts
│  │  ├─ robots.ts
│  │  ├─ manifest.ts
│  │  ├─ opengraph-image.tsx        Default OG image
│  │  ├─ icon.tsx                   Generated favicon
│  │  ├─ about/page.tsx
│  │  ├─ services/page.tsx
│  │  ├─ gtm-engineering/page.tsx
│  │  ├─ work/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/
│  │  │     ├─ page.tsx
│  │  │     └─ opengraph-image.tsx
│  │  ├─ speaking/page.tsx
│  │  ├─ resume/page.tsx
│  │  ├─ blog/
│  │  │  ├─ page.tsx
│  │  │  └─ [slug]/page.tsx
│  │  ├─ contact/page.tsx
│  │  ├─ thank-you/page.tsx
│  │  ├─ privacy/page.tsx
│  │  └─ api/
│  │     └─ contact/route.ts
│  │
│  ├─ components/
│  │  ├─ ui/
│  │  │  ├─ Container.tsx
│  │  │  ├─ Button.tsx
│  │  │  ├─ Chip.tsx
│  │  │  ├─ SectionHeading.tsx
│  │  │  ├─ PageHeader.tsx
│  │  │  ├─ Reveal.tsx
│  │  │  ├─ TextReveal.tsx
│  │  │  ├─ Counter.tsx
│  │  │  ├─ Marquee.tsx
│  │  │  ├─ Magnetic.tsx
│  │  │  ├─ SmartImage.tsx
│  │  │  ├─ Rule.tsx
│  │  │  ├─ VerticalLabel.tsx
│  │  │  ├─ JsonLd.tsx
│  │  │  └─ Accordion.tsx
│  │  ├─ layout/
│  │  │  ├─ Header.tsx
│  │  │  ├─ MobileNav.tsx
│  │  │  ├─ Footer.tsx
│  │  │  ├─ Providers.tsx
│  │  │  ├─ SmoothScroll.tsx
│  │  │  ├─ PageTransition.tsx
│  │  │  ├─ ScrollProgress.tsx
│  │  │  ├─ Cursor.tsx
│  │  │  ├─ Grain.tsx
│  │  │  ├─ ThemeToggle.tsx
│  │  │  └─ SkipLink.tsx
│  │  ├─ visual/
│  │  │  ├─ ParticleField.tsx
│  │  │  ├─ AuroraMesh.tsx
│  │  │  └─ UnderlineSwash.tsx
│  │  └─ sections/
│  │     ├─ Hero.tsx
│  │     ├─ ProofStrip.tsx
│  │     ├─ Pillars.tsx
│  │     ├─ StackMarquee.tsx
│  │     ├─ FeaturedWork.tsx
│  │     ├─ SpeakingStrip.tsx
│  │     ├─ PipelineDiagram.tsx
│  │     ├─ Timeline.tsx
│  │     ├─ CtaBand.tsx
│  │     └─ ContactForm.tsx
│  │
│  ├─ content/
│  │  ├─ site.ts        Global identity, nav, socials, SEO defaults
│  │  ├─ profile.ts     Bio, metrics, timeline, credentials
│  │  ├─ services.ts    Four engagements
│  │  ├─ work.ts        Five case studies
│  │  ├─ speaking.ts    Talks, institutions, training
│  │  ├─ stack.ts       Tools, split operated vs buildsWith
│  │  └─ posts.ts       Three seeded articles
│  │
│  ├─ lib/
│  │  ├─ utils.ts            cn(), formatting helpers
│  │  ├─ seo.ts              buildMetadata()
│  │  ├─ jsonld.ts           All structured data builders
│  │  ├─ motion.ts           Shared easings and variants
│  │  ├─ validation.ts       Zod schema for the contact form
│  │  ├─ brevo.ts            Brevo REST client
│  │  ├─ email-templates.ts  Branded notification and auto-reply HTML
│  │  └─ rate-limit.ts       In-memory limiter
│  │
│  └─ hooks/
│     ├─ useReducedMotionSafe.ts
│     ├─ useScrolled.ts
│     └─ useMediaQuery.ts
│
├─ .env.local            NOT committed
├─ .env.example
├─ next.config.ts
├─ postcss.config.mjs
├─ tsconfig.json
├─ eslint.config.mjs   generated by create-next-app, leave as-is
└─ package.json
```

**88 of these files are given in full in Part 9.** The only ones not reproduced are the
files `create-next-app` generates and you never touch: `eslint.config.mjs`,
`next-env.d.ts` and the default `.gitignore`.

---

# PART 9: Every File, In Full

Create files in the order below. Later files import from earlier ones.

## 9.1 Configuration

### `package.json`

```json
{
  "name": "sawera-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@hookform/resolvers": "5.9.1",
    "@tsparticles/react": "4.4.0",
    "@tsparticles/slim": "4.4.0",
    "@vercel/analytics": "2.0.1",
    "@vercel/speed-insights": "1.2.0",
    "clsx": "2.1.1",
    "geist": "1.6.1",
    "lenis": "1.3.26",
    "lucide-react": "1.41.0",
    "motion": "13.2.0",
    "next": "16.3.4",
    "next-themes": "0.4.6",
    "react": "19.2.8",
    "react-dom": "19.2.8",
    "react-hook-form": "7.87.0",
    "sonner": "2.0.8",
    "tailwind-merge": "3.6.0",
    "zod": "4.5.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "4.3.3",
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.3.4",
    "sharp": "^0.34.0",
    "tailwindcss": "4.3.3",
    "typescript": "^5.7.0"
  }
}
```

### `postcss.config.mjs`

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### `next.config.ts`

```ts
import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    return [
      { source: "/cv", destination: "/resume", permanent: true },
      { source: "/projects", destination: "/work", permanent: true },
      { source: "/gtm", destination: "/gtm-engineering", permanent: true },
    ];
  },
};

export default nextConfig;
```

### `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": { "@/*": ["./src/*"] }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### `.env.example`

```
NEXT_PUBLIC_SITE_URL=https://saweranadeem.com
BREVO_API_KEY=
BREVO_SENDER_EMAIL=
BREVO_SENDER_NAME=Sawera Nadeem Website
CONTACT_TO_EMAIL=
CONTACT_TO_NAME=Sawera Nadeem
BREVO_CONTACT_LIST_ID=
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
```

### `public/llms.txt`

```
# Sawera Nadeem

> GTM Engineer and MS Computer Science researcher. Builds B2B outbound systems,
> enrichment pipelines and CRM architecture for healthcare AI. Trains developers
> across Pakistan through NAVTTC, Virtual University and Saylani.

## Pages
- [Home](https://saweranadeem.com/): Positioning, proof metrics, featured work.
- [GTM Engineering](https://saweranadeem.com/gtm-engineering): The full six-stage outbound system, tool by tool.
- [Services](https://saweranadeem.com/services): Four engagement types, deliverables and process.
- [Work](https://saweranadeem.com/work): Case studies across GTM, applied AI and curriculum design.
- [Speaking](https://saweranadeem.com/speaking): Talks, workshops and training programmes.
- [About](https://saweranadeem.com/about): Background, timeline and credentials.
- [Resume](https://saweranadeem.com/resume): Downloadable CVs, commercial and academic.
- [Contact](https://saweranadeem.com/contact): Enquiry form and direct channels.

## Facts
- Location: Faisalabad, Pakistan. Works remotely with US and EU teams.
- Current role: Senior Manager, Business Development and Growth, Techloset Solutions.
- Education: MS Computer Science, 2025. BS Software Engineering, CGPA 3.7, University of Agriculture Faisalabad.
- GTM tools operated: LinkedIn Sales Navigator, Apollo.io, Instantly, HubSpot, Trello, Google Analytics.
- Research: Retrieval-Augmented Generation for clinical decision support in Urdu.
```

---

## 9.2 `src/app/globals.css`

This file carries the entire design system. Tailwind v4 is CSS-first, so there is no
`tailwind.config.js`. The `@theme inline` block is what allows the same utility class to
resolve to a different value in dark mode.

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

/* ---------------------------------------------------------------
   1. Raw palette. These swap between themes.
   --------------------------------------------------------------- */
:root {
  --bone: #faf6f3;
  --linen: #f1e8e2;
  --blush: #e7cbc8;
  --garnet: #b33a63;
  --garnet-deep: #8e2b4d;
  --plum: #3d1e36;
  --ink: #241a20;
  --muted: #6e5c63;
  --gold: #c79a5b;
  --sage: #7e9080;
  --line: rgb(36 26 32 / 0.12);
  --line-strong: rgb(36 26 32 / 0.24);
  --shadow-warm: 0 18px 44px -22px rgb(61 30 54 / 0.28);

  /* Plum band tokens. These stay constant so inverted sections
     look identical in both themes. */
  --on-plum: #f6ece9;
  --on-plum-muted: #c9adba;

  color-scheme: light;
}

.dark {
  --bone: #171115;
  --linen: #211820;
  --blush: #4a2e37;
  --garnet: #e5799b;
  --garnet-deep: #f0a0b8;
  --plum: #2a1526;
  --ink: #f4eae6;
  --muted: #b3a0a8;
  --gold: #e0b87c;
  --sage: #9db3a0;
  --line: rgb(244 234 230 / 0.14);
  --line-strong: rgb(244 234 230 / 0.28);
  --shadow-warm: 0 18px 44px -22px rgb(0 0 0 / 0.6);

  color-scheme: dark;
}

/* ---------------------------------------------------------------
   2. Tailwind theme. "inline" keeps the var() reference live,
      so utilities follow the theme swap above.
   --------------------------------------------------------------- */
@theme inline {
  --color-bone: var(--bone);
  --color-linen: var(--linen);
  --color-blush: var(--blush);
  --color-garnet: var(--garnet);
  --color-garnet-deep: var(--garnet-deep);
  --color-plum: var(--plum);
  --color-ink: var(--ink);
  --color-muted: var(--muted);
  --color-gold: var(--gold);
  --color-sage: var(--sage);
  --color-line: var(--line);
  --color-line-strong: var(--line-strong);
  --color-on-plum: var(--on-plum);
  --color-on-plum-muted: var(--on-plum-muted);

  --font-display: var(--font-fraunces), ui-serif, Georgia, "Times New Roman", serif;
  --font-sans: var(--font-geist-sans), ui-sans-serif, system-ui, -apple-system, sans-serif;
  --font-mono: var(--font-geist-mono), ui-monospace, "SF Mono", Menlo, monospace;

  --radius-sm: 6px;
  --radius-card: 14px;
  --radius-xl2: 24px;
  --radius-pill: 999px;

  --shadow-card: var(--shadow-warm);

  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-quart: cubic-bezier(0.65, 0, 0.35, 1);

  --breakpoint-3xl: 1600px;
}

/* ---------------------------------------------------------------
   3. Base layer
   --------------------------------------------------------------- */
@layer base {
  * {
    border-color: var(--line);
  }

  html {
    -webkit-text-size-adjust: 100%;
    scroll-behavior: auto; /* Lenis owns scrolling */
  }

  body {
    background-color: var(--bone);
    color: var(--ink);
    font-family: var(--font-sans);
    font-size: 1.0625rem;
    line-height: 1.75;
    font-feature-settings: "kern", "liga", "calt";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 300;
    letter-spacing: -0.018em;
    line-height: 1.05;
    text-wrap: balance;
    font-variation-settings: "SOFT" 28, "WONK" 1;
  }

  p {
    text-wrap: pretty;
  }

  ::selection {
    background: var(--garnet);
    color: var(--bone);
  }

  :focus-visible {
    outline: 2px solid var(--garnet);
    outline-offset: 3px;
    border-radius: 2px;
  }

  a, button {
    -webkit-tap-highlight-color: transparent;
  }

  /* Hide the native cursor only where the custom one is active */
  html.has-custom-cursor,
  html.has-custom-cursor * {
    cursor: none !important;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--linen);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--line-strong);
    border-radius: 999px;
  }
}

/* ---------------------------------------------------------------
   4. Reusable component classes
   --------------------------------------------------------------- */
@layer components {
  .type-display-xl {
    font-family: var(--font-display);
    font-size: clamp(3.25rem, 9vw, 7.5rem);
    line-height: 0.94;
    letter-spacing: -0.032em;
    font-weight: 300;
    font-variation-settings: "SOFT" 40, "WONK" 1, "opsz" 120;
  }

  .type-display-l {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 6vw, 4.5rem);
    line-height: 1.02;
    letter-spacing: -0.026em;
    font-weight: 300;
    font-variation-settings: "SOFT" 34, "WONK" 1, "opsz" 90;
  }

  .type-display-m {
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 4vw, 3rem);
    line-height: 1.08;
    letter-spacing: -0.02em;
    font-weight: 300;
  }

  .type-title {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2.2vw, 1.75rem);
    line-height: 1.25;
    font-weight: 400;
  }

  .type-lead {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--muted);
    max-width: 62ch;
  }

  .type-label {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--muted);
  }

  .prose-measure {
    max-width: 68ch;
  }

  .hairline {
    border-top: 1px solid var(--line);
  }

  .band-plum {
    background: var(--plum);
    color: var(--on-plum);
  }
  .band-plum h1,
  .band-plum h2,
  .band-plum h3 {
    color: var(--on-plum);
  }
  .band-plum .type-label,
  .band-plum .type-lead {
    color: var(--on-plum-muted);
  }

  /* Animated link underline, drawn left to right */
  .link-underline {
    background-image: linear-gradient(currentColor, currentColor);
    background-size: 0% 1px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size 0.45s var(--ease-out-expo);
  }
  .link-underline:hover,
  .link-underline:focus-visible {
    background-size: 100% 1px;
  }

  .mask-fade-x {
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      black 8%,
      black 92%,
      transparent
    );
    mask-image: linear-gradient(
      to right,
      transparent,
      black 8%,
      black 92%,
      transparent
    );
  }

  .vertical-label {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-family: var(--font-mono);
    font-size: 0.6875rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--muted);
  }
}

/* ---------------------------------------------------------------
   5. Aspect ratios and keyframes
      Tailwind v4 resolves bare fractions such as aspect-3/4 natively.
      These declarations are a safety net, and they are the single
      place to look if an aspect utility is not applying.
   --------------------------------------------------------------- */
@layer components {
  .aspect-3\/4 { aspect-ratio: 3 / 4; }
  .aspect-3\/2 { aspect-ratio: 3 / 2; }
  .aspect-4\/5 { aspect-ratio: 4 / 5; }
  .aspect-16\/10 { aspect-ratio: 16 / 10; }
}

@keyframes marquee {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-50%, 0, 0); }
}

/* ---------------------------------------------------------------
   6. Reduced motion contract
   --------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**Two things to check if styling looks wrong after the first `npm run dev`:**

1. `@import "tailwindcss";` must be the very first line. Anything above it, including a
   comment block, can break the cascade layer ordering.
2. `@custom-variant dark (&:where(.dark, .dark *));` must come before any `dark:` utility
   is used, otherwise dark mode silently does nothing.
---

## 9.3 Content Layer

All copy lives here as typed data. Nothing is pasted from the CV. Every line is rewritten
into brand voice: first person, specific, quietly confident, evidence-led.

### `src/content/site.ts`

```ts
export const SITE = {
  name: "Sawera Nadeem",
  shortName: "Sawera",
  role: "GTM Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://saweranadeem.com",
  locale: "en_US",
  email: "saweranadeem8063@gmail.com",
  phone: "+92 303 7707026",
  location: "Faisalabad, Pakistan",
  timezone: "PKT, UTC+5",
  availability: "Open to GTM engagements and speaking for Q4",

  tagline: "I build the systems that fill the pipeline.",
  taglineSecondary: "And I teach the people who run them.",

  description:
    "GTM Engineer and AI systems builder. I design outbound engines, enrichment pipelines and CRM architecture for B2B teams selling into healthcare, then hand over the playbook so the team can run it without me.",

  shortBio:
    "Sawera Nadeem is a GTM Engineer and MS Computer Science researcher who builds B2B outbound systems for healthcare AI and trains developers across Pakistan.",

  socials: {
    linkedin: "https://www.linkedin.com/in/sawera-nadeem-2a6468315",
    github: "https://github.com/",
    x: "",
  },

  // Every profile URL that proves this is the same person.
  // This array feeds schema.org "sameAs" and is the highest-leverage
  // structured-data field for entity recognition.
  sameAs: [
    "https://www.linkedin.com/in/sawera-nadeem-2a6468315",
  ],

  nav: [
    { label: "Work", href: "/work" },
    { label: "GTM Engineering", href: "/gtm-engineering" },
    { label: "Speaking", href: "/speaking" },
    { label: "About", href: "/about" },
  ],

  footerNav: [
    { label: "Services", href: "/services" },
    { label: "Case Studies", href: "/work" },
    { label: "GTM Engineering", href: "/gtm-engineering" },
    { label: "Speaking", href: "/speaking" },
    { label: "Notes", href: "/blog" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
  ],

  cv: {
    commercial: "/cv/Sawera-Nadeem-GTM-CV.pdf",
    academic: "/cv/Sawera-Nadeem-Academic-CV.pdf",
  },
} as const;

export type NavItem = (typeof SITE.nav)[number];
```

### `src/content/profile.ts`

```ts
export const HEADLINE_METRICS = [
  {
    value: 300,
    prefix: "",
    suffix: "+",
    label: "Qualified leads sourced",
    note: "Across Sales Navigator, Apollo and Instantly, for a US healthcare buyer.",
  },
  {
    value: 20,
    prefix: "",
    suffix: "",
    label: "Discovery calls booked",
    note: "Clinic owners, practice managers and hospital directors of operations.",
  },
  {
    value: 500,
    prefix: "",
    suffix: "+",
    label: "Targeted connections built",
    note: "A network built on purpose, not on volume.",
  },
  {
    value: 5,
    prefix: "",
    suffix: "",
    label: "Training cohorts delivered",
    note: "National and international students, live and project-based.",
  },
] as const;

export const PILLARS = [
  {
    id: "gtm",
    index: "01",
    title: "Go-to-market engineering",
    lede: "Pipeline is a system, not a personality.",
    body: "I design the machine that turns a list into a calendar. Ideal customer profile, data sourcing, enrichment logic, scoring, sequencing, inbox infrastructure, CRM stages, reporting. When something stops working I can open the hood, because I wrote most of what is under it.",
    proof: "Owned outbound for an AI-first EHR selling into US clinics and hospitals.",
    tags: ["Outbound architecture", "Enrichment", "CRM ops", "Deliverability"],
  },
  {
    id: "ai",
    index: "02",
    title: "Applied AI and research",
    lede: "The interesting part of AI is the plumbing.",
    body: "My MS research builds a retrieval-augmented pipeline that answers Urdu-language clinical questions from Pakistan's national health guidelines, for community health workers who do not have a specialist to call. The same instincts, ground the model in real sources and measure it honestly, shape every AI workflow I put into a revenue stack.",
    proof: "MS thesis in progress. Prior research in multimodal and agentic RAG for agriculture.",
    tags: ["RAG", "LLM evaluation", "Agentic workflows", "Computer vision"],
  },
  {
    id: "teaching",
    index: "03",
    title: "Teaching and speaking",
    lede: "If I cannot teach it, I do not understand it.",
    body: "I run a three-month government-funded full-stack programme, teach at Virtual University, and step onto university stages when someone needs a working developer rather than a slide deck. Three institutions have handed me a shield for it. Teaching is also the reason my documentation is good, which clients notice long before they notice anything else.",
    proof: "NAVTTC, Virtual University of Pakistan, and incoming at Saylani Mass IT Training Center.",
    tags: ["Curriculum design", "Live instruction", "Mentorship", "Public speaking"],
  },
] as const;

export const ABOUT_INTRO = [
  "I started as a developer. That is the part people usually skip over when they read business development on a CV, and it is the part that changes everything about how I work.",
  "Three years of building full-stack products taught me how software actually gets shipped, what a technical buyer is really worried about, and why most outbound email reads like it was written by someone who has never opened the product. When I moved into growth, I did not stop being an engineer. I just pointed the same habits at pipeline: version the thing, instrument the thing, measure the thing, then delete whatever is not working.",
  "Today I lead business development and growth at Techloset Solutions, where I own outbound for SynaCare, an AI-first electronic health record system sold into clinics and hospitals across the United States. Alongside that I am finishing an MS in Computer Science, researching retrieval-augmented generation for clinical decision support in Urdu, and teaching web development to the next few hundred people who will build things here.",
];

export const VALUES = [
  {
    title: "Show the numbers or say nothing",
    body: "Every claim on this site maps to something I can screenshot. If a campaign underperformed, that is more useful to talk about than the one that worked.",
  },
  {
    title: "Build it so it survives me",
    body: "An outbound system that only I can run is a liability, not an asset. Documentation, naming conventions and handover sessions are part of the deliverable, not an afterthought.",
  },
  {
    title: "Technical honesty in a sales seat",
    body: "I would rather tell a prospect the integration will take four weeks than win the meeting and lose the account in month two.",
  },
  {
    title: "Teach what you learn, immediately",
    body: "Every workflow I figure out ends up in a session, a doc, or a cohort. It is the fastest quality check I know.",
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  kind: "work" | "teaching" | "education" | "honour";
  body: string;
  highlights?: string[];
};

export const TIMELINE: TimelineItem[] = [
  {
    period: "Sep 2025, present",
    title: "Senior Manager, Business Development and Growth",
    org: "Techloset Solutions",
    kind: "work",
    body: "Own the full go-to-market motion for SynaCare, an AI-first EHR sold into US clinics and hospitals. Everything from ICP definition through to the reporting the CEO reads on Monday.",
    highlights: [
      "Built the outbound stack across LinkedIn Sales Navigator, Apollo.io and Instantly",
      "Sourced between 100 and 300 qualified leads and booked close to 20 discovery calls",
      "Architected the HubSpot pipeline, deal stages and follow-up cadences from scratch",
      "Grew a targeted network of roughly 500 US healthcare operators",
      "Run content and social strategy for both the company and the founder's personal brand",
      "Lead hiring for sales and marketing, from job posts through to screening",
    ],
  },
  {
    period: "2025",
    title: "MS Computer Science",
    org: "Thesis in progress",
    kind: "education",
    body: "Researching a retrieval-augmented generation pipeline that answers Urdu-language clinical questions grounded in Pakistan's national health guidelines, aimed at community health workers.",
  },
  {
    period: "2025, incoming",
    title: "Instructor, Web Development and Coding",
    org: "Saylani Mass IT Training Center",
    kind: "teaching",
    body: "Selected to teach at one of the largest free technical training networks in Pakistan.",
  },
  {
    period: "2024, 2025",
    title: "Government Trainer, Full-Stack Programme",
    org: "NAVTTC",
    kind: "teaching",
    body: "Design and deliver a three-month Laravel and MERN full-stack course covering HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, Laravel, MySQL and Git.",
  },
  {
    period: "2024, 2025",
    title: "Web Development and Coding Instructor",
    org: "Virtual University of Pakistan",
    kind: "teaching",
    body: "On-site instruction as part of a government-affiliated course.",
  },
  {
    period: "2024, 2025",
    title: "Lead Management and LinkedIn Marketer",
    org: "Innovrah Solutions",
    kind: "work",
    body: "Ran B2B lead generation and outreach on LinkedIn. Built the sequences, maintained the CRM, and worked with sales to sharpen the ICP based on what actually replied.",
  },
  {
    period: "2024",
    title: "Instructor, Mentor and Full-Stack Developer",
    org: "Technolangs Solutions",
    kind: "teaching",
    body: "Taught full-stack fundamentals with quizzes, labs and real projects, while shipping UI-heavy client work and a MERN Twitch clip downloader with live data fetching.",
  },
  {
    period: "2023, 2024",
    title: "Full-Stack Developer",
    org: "TechHub, Faisalabad",
    kind: "work",
    body: "Built scalable MERN applications, designed REST APIs, tuned database queries and hardened application security.",
  },
  {
    period: "2023, 2024",
    title: "Web Development Team Head",
    org: "Senior Tutor Office, University of Agriculture Faisalabad",
    kind: "work",
    body: "Led a team of university developers building academic and administrative software. Owned project structure, version control and code review.",
  },
  {
    period: "2023",
    title: "BS Software Engineering, CGPA 3.7",
    org: "University of Agriculture Faisalabad",
    kind: "education",
    body: "Coursework across web development, machine learning, data structures and algorithms.",
  },
  {
    period: "2023, 2025",
    title: "Guest Speaker Shields",
    org: "UCP, UAF and NIC Faisalabad",
    kind: "honour",
    body: "Honoured by three institutions for invited seminars and workshops on modern web development, freelancing and startup engineering.",
  },
];

export const CREDENTIALS = [
  { name: "MS Computer Science", issuer: "2025", type: "degree" },
  { name: "BS Software Engineering, CGPA 3.7", issuer: "University of Agriculture Faisalabad", type: "degree" },
  { name: "Certified Programming Trainer", issuer: "NAVTTC", type: "certification" },
  { name: "Certified Web Developer", issuer: "NAVTTC", type: "certification" },
  { name: "Google Analytics Certified", issuer: "Google", type: "certification" },
  { name: "Content Marketing Certification", issuer: "HubSpot Academy", type: "certification" },
  { name: "Digital Marketing", issuer: "DigiSkills", type: "certification" },
  { name: "Social Media Marketing", issuer: "Axis Training Center", type: "certification" },
  { name: "Guest Speaker Shield", issuer: "University of Central Punjab", type: "honour" },
  { name: "Guest Speaker Shield", issuer: "University of Agriculture Faisalabad", type: "honour" },
  { name: "Guest Speaker Shield", issuer: "National Incubation Center Faisalabad", type: "honour" },
  { name: "PM Youth Laptop Scheme Awardee", issuer: "Government of Pakistan, 2023", type: "honour" },
];
```

### `src/content/stack.ts`

```ts
export type Tool = { name: string; category: string; note?: string };

/**
 * operated  = tools evidenced by the CV as hands-on, day-to-day use.
 * buildsWith = the engineering layer she brings on top, plus tools
 *              she evaluates and integrates. Never present these as
 *              certified or long-tenured. Keep the two groups separate
 *              in the UI so the distinction survives future edits.
 */
export const TOOL_STACK = {
  operated: [
    { name: "HubSpot", category: "CRM", note: "Pipeline architecture, deal stages, cadences" },
    { name: "LinkedIn Sales Navigator", category: "Prospecting", note: "ICP filtering and account mapping" },
    { name: "Apollo.io", category: "Data", note: "Contact sourcing and list building" },
    { name: "Instantly", category: "Sequencing", note: "Cold email campaigns and inbox rotation" },
    { name: "Google Analytics", category: "Measurement", note: "Certified" },
    { name: "Trello", category: "Delivery", note: "Sprint and campaign tracking" },
  ] satisfies Tool[],

  buildsWith: [
    { name: "Node.js", category: "Engineering" },
    { name: "Python", category: "Engineering" },
    { name: "REST and webhooks", category: "Integration" },
    { name: "LLM prompt pipelines", category: "AI" },
    { name: "Retrieval-augmented generation", category: "AI" },
    { name: "Next.js", category: "Engineering" },
    { name: "Laravel", category: "Engineering" },
    { name: "MySQL and MongoDB", category: "Data" },
  ] satisfies Tool[],

  // Wordmarks for the marquee. Order matters visually.
  marquee: [
    "HubSpot",
    "Sales Navigator",
    "Apollo.io",
    "Instantly",
    "Google Analytics",
    "Node.js",
    "Python",
    "Next.js",
    "Laravel",
    "MongoDB",
    "Trello",
    "Git",
  ],
} as const;

/** The six-stage system rendered on /gtm-engineering. */
export const PIPELINE_STAGES = [
  {
    step: "01",
    name: "Define",
    headline: "Write the ICP down until it is boring",
    body: "Firmographics, tech signals, headcount bands, the exact job titles that sign and the exact titles that block. If a list cannot be rebuilt from the definition by someone else, the definition is not finished.",
    tools: ["Sales Navigator", "Apollo.io"],
  },
  {
    step: "02",
    name: "Source",
    headline: "Build lists that survive contact with reality",
    body: "Pull from more than one source, cross-check, and treat every record as unverified until it is. A clean list of 400 beats a dirty list of 4,000 every single time, and it protects the domain.",
    tools: ["Apollo.io", "Sales Navigator", "Manual verification"],
  },
  {
    step: "03",
    name: "Enrich and score",
    headline: "Let the data decide the order of the queue",
    body: "Layer on the signals that actually predict a reply: recent hiring, tech in use, practice size, funding, role tenure. Score against them, then work the top of the queue rather than the top of the alphabet.",
    tools: ["Enrichment APIs", "Custom scripts", "LLM classification"],
  },
  {
    step: "04",
    name: "Sequence",
    headline: "Infrastructure first, copy second",
    body: "Warmed domains, rotated inboxes, SPF, DKIM and DMARC in place before a single send. Then short, specific, human sequences across email and LinkedIn, with one variable that is genuinely personal rather than a merge tag pretending to be.",
    tools: ["Instantly", "LinkedIn", "Deliverability monitoring"],
  },
  {
    step: "05",
    name: "Route",
    headline: "A reply is a state change, not an inbox event",
    body: "Every positive reply moves a deal stage, fires a task and creates a calendar hold. Lifecycle stages, owners and follow-up cadences are defined in the CRM so nothing depends on someone remembering.",
    tools: ["HubSpot", "Calendar routing"],
  },
  {
    step: "06",
    name: "Measure and cut",
    headline: "Report on the two numbers that matter",
    body: "Positive reply rate and meetings held. Everything else is diagnostic. Weekly review, kill the bottom quartile of segments and messages, redeploy the volume into what is working.",
    tools: ["HubSpot reporting", "Google Analytics"],
  },
] as const;
```

### `src/content/services.ts`

```ts
export type Service = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  forWho: string;
  deliverables: string[];
  timeline: string;
  accent: "garnet" | "sage" | "gold";
};

export const SERVICES: Service[] = [
  {
    slug: "outbound-engine",
    index: "01",
    title: "Outbound engine build",
    summary:
      "A complete, documented pipeline system built from your ICP outwards. You end up owning a machine, not a freelancer's login.",
    forWho: "Founder-led B2B teams with a product that works and a pipeline that does not.",
    deliverables: [
      "ICP definition and segment map",
      "Verified target list with enrichment and scoring model",
      "Sending infrastructure: domains, inbox warm-up, SPF, DKIM, DMARC",
      "Multi-channel sequences for email and LinkedIn, with tested variants",
      "CRM build: lifecycle stages, deal stages, properties, task automation",
      "Weekly reporting view and a written operating manual",
    ],
    timeline: "4 to 6 weeks",
    accent: "garnet",
  },
  {
    slug: "gtm-audit",
    index: "02",
    title: "GTM systems audit",
    summary:
      "A forensic read of why the current motion is underperforming, with a prioritised fix list you can hand straight to your team.",
    forWho: "Teams already running outbound who are seeing reply rates fall or CRM data rot.",
    deliverables: [
      "Deliverability and domain health report",
      "Sequence and messaging teardown with rewrites for the worst performers",
      "CRM hygiene audit: duplicates, dead stages, unowned records",
      "Funnel maths: where volume is lost between send and meeting held",
      "Ranked 30, 60 and 90 day action plan",
    ],
    timeline: "10 to 14 days",
    accent: "gold",
  },
  {
    slug: "ai-workflows",
    index: "03",
    title: "AI workflow engineering",
    summary:
      "Practical LLM automation inside the revenue stack. Research-grade evaluation, not demo-grade prompting.",
    forWho: "Teams who want AI in the funnel without shipping something that hallucinates at a prospect.",
    deliverables: [
      "Signal extraction and lead classification pipelines",
      "Retrieval-augmented answering over your own documents",
      "Personalisation layers that read a real source before writing a line",
      "Evaluation harness so quality is measured, not assumed",
      "Handover documentation and cost model",
    ],
    timeline: "3 to 5 weeks",
    accent: "sage",
  },
  {
    slug: "training",
    index: "04",
    title: "Training, workshops and talks",
    summary:
      "Hands-on sessions for universities, bootcamps and in-house teams. Live coding, real repositories, no slideware.",
    forWho: "Universities, training bodies, incubators and engineering teams levelling up.",
    deliverables: [
      "Curriculum design against a defined outcome",
      "Live instruction, in person or remote",
      "Project briefs, labs and assessment rubrics",
      "Recorded sessions and take-home materials",
      "Formats from a 60 minute seminar to a 12 week programme",
    ],
    timeline: "60 minutes to 12 weeks",
    accent: "garnet",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Diagnose",
    body: "A 45 minute call plus read-only access to whatever exists. I come back with what is actually broken, which is rarely what you thought it was.",
  },
  {
    step: "02",
    title: "Scope",
    body: "A written brief with deliverables, dates and the numbers we will judge it by. Fixed fee. No hourly ambiguity.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly demo, shared board, everything visible as it lands. You never have to ask where it is.",
  },
  {
    step: "04",
    title: "Hand over",
    body: "A live walkthrough, a written manual, and 30 days of support while your team drives it themselves.",
  },
];

export const FAQS = [
  {
    q: "Do you work with teams outside Pakistan?",
    a: "Yes. Most of my work is with US-based teams, so I hold overlapping hours with both US Eastern and Pacific time and I am used to running a remote engagement end to end.",
  },
  {
    q: "Can you work inside our existing CRM?",
    a: "HubSpot is where I am fastest. I can work in Salesforce or Pipedrive too, though the first week will include more discovery while I map how your instance has been configured.",
  },
  {
    q: "What does an engagement cost?",
    a: "Every project is a fixed fee scoped against a written brief, so you know the number before anything starts. Send me the situation and I will come back with a range on the first call.",
  },
  {
    q: "Do you guarantee a number of meetings?",
    a: "No, and be careful with anyone who does. What I commit to is a built and documented system, a tested message set, and full visibility into the funnel maths so we can both see exactly what is converting.",
  },
  {
    q: "Are you available for a permanent role?",
    a: "I am currently Senior Manager for Business Development and Growth at Techloset Solutions. I take on a small number of external engagements and speaking commitments alongside it.",
  },
  {
    q: "Will you speak at our university or event?",
    a: "Gladly. I have delivered invited sessions at UCP, UAF and the National Incubation Center in Faisalabad. Send the audience, the date and the outcome you want and I will shape a session around it.",
  },
];
```
### `src/content/work.ts`

```ts
export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  category: "Go-to-market" | "Applied AI" | "Curriculum" | "Product engineering";
  year: string;
  org: string;
  role: string;
  summary: string;
  cover: string;
  featured: boolean;
  metrics: { value: string; label: string }[];
  challenge: string;
  approach: { title: string; body: string }[];
  outcome: string[];
  stack: string[];
  note?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "synacare-outbound-engine",
    title: "Building the outbound engine for an AI-first EHR",
    kicker: "From a blank CRM to booked discovery calls with US clinic owners",
    category: "Go-to-market",
    year: "2025, ongoing",
    org: "Techloset Solutions, for SynaCare",
    role: "Senior Manager, Business Development and Growth",
    summary:
      "SynaCare is an AI-first electronic health record system. Selling it means reaching people who are clinically busy, sold to constantly, and rightly sceptical of anything that touches patient data. There was no pipeline, no CRM structure and no repeatable motion. I built all three.",
    cover: "/images/work/synacare.jpg",
    featured: true,
    metrics: [
      { value: "100 to 300", label: "Qualified leads sourced" },
      { value: "~20", label: "Discovery calls booked" },
      { value: "~500", label: "Targeted connections built" },
      { value: "3", label: "Channels running in parallel" },
    ],
    challenge:
      "US healthcare is one of the hardest B2B markets to reach cold. Clinic owners and practice managers are gatekept, sceptical about data handling, and already receiving a dozen EHR pitches a week. The company had a strong product and no systematic way to put it in front of the right person twice.",
    approach: [
      {
        title: "Narrowed the ICP until it was uncomfortable",
        body: "Rather than targeting healthcare broadly, I defined it down to practice size bands, specialty, and three specific titles that can actually sign: clinic owner, practice manager, and director of operations. Everything downstream got cheaper the moment the definition got narrower.",
      },
      {
        title: "Built lists from two sources and cross-checked them",
        body: "Sales Navigator gave me the account and title layer. Apollo.io gave me the contact layer. Records that did not agree across both were verified manually or dropped. Protecting the sending domain is worth more than volume.",
      },
      {
        title: "Ran email and LinkedIn as one motion, not two",
        body: "Instantly handled the cold email sequences with warmed inboxes and rotation. LinkedIn ran in parallel with connection requests and value-first messaging to the same accounts, so the name was familiar before the email arrived.",
      },
      {
        title: "Made HubSpot the single source of truth",
        body: "I architected the pipeline from scratch: lifecycle stages, deal stages, required properties and follow-up cadences. Every positive reply became a state change with an owner and a next action, so no interested prospect quietly went cold.",
      },
      {
        title: "Fed the outbound with inbound",
        body: "I also owned LinkedIn content and social strategy for both the company and the CEO's personal brand. Prospects who had seen the founder's posts replied at a visibly different rate to those who had not.",
      },
    ],
    outcome: [
      "Between 100 and 300 qualified leads sourced across the combined motion",
      "Close to 20 discovery meetings booked with clinic owners, practice managers and hospital decision makers",
      "A targeted network of roughly 500 relevant US healthcare operators built from zero",
      "A documented HubSpot pipeline the team can run without me in the room",
      "Sales and marketing hiring brought in-house, from job posts through to candidate screening",
    ],
    stack: ["LinkedIn Sales Navigator", "Apollo.io", "Instantly", "HubSpot", "Google Analytics", "Trello"],
  },

  {
    slug: "healthcare-rag-urdu",
    title: "A retrieval pipeline for Urdu clinical questions",
    kicker: "MS thesis research, grounding LLM answers in national health guidelines",
    category: "Applied AI",
    year: "2025, in progress",
    org: "MS Computer Science thesis",
    role: "Researcher",
    summary:
      "Community health workers in Pakistan carry a large share of frontline care and rarely have a specialist to call. This research builds a retrieval-augmented generation pipeline that answers their questions in Urdu, grounded strictly in national clinical guidelines rather than in whatever the model happens to have memorised.",
    cover: "/images/work/healthcare-rag.jpg",
    featured: true,
    metrics: [
      { value: "Urdu", label: "Primary query language" },
      { value: "RAG", label: "Grounded, not generative-only" },
      { value: "National", label: "Guideline corpus scope" },
    ],
    challenge:
      "General purpose language models are confident in English and unreliable in Urdu, and a wrong answer in a clinical context is not a minor inconvenience. The research question is whether retrieval grounding can make a model safe enough to be useful to a non-specialist working without supervision.",
    approach: [
      {
        title: "Corpus and chunking",
        body: "Build the retrieval corpus from national clinical guidelines, chunked so that a retrieved passage is large enough to carry clinical context but small enough to stay precise.",
      },
      {
        title: "Cross-lingual retrieval",
        body: "Handle the gap between an Urdu query and a source corpus that is not uniformly Urdu, so that recall does not collapse the moment a user types naturally.",
      },
      {
        title: "Grounded generation with citations",
        body: "Constrain the model to answer only from retrieved passages and surface the source, so a health worker can check the origin of any instruction they are given.",
      },
      {
        title: "Honest evaluation",
        body: "Measure retrieval quality and answer faithfulness separately. An answer that reads well but is not supported by a retrieved passage counts as a failure, not a partial success.",
      },
    ],
    outcome: [
      "Pipeline architecture defined and under active development",
      "Directly informs how I design AI features inside commercial revenue stacks: retrieve first, cite always, evaluate separately",
    ],
    stack: ["Python", "Retrieval-augmented generation", "LLM evaluation", "Vector retrieval"],
    note: "Research in progress. Findings will be published on submission.",
  },

  {
    slug: "navttc-fullstack-curriculum",
    title: "A three-month full-stack programme for a national training scheme",
    kicker: "Government-funded, project-based, built for people entering the field cold",
    category: "Curriculum",
    year: "2024, 2025",
    org: "NAVTTC, National Vocational and Technical Training Commission",
    role: "Government Trainer and Curriculum Designer",
    summary:
      "A twelve-week full-stack course taking students with little or no prior programming experience to a deployed application. Designed for a national scheme where the students are not paying, which means the only thing keeping them in the room is whether the sessions are actually good.",
    cover: "/images/work/navttc.jpg",
    featured: true,
    metrics: [
      { value: "12", label: "Weeks, end to end" },
      { value: "5", label: "Cohorts delivered overall" },
      { value: "9", label: "Technologies covered" },
    ],
    challenge:
      "Free government training programmes have a completion problem. Students arrive with wildly different starting points and drop out the first time a session becomes abstract. The curriculum had to hold a mixed-ability room for three months without slowing to the pace of the slowest learner or losing the fastest.",
    approach: [
      {
        title: "Sequenced by shippable milestone, not by syllabus",
        body: "Every week ends with something that runs in a browser. Concepts are introduced at the point they are needed to unblock the build, which keeps abstraction from arriving before motivation.",
      },
      {
        title: "Live coding with deliberate mistakes",
        body: "I type the errors on purpose and debug them in front of the room. Watching a working developer read a stack trace teaches more than a clean, pre-recorded demonstration ever does.",
      },
      {
        title: "Labs, quizzes and real repositories",
        body: "Weekly hands-on labs and quizzes with a real git workflow, so students leave with commit history rather than a folder of files.",
      },
      {
        title: "Two tracks inside one room",
        body: "Core requirements everyone must hit, plus extension tasks for students moving faster, so nobody is idle and nobody is drowning.",
      },
    ],
    outcome: [
      "A repeatable twelve-week curriculum now delivered across multiple cohorts",
      "Students finish with a deployed project and a git history they can show an employer",
      "The same structure has been adapted for Virtual University and for remote international batches",
    ],
    stack: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "PHP", "Laravel", "MySQL", "Git and GitHub"],
  },

  {
    slug: "gamexchange-marketplace",
    title: "GameXchange, a niche marketplace for game trading",
    kicker: "Full-stack build, from schema to shipped product",
    category: "Product engineering",
    year: "2023, 2024",
    org: "Independent build",
    role: "Full-Stack Developer",
    summary:
      "A two-sided marketplace where players list, browse and trade games. Built end to end: relational schema, REST API, authentication, listing and search flows, and a front end that stays fast as the catalogue grows.",
    cover: "/images/work/gamexchange.jpg",
    featured: false,
    metrics: [
      { value: "2-sided", label: "Marketplace model" },
      { value: "REST", label: "API architecture" },
      { value: "MySQL", label: "Relational core" },
    ],
    challenge:
      "Marketplaces are deceptively hard. Listing, search, trade state and user trust all touch each other, and a naive schema turns every new feature into a migration. The build had to stay coherent as scope grew.",
    approach: [
      {
        title: "Schema before screens",
        body: "Modelled listings, trades and users properly up front so that trade state transitions were enforced by the database rather than by hopeful application logic.",
      },
      {
        title: "A REST layer with predictable shapes",
        body: "Consistent response envelopes and error handling across every endpoint, so the front end never had to special-case a route.",
      },
      {
        title: "Query tuning as a first-class task",
        body: "Indexed the access patterns that search and browse actually use, rather than optimising after the fact when the catalogue was already slow.",
      },
    ],
    outcome: [
      "A working two-sided marketplace covering listing, discovery and trade",
      "Reusable API and auth patterns carried into later client projects",
    ],
    stack: ["Node.js", "Express", "React", "MySQL", "REST"],
  },

  {
    slug: "counterfeit-detection-resnet",
    title: "Fixing a counterfeit-detection model that was quietly failing",
    kicker: "The bug was not in the model. It was in the preprocessing.",
    category: "Applied AI",
    year: "2024",
    org: "Client delivery",
    role: "ML Engineer",
    summary:
      "A client had a ResNet50 convolutional network for detecting counterfeit brand imagery. Accuracy was well below what the architecture should deliver and the assumption in the room was that the model needed retraining. It did not.",
    cover: "/images/work/image-authentication.jpg",
    featured: false,
    metrics: [
      { value: "ResNet50", label: "Base architecture" },
      { value: "1", label: "Root cause, not a retrain" },
    ],
    challenge:
      "Underperforming vision models attract expensive answers. More data, more epochs, a bigger backbone. Each of those costs weeks, and none of them help if the input distribution at inference does not match the one the network was trained on.",
    approach: [
      {
        title: "Audited the input path before touching the weights",
        body: "Traced exactly what the tensor looked like at the moment it entered the network, rather than starting from the training loop.",
      },
      {
        title: "Found a normalisation mismatch",
        body: "The pipeline was applying simple pixel scaling where the pretrained backbone expected ImageNet mean and standard deviation normalisation. Every inference was being run on a subtly shifted distribution.",
      },
      {
        title: "Aligned preprocessing to the pretrained contract",
        body: "Corrected the transform so training and inference agreed, then re-validated on held-out data to confirm the gain was real rather than a lucky split.",
      },
    ],
    outcome: [
      "Root cause identified and corrected without retraining the network",
      "Weeks of unnecessary compute and iteration avoided",
      "A preprocessing check added to the client's evaluation routine so the class of bug cannot recur silently",
    ],
    stack: ["Python", "ResNet50", "Convolutional neural networks", "Image preprocessing"],
  },
];

export const getCaseStudy = (slug: string) =>
  CASE_STUDIES.find((c) => c.slug === slug);

export const FEATURED_WORK = CASE_STUDIES.filter((c) => c.featured);
```

### `src/content/speaking.ts`

```ts
export type Talk = {
  title: string;
  venue: string;
  kind: "Seminar" | "Workshop" | "Guest lecture" | "Moderation" | "Programme";
  year: string;
  body: string;
  honour?: string;
};

export const TALKS: Talk[] = [
  {
    title: "Modern web development and the career paths inside it",
    venue: "University of Central Punjab",
    kind: "Workshop",
    year: "2024, 2025",
    body: "Invited seminars and hands-on workshops covering what the modern stack actually looks like in production, and the routes into it that do not require a foreign degree.",
    honour: "Guest Speaker Shield",
  },
  {
    title: "MERN fundamentals, freelancing and shipping real work",
    venue: "University of Agriculture Faisalabad",
    kind: "Workshop",
    year: "2023, 2025",
    body: "Practical MERN sessions for students, paired with an honest walkthrough of freelancing: pricing, scoping, and the client conversations nobody teaches you.",
    honour: "Guest Speaker Shield",
  },
  {
    title: "Startup tech skills and the freelancing roadmap",
    venue: "National Incubation Center, Faisalabad",
    kind: "Seminar",
    year: "2024",
    body: "A session for early-stage founders and students on the technical skills that actually move a startup forward in its first year.",
    honour: "Guest Speaker Shield",
  },
  {
    title: "Big Data Analytics",
    venue: "In collaboration with Sir Hafiz Ali",
    kind: "Seminar",
    year: "2024",
    body: "A co-delivered seminar introducing big data analytics concepts and where they meet everyday engineering work.",
  },
  {
    title: "Python for Beginners",
    venue: "iCodeGuru",
    kind: "Moderation",
    year: "2024",
    body: "Moderated a live beginner series, running Q&A and guiding learners through their first Python programmes.",
  },
  {
    title: "Web development and coding, government-affiliated course",
    venue: "Virtual University of Pakistan",
    kind: "Programme",
    year: "2024, 2025",
    body: "On-site instruction delivered as part of a government-affiliated web development course.",
  },
  {
    title: "Laravel and MERN full-stack, twelve week programme",
    venue: "NAVTTC",
    kind: "Programme",
    year: "2024, 2025",
    body: "A three-month government-funded full-stack course covering HTML, CSS, Bootstrap, JavaScript, jQuery, PHP, Laravel, MySQL and Git.",
  },
  {
    title: "Web development and coding",
    venue: "Saylani Mass IT Training Center",
    kind: "Programme",
    year: "Incoming",
    body: "Selected to teach at one of the largest free technical training networks in Pakistan.",
  },
  {
    title: "Full-stack fundamentals, five remote cohorts",
    venue: "Remote, national and international",
    kind: "Programme",
    year: "2023, 2025",
    body: "Five batches trained through live coding, a structured curriculum and project-based assessment.",
  },
];

export const SPEAKING_TOPICS = [
  {
    title: "GTM engineering for technical founders",
    body: "How to build a pipeline system rather than hire a pipeline person. ICP, enrichment, deliverability, CRM architecture, and the two metrics worth reporting.",
    audience: "Founders, incubators, accelerator cohorts",
  },
  {
    title: "Retrieval-augmented generation, honestly",
    body: "What RAG fixes, what it does not, and how to evaluate it so you find out before your users do. Drawn from live clinical-domain research.",
    audience: "CS departments, engineering teams, research groups",
  },
  {
    title: "From student to shipping, the full-stack route",
    body: "A working developer's map of the modern stack, what to learn in what order, and how to build a portfolio that a hiring manager reads past the first line.",
    audience: "Universities, bootcamps, student societies",
  },
  {
    title: "The freelancing roadmap that is not a get-rich video",
    body: "Pricing, scoping, contracts, client communication and the failure modes nobody posts about.",
    audience: "Students, early-career developers",
  },
];

export const SPEAKING_GALLERY = [
  { src: "/images/speaking-1.jpg", alt: "Sawera Nadeem delivering a web development workshop to a university audience", span: "lg" },
  { src: "/images/speaking-2.jpg", alt: "Hands-on coding session with students during a training programme", span: "sm" },
  { src: "/images/speaking-3.jpg", alt: "Guest Speaker Shield awarded for an invited seminar", span: "sm" },
];
```

### `src/content/posts.ts`

```ts
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;        // ISO
  updated?: string;    // ISO
  readingTime: string;
  tags: string[];
  keywords: string[];
  body: Block[];
};

export const POSTS: Post[] = [
  {
    slug: "what-is-a-gtm-engineer",
    title: "What a GTM engineer actually does all day",
    description:
      "The role sits between revenue and engineering, and the job description is usually wrong. Here is the honest version, stage by stage, from someone running it inside healthcare AI.",
    date: "2026-02-18",
    readingTime: "7 min read",
    tags: ["GTM engineering", "B2B sales", "Automation"],
    keywords: [
      "what is a GTM engineer",
      "go to market engineer",
      "GTM engineering role",
      "GTM engineer skills",
      "revenue operations engineer",
    ],
    body: [
      { type: "p", text: "The title started appearing on job boards around 2024 and nobody could agree what it meant. Two years later the pattern is clear enough to describe honestly, so here is what the day actually looks like rather than what the job description claims." },
      { type: "h2", text: "The one-line definition" },
      { type: "p", text: "A GTM engineer builds and maintains the system that turns a market into a pipeline. Not the person who works the pipeline. The person who builds the thing the pipeline runs on." },
      { type: "p", text: "The distinction matters because it changes what good looks like. A sales development representative is measured on meetings booked. A GTM engineer is measured on whether the system still books meetings when a different person is sitting in the chair." },
      { type: "h2", text: "Where the time actually goes" },
      { type: "ul", items: [
        "Data. Sourcing, deduplicating, verifying and enriching records, then deciding what enrichment predicts anything at all. Most of it does not.",
        "Infrastructure. Domains, inbox warm-up, SPF, DKIM and DMARC. Unglamorous, and the single largest cause of campaigns that quietly stop working.",
        "Logic. Scoring rules, routing rules, lifecycle stage definitions, and the automation that fires when a state changes.",
        "Messaging systems. Not writing one great email, but building a structure where variants can be tested and the losers removed without breaking the sequence.",
        "Reporting. Building the view that shows where volume is lost between send and meeting held, then acting on it weekly.",
      ]},
      { type: "h2", text: "Why the engineering half is not optional" },
      { type: "p", text: "You can run a modern GTM stack without writing code, and plenty of people do. But the moment you need two tools to talk to each other in a way neither vendor anticipated, or you need to classify ten thousand records against a definition no filter supports, the non-technical version of this role stops and the technical version keeps going." },
      { type: "p", text: "That is the entire premium. Not that a GTM engineer writes production software, but that nothing in the stack is a black box to them." },
      { type: "h2", text: "The two numbers that matter" },
      { type: "p", text: "Positive reply rate and meetings held. Everything else is diagnostic. Open rate is close to meaningless now that privacy proxies pre-fetch images. Click rate on a cold email usually measures curiosity rather than intent. If a metric cannot change a decision this week, it belongs in a diagnostic panel, not in the weekly report." },
      { type: "quote", text: "An outbound system that only one person can run is a liability, not an asset." },
      { type: "h2", text: "The part most teams get wrong" },
      { type: "p", text: "They hire for the tools. Clay experience, HubSpot experience, Instantly experience. The stack turns over roughly every twelve months, so tool fluency has a short half-life. What does not expire is systems thinking: the instinct to define the input, instrument the middle, and cut what does not convert. Hire for that and the tools take a fortnight." },
    ],
  },

  {
    slug: "outbound-system-healthcare-saas",
    title: "Six stages of an outbound system that actually books meetings",
    description:
      "A working breakdown of the outbound architecture I run for a healthcare AI product sold into US clinics, including the parts that are boring and the parts that break first.",
    date: "2026-04-09",
    readingTime: "9 min read",
    tags: ["Outbound", "Healthcare SaaS", "Deliverability"],
    keywords: [
      "B2B outbound system",
      "cold email healthcare SaaS",
      "outbound sequence architecture",
      "email deliverability B2B",
      "healthcare AI sales",
    ],
    body: [
      { type: "p", text: "Selling software into US clinics is a useful stress test for an outbound system. The buyers are clinically busy, permanently sold to, and correctly suspicious of anything touching patient records. If a motion works here, it works most places." },
      { type: "h2", text: "01. Define, until it is boring" },
      { type: "p", text: "Healthcare is not an ICP. Independent practices between three and fifteen providers, in specific specialties, where the person who signs is the clinic owner or the practice manager, is an ICP. Write it down until someone else could rebuild the list from the definition alone. Everything downstream gets cheaper the moment the definition gets narrower." },
      { type: "h2", text: "02. Source from more than one place" },
      { type: "p", text: "Sales Navigator gives the account and title layer. A data provider such as Apollo gives the contact layer. Records that do not agree across both get verified by hand or dropped. A clean list of four hundred beats a dirty list of four thousand, and it protects the sending domain, which is the only asset in this system you cannot buy back quickly." },
      { type: "h2", text: "03. Enrich and score" },
      { type: "p", text: "Add only the signals that predict a reply. Recent hiring, current systems in use, practice size, role tenure. Score against them and work the top of the queue. Enrichment that nobody scores against is just a slower spreadsheet." },
      { type: "h2", text: "04. Sequence, infrastructure first" },
      { type: "p", text: "This is where most campaigns die and almost nobody notices in time. Warm the domains. Rotate the inboxes. Publish SPF, DKIM and DMARC before the first send. Only then write copy." },
      { type: "p", text: "On the copy itself: short, one idea per email, one genuinely personal line that required someone to look at something real. A merge tag is not personalisation. Clinic operators can tell the difference instantly, and the ones who can are exactly the ones worth reaching." },
      { type: "h2", text: "05. Route, because a reply is a state change" },
      { type: "p", text: "Every positive reply should move a deal stage, create a task with an owner, and generate a calendar hold. If any part of that depends on a human remembering, it will fail on the week it matters most. Lifecycle stages, deal stages and required properties get defined once, in the CRM, and enforced there." },
      { type: "h2", text: "06. Measure and cut" },
      { type: "p", text: "Weekly. Positive reply rate and meetings held, split by segment and by message. Kill the bottom quartile of both, redeploy the volume into what is working, and resist the urge to fix a losing segment out of sentiment." },
      { type: "h2", text: "What breaks first" },
      { type: "ul", items: [
        "Deliverability, always. It degrades gradually and then all at once.",
        "List decay. Healthcare operations roles turn over fast, so a six month old list is a different list.",
        "CRM drift. Stages get added ad hoc until the funnel report means nothing.",
        "Message fatigue in a narrow ICP. When the total addressable list is small, the same sequence cannot run forever.",
      ]},
      { type: "p", text: "None of these are strategy problems. They are maintenance problems, which is exactly why the system needs an owner who thinks like an engineer." },
    ],
  },

  {
    slug: "rag-for-clinical-decision-support",
    title: "Why retrieval matters more than the model in clinical AI",
    description:
      "Notes from MS research building an Urdu-language retrieval pipeline for community health workers, and what it taught me about shipping AI features that will not embarrass you.",
    date: "2026-06-21",
    readingTime: "8 min read",
    tags: ["RAG", "Applied AI", "Healthcare"],
    keywords: [
      "retrieval augmented generation healthcare",
      "RAG clinical decision support",
      "Urdu NLP",
      "LLM evaluation",
      "grounded generation",
    ],
    body: [
      { type: "p", text: "My MS research builds a retrieval-augmented generation pipeline that answers clinical questions in Urdu for community health workers, grounded in national health guidelines. The domain is unforgiving in a way that has changed how I build every AI feature, including the commercial ones." },
      { type: "h2", text: "The problem with asking a model directly" },
      { type: "p", text: "A general purpose model will answer a clinical question in Urdu. It will answer it fluently, immediately, and with no way for the reader to check where the answer came from. In a domain where the reader is often the most qualified person in the room, unverifiable fluency is not a feature." },
      { type: "h2", text: "Retrieval is the safety mechanism" },
      { type: "p", text: "Grounding the answer in a retrieved passage from an actual guideline does two things. It constrains what the model can say, and it gives the reader a source to check. The second matters more than the first. An AI system that a professional can audit gets used. One that cannot be audited gets abandoned after the first surprising answer." },
      { type: "h2", text: "The cross-lingual gap is the hard part" },
      { type: "p", text: "Users type naturally in Urdu. Source guidance is not uniformly available in Urdu. That gap sits in the retrieval step, not the generation step, which means it is invisible if you only evaluate the final answer. Retrieval recall has to be measured on its own before any generation quality number means anything." },
      { type: "h2", text: "Evaluate the two halves separately" },
      { type: "ul", items: [
        "Retrieval: did the right passage make it into the context window at all?",
        "Faithfulness: is every claim in the answer actually supported by that passage?",
        "An answer that reads beautifully but is not supported is a failure, not a partial success.",
      ]},
      { type: "quote", text: "Retrieve first, cite always, evaluate the halves separately. Those three rules survive the move from a research setting to a revenue stack unchanged." },
      { type: "h2", text: "What carries over into commercial work" },
      { type: "p", text: "When I put an LLM into a go-to-market stack, whether it is classifying accounts against an ICP definition or drafting a personalisation line, the same discipline applies. The model reads a real source. The output cites what it read. Quality is measured on a held-out set rather than assumed from a good demo." },
      { type: "p", text: "That discipline is unglamorous and it is the entire difference between an AI feature that survives contact with users and one that gets switched off in month two." },
    ],
  },
];

export const getPost = (slug: string) => POSTS.find((p) => p.slug === slug);
```
---

## 9.4 Library & Hooks

### `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function absoluteUrl(path: string, base: string) {
  return new URL(path, base).toString();
}
```

### `src/lib/motion.ts`

```ts
import type { Variants } from "motion/react";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;

export const SPRING = {
  type: "spring" as const,
  stiffness: 260,
  damping: 30,
  mass: 0.8,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE_OUT } },
};

export const stagger = (delayChildren = 0.05, staggerChildren = 0.06): Variants => ({
  hidden: {},
  show: { transition: { delayChildren, staggerChildren } },
});

/** Line rising out of an overflow-hidden mask. */
export const maskLine: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 1.05, ease: EASE_OUT } },
};

export const reduced: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};
```

### `src/hooks/useReducedMotionSafe.ts`

```ts
"use client";

import { useEffect, useState } from "react";

/**
 * Returns true only after mount, so server and client markup match.
 * Every animated component in this project gates on this.
 */
export function useReducedMotionSafe() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
```

### `src/hooks/useMediaQuery.ts`

```ts
"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    setMatches(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
```

### `src/hooks/useScrolled.ts`

```ts
"use client";

import { useEffect, useState } from "react";

export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
```

### `src/lib/seo.ts`

The single metadata builder. Every page calls this. It guarantees a canonical URL, an OG
image, a Twitter card and a consistent title template, which removes the most common
source of SEO defects: a page that quietly ships with the layout's default metadata.

```ts
import type { Metadata } from "next";
import { SITE } from "@/content/site";

type BuildArgs = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: BuildArgs): Metadata {
  const url = new URL(path, SITE.url).toString();
  const ogImage = image ?? "/opengraph-image";

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type: type === "profile" ? "profile" : type,
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: SITE.socials.x || undefined,
    },
  };
}
```

### `src/lib/jsonld.ts`

Structured data is not decoration. It is how a search engine, and increasingly an AI
assistant, decides that this site and this person are the same entity. `sameAs` is the
highest-leverage field here, so keep `SITE.sameAs` populated with every canonical profile.

```ts
import { SITE } from "@/content/site";
import { CREDENTIALS } from "@/content/profile";

const abs = (path: string) => new URL(path, SITE.url).toString();

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE.url}/#person`,
  name: SITE.name,
  givenName: "Sawera",
  familyName: "Nadeem",
  jobTitle: "GTM Engineer",
  description: SITE.shortBio,
  url: SITE.url,
  image: abs("/images/sawera-hero.jpg"),
  email: `mailto:${SITE.email}`,
  telephone: SITE.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Faisalabad",
    addressCountry: "PK",
  },
  worksFor: {
    "@type": "Organization",
    name: "Techloset Solutions",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Agriculture Faisalabad",
  },
  knowsAbout: [
    "Go-to-market engineering",
    "B2B outbound systems",
    "Lead generation",
    "CRM architecture",
    "Email deliverability",
    "Retrieval-augmented generation",
    "Large language models",
    "Full-stack web development",
    "Curriculum design",
  ],
  knowsLanguage: ["English", "Urdu"],
  hasCredential: CREDENTIALS.filter((c) => c.type !== "honour").map((c) => ({
    "@type": "EducationalOccupationalCredential",
    name: c.name,
    credentialCategory: c.type,
    recognizedBy: { "@type": "Organization", name: c.issuer },
  })),
  sameAs: SITE.sameAs,
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: SITE.url,
  name: `${SITE.name}, ${SITE.role}`,
  description: SITE.description,
  inLanguage: "en",
  publisher: { "@id": `${SITE.url}/#person` },
};

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#service`,
  name: `${SITE.name}, GTM Engineering`,
  description:
    "Go-to-market engineering, outbound system builds, GTM audits, AI workflow engineering and technical training.",
  url: abs("/services"),
  provider: { "@id": `${SITE.url}/#person` },
  areaServed: ["US", "GB", "AE", "PK", "Worldwide"],
  availableLanguage: ["English", "Urdu"],
};

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}/about#profilepage`,
    mainEntity: { "@id": `${SITE.url}/#person` },
    url: abs("/about"),
  };
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: abs(t.path),
    })),
  };
}

export function articleSchema(args: {
  title: string;
  description: string;
  slug: string;
  date: string;
  updated?: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: args.title,
    description: args.description,
    datePublished: args.date,
    dateModified: args.updated ?? args.date,
    keywords: args.keywords.join(", "),
    inLanguage: "en",
    author: { "@id": `${SITE.url}/#person` },
    publisher: { "@id": `${SITE.url}/#person` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": abs(`/blog/${args.slug}`),
    },
  };
}

export function caseStudySchema(args: {
  title: string;
  description: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: args.title,
    description: args.description,
    url: abs(`/work/${args.slug}`),
    image: abs(args.image),
    creator: { "@id": `${SITE.url}/#person` },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function courseSchema(args: { name: string; description: string; provider: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: args.name,
    description: args.description,
    provider: { "@type": "Organization", name: args.provider },
    instructor: { "@id": `${SITE.url}/#person` },
  };
}
```

### `src/components/ui/JsonLd.tsx`

One tiny component so no page hand-rolls a script tag.

```tsx
export function JsonLd({ data }: { data: object | object[] }) {
  const payload = Array.isArray(data) ? data : [data];
  return (
    <>
      {payload.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          // JSON.stringify plus a closing-tag guard. All data here is
          // authored, never user input, but the guard costs nothing.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(d).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
```

### `src/lib/validation.ts`

```ts
import { z } from "zod";

export const PROJECT_TYPES = [
  "Outbound engine build",
  "GTM systems audit",
  "AI workflow engineering",
  "Training, workshop or talk",
  "Hiring or full-time role",
  "Something else",
] as const;

export const BUDGET_BANDS = [
  "Under 2k USD",
  "2k to 5k USD",
  "5k to 15k USD",
  "15k USD and up",
  "Not sure yet",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.email("Please enter a valid email address"),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectType: z.enum(PROJECT_TYPES),
  budget: z.enum(BUDGET_BANDS).optional(),
  message: z
    .string()
    .trim()
    .min(20, "A little more detail helps, at least 20 characters")
    .max(3000, "Please keep it under 3000 characters"),
  consent: z.literal(true, {
    message: "Please confirm you are happy to be contacted",
  }),
  // Anti-spam. Must stay empty. Hidden from humans and from screen readers.
  website: z.string().max(0).optional().or(z.literal("")),
  // Anti-spam. Client stamps mount time; a sub-3-second submit is a bot.
  startedAt: z.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
```

> **Zod version note.** `z.email()` is the Zod 4 form. If the project ends up on Zod 3,
> change it to `z.string().email(...)` and change `z.literal(true, { message })` to
> `z.literal(true, { errorMap: () => ({ message: "..." }) })`.

### `src/lib/rate-limit.ts`

```ts
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/**
 * Small in-memory sliding window. Good enough for a portfolio contact form
 * on a single serverless region. If the site ever needs stronger guarantees,
 * swap the Map for Upstash Redis behind the same function signature.
 */
export function rateLimit(key: string, limit = 5, windowMs = 60 * 60 * 1000) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }

  if (bucket.count >= limit) {
    return { ok: false, remaining: 0, retryAfter: bucket.resetAt - now };
  }

  bucket.count += 1;
  return { ok: true, remaining: limit - bucket.count };
}
```

### `src/lib/brevo.ts`

A direct call to the Brevo v3 REST API. No SDK, so no version drift and no cold-start cost.

```ts
const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";
const BREVO_CONTACTS = "https://api.brevo.com/v3/contacts";

type Address = { email: string; name?: string };

type SendArgs = {
  to: Address[];
  subject: string;
  htmlContent: string;
  textContent?: string;
  replyTo?: Address;
  tags?: string[];
};

function requireEnv(key: string) {
  const value = process.env[key];
  if (!value) throw new Error(`Missing environment variable: ${key}`);
  return value;
}

export async function sendEmail({
  to,
  subject,
  htmlContent,
  textContent,
  replyTo,
  tags,
}: SendArgs) {
  const apiKey = requireEnv("BREVO_API_KEY");

  const res = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify({
      sender: {
        email: requireEnv("BREVO_SENDER_EMAIL"),
        name: process.env.BREVO_SENDER_NAME ?? "Website",
      },
      to,
      subject,
      htmlContent,
      textContent,
      replyTo,
      tags,
    }),
    // Never let a hung provider hold a serverless function open.
    signal: AbortSignal.timeout(10_000),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`Brevo send failed, ${res.status}: ${detail.slice(0, 400)}`);
  }

  return res.json().catch(() => ({}));
}

/** Optional. Adds the sender to a Brevo list so enquiries build an audience. */
export async function upsertContact(email: string, name: string, company?: string) {
  const listId = process.env.BREVO_CONTACT_LIST_ID;
  if (!listId) return;

  await fetch(BREVO_CONTACTS, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": requireEnv("BREVO_API_KEY"),
    },
    body: JSON.stringify({
      email,
      attributes: { FIRSTNAME: name.split(" ")[0], COMPANY: company ?? "" },
      listIds: [Number(listId)],
      updateEnabled: true,
    }),
    signal: AbortSignal.timeout(8_000),
  }).catch(() => {
    // Contact sync is best-effort. It must never fail the enquiry.
  });
}
```

### `src/lib/email-templates.ts`

Two branded HTML emails. Inline styles only, because email clients strip everything else.

```ts
import { SITE } from "@/content/site";

const escape = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const shell = (inner: string) => `
<div style="margin:0;padding:32px 16px;background:#faf6f3;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid rgba(36,26,32,0.12);border-radius:14px;overflow:hidden;">
    <tr><td style="height:4px;background:#b33a63;"></td></tr>
    <tr><td style="padding:32px;">${inner}</td></tr>
    <tr><td style="padding:18px 32px;background:#f1e8e2;font-size:12px;color:#6e5c63;">
      Sent from <a href="${SITE.url}" style="color:#b33a63;text-decoration:none;">${SITE.url.replace(/^https?:\/\//, "")}</a>
    </td></tr>
  </table>
</div>`;

export function notificationEmail(data: {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  message: string;
}) {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:8px 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#6e5c63;width:120px;vertical-align:top;">${escape(label)}</td>
      <td style="padding:8px 0;font-size:15px;color:#241a20;">${escape(value)}</td>
    </tr>`;

  return shell(`
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#c79a5b;">New enquiry</p>
    <h1 style="margin:0 0 24px;font-size:26px;font-weight:400;color:#3d1e36;">${escape(data.name)} got in touch</h1>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", data.name)}
      ${row("Email", data.email)}
      ${data.company ? row("Company", data.company) : ""}
      ${row("Interest", data.projectType)}
      ${data.budget ? row("Budget", data.budget) : ""}
    </table>
    <div style="margin-top:24px;padding-top:20px;border-top:1px solid rgba(36,26,32,0.12);">
      <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#6e5c63;">Message</p>
      <p style="margin:0;font-size:15px;line-height:1.7;color:#241a20;white-space:pre-wrap;">${escape(data.message)}</p>
    </div>
    <p style="margin:28px 0 0;">
      <a href="mailto:${escape(data.email)}?subject=Re:%20your%20enquiry"
         style="display:inline-block;padding:12px 24px;background:#b33a63;color:#ffffff;border-radius:999px;text-decoration:none;font-size:14px;">
        Reply to ${escape(data.name.split(" ")[0])}
      </a>
    </p>
  `);
}

export function autoReplyEmail(name: string) {
  return shell(`
    <p style="margin:0 0 4px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#c79a5b;">Received</p>
    <h1 style="margin:0 0 20px;font-size:26px;font-weight:400;color:#3d1e36;">Thank you, ${escape(name.split(" ")[0])}</h1>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#241a20;">
      Your message has arrived and I have it in front of me. I reply to everything personally,
      usually within one working day.
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#241a20;">
      If it is urgent, replying directly to this email reaches me fastest.
    </p>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#241a20;">
      In the meantime, the six-stage breakdown of how I build outbound systems is here:
      <a href="${SITE.url}/gtm-engineering" style="color:#b33a63;">${SITE.url.replace(/^https?:\/\//, "")}/gtm-engineering</a>
    </p>
    <p style="margin:0;font-size:15px;line-height:1.7;color:#241a20;">
      Sawera Nadeem<br>
      <span style="color:#6e5c63;font-size:13px;">GTM Engineer, Faisalabad, Pakistan</span>
    </p>
  `);
}
```
---

## 9.5 UI Primitives

### `src/components/ui/Container.tsx`

```tsx
import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  bleed = false,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  bleed?: boolean;
  as?: React.ElementType;
}) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        bleed ? "max-w-[1440px]" : "max-w-[1240px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
```

### `src/components/ui/Rule.tsx`

```tsx
import { cn } from "@/lib/utils";

export function Rule({ className }: { className?: string }) {
  return <hr className={cn("h-px w-full border-0 bg-line", className)} />;
}
```

### `src/components/ui/VerticalLabel.tsx`

```tsx
import { cn } from "@/lib/utils";

export function VerticalLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span aria-hidden className={cn("vertical-label select-none", className)}>
      {children}
    </span>
  );
}
```

### `src/components/ui/Chip.tsx`

```tsx
import { cn } from "@/lib/utils";

const tones = {
  neutral: "border-line text-muted",
  garnet: "border-garnet/35 text-garnet bg-garnet/5",
  sage: "border-sage/40 text-sage bg-sage/5",
  gold: "border-gold/45 text-gold bg-gold/5",
} as const;

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-[0.12em]",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
```

### `src/components/ui/Button.tsx`

```tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "onPlum";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-garnet text-bone hover:bg-garnet-deep shadow-[0_10px_30px_-14px_var(--garnet)]",
  outline:
    "border border-line-strong text-ink hover:border-garnet hover:text-garnet",
  ghost: "text-ink hover:text-garnet",
  onPlum:
    "bg-on-plum text-plum hover:bg-blush",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-[0.9375rem]",
};

type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  external?: boolean;
  download?: boolean;
  "aria-label"?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
  external,
  download,
  ...rest
}: Props) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-pill font-medium",
    "transition-[background-color,color,border-color,transform] duration-300 ease-[var(--ease-out-expo)]",
    "active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          className={classes}
          data-cursor="link"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...(download ? { download: "" } : {})}
          {...rest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} data-cursor="link" {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      data-cursor="link"
      {...rest}
    >
      {children}
    </button>
  );
}
```

> **Why `Button` has no `"use client"` directive.** It is a plain component with no hooks,
> so it renders on the server when a server component imports it, and is pulled into the
> client bundle automatically when a client component imports it. The only rule to respect
> is that `onClick` may only be passed from a client component. In this build that happens
> in exactly one place, `app/error.tsx`, which is already a client component.

### `src/components/ui/Reveal.tsx`

The workhorse. Every block on the site is wrapped in this.

```tsx
"use client";

import { motion } from "motion/react";
import { fadeUp, reduced, stagger } from "@/lib/motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const noMotion = useReducedMotionSafe();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      variants={noMotion ? reduced : fadeUp}
      transition={{ delay: noMotion ? 0 : delay }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  className,
  delayChildren = 0.05,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
}) {
  const noMotion = useReducedMotionSafe();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={noMotion ? reduced : stagger(delayChildren)}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const noMotion = useReducedMotionSafe();
  return (
    <motion.div className={className} variants={noMotion ? reduced : fadeUp}>
      {children}
    </motion.div>
  );
}
```

### `src/components/ui/TextReveal.tsx`

Takes an explicit array of lines rather than trying to detect line breaks. This is both
more reliable and typographically better, because the line breaks become a design decision.

```tsx
"use client";

import { motion } from "motion/react";
import { maskLine } from "@/lib/motion";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { cn } from "@/lib/utils";

export function TextReveal({
  lines,
  className,
  lineClassName,
  as: Tag = "h1",
  delay = 0,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "p" | "div";
  delay?: number;
}) {
  const noMotion = useReducedMotionSafe();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={cn("block", lineClassName)}
            initial={noMotion ? { opacity: 0 } : "hidden"}
            animate={noMotion ? { opacity: 1 } : "show"}
            variants={noMotion ? undefined : maskLine}
            transition={
              noMotion
                ? { duration: 0.01 }
                : { delay: delay + i * 0.075 }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
```

### `src/components/ui/SectionHeading.tsx`

```tsx
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  align = "left",
  className,
  onPlum = false,
}: {
  index?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lede?: string;
  align?: "left" | "right";
  className?: string;
  onPlum?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "right" && "lg:items-end lg:text-right",
        className
      )}
    >
      <div className="flex items-baseline gap-4">
        {index && (
          <span
            aria-hidden
            className="type-display-m text-gold/45 leading-none tabular-nums"
          >
            {index}
          </span>
        )}
        {eyebrow && <span className="type-label">{eyebrow}</span>}
      </div>

      <h2 className={cn("type-display-l max-w-[16ch]", onPlum && "text-on-plum")}>
        {title}
      </h2>

      {lede && (
        <p className={cn("type-lead", align === "right" && "lg:ml-auto")}>
          {lede}
        </p>
      )}
    </Reveal>
  );
}
```

### `src/components/ui/Counter.tsx`

Hand-rolled with `requestAnimationFrame`, so it depends on no animation API surface that
could change between Motion versions.

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function Counter({
  value,
  prefix = "",
  suffix = "",
  duration = 1600,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);
  const noMotion = useReducedMotionSafe();

  useEffect(() => {
    if (noMotion) {
      setDisplay(value);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setDisplay(Math.round(eased * value));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, noMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
```

### `src/components/ui/Marquee.tsx`

```tsx
"use client";

import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function Marquee({
  items,
  speed = 42,
  className,
}: {
  items: readonly string[];
  speed?: number;
  className?: string;
}) {
  const noMotion = useReducedMotionSafe();
  const doubled = [...items, ...items];

  return (
    <div className={cn("mask-fade-x group relative overflow-hidden", className)}>
      <ul
        className={cn(
          "flex w-max items-center gap-12",
          !noMotion && "animate-[marquee_var(--marquee-duration)_linear_infinite]",
          "group-hover:[animation-play-state:paused]"
        )}
        style={{ "--marquee-duration": `${speed}s` } as React.CSSProperties}
      >
        {doubled.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= items.length}
            className="flex shrink-0 items-center gap-12"
          >
            <span className="font-display text-[clamp(1.1rem,2vw,1.6rem)] whitespace-nowrap text-ink/70">
              {item}
            </span>
            <span aria-hidden className="size-1.5 rounded-full bg-gold/60" />
          </li>
        ))}
      </ul>
    </div>
  );
}
```

The `@keyframes marquee` rule this depends on is already in `globals.css`, section 5.

### `src/components/ui/Magnetic.tsx`

```tsx
"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function Magnetic({
  children,
  strength = 0.28,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const noMotion = useReducedMotionSafe();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.5 });

  if (noMotion) return <div className={className}>{children}</div>;

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### `src/components/ui/SmartImage.tsx`

Keeps the layout intact when an asset has not been supplied yet.

```tsx
"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function SmartImage({
  className,
  wrapperClassName,
  alt,
  ...props
}: ImageProps & { wrapperClassName?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center border border-gold/35 bg-linen",
          wrapperClassName,
          className
        )}
        role="img"
        aria-label={alt}
      >
        <span className="type-label text-gold">Image pending</span>
      </div>
    );
  }

  return (
    <Image
      {...props}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
```

### `src/components/ui/Accordion.tsx`

Content stays in the DOM at all times so it remains crawlable, which matters because the
FAQ block also emits `FAQPage` structured data.

```tsx
"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                data-cursor="link"
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="type-title pr-4">{item.q}</span>
                <Plus
                  aria-hidden
                  className={cn(
                    "size-5 shrink-0 text-garnet transition-transform duration-500 ease-[var(--ease-out-expo)]",
                    isOpen && "rotate-45"
                  )}
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="grid transition-[grid-template-rows] duration-500 ease-[var(--ease-out-expo)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="prose-measure pb-7 text-muted">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
```

---

## 9.6 Visual Effects

### `src/components/visual/Grain.tsx`

The single most effective anti-template detail in the whole build. One fixed SVG noise
layer over the entire site.

```tsx
export function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-multiply dark:opacity-[0.05] dark:mix-blend-screen"
    >
      <svg className="size-full">
        <filter id="grain-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-noise)" />
      </svg>
    </div>
  );
}
```

### `src/components/visual/UnderlineSwash.tsx`

A hand-drawn-feeling underline that draws itself. Used under the accent phrase in the hero.

```tsx
"use client";

import { motion } from "motion/react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function UnderlineSwash({ delay = 0.9 }: { delay?: number }) {
  const noMotion = useReducedMotionSafe();

  return (
    <svg
      aria-hidden
      viewBox="0 0 300 18"
      preserveAspectRatio="none"
      className="absolute -bottom-1 left-0 h-[0.42em] w-full text-garnet"
    >
      <motion.path
        d="M2 12C48 5 96 3 148 6c46 3 92 7 150 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        initial={{ pathLength: noMotion ? 1 : 0, opacity: noMotion ? 1 : 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={
          noMotion
            ? { duration: 0.01 }
            : { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }
        }
      />
    </svg>
  );
}
```

### `src/components/visual/ParticleField.tsx`

tsParticles, configured as a slow drift of blush and gold petals rather than the default
connected-dots network, which is itself a template cliche. Mounted only on wide screens
with motion enabled.

```tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function ParticleField() {
  const [ready, setReady] = useState(false);
  const noMotion = useReducedMotionSafe();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const active = !noMotion && isDesktop;

  useEffect(() => {
    if (!active) return;
    let cancelled = false;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, [active]);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      detectRetina: true,
      interactivity: {
        events: { onHover: { enable: true, mode: "bubble" }, resize: { enable: true } },
        modes: { bubble: { distance: 140, size: 5, opacity: 0.65, duration: 2 } },
      },
      particles: {
        number: { value: 26, density: { enable: true, width: 1200, height: 800 } },
        color: { value: ["#E7CBC8", "#C79A5B", "#B33A63"] },
        shape: { type: "circle" },
        opacity: {
          value: { min: 0.14, max: 0.45 },
          animation: { enable: true, speed: 0.5, sync: false },
        },
        size: { value: { min: 1.5, max: 4 } },
        links: { enable: false },
        move: {
          enable: true,
          speed: { min: 0.15, max: 0.5 },
          direction: "top",
          straight: false,
          outModes: { default: "out" },
          random: true,
        },
      },
    }),
    []
  );

  if (!active || !ready) return null;

  return (
    <Particles
      id="petals"
      options={options}
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
}
```

Import it lazily so it never blocks the hero paint:

```tsx
// inside Hero.tsx
import dynamic from "next/dynamic";
const ParticleField = dynamic(() => import("@/components/visual/ParticleField"), {
  ssr: false,
});
```

### `src/components/visual/AuroraMesh.tsx`

Zero-dependency canvas. Three slow radial blobs behind the plum bands. Cheaper than a
video, warmer than a CSS gradient, and completely unique to this site.

```tsx
"use client";

import { useEffect, useRef } from "react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

type Blob = {
  x: number; y: number; r: number;
  dx: number; dy: number; color: string;
};

export function AuroraMesh({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const noMotion = useReducedMotionSafe();

  useEffect(() => {
    if (noMotion) return;
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const blobs: Blob[] = [
      { x: w * 0.22, y: h * 0.32, r: Math.max(w, h) * 0.42, dx: 0.16, dy: 0.11, color: "179, 58, 99" },
      { x: w * 0.78, y: h * 0.58, r: Math.max(w, h) * 0.38, dx: -0.13, dy: -0.09, color: "199, 154, 91" },
      { x: w * 0.52, y: h * 0.82, r: Math.max(w, h) * 0.34, dx: 0.09, dy: -0.14, color: "126, 144, 128" },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const b of blobs) {
        b.x += b.dx;
        b.y += b.dy;
        if (b.x < -b.r * 0.3 || b.x > w + b.r * 0.3) b.dx *= -1;
        if (b.y < -b.r * 0.3 || b.y > h + b.r * 0.3) b.dy *= -1;

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.color}, 0.22)`);
        g.addColorStop(0.55, `rgba(${b.color}, 0.07)`);
        g.addColorStop(1, `rgba(${b.color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [noMotion]);

  if (noMotion) return null;

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={className ?? "pointer-events-none absolute inset-0 size-full opacity-70"}
    />
  );
}
```
---

## 9.7 Layout & Chrome

### `src/components/layout/Providers.tsx`

```tsx
"use client";

import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--linen)",
            color: "var(--ink)",
            border: "1px solid var(--line)",
            borderRadius: "14px",
            fontFamily: "var(--font-sans)",
          },
        }}
      />
    </ThemeProvider>
  );
}
```

### `src/components/layout/SmoothScroll.tsx`

```tsx
"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const noMotion = useReducedMotionSafe();

  // Never hijack scrolling for someone who has asked the OS not to animate.
  if (noMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        duration: 1.15,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.6,
      }}
    >
      {children}
    </ReactLenis>
  );
}
```

### `src/components/layout/SkipLink.tsx`

```tsx
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only z-[100] focus:not-sr-only focus:fixed focus:left-5 focus:top-5 focus:rounded-pill focus:bg-garnet focus:px-5 focus:py-3 focus:text-sm focus:text-bone"
    >
      Skip to content
    </a>
  );
}
```

### `src/components/layout/ScrollProgress.tsx`

```tsx
"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-garnet"
    />
  );
}
```

### `src/components/layout/PageTransition.tsx`

Used from `app/template.tsx`, which React remounts on every navigation. That remount is
what makes the curtain fire without needing exit animations.

```tsx
"use client";

import { motion } from "motion/react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { EASE_IN_OUT } from "@/lib/motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const noMotion = useReducedMotionSafe();

  if (noMotion) return <>{children}</>;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] origin-top bg-garnet"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 0.75, ease: EASE_IN_OUT }}
        style={{ transformOrigin: "top" }}
      />
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
```

### `src/components/layout/Cursor.tsx`

Reads a `data-cursor` attribute from whatever is under the pointer, so any element can
change the cursor's behaviour without the cursor knowing anything about that element.

```tsx
"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type Mode = "default" | "link" | "view";

export function Cursor() {
  const noMotion = useReducedMotionSafe();
  const finePointer = useMediaQuery("(pointer: fine)");
  const active = !noMotion && finePointer;

  const [mode, setMode] = useState<Mode>("default");
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.55 });

  useEffect(() => {
    if (!active) return;

    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      const value = el?.getAttribute("data-cursor") as Mode | null;
      setMode(value ?? "default");
    };

    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [active, x, y]);

  if (!active) return null;

  const ringSize = mode === "view" ? 84 : mode === "link" ? 66 : 34;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[95] rounded-full bg-ink mix-blend-difference"
        style={{ x, y, width: 8, height: 8, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible && mode === "default" ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[94] flex items-center justify-center rounded-full border border-garnet"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: ringSize,
          height: ringSize,
          opacity: visible ? 1 : 0,
          backgroundColor:
            mode === "default" ? "rgba(179,58,99,0)" : "rgba(179,58,99,1)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
      >
        {mode === "view" && (
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-bone">
            View
          </span>
        )}
      </motion.div>
    </>
  );
}
```

### `src/components/layout/ThemeToggle.tsx`

```tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      data-cursor="link"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid size-10 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-garnet hover:text-garnet"
    >
      {mounted ? (
        isDark ? <Sun className="size-4" /> : <Moon className="size-4" />
      ) : (
        <span className="size-4" />
      )}
    </button>
  );
}
```

### `src/components/layout/Header.tsx`

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
              data-cursor="link"
              className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
            >
              <Menu className="size-4" />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
    </>
  );
}
```

### `src/components/layout/MobileNav.tsx`

```tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";
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
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
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
```

### `src/components/layout/Footer.tsx`

```tsx
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
```
---

## 9.8 Page Sections

### `src/components/sections/Hero.tsx`

The four-second pitch. Asymmetric split, kinetic headline, printed-frame portrait, petal
field behind. Note the portrait deliberately overflows the section's bottom rule.

```tsx
"use client";

import dynamic from "next/dynamic";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { SITE } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { TextReveal } from "@/components/ui/TextReveal";
import { Magnetic } from "@/components/ui/Magnetic";
import { SmartImage } from "@/components/ui/SmartImage";
import { VerticalLabel } from "@/components/ui/VerticalLabel";
import { UnderlineSwash } from "@/components/visual/UnderlineSwash";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const ParticleField = dynamic(
  () => import("@/components/visual/ParticleField"),
  { ssr: false }
);

export function Hero() {
  const noMotion = useReducedMotionSafe();

  return (
    <section className="relative overflow-hidden pb-24 pt-36 lg:pb-32 lg:pt-48">
      <ParticleField />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Left: the pitch */}
          <div className="lg:col-span-7">
            <motion.p
              className="type-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Faisalabad, Pakistan · Working with US teams
            </motion.p>

            <TextReveal
              as="h1"
              className="type-display-xl mt-6"
              delay={0.15}
              lines={[
                "I build the",
                "systems that fill",
                <span key="pipe" className="relative inline-block">
                  the pipeline.
                  <UnderlineSwash delay={1.1} />
                </span>,
              ]}
            />

            <motion.p
              className="type-lead mt-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: noMotion ? 0.01 : 0.8,
                delay: noMotion ? 0 : 0.75,
              }}
            >
              And I teach the people who run them. GTM Engineer, MS Computer
              Science researcher, and the person a founder calls when outbound
              needs to become a system instead of a habit.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: noMotion ? 0.01 : 0.8,
                delay: noMotion ? 0 : 0.9,
              }}
            >
              <Magnetic>
                <Button href="/gtm-engineering" size="lg">
                  See how I build it
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </Magnetic>
              <Button href="/work" variant="outline" size="lg">
                Case studies
              </Button>
            </motion.div>

            <motion.div
              className="mt-14 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: noMotion ? 0 : 1.2, duration: 0.8 }}
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-sage opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-sage" />
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
                {SITE.availability}
              </p>
            </motion.div>
          </div>

          {/* Right: the portrait, printed-frame treatment */}
          <motion.div
            className="relative lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: noMotion ? 0.01 : 1.1,
              delay: noMotion ? 0 : 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <VerticalLabel className="absolute -left-2 top-8 hidden lg:block">
              Sawera Nadeem · GTM Engineer
            </VerticalLabel>

            <div className="relative ml-auto w-full max-w-[420px]">
              {/* Offset colour block behind the photo */}
              <div
                aria-hidden
                className="absolute inset-0 translate-x-[18px] translate-y-[18px] rounded-xl2 bg-blush"
              />
              <SmartImage
                src="/images/sawera-hero.jpg"
                alt="Sawera Nadeem, GTM Engineer and web development trainer, Faisalabad"
                width={840}
                height={1120}
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="relative aspect-3/4 w-full rounded-xl2 object-cover"
                wrapperClassName="relative aspect-3/4 w-full rounded-xl2"
              />
            </div>

            <p className="mt-5 text-right font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
              Techloset Solutions · SynaCare
            </p>
          </motion.div>
        </div>

        <div className="mt-20 flex items-center gap-3 text-muted lg:mt-28">
          <ArrowDown className="size-4 animate-bounce" aria-hidden />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.18em]">
            Scroll
          </span>
        </div>
      </Container>
    </section>
  );
}
```

The `aspect-3/4` and other fraction utilities used here are declared in `globals.css`,
section 5, so they work regardless of how the Tailwind version resolves bare fractions.

### `src/components/sections/ProofStrip.tsx`

```tsx
import { HEADLINE_METRICS } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { Counter } from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function ProofStrip() {
  return (
    <section aria-label="Key results" className="border-y border-line bg-linen/50">
      <Container className="py-16 lg:py-20">
        <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {HEADLINE_METRICS.map((m) => (
            <RevealItem key={m.label}>
              <div className="flex flex-col gap-2">
                <span className="font-display text-[clamp(2.75rem,5vw,4rem)] leading-none text-garnet">
                  <Counter value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </span>
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-ink">
                  {m.label}
                </span>
                <p className="max-w-[28ch] text-sm text-muted">{m.note}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
```

### `src/components/sections/Pillars.tsx`

Sticky left rail, scrolling right column. Reliable across browsers, and it reads like a
magazine spread rather than three identical cards.

```tsx
import { PILLARS } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";

export function Pillars() {
  return (
    <section className="py-24 lg:py-36">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="type-label">Three disciplines, one job</p>
                <h2 className="type-display-l mt-5 max-w-[12ch]">
                  Most people pick one. I did not.
                </h2>
                <p className="type-lead mt-6">
                  The overlap is the whole point. Selling technical products is easier
                  when you have shipped them, and building AI into a revenue stack is
                  safer when you have had to evaluate it properly.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-col">
              {PILLARS.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06}>
                  <article className="group py-12 first:pt-0">
                    <div className="flex items-baseline gap-5">
                      <span
                        aria-hidden
                        className="font-display text-2xl leading-none text-gold/50 tabular-nums"
                      >
                        {p.index}
                      </span>
                      <h3 className="type-display-m">{p.title}</h3>
                    </div>

                    <p className="mt-5 font-display text-xl text-garnet">{p.lede}</p>
                    <p className="prose-measure mt-4 text-muted">{p.body}</p>

                    <p className="mt-5 border-l-2 border-gold/50 pl-4 text-sm text-ink">
                      {p.proof}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <li key={t}>
                          <Chip tone={p.id === "ai" ? "sage" : "neutral"}>{t}</Chip>
                        </li>
                      ))}
                    </ul>

                    {i < PILLARS.length - 1 && <Rule className="mt-12" />}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
```

### `src/components/sections/StackMarquee.tsx`

```tsx
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
```

### `src/components/sections/FeaturedWork.tsx`

```tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FEATURED_WORK } from "@/content/work";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Chip } from "@/components/ui/Chip";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title={<>Systems, not screenshots.</>}
          lede="Three engagements that show the range: a revenue engine, a research pipeline, and a curriculum that runs at national scale."
        />

        <div className="mt-16 flex flex-col gap-20 lg:mt-24 lg:gap-28">
          {FEATURED_WORK.map((c, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={c.slug}>
                <article
                  className={cn(
                    "grid items-center gap-8 lg:grid-cols-12",
                    flipped && "lg:[direction:rtl]"
                  )}
                >
                  <Link
                    href={`/work/${c.slug}`}
                    data-cursor="view"
                    className="group relative block overflow-hidden rounded-xl2 lg:col-span-7 lg:[direction:ltr]"
                    aria-label={`Read the case study: ${c.title}`}
                  >
                    <SmartImage
                      src={c.cover}
                      alt={c.title}
                      width={1600}
                      height={1000}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="aspect-16/10 w-full scale-[1.02] object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-100"
                      wrapperClassName="aspect-16/10 w-full rounded-xl2"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-xl2 ring-1 ring-inset ring-ink/8"
                    />
                  </Link>

                  <div className="lg:col-span-5 lg:[direction:ltr]">
                    <div className="flex flex-wrap items-center gap-3">
                      <Chip tone={c.category === "Applied AI" ? "sage" : "garnet"}>
                        {c.category}
                      </Chip>
                      <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                        {c.year}
                      </span>
                    </div>

                    <h3 className="type-display-m mt-5">
                      <Link
                        href={`/work/${c.slug}`}
                        className="link-underline"
                        data-cursor="link"
                      >
                        {c.title}
                      </Link>
                    </h3>

                    <p className="mt-4 text-muted">{c.kicker}</p>

                    <dl className="mt-7 grid grid-cols-2 gap-5 border-t border-line pt-6">
                      {c.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <dt className="sr-only">{m.label}</dt>
                          <dd className="font-display text-2xl text-garnet">
                            {m.value}
                          </dd>
                          <p className="mt-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </dl>

                    <Link
                      href={`/work/${c.slug}`}
                      data-cursor="link"
                      className="group/link mt-7 inline-flex items-center gap-2 text-sm text-ink"
                    >
                      <span className="link-underline">Read the case study</span>
                      <ArrowUpRight className="size-4 text-garnet transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-20 flex justify-center">
          <Button href="/work" variant="outline" size="lg">
            All case studies
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
```


### `src/components/sections/SpeakingStrip.tsx`

The inverted plum band, with the aurora canvas behind it.

```tsx
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
```

### `src/components/sections/PipelineDiagram.tsx`

The centrepiece of `/gtm-engineering`. A six-stage system rendered as a numbered rail with
a progress line that fills as you scroll past it.

```tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { PIPELINE_STAGES } from "@/content/stack";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

export function PipelineDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const noMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const raw = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const height = useTransform(raw, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <Container>
        <div className="relative">
          {/* Rail */}
          <div
            aria-hidden
            className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-line md:block"
          >
            <motion.div
              className="w-px bg-garnet"
              style={{ height: noMotion ? "100%" : height }}
            />
          </div>

          <ol className="flex flex-col gap-14">
            {PIPELINE_STAGES.map((stage) => (
              <li key={stage.step} className="relative md:pl-16">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 hidden size-10 place-items-center rounded-full border border-line bg-bone font-mono text-xs text-garnet md:grid"
                >
                  {stage.step}
                </span>

                <div className="flex flex-col gap-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-garnet md:hidden">
                      {stage.step}
                    </span>
                    <p className="type-label text-gold">{stage.name}</p>
                  </div>

                  <h3 className="type-title max-w-[22ch]">{stage.headline}</h3>
                  <p className="prose-measure text-muted">{stage.body}</p>

                  <ul className="mt-2 flex flex-wrap gap-2">
                    {stage.tools.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
```

### `src/components/sections/Timeline.tsx`

```tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { TIMELINE } from "@/content/profile";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/useReducedMotionSafe";

const KIND_LABEL: Record<string, string> = {
  work: "Industry",
  teaching: "Teaching",
  education: "Education",
  honour: "Recognition",
};

const KIND_COLOR: Record<string, string> = {
  work: "text-garnet",
  teaching: "text-gold",
  education: "text-sage",
  honour: "text-garnet",
};

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const noMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 65%"],
  });
  const raw = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });
  const height = useTransform(raw, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-20 lg:py-28">
      <Container>
        <div className="relative">
          <div
            aria-hidden
            className="absolute left-0 top-1 hidden h-[calc(100%-1rem)] w-px bg-line md:block"
          >
            <motion.div
              className="w-px bg-garnet"
              style={{ height: noMotion ? "100%" : height }}
            />
          </div>

          <ol className="flex flex-col gap-12 md:gap-16">
            {TIMELINE.map((item, i) => (
              <li key={`${item.title}-${i}`} className="relative md:pl-12">
                <span
                  aria-hidden
                  className="absolute left-[-4px] top-2 hidden size-2 rounded-full bg-garnet md:block"
                />
                <Reveal>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                      {item.period}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[0.6875rem] uppercase tracking-[0.16em]",
                        KIND_COLOR[item.kind]
                      )}
                    >
                      {KIND_LABEL[item.kind]}
                    </span>
                  </div>

                  <h3 className="type-title mt-3">{item.title}</h3>
                  <p className="mt-1 text-sm text-garnet">{item.org}</p>
                  <p className="prose-measure mt-3 text-muted">{item.body}</p>

                  {item.highlights && (
                    <ul className="mt-5 space-y-2 border-l border-line pl-5">
                      {item.highlights.map((h) => (
                        <li key={h} className="text-sm text-muted">
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
```

### `src/components/sections/CtaBand.tsx`

```tsx
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
```
### `src/components/sections/ContactForm.tsx`

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import {
  contactSchema,
  PROJECT_TYPES,
  BUDGET_BANDS,
  type ContactInput,
} from "@/lib/validation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const fieldBase =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-ink placeholder:text-muted/60 focus:border-garnet focus:outline-none focus:ring-0 transition-colors duration-300";

export function ContactForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const startedAt = useRef<number>(Date.now());

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: PROJECT_TYPES[0],
      message: "",
      website: "",
      consent: false as unknown as true,
    },
  });

  const onSubmit = async (values: ContactInput) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...values, startedAt: startedAt.current }),
      });

      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        toast.error(payload?.error ?? "Something went wrong. Please try again.");
        return;
      }

      reset();
      toast.success("Message sent. Check your inbox for a confirmation.");
      router.push("/thank-you");
    } catch {
      toast.error("Network error. Please email directly instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-8">
      {/* Honeypot. Hidden from humans and from assistive technology. */}
      <div aria-hidden className="absolute left-[-9999px] size-px overflow-hidden">
        <label htmlFor="website">Do not fill this in</label>
        <input id="website" tabIndex={-1} autoComplete="off" {...register("website")} />
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <Field label="Your name" error={errors.name?.message} htmlFor="name" required>
          <input
            id="name"
            autoComplete="name"
            placeholder="Jane Okafor"
            className={fieldBase}
            {...register("name")}
          />
        </Field>

        <Field label="Email" error={errors.email?.message} htmlFor="email" required>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className={fieldBase}
            {...register("email")}
          />
        </Field>

        <Field label="Company" error={errors.company?.message} htmlFor="company">
          <input
            id="company"
            autoComplete="organization"
            placeholder="Optional"
            className={fieldBase}
            {...register("company")}
          />
        </Field>

        <Field
          label="What is this about"
          error={errors.projectType?.message}
          htmlFor="projectType"
          required
        >
          <select id="projectType" className={cn(fieldBase, "cursor-pointer")} {...register("projectType")}>
            {PROJECT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Budget range" error={errors.budget?.message} htmlFor="budget" className="sm:col-span-2">
          <select id="budget" className={cn(fieldBase, "cursor-pointer")} {...register("budget")}>
            <option value="">Prefer not to say</option>
            {BUDGET_BANDS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell me what is going on" error={errors.message?.message} htmlFor="message" required>
        <textarea
          id="message"
          rows={6}
          placeholder="What is happening in the funnel right now, what you have already tried, and what a good outcome looks like."
          className={cn(fieldBase, "resize-none")}
          {...register("message")}
        />
      </Field>

      <div>
        <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm text-muted">
          <input
            id="consent"
            type="checkbox"
            className="mt-1 size-4 shrink-0 accent-[var(--garnet)]"
            {...register("consent")}
          />
          <span>
            I am happy for Sawera to store this message and reply by email. See the{" "}
            <a href="/privacy" className="link-underline text-ink">
              privacy notice
            </a>
            .
          </span>
        </label>
        {errors.consent?.message && (
          <p role="alert" className="mt-2 text-sm text-garnet">
            {errors.consent.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-5">
        <Button type="submit" size="lg" disabled={submitting}>
          {submitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending
            </>
          ) : (
            <>
              Send message
              <Send className="size-4" />
            </>
          )}
        </Button>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
          Replies within one working day
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label
        htmlFor={htmlFor}
        className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted"
      >
        {label}
        {required && <span className="ml-1 text-garnet">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-sm text-garnet">
          {error}
        </p>
      )}
    </div>
  );
}
```

### `src/app/api/contact/route.ts`

Server-side validation, three layers of spam defence, and a failure mode that never loses
the enquiry silently.

```ts
import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendEmail, upsertContact } from "@/lib/brevo";
import { notificationEmail, autoReplyEmail } from "@/lib/email-templates";
import { rateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function clientIp(req: Request) {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: Request) {
  try {
    const ip = clientIp(req);
    const limited = rateLimit(`contact:${ip}`, 5, 60 * 60 * 1000);
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many messages from this address. Please try again later." },
        { status: 429 }
      );
    }

    const json = await req.json().catch(() => null);
    if (!json) {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // Spam layer 1: honeypot must be empty.
    if (data.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Spam layer 2: humans take longer than three seconds to fill this in.
    if (data.startedAt && Date.now() - data.startedAt < 3000) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Spam layer 3: link-stuffed bodies.
    const linkCount = (data.message.match(/https?:\/\//g) ?? []).length;
    if (linkCount > 3) {
      return NextResponse.json(
        { error: "Please remove some links from your message." },
        { status: 400 }
      );
    }

    const to = [
      {
        email: process.env.CONTACT_TO_EMAIL!,
        name: process.env.CONTACT_TO_NAME ?? "Sawera Nadeem",
      },
    ];

    // The notification is the one that must not fail.
    await sendEmail({
      to,
      subject: `New enquiry: ${data.name}${data.company ? `, ${data.company}` : ""}`,
      htmlContent: notificationEmail(data),
      textContent: `${data.name} (${data.email})\nInterest: ${data.projectType}\n\n${data.message}`,
      replyTo: { email: data.email, name: data.name },
      tags: ["website-contact"],
    });

    // The auto-reply and contact sync are best-effort.
    await Promise.allSettled([
      sendEmail({
        to: [{ email: data.email, name: data.name }],
        subject: "Thanks for getting in touch",
        htmlContent: autoReplyEmail(data.name),
        textContent: `Hi ${data.name.split(" ")[0]}, your message has arrived. I reply personally, usually within one working day. Sawera Nadeem`,
        tags: ["website-autoreply"],
      }),
      upsertContact(data.email, data.name, data.company || undefined),
    ]);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json(
      { error: "Could not send right now. Please email saweranadeem8063@gmail.com directly." },
      { status: 500 }
    );
  }
}
```

---

## 9.9 App Router Files

### `src/app/layout.tsx`

```tsx
import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import { SITE } from "@/content/site";
import { personSchema, websiteSchema, professionalServiceSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { Providers } from "@/components/layout/Providers";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Cursor } from "@/components/layout/Cursor";
import { Grain } from "@/components/visual/Grain";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}, GTM Engineer and AI Systems Builder`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "Sawera Nadeem",
    "GTM engineer",
    "go to market engineer",
    "B2B lead generation",
    "outbound systems",
    "HubSpot CRM consultant",
    "Apollo.io",
    "Instantly cold email",
    "healthcare SaaS sales",
    "retrieval augmented generation",
    "MERN stack trainer Pakistan",
    "web development trainer Faisalabad",
  ],
  alternates: { canonical: SITE.url },
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name}, GTM Engineer and AI Systems Builder`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}, GTM Engineer`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF6F3" },
    { media: "(prefers-color-scheme: dark)", color: "#171115" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">
        <JsonLd data={[personSchema, websiteSchema, professionalServiceSchema]} />
        <Providers>
          <SkipLink />
          <ScrollProgress />
          <Cursor />
          <Grain />
          <SmoothScroll>
            <Header />
            <main id="main">{children}</main>
            <Footer />
          </SmoothScroll>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

> **Font axes note.** If `next/font/google` errors on the `axes` array, remove it. Fraunces
> still loads as a variable font; only the `SOFT` and `WONK` fine-tuning is lost, and the
> `font-variation-settings` declarations in `globals.css` degrade gracefully.

### `src/app/template.tsx`

```tsx
import { PageTransition } from "@/components/layout/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
```

### `src/app/page.tsx`

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Pillars } from "@/components/sections/Pillars";
import { StackMarquee } from "@/components/sections/StackMarquee";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { SpeakingStrip } from "@/components/sections/SpeakingStrip";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = buildMetadata({
  title: "Sawera Nadeem, GTM Engineer and AI Systems Builder",
  description:
    "GTM Engineer building B2B outbound systems, enrichment pipelines and CRM architecture for healthcare AI. MS Computer Science researcher and web development trainer in Faisalabad, Pakistan.",
  path: "/",
  keywords: [
    "Sawera Nadeem",
    "GTM engineer",
    "go to market engineer Pakistan",
    "B2B outbound systems",
    "lead generation specialist",
    "healthcare SaaS pipeline",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Pillars />
      <StackMarquee />
      <FeaturedWork />
      <SpeakingStrip />
      <CtaBand />
    </>
  );
}
```

### `src/app/sitemap.ts`

```ts
import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { CASE_STUDIES } from "@/content/work";
import { POSTS } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/gtm-engineering`, changeFrequency: "monthly", priority: 0.95 },
    { url: `${SITE.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/work`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/about`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE.url}/speaking`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/blog`, changeFrequency: "weekly", priority: 0.75 },
    { url: `${SITE.url}/resume`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.url}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/privacy`, changeFrequency: "yearly", priority: 0.2 },
  ].map((r) => ({ ...r, lastModified: now }));

  const workRoutes: MetadataRoute.Sitemap = CASE_STUDIES.map((c) => ({
    url: `${SITE.url}/work/${c.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes, ...postRoutes];
}
```

### `src/app/robots.ts`

```ts
import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
```

### `src/app/manifest.ts`

```ts
import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name}, GTM Engineer`,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6F3",
    theme_color: "#B33A63",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
```

### `src/app/opengraph-image.tsx`

Generated at build time with Satori. No headless browser, no design tool round trip, and it
stays on brand automatically.

```tsx
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Sawera Nadeem, GTM Engineer and AI Systems Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FAF6F3",
          padding: "72px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "10px",
            background: "#B33A63",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-140px",
            bottom: "-180px",
            width: "560px",
            height: "560px",
            borderRadius: "9999px",
            background: "#E7CBC8",
            opacity: 0.55,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6E5C63",
            }}
          >
            Sawera Nadeem
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 84,
              lineHeight: 1.02,
              color: "#241A20",
              maxWidth: "820px",
            }}
          >
            I build the systems that fill the pipeline.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            fontSize: 24,
            color: "#6E5C63",
          }}
        >
          <span style={{ color: "#B33A63" }}>GTM Engineer</span>
          <span>·</span>
          <span>Applied AI</span>
          <span>·</span>
          <span>Training</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
```

### `src/app/icon.tsx`

```tsx
import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#B33A63",
          color: "#FAF6F3",
          fontSize: 20,
          borderRadius: "8px",
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
```

### `src/app/not-found.tsx`

```tsx
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-32">
      <p className="type-label">Error 404</p>
      <h1 className="type-display-l mt-5 max-w-[16ch]">
        This page is not in the pipeline.
      </h1>
      <p className="type-lead mt-6">
        The link is broken or the page has moved. Everything else is one click away.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href="/" size="lg">
          Back to home
        </Button>
        <Button href="/work" variant="outline" size="lg">
          Browse case studies
        </Button>
      </div>
    </Container>
  );
}
```

### `src/app/error.tsx`

```tsx
"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-32">
      <p className="type-label">Something broke</p>
      <h1 className="type-display-l mt-5 max-w-[18ch]">
        That did not go to plan.
      </h1>
      <p className="type-lead mt-6">
        An unexpected error occurred. Try again, or email directly if it persists.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button onClick={reset} size="lg">
          Try again
        </Button>
        <Button href="/" variant="outline" size="lg">
          Back to home
        </Button>
      </div>
    </Container>
  );
}
```
### `src/components/ui/PageHeader.tsx`

Shared masthead for every inner page. Keeps the vertical rhythm identical site-wide.

```tsx
import { Container } from "./Container";
import { TextReveal } from "./TextReveal";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  titleLines,
  lede,
  meta,
  className,
}: {
  eyebrow: string;
  titleLines: React.ReactNode[];
  lede?: string;
  meta?: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <header className={cn("pb-16 pt-36 lg:pb-20 lg:pt-48", className)}>
      <Container>
        <p className="type-label">{eyebrow}</p>

        <TextReveal
          as="h1"
          className="type-display-l mt-6 max-w-[18ch]"
          lines={titleLines}
          delay={0.1}
        />

        {lede && (
          <Reveal delay={0.25}>
            <p className="type-lead mt-8">{lede}</p>
          </Reveal>
        )}

        {meta && (
          <Reveal delay={0.3}>
            <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    {m.label}
                  </dt>
                  <dd className="mt-2 text-ink">{m.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
```

### `src/app/gtm-engineering/page.tsx`

The pillar page. This is the main organic search asset, so it carries the deepest copy, the
`FAQPage` schema and the internal links out to every service.

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { Accordion } from "@/components/ui/Accordion";
import { PipelineDiagram } from "@/components/sections/PipelineDiagram";
import { CtaBand } from "@/components/sections/CtaBand";
import { TOOL_STACK } from "@/content/stack";
import { FAQS } from "@/content/services";

export const metadata: Metadata = buildMetadata({
  title: "GTM Engineering, the Six-Stage Outbound System I Build",
  description:
    "What GTM engineering is, how a B2B outbound system is architected stage by stage, and the tools behind each one. Written from live experience selling healthcare AI into US clinics.",
  path: "/gtm-engineering",
  keywords: [
    "GTM engineering",
    "what is a GTM engineer",
    "go to market engineer",
    "B2B outbound system",
    "outbound architecture",
    "email deliverability",
    "HubSpot pipeline architecture",
    "lead enrichment and scoring",
    "healthcare SaaS outbound",
  ],
});

const GTM_FAQS = [
  {
    q: "What is a GTM engineer?",
    a: "A GTM engineer builds and maintains the system that turns a market into a pipeline, rather than working the pipeline personally. The output is infrastructure: data sourcing, enrichment logic, scoring, sending infrastructure, CRM architecture and reporting. The test of a good one is whether the system still books meetings when a different person sits in the chair.",
  },
  {
    q: "How is that different from a sales development representative?",
    a: "An SDR is measured on meetings booked. A GTM engineer is measured on whether the machine that books them is documented, instrumented and transferable. Both matter, but they are different jobs and they fail in different ways.",
  },
  {
    q: "Do you need to write code to do this?",
    a: "Not for the first eighty percent. The premium appears at the edge cases: when two tools need to talk in a way neither vendor anticipated, or ten thousand records need classifying against a definition no filter supports. That is where a non-technical operator stops and an engineer keeps going.",
  },
  ...FAQS.slice(0, 3),
];

export default function GtmEngineeringPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "GTM Engineering", path: "/gtm-engineering" },
          ]),
          faqSchema(GTM_FAQS),
        ]}
      />

      <PageHeader
        eyebrow="The discipline"
        titleLines={["Pipeline is a system,", "not a personality."]}
        lede="Most outbound fails for infrastructure reasons, not creative ones. This is the six-stage architecture I build, in the order I build it, with the parts that break first called out honestly."
        meta={[
          { label: "Market", value: "US healthcare, B2B SaaS" },
          { label: "Channels", value: "Email, LinkedIn" },
          { label: "CRM", value: "HubSpot" },
          { label: "Typical build", value: "4 to 6 weeks" },
        ]}
      />

      <Container>
        <Reveal className="prose-measure space-y-6 border-t border-line pt-14 text-muted">
          <p>
            The title started appearing around 2024 and nobody could agree what it meant.
            The pattern is clear enough now to describe honestly: a GTM engineer builds the
            machine that turns a market into a pipeline. Not the person working the
            pipeline. The person who builds the thing the pipeline runs on.
          </p>
          <p>
            That distinction changes what good looks like. A sales development
            representative is measured on meetings booked. A GTM engineer is measured on
            whether the system still books meetings when somebody else is running it.
          </p>
          <p className="border-l-2 border-garnet pl-5 text-ink">
            I run this system today for SynaCare, an AI-first electronic health record sold
            into clinics and hospitals across the United States. It is one of the hardest
            cold markets there is, which makes it a useful place to test whether an
            architecture actually holds.
          </p>
        </Reveal>
      </Container>

      <PipelineDiagram />

      {/* Tooling, split honestly */}
      <section className="border-t border-line py-20 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="type-label">The stack</p>
                <h2 className="type-display-m mt-4 max-w-[14ch]">
                  Tools I run, and tools I build with.
                </h2>
                <p className="type-lead mt-5">
                  The stack turns over roughly every twelve months, so tool fluency has a
                  short half life. Systems thinking does not.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal>
                <p className="type-label text-garnet">Operated daily</p>
                <ul className="mt-5 divide-y divide-line border-y border-line">
                  {TOOL_STACK.operated.map((t) => (
                    <li key={t.name} className="flex flex-wrap items-baseline gap-x-4 py-4">
                      <span className="min-w-[11rem] font-display text-lg">{t.name}</span>
                      <span className="text-sm text-muted">{t.note}</span>
                      <span className="ml-auto font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                        {t.category}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <p className="type-label mt-12 text-sage">
                  The engineering layer I bring on top
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {TOOL_STACK.buildsWith.map((t) => (
                    <li key={t.name}>
                      <Chip tone="sage">{t.name}</Chip>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What breaks first */}
      <section className="bg-linen/50 py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">Maintenance, not strategy</p>
            <h2 className="type-display-m mt-4 max-w-[18ch]">What breaks first, and why</h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                t: "Deliverability",
                b: "Degrades gradually and then all at once. Domain reputation is the one asset in the system you cannot buy back quickly.",
              },
              {
                t: "List decay",
                b: "Healthcare operations roles turn over fast. A six month old list is a different list, not an older one.",
              },
              {
                t: "CRM drift",
                b: "Stages get added ad hoc until the funnel report stops meaning anything. Definitions have to be enforced, not agreed.",
              },
              {
                t: "Message fatigue",
                b: "When the addressable list is small, the same sequence cannot run forever. Rotation has to be planned in from day one.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 0.05}>
                <div className="h-full border-t border-line pt-6">
                  <h3 className="type-title">{item.t}</h3>
                  <p className="mt-3 text-sm text-muted">{item.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">Questions</p>
            <h2 className="type-display-m mt-4 mb-10 max-w-[16ch]">
              The things people actually ask
            </h2>
          </Reveal>
          <Accordion items={GTM_FAQS} />
        </Container>
      </section>

      <CtaBand
        title="Want this built for your team?"
        body="Send me what the funnel looks like today. I will come back with what I would fix first, in order."
        primaryLabel="Scope a build"
      />
    </>
  );
}
```

### `src/app/services/page.tsx`

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema, professionalServiceSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { SERVICES, PROCESS, FAQS } from "@/content/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Services, Outbound Builds, GTM Audits and AI Workflow Engineering",
  description:
    "Four ways to work together: a full outbound engine build, a GTM systems audit, AI workflow engineering, and technical training or speaking. Fixed fee, written scope, documented handover.",
  path: "/services",
  keywords: [
    "B2B lead generation services",
    "outbound system build",
    "GTM audit",
    "HubSpot CRM setup consultant",
    "cold email infrastructure setup",
    "AI automation consultant",
    "web development training Pakistan",
  ],
});

const accentText = {
  garnet: "text-garnet",
  sage: "text-sage",
  gold: "text-gold",
} as const;

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          professionalServiceSchema,
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          faqSchema(FAQS),
        ]}
      />

      <PageHeader
        eyebrow="How we can work together"
        titleLines={["Four engagements.", "One operating principle."]}
        lede="You should end up owning a system, not renting a person. Every engagement is fixed fee against a written scope, and every one finishes with documentation your team can run from."
      />

      <Container>
        <div className="border-t border-line">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <article className="grid gap-8 border-b border-line py-14 lg:grid-cols-12 lg:gap-8">
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span
                      aria-hidden
                      className={cn(
                        "font-display text-2xl tabular-nums",
                        accentText[s.accent]
                      )}
                    >
                      {s.index}
                    </span>
                    <h2 className="type-display-m">{s.title}</h2>
                  </div>
                  <p className="mt-5 text-muted">{s.summary}</p>
                  <p className="mt-5 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
                    {s.timeline}
                  </p>
                </div>

                <div className="lg:col-span-7 lg:col-start-6">
                  <p className="type-label">Who it is for</p>
                  <p className="mt-2 text-ink">{s.forWho}</p>

                  <p className="type-label mt-8">What you receive</p>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-3 text-sm text-muted">
                        <span
                          aria-hidden
                          className={cn("mt-2 size-1.5 shrink-0 rounded-full bg-current", accentText[s.accent])}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>

      <section className="py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">How it runs</p>
            <h2 className="type-display-m mt-4 max-w-[16ch]">
              Four steps, no surprises
            </h2>
          </Reveal>

          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <li className="border-t border-line pt-6">
                  <span className="font-display text-3xl text-gold/60 tabular-nums">
                    {p.step}
                  </span>
                  <h3 className="type-title mt-3">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted">{p.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-linen/50 py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="type-label">Before you write</p>
            <h2 className="type-display-m mt-4 mb-10 max-w-[16ch]">
              Common questions
            </h2>
          </Reveal>
          <Accordion items={FAQS} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
```

### `src/app/about/page.tsx`

```tsx
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
```

### `src/app/work/page.tsx`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Chip } from "@/components/ui/Chip";
import { CtaBand } from "@/components/sections/CtaBand";
import { CASE_STUDIES } from "@/content/work";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies, GTM Systems, Applied AI and Curriculum Design",
  description:
    "Five engagements in detail: an outbound engine for healthcare AI, an Urdu clinical retrieval pipeline, a national full-stack curriculum, a marketplace build and a counterfeit-detection model fix.",
  path: "/work",
  keywords: [
    "GTM case study",
    "B2B outbound case study",
    "healthcare AI sales case study",
    "RAG project",
    "full stack curriculum design",
  ],
});

export default function WorkPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Work", path: "/work" },
        ])}
      />

      <PageHeader
        eyebrow="Case studies"
        titleLines={["The work, with", "the numbers attached."]}
        lede="Five engagements across go-to-market, applied AI, product engineering and curriculum design. Each one includes what was actually hard about it."
      />

      <Container>
        <ul className="grid gap-x-8 gap-y-16 border-t border-line pt-14 md:grid-cols-2">
          {CASE_STUDIES.map((c, i) => (
            <Reveal key={c.slug} as="li" delay={(i % 2) * 0.06}>
              <article className="group flex h-full flex-col">
                <Link
                  href={`/work/${c.slug}`}
                  data-cursor="view"
                  className="relative block overflow-hidden rounded-xl2"
                  aria-label={`Read the case study: ${c.title}`}
                >
                  <SmartImage
                    src={c.cover}
                    alt={c.title}
                    width={1600}
                    height={1000}
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="aspect-16/10 w-full scale-[1.03] object-cover transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-100"
                    wrapperClassName="aspect-16/10 w-full rounded-xl2"
                  />
                </Link>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Chip tone={c.category === "Applied AI" ? "sage" : "garnet"}>
                    {c.category}
                  </Chip>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted">
                    {c.year}
                  </span>
                </div>

                <h2 className="type-title mt-4">
                  <Link href={`/work/${c.slug}`} className="link-underline" data-cursor="link">
                    {c.title}
                  </Link>
                </h2>

                <p className="mt-3 flex-1 text-sm text-muted">{c.kicker}</p>

                <Link
                  href={`/work/${c.slug}`}
                  data-cursor="link"
                  className="mt-5 inline-flex items-center gap-2 text-sm text-garnet"
                >
                  Read it
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>

      <CtaBand />
    </>
  );
}
```

### `src/app/work/[slug]/page.tsx`

Note the `await params`. In Next 16, route params are a Promise. Forgetting this is the
single most common upgrade error.

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, caseStudySchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Chip } from "@/components/ui/Chip";
import { CtaBand } from "@/components/sections/CtaBand";
import { CASE_STUDIES, getCaseStudy } from "@/content/work";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found" };

  return buildMetadata({
    title: study.title,
    description: study.summary.slice(0, 158),
    path: `/work/${study.slug}`,
    image: `/work/${study.slug}/opengraph-image`,
    keywords: [study.category, ...study.stack, "case study"],
  });
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const others = CASE_STUDIES.filter((c) => c.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          caseStudySchema({
            title: study.title,
            description: study.summary,
            slug: study.slug,
            image: study.cover,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Work", path: "/work" },
            { name: study.title, path: `/work/${study.slug}` },
          ]),
        ]}
      />

      <article>
        <header className="pb-14 pt-36 lg:pt-48">
          <Container>
            <Link
              href="/work"
              data-cursor="link"
              className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted hover:text-garnet"
            >
              <ArrowLeft className="size-3.5" />
              All case studies
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Chip tone={study.category === "Applied AI" ? "sage" : "garnet"}>
                {study.category}
              </Chip>
              <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                {study.year}
              </span>
            </div>

            <TextReveal
              as="h1"
              className="type-display-l mt-6 max-w-[20ch]"
              lines={[study.title]}
            />

            <Reveal delay={0.2}>
              <p className="type-lead mt-7">{study.kicker}</p>

              <dl className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="type-label">Organisation</dt>
                  <dd className="mt-2 text-ink">{study.org}</dd>
                </div>
                <div>
                  <dt className="type-label">Role</dt>
                  <dd className="mt-2 text-ink">{study.role}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="type-label">Stack</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {study.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </Container>
        </header>

        <Container bleed>
          <Reveal>
            <SmartImage
              src={study.cover}
              alt={study.title}
              width={2000}
              height={1250}
              priority
              sizes="100vw"
              className="aspect-16/10 w-full rounded-xl2 object-cover"
              wrapperClassName="aspect-16/10 w-full rounded-xl2"
            />
          </Reveal>
        </Container>

        {/* Metrics */}
        <Container className="py-16 lg:py-20">
          <Reveal>
            <dl className="grid gap-8 border-y border-line py-10 sm:grid-cols-2 lg:grid-cols-4">
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-display text-[clamp(2rem,3.5vw,3rem)] leading-none text-garnet">
                    {m.value}
                  </dd>
                  <dt className="mt-3 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                    {m.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>

        {/* Body */}
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="type-label">The situation</p>
                <p className="prose-measure mt-4 text-lg text-ink">{study.summary}</p>
              </Reveal>

              <Reveal className="mt-14">
                <p className="type-label">The problem</p>
                <p className="prose-measure mt-4 text-muted">{study.challenge}</p>
              </Reveal>

              <Reveal className="mt-14">
                <p className="type-label">What I did</p>
                <ol className="mt-6 flex flex-col gap-10">
                  {study.approach.map((a, i) => (
                    <li key={a.title} className="border-t border-line pt-6">
                      <span className="font-mono text-[0.625rem] uppercase tracking-[0.16em] text-gold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="type-title mt-3 max-w-[26ch]">{a.title}</h2>
                      <p className="prose-measure mt-3 text-muted">{a.body}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>

            <aside className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.1}>
                <div className="lg:sticky lg:top-32">
                  <p className="type-label">Outcome</p>
                  <ul className="mt-5 space-y-4 border-t border-line pt-5">
                    {study.outcome.map((o) => (
                      <li key={o} className="flex gap-3 text-sm text-muted">
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-garnet"
                        />
                        {o}
                      </li>
                    ))}
                  </ul>
                  {study.note && (
                    <p className="mt-6 border-l-2 border-gold/60 pl-4 text-xs text-muted">
                      {study.note}
                    </p>
                  )}
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>

        {/* Next */}
        <Container className="py-24">
          <Reveal>
            <p className="type-label">Keep reading</p>
            <ul className="mt-8 grid gap-8 border-t border-line pt-8 md:grid-cols-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`/work/${o.slug}`}
                    data-cursor="link"
                    className="group flex items-start justify-between gap-6"
                  >
                    <span>
                      <span className="type-label">{o.category}</span>
                      <span className="type-title mt-2 block max-w-[24ch]">{o.title}</span>
                    </span>
                    <ArrowUpRight className="mt-1 size-5 shrink-0 text-garnet transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </article>

      <CtaBand />
    </>
  );
}
```

### `src/app/work/[slug]/opengraph-image.tsx`

A per-case-study social card, so every shared link looks intentional.

```tsx
import { ImageResponse } from "next/og";
import { getCaseStudy, CASE_STUDIES } from "@/content/work";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Case study";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#3D1E36",
          color: "#F6ECE9",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C79A5B",
            }}
          >
            {study?.category ?? "Case study"}
          </div>
          <div style={{ marginTop: 26, fontSize: 68, lineHeight: 1.06, maxWidth: "900px" }}>
            {study?.title ?? "Case study"}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#C9ADBA",
          }}
        >
          <span>{study?.org ?? ""}</span>
          <span style={{ color: "#F6ECE9" }}>Sawera Nadeem</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
```

### `src/app/speaking/page.tsx`

```tsx
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
```

### `src/app/resume/page.tsx`

Two CVs, because she has two distinct markets. A commercial reader wants the GTM version.
A department chair wants the academic one. Making them choose is better than averaging them.

```tsx
import type { Metadata } from "next";
import { Download } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Timeline } from "@/components/sections/Timeline";
import { CtaBand } from "@/components/sections/CtaBand";
import { CREDENTIALS } from "@/content/profile";
import { TOOL_STACK } from "@/content/stack";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Resume and CV, Sawera Nadeem",
  description:
    "Full professional history, credentials and downloadable CVs. Commercial version for GTM and business development roles, academic version for faculty and research positions.",
  path: "/resume",
  keywords: [
    "Sawera Nadeem CV",
    "Sawera Nadeem resume",
    "GTM engineer resume",
    "MS Computer Science CV Pakistan",
  ],
});

const SKILL_GROUPS = [
  {
    group: "Go-to-market",
    items: [
      "B2B outbound architecture",
      "Lead generation and prospecting",
      "Enrichment and lead scoring",
      "Email deliverability",
      "CRM design and pipeline ops",
      "Sales funnel reporting",
      "Negotiation and deal closing",
      "Hiring and team leadership",
    ],
  },
  {
    group: "AI and research",
    items: [
      "Retrieval-augmented generation",
      "LLM evaluation",
      "Prompt engineering",
      "Agentic workflows",
      "Convolutional neural networks",
      "Image preprocessing pipelines",
    ],
  },
  {
    group: "Engineering",
    items: [
      "JavaScript, ES6+",
      "Python",
      "PHP",
      "C++ and Java",
      "React and Next.js",
      "Node.js and Express",
      "Laravel",
      "MySQL and MongoDB",
      "Git and GitHub",
    ],
  },
  {
    group: "Teaching",
    items: [
      "Curriculum design",
      "Live instruction and labs",
      "Assessment design",
      "Mentorship",
      "Public speaking",
    ],
  },
];

export default function ResumePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resume", path: "/resume" },
        ])}
      />

      <PageHeader
        eyebrow="Resume"
        titleLines={["Two versions,", "because there are", "two audiences."]}
        lede="The commercial CV leads with pipeline, revenue systems and the GTM stack. The academic CV leads with research, teaching load and curriculum design. Take whichever fits."
      />

      <Container>
        <Reveal className="grid gap-6 border-y border-line py-10 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div>
              <p className="type-label">For commercial roles</p>
              <h2 className="type-title mt-2">GTM and business development CV</h2>
              <p className="mt-2 text-sm text-muted">
                Outbound systems, pipeline metrics, CRM architecture, growth leadership.
              </p>
            </div>
            <Button href={SITE.cv.commercial} download className="self-start">
              Download PDF
              <Download className="size-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="type-label">For academic roles</p>
              <h2 className="type-title mt-2">Faculty and research CV</h2>
              <p className="mt-2 text-sm text-muted">
                Teaching record, invited talks, research projects, technical coursework.
              </p>
            </div>
            <Button
              href={SITE.cv.academic}
              download
              variant="outline"
              className="self-start"
            >
              Download PDF
              <Download className="size-4" />
            </Button>
          </div>
        </Reveal>
      </Container>

      <Timeline />

      <section className="border-t border-line py-20">
        <Container>
          <Reveal>
            <p className="type-label">Skills</p>
            <h2 className="type-display-m mt-4 max-w-[16ch]">What I actually use</h2>
          </Reveal>

          <div className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((g, i) => (
              <Reveal key={g.group} delay={i * 0.05}>
                <div className="border-t border-line pt-5">
                  <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-garnet">
                    {g.group}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((s) => (
                      <li key={s} className="text-sm text-muted">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <p className="type-label">Tools operated daily</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {TOOL_STACK.operated.map((t) => (
                <li key={t.name}>
                  <Chip tone="garnet">{t.name}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <p className="type-label">Credentials, certifications and recognition</p>
            <ul className="mt-5 grid gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-3">
              {CREDENTIALS.map((c) => (
                <li key={`${c.name}-${c.issuer}`}>
                  <span className="block text-ink">{c.name}</span>
                  <span className="font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                    {c.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Hiring, or just curious?"
        body="Either is fine. Send a note and I will reply personally."
        primaryLabel="Get in touch"
      />
    </>
  );
}
```

### `src/app/blog/page.tsx`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { CtaBand } from "@/components/sections/CtaBand";
import { POSTS } from "@/content/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Notes on GTM Engineering, Applied AI and Teaching",
  description:
    "Working notes on building B2B outbound systems, evaluating retrieval-augmented generation, and teaching developers at scale. Written from live projects, not from theory.",
  path: "/blog",
  keywords: [
    "GTM engineering blog",
    "B2B outbound writing",
    "RAG notes",
    "cold email deliverability guide",
  ],
});

export default function BlogPage() {
  const sorted = [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Notes", path: "/blog" },
        ])}
      />

      <PageHeader
        eyebrow="Notes"
        titleLines={["Working notes,", "not thought leadership."]}
        lede="Things I have had to figure out on live projects, written down while they are still fresh enough to be specific."
      />

      <Container>
        <ul className="divide-y divide-line border-y border-line">
          {sorted.map((post, i) => (
            <Reveal key={post.slug} as="li" delay={i * 0.04}>
              <Link
                href={`/blog/${post.slug}`}
                data-cursor="link"
                className="group grid gap-4 py-10 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-3">
                  <p className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                    {formatDate(post.date)}
                  </p>
                  <p className="mt-1 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
                    {post.readingTime}
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <h2 className="type-display-m max-w-[22ch] transition-colors duration-300 group-hover:text-garnet">
                    {post.title}
                  </h2>
                  <p className="prose-measure mt-4 text-muted">{post.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <li key={t}>
                        <Chip>{t}</Chip>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-1 lg:justify-self-end">
                  <ArrowUpRight className="size-6 text-garnet transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>

      <CtaBand />
    </>
  );
}
```

### `src/app/blog/[slug]/page.tsx`

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { Chip } from "@/components/ui/Chip";
import { CtaBand } from "@/components/sections/CtaBand";
import { POSTS, getPost, type Block } from "@/content/posts";
import { formatDate } from "@/lib/utils";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    keywords: post.keywords,
    publishedTime: post.date,
    modifiedTime: post.updated ?? post.date,
  });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="type-display-m mt-14 mb-5 max-w-[22ch]">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-muted">
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-garnet" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="my-10 border-l-2 border-garnet pl-6 font-display text-xl leading-snug text-ink"
        >
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p key={i} className="mb-5 text-muted">
          {block.text}
        </p>
      );
  }
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            date: post.date,
            updated: post.updated,
            keywords: post.keywords,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Notes", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article className="pt-36 lg:pt-48">
        <Container>
          <Link
            href="/blog"
            data-cursor="link"
            className="inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted hover:text-garnet"
          >
            <ArrowLeft className="size-3.5" />
            All notes
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <time
              dateTime={post.date}
              className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted"
            >
              {formatDate(post.date)}
            </time>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.16em] text-muted">
              {post.readingTime}
            </span>
          </div>

          <TextReveal
            as="h1"
            className="type-display-l mt-5 max-w-[20ch]"
            lines={[post.title]}
          />

          <Reveal delay={0.2}>
            <p className="type-lead mt-7">{post.description}</p>
            <ul className="mt-7 flex flex-wrap gap-2 border-b border-line pb-10">
              {post.tags.map((t) => (
                <li key={t}>
                  <Chip>{t}</Chip>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="prose-measure mt-14">{post.body.map(renderBlock)}</div>
          </Reveal>

          <Reveal className="mt-20 border-t border-line pt-10">
            <p className="type-label">More notes</p>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {more.map((m) => (
                <li key={m.slug}>
                  <Link
                    href={`/blog/${m.slug}`}
                    data-cursor="link"
                    className="type-title link-underline max-w-[26ch]"
                  >
                    {m.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </article>

      <CtaBand
        title="Building something like this?"
        body="If any of the above is a problem you are living with right now, I am happy to talk it through."
      />
    </>
  );
}
```

### `src/app/contact/page.tsx`

```tsx
import type { Metadata } from "next";
import { Mail, MapPin, Linkedin, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Contact Sawera Nadeem",
  description:
    "Start a conversation about an outbound engine build, a GTM audit, AI workflow engineering, a speaking invitation or a role. Replies within one working day.",
  path: "/contact",
  keywords: [
    "contact Sawera Nadeem",
    "hire a GTM engineer",
    "book a speaker Pakistan",
    "B2B lead generation consultant contact",
  ],
});

const CHANNELS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "sawera-nadeem", href: SITE.socials.linkedin },
  { icon: MapPin, label: "Based in", value: SITE.location },
  { icon: Clock, label: "Time zone", value: SITE.timezone },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <PageHeader
        eyebrow="Contact"
        titleLines={["Tell me what is", "actually happening."]}
        lede="The messier the description, the more useful the first call. I reply to everything personally, usually within one working day."
      />

      <Container className="pb-24">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-32">
                <p className="type-label">Direct channels</p>
                <ul className="mt-6 space-y-6 border-t border-line pt-6">
                  {CHANNELS.map((c) => {
                    const Icon = c.icon;
                    const content = (
                      <span className="flex items-start gap-4">
                        <Icon className="mt-0.5 size-4 shrink-0 text-garnet" aria-hidden />
                        <span>
                          <span className="block font-mono text-[0.625rem] uppercase tracking-[0.14em] text-muted">
                            {c.label}
                          </span>
                          <span className="mt-1 block text-ink">{c.value}</span>
                        </span>
                      </span>
                    );

                    return (
                      <li key={c.label}>
                        {c.href ? (
                          <a
                            href={c.href}
                            data-cursor="link"
                            className="group block"
                            {...(c.href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-10 rounded-card border border-line bg-linen/60 p-6">
                  <p className="type-label">Good to know</p>
                  <p className="mt-3 text-sm text-muted">
                    I hold overlapping hours with both US Eastern and Pacific time, so a
                    call in your morning is usually workable.
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </>
  );
}
```

### `src/app/thank-you/page.tsx`

```tsx
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
```

### `src/app/privacy/page.tsx`

```tsx
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SITE } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Notice",
  description:
    "What data this website collects, why, how long it is kept, and how to have it removed.",
  path: "/privacy",
});

const SECTIONS = [
  {
    h: "What this site collects",
    p: "Only what you type into the contact form: your name, email address, optional company name, the enquiry type and budget band you select, and your message. Nothing else is collected and there are no advertising trackers on this site.",
  },
  {
    h: "How the form works",
    p: "Submissions are validated on the server and delivered by Brevo, a transactional email provider. Two emails are generated: a notification to Sawera Nadeem and a confirmation to you. If a mailing list id is configured, your name and email may also be stored as a contact record so future updates can be sent. You can opt out of those at any time using the unsubscribe link.",
  },
  {
    h: "Analytics",
    p: "The site uses Vercel Analytics and Vercel Speed Insights, which measure page views and loading performance in aggregate. They do not use cookies and do not build a cross-site profile of you.",
  },
  {
    h: "How long data is kept",
    p: "Enquiry emails are retained in Sawera's mailbox for as long as the conversation is commercially relevant, and deleted on request. Contact records stored with Brevo are removed on request or on unsubscribe.",
  },
  {
    h: "Your rights",
    p: "You can ask for a copy of anything held about you, ask for it to be corrected, or ask for it to be deleted. Email the address below and it will be handled promptly.",
  },
  {
    h: "Security",
    p: "The site is served over HTTPS with strict transport security. API keys are held as server-side environment variables and are never exposed to the browser.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        titleLines={["Privacy notice"]}
        lede="Short, because the site collects very little."
      />

      <Container className="pb-24">
        <div className="prose-measure space-y-10 border-t border-line pt-12">
          {SECTIONS.map((s) => (
            <section key={s.h}>
              <h2 className="type-title">{s.h}</h2>
              <p className="mt-3 text-muted">{s.p}</p>
            </section>
          ))}

          <section>
            <h2 className="type-title">Contact</h2>
            <p className="mt-3 text-muted">
              For any privacy request, email{" "}
              <a href={`mailto:${SITE.email}`} className="link-underline text-ink">
                {SITE.email}
              </a>
              .
            </p>
          </section>

          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted">
            Last updated: replace with the deployment date
          </p>
        </div>
      </Container>
    </>
  );
}
```
---

# PART 10: SEO Implementation

## 10.1 Keyword map, one primary intent per route

Never target the same primary keyword from two pages. That is keyword cannibalisation and
it is the most common self-inflicted SEO wound on a portfolio site.

| Route | Primary keyword | Supporting keywords | Intent |
|---|---|---|---|
| `/` | Sawera Nadeem | GTM engineer, go to market engineer Pakistan | Brand and navigational |
| `/gtm-engineering` | GTM engineering | what is a GTM engineer, B2B outbound system, outbound architecture, email deliverability | Informational, the pillar |
| `/services` | B2B lead generation services | outbound system build, GTM audit, HubSpot CRM setup consultant | Commercial |
| `/work` | GTM case study | B2B outbound case study, healthcare AI sales | Evaluative |
| `/work/synacare-outbound-engine` | healthcare SaaS outbound case study | AI EHR sales, US clinic outbound | Evaluative |
| `/speaking` | web development trainer Pakistan | tech speaker Faisalabad, MERN stack workshop, university guest lecture | Commercial and local |
| `/about` | Sawera Nadeem biography | GTM engineer Faisalabad, MS Computer Science Pakistan | Brand |
| `/resume` | Sawera Nadeem CV | GTM engineer resume | Navigational |
| `/blog/what-is-a-gtm-engineer` | what is a GTM engineer | GTM engineer skills, GTM engineer role | Informational, high volume |
| `/blog/outbound-system-healthcare-saas` | B2B outbound system | cold email healthcare SaaS, outbound sequence architecture | Informational |
| `/blog/rag-for-clinical-decision-support` | RAG clinical decision support | retrieval augmented generation healthcare, Urdu NLP | Informational, niche authority |
| `/contact` | contact Sawera Nadeem | hire a GTM engineer | Transactional |

**On-page rules that follow from this table**

- Exactly one `<h1>` per page, containing or closely paraphrasing the primary keyword.
- The primary keyword appears in the `title`, the `description`, the `h1`, and inside the
  first 100 words of body copy. Nowhere else does it need to be forced.
- Every page links to at least two others. `/gtm-engineering` links to `/services`,
  `/work` and `/contact`. This keeps every route within three clicks of the home page.
- Titles stay under 60 characters where possible, descriptions between 140 and 158.

## 10.2 What is already implemented in the code above

| Item | Where | Status |
|---|---|---|
| `metadataBase` | `app/layout.tsx` | Set. Without it, OG image URLs stay relative and social previews break. |
| Title template | `app/layout.tsx` | `%s · Sawera Nadeem` |
| Per-route canonical | `lib/seo.ts` | Every page, via `alternates.canonical` |
| Static metadata for static pages | every route | Uses `export const metadata`, not `generateMetadata`, except where params are needed |
| `generateMetadata` with awaited params | `work/[slug]`, `blog/[slug]` | Correct for Next 16 |
| OG and Twitter cards | `lib/seo.ts` | `summary_large_image` on every route |
| Dynamic OG images | `app/opengraph-image.tsx`, `work/[slug]/opengraph-image.tsx` | Satori, no headless browser |
| `sitemap.xml` | `app/sitemap.ts` | Includes dynamic work and blog routes |
| `robots.txt` | `app/robots.ts` | Disallows `/api/` and `/thank-you` |
| Web manifest | `app/manifest.ts` | PWA icons and theme colour |
| `Person` schema with `sameAs` | `lib/jsonld.ts` | The highest-leverage entity signal |
| `WebSite`, `ProfessionalService` | `lib/jsonld.ts` | Site-wide, in the root layout |
| `BreadcrumbList` | every inner route | Feeds breadcrumb rich results |
| `BlogPosting` | `blog/[slug]` | With `datePublished` and `dateModified` |
| `FAQPage` | `/gtm-engineering`, `/services` | FAQ content stays in the DOM when collapsed |
| `Course` | `/speaking` | For the NAVTTC programme |
| `llms.txt` | `public/llms.txt` | AI crawler navigation aid |
| Security headers | `next.config.ts` | HSTS, nosniff, referrer policy |
| Redirects for likely old URLs | `next.config.ts` | `/cv`, `/projects`, `/gtm` |

**A note on `llms.txt`.** Google has stated it does not use the file for Search, so treat
it as clean infrastructure that makes the site easier for AI systems to navigate rather
than as a ranking lever. It costs nothing to ship and nothing to maintain at this size.

## 10.3 Post-launch setup, in order

1. **Google Search Console.** Add the property, verify by DNS `TXT` record if the domain
   is available, otherwise paste the meta tag value into
   `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` and redeploy. Add a second verification method
   as a backup so the property does not drop if one fails.
2. **Submit the sitemap** at `https://yourdomain.com/sitemap.xml` inside Search Console.
3. **Request indexing** for `/`, `/gtm-engineering`, `/services` and `/speaking` using the
   URL Inspection tool.
4. **Bing Webmaster Tools.** Import directly from Search Console, which takes about a
   minute and also feeds DuckDuckGo.
5. **Rich Results Test.** Run `/`, `/gtm-engineering`, `/services` and one blog post
   through `search.google.com/test/rich-results`. Fix anything flagged before moving on.
6. **Schema Markup Validator** at `validator.schema.org` for the `Person` block
   specifically. This is the one that shapes entity understanding.
7. **PageSpeed Insights** on mobile for `/` and one case study. Target LCP under 2.5s,
   INP under 200ms, CLS under 0.1.
8. **Update `SITE.sameAs`** with every canonical profile that exists: LinkedIn, GitHub,
   Google Scholar or ORCID if the thesis gets published, and any university staff page.
   Each one strengthens entity resolution.
9. **Make the LinkedIn profile point back** to the domain in the website field. `sameAs`
   works best when the link is reciprocal.

## 10.4 Free tools worth using, and what each one is actually for

| Tool | Use it for |
|---|---|
| Google Search Console | Indexing status, query data, Core Web Vitals field data. The only source of real query data. |
| Bing Webmaster Tools | Second index, plus a free keyword research tool with real volumes. |
| PageSpeed Insights | Lab and field Core Web Vitals for a single URL. |
| Rich Results Test | Confirms which structured data types Google can actually use. |
| Schema Markup Validator | Full schema.org validation, broader than the Google test. |
| Screaming Frog, free tier | Crawls up to 500 URLs. Catches missing titles, broken links, redirect chains. |
| Google Rich Snippets preview / social debuggers | Confirms OG images render at 1200x630 on LinkedIn and X. |
| Ahrefs Webmaster Tools, free | Backlink profile and a site audit for a verified domain. |
| `@next/bundle-analyzer` | Find what is inflating the JavaScript bundle. Add it when the build feels heavy. |

## 10.5 Ongoing, the part most portfolios skip

- Publish one note per month. Three articles is a starting position, not a content strategy.
- Refresh the numbers on `/` and `/work/synacare-outbound-engine` every quarter and update
  `lastModified` implicitly by redeploying.
- Add each new talk to `src/content/speaking.ts` the week it happens.
- Every time an external profile is created, add it to `SITE.sameAs`.

---

# PART 11: Accessibility & Performance

## 11.1 Accessibility checklist

- [ ] Skip link is the first focusable element and becomes visible on focus
- [ ] Exactly one `<h1>` per route, heading levels never skip
- [ ] Landmarks present: `header`, `nav`, `main#main`, `footer`
- [ ] Every image has a meaningful `alt`, decorative visuals use `aria-hidden`
- [ ] `:focus-visible` ring is visible against both themes, verified manually
- [ ] The mobile nav traps focus, closes on `Escape`, and restores body scroll
- [ ] The accordion uses `aria-expanded` and `aria-controls`, and content stays in the DOM
- [ ] Form labels are real `<label>` elements bound with `htmlFor`
- [ ] Form errors use `role="alert"` and reference the field by proximity
- [ ] The honeypot is `aria-hidden` and `tabIndex={-1}`
- [ ] Colour contrast: body text on bone, garnet on bone, on-plum on plum, all pass AA
- [ ] Colour is never the only signal; icons and text labels accompany state
- [ ] Full keyboard pass: nav, mobile sheet, accordion, form, theme toggle
- [ ] `prefers-reduced-motion` disables Lenis, cursor, particles, aurora and all reveals
- [ ] The custom cursor never hides interactive affordances for keyboard users

## 11.2 Performance rules already applied

- `next/font` for both families, so no render-blocking font request and no layout shift
- Hero image uses `priority` and an explicit `sizes`
- Particles and aurora are client-only, mounted after paint, skipped on mobile
- No animation library work happens on the server
- AVIF and WebP enabled in `next.config.ts`
- Case study and blog routes are statically generated via `generateStaticParams`
- The contact route is the only dynamic server code in the whole build

## 11.3 Targets

| Metric | Target |
|---|---|
| LCP, mobile | under 2.5s |
| INP | under 200ms |
| CLS | under 0.1 |
| Lighthouse Performance, mobile | 90+ |
| Lighthouse Accessibility | 100 |
| Lighthouse SEO | 100 |

If LCP misses on mobile, the first thing to check is the hero image file size. A 3:4
portrait should be under 250KB as AVIF.

---

# PART 12: Deployment

## 12.1 Vercel

1. Push the repository to GitHub.
2. In Vercel, **Add New, Project**, import the repository. The framework is auto-detected.
3. Add every variable from `.env.example` under **Settings, Environment Variables**, for
   Production, Preview and Development.
4. Deploy. The first build takes roughly two minutes.
5. Under **Settings, Domains**, add the custom domain and follow the DNS instructions.
6. Set `NEXT_PUBLIC_SITE_URL` to the final `https://` domain and redeploy, so canonical
   URLs, the sitemap and OG image URLs all point at the real host.

```bash
npx vercel --prod
```

## 12.2 Deploy verification

```bash
curl -sI https://yourdomain.com | head -20
```

```bash
curl -s https://yourdomain.com/sitemap.xml | head -40
```

```bash
curl -s https://yourdomain.com/robots.txt
```

Then open `https://yourdomain.com/opengraph-image` in a browser and confirm a 1200x630 PNG
renders.

## 12.3 Email deliverability for the contact form

The form will appear to work even when the notification is silently going to spam. Verify
properly:

1. Submit a real test message from an outside address.
2. Confirm the notification arrives in the primary inbox, not spam.
3. Confirm the auto-reply arrives at the submitter address.
4. If either lands in spam, the Brevo domain authentication records are missing. Add the
   `DKIM`, `DMARC` and Brevo verification records in DNS and retest.
5. Check the **Statistics, Transactional** view in Brevo to confirm both sends registered.

---

# PART 13: Build QA Checklist

Work through this before handing the site over.

## Functional

- [ ] `npm run build` completes with no errors and no type errors
- [ ] `npm run typecheck` passes
- [ ] Every route in Part 2 loads, including all five case studies and all three posts
- [ ] A deliberately wrong slug renders the branded 404, not a framework error
- [ ] The contact form rejects an empty submission with visible field errors
- [ ] A valid submission delivers both emails and lands on `/thank-you`
- [ ] Six rapid submissions from one address hit the rate limit and return a clear message
- [ ] Theme toggle persists across a page reload
- [ ] Every internal link resolves, no 404s in a crawl

## Visual

- [ ] The grain overlay is visible but subtle in both themes
- [ ] Portrait images render, or the `Image pending` fallback holds the layout
- [ ] The plum bands look identical in light and dark mode
- [ ] Garnet on bone and on-plum on plum both read comfortably
- [ ] No horizontal scrollbar at 320px, 375px, 768px, 1024px, 1440px, 1920px
- [ ] Long case study titles do not overflow their cards
- [ ] The header transitions cleanly from transparent to blurred at 80px

## Motion

- [ ] Lenis scrolling feels smooth and never fights a trackpad
- [ ] The page-transition curtain fires on every navigation and never sticks
- [ ] The custom cursor tracks accurately and does not appear on touch devices
- [ ] Counters run once and settle on the correct final values
- [ ] The marquee pauses on hover
- [ ] With `prefers-reduced-motion` forced on in DevTools: no Lenis, no cursor, no
      particles, no aurora, and reveals resolve instantly

## SEO

- [ ] View source on every route and confirm a unique `<title>` and meta description
- [ ] Every route has a `<link rel="canonical">` pointing at the absolute HTTPS URL
- [ ] JSON-LD is present and parses. Paste each block into `validator.schema.org`
- [ ] `/sitemap.xml` lists every public route and no private ones
- [ ] `/robots.txt` disallows `/api/` and `/thank-you`
- [ ] `/thank-you` carries `noindex`
- [ ] OG images render for `/` and for a case study

## Accessibility

- [ ] Full keyboard pass with no mouse, on both desktop and mobile viewports
- [ ] Lighthouse Accessibility scores 100
- [ ] Screen reader announces the page title and heading structure sensibly

---

# PART 14: Troubleshooting

| Symptom | Cause | Fix |
|---|---|---|
| `Module not found: lenis/react` | Older Lenis, or the package failed to install | `npm i lenis@1.3.26`. The React entry point ships inside the main package from 1.1 onward. |
| Build fails on `axes: ["SOFT","WONK","opsz"]` | The Google Fonts axis list changed | Remove the `axes` array. Fraunces still loads variable. |
| Tailwind classes like `bg-bone` do nothing | The `@theme inline` block is missing or malformed | Confirm `globals.css` has `@import "tailwindcss";` on line 1 and the `@theme inline` block below the `:root` and `.dark` blocks. |
| Dark mode does not switch | The `@custom-variant dark` line is missing | Add `@custom-variant dark (&:where(.dark, .dark *));` directly after the Tailwind import. |
| Hydration mismatch warning on load | `next-themes` writing the class before hydration | Confirm `suppressHydrationWarning` is on the `<html>` element. |
| `params.slug` is undefined | Next 16 made params a Promise | `const { slug } = await params;` in both the page and `generateMetadata`. |
| Contact form returns 500 | A missing environment variable | Check the server log. `requireEnv` names the exact variable. |
| Emails send but land in spam | Brevo domain not authenticated | Add the `DKIM`, `DMARC` and verification DNS records in the Brevo Domains tab. |
| OG image is blank on LinkedIn | `metadataBase` not set, or a relative image URL | Confirm `metadataBase: new URL(SITE.url)` in the root layout and that `NEXT_PUBLIC_SITE_URL` is the production domain. |
| Particles never appear | Working as designed on mobile or under reduced motion | Test on a desktop viewport with motion enabled. |
| `next build` fails mentioning webpack | Next 16 defaults to Turbopack and rejects a webpack config | Remove any `webpack` key from `next.config.ts`, or build with `next build --webpack`. |
| Scroll feels doubled or jumpy | `scroll-behavior: smooth` fighting Lenis | Confirm `html { scroll-behavior: auto; }` in the base layer. |

---

# PART 15: What To Do After Launch

**Immediately**

1. Replace every placeholder image with the real photography. The hero portrait is the
   single highest-impact asset on the site.
2. Export both CVs to PDF and drop them into `public/cv/`.
3. Fill in `SITE.socials.github` and any other profile, and mirror them into `SITE.sameAs`.
4. Set the real domain in `NEXT_PUBLIC_SITE_URL` and redeploy.
5. Update the `Last updated` line on `/privacy`.

**First month**

6. Complete every step in Part 10.3.
7. Add a real testimonial section once two clients or institutions have given a quote.
   A `Review` or `Testimonial` block is the strongest trust signal a portfolio can add.
8. Add a booking link, Cal.com or Calendly, next to the contact form.

**Ongoing**

9. One note per month, drawn from something actually being worked on.
10. Update the metrics on the home page and the SynaCare case study every quarter.
11. Add each new speaking engagement to `src/content/speaking.ts`.

---

# Appendix A: Copy Voice Guide

For anyone extending the content later.

**Voice:** first person, specific, quietly confident. She has done the work and does not
need to raise her voice about it.

**Do**

- Lead with the concrete. "Between 100 and 300 qualified leads" beats "significant results".
- Name the constraint. "US healthcare is one of the hardest B2B markets to reach cold."
- Admit the boring parts. "Deliverability degrades gradually and then all at once."
- Use the mono typeface for anything numeric or technical. It carries the engineering signal.

**Do not**

- Use em dashes. Comma, colon or a short hyphen instead.
- Write "passionate", "results-driven", "leverage", "synergy", "innovative solutions".
- Open a page with "Hi, I'm Sawera". The whole design is doing that work already.
- Claim tools or certifications the CVs do not evidence. See Part 1.5.
- Use emoji anywhere in the interface.

**Sentence rhythm.** Alternate a long sentence with a short one. The short one is what the
reader remembers.

---

# Appendix B: Section Order On The Home Page, And Why

| Order | Section | Job |
|---|---|---|
| 1 | Hero | State the position in four seconds. Portrait establishes it is a real person. |
| 2 | Proof strip | Numbers, immediately, before any claim can be doubted. |
| 3 | Pillars | Explain the unusual combination, which is the actual differentiator. |
| 4 | Stack marquee | Visual breather, plus a keyword-rich strip of real tools. |
| 5 | Featured work | Evidence. Three cases covering all three pillars. |
| 6 | Speaking strip | Third-party validation. Three institutions gave her a shield. |
| 7 | CTA band | One clear next action, after the case has been made. |

The order is: claim, proof, explanation, evidence, validation, action. Do not reorder it
without a reason. Most portfolios put the story before the proof and lose the reader in
the gap.
