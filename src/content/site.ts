export const SITE = {
  name: "Sawera Nadeem",
  shortName: "Sawera",
  role: "GTM Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://saweranadeem.com",
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
