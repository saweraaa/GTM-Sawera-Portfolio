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
