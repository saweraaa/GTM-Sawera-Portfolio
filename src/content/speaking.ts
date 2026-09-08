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
