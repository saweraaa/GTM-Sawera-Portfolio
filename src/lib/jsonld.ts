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
