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
