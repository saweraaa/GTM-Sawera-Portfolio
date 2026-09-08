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
