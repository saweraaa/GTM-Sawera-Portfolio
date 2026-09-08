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
