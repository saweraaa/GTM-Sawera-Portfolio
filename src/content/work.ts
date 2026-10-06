export type CaseStudy = {
  slug: string;
  title: string;
  kicker: string;
  category: "Go-to-market" | "Applied AI" | "Curriculum" | "Product engineering" | "B2B • GTM";
  year: string;
  org: string;
  project?: string;
  role: string;
  summary: string;
  cover: string;
  featured: boolean;
  metrics: { value: string; label: string }[];
  challenge: string;
  overviewHeading?: string;
  challengeHeading?: string;
  approachHeading?: string;
  approach: { title: string; body: string }[];
  outcome: string[];
  outcomeHighlight?: string;
  owned?: { category: string; details: string }[];
  stack: string[];
  note?: string;
  ctaBody?: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "outbound-engine",
    title: "Building the outbound engine for an AI-first EHR",
    kicker: "From a blank CRM to a repeatable outbound motion for US healthcare.",
    category: "B2B • GTM",
    year: "2025–2026",
    org: "Techloset",
    project: "AI-first EHR",
    role: "Senior Manager, Business Development and Growth",
    overviewHeading: "Overview",
    summary:
      "AI-first electronic health record system. Selling it meant reaching people who are clinically busy, sold to constantly, and rightly sceptical of anything that touches patient data.\n\nAt Techloset, the product had a strong proposition but no repeatable outbound system around it.\n\nThere was no defined ICP, no structured prospect database, no CRM architecture and no documented follow-up motion.\n\nI built the system around it.",
    cover: "/images/work/healthcare.png",
    featured: true,
    metrics: [
      { value: "100–300", label: "ICP-matched prospects" },
      { value: "~20", label: "Discovery meetings" },
      { value: "~500", label: "US healthcare operators" },
      { value: "1", label: "Documented CRM pipeline" },
    ],
    challengeHeading: "The problem",
    challenge:
      "US healthcare is one of the harder B2B markets to approach cold. Clinic owners and practice managers are busy, heavily approached by vendors, and understandably cautious about products that interact with patient data.\n\nThe challenge wasn't simply finding healthcare leads.\n\nIt was identifying the right decision-makers, reaching them through relevant touchpoints, and creating a process the team could continue running consistently.\n\nThe goal was to turn a blank CRM into a repeatable pipeline.",
    approachHeading: "What I built",
    approach: [
      {
        title: "Narrowed the ICP until it was actionable",
        body: "Rather than targeting healthcare broadly, I narrowed the ICP around practice size, specialty, geography and decision-making authority.\n\nThe core buyer profiles were:\n• Clinic Owner\n• Practice Manager\n• Director of Operations\n\nEverything downstream became more focused once the definition was narrower.",
      },
      {
        title: "Built and verified the prospect database",
        body: "Sales Navigator provided the account and title layer. Apollo.io provided the contact layer.\n\nRecords that did not agree across both sources were manually verified or removed.\n\nThe priority was simple:\n\nProtect data quality and sending reputation before chasing volume.",
      },
      {
        title: "Connected LinkedIn and email into one motion",
        body: "Instead of treating LinkedIn and cold email as separate campaigns, both channels worked against the same target accounts.\n\nEmail handled structured outbound sequences and follow-ups through Instantly.\n\nLinkedIn handled connection requests and contextual messaging.\n\nThe objective was repeated, relevant exposure across channels — not simply more messages.",
      },
      {
        title: "Made HubSpot the single source of truth",
        body: "I structured the CRM around the actual sales process:\n\nLifecycle stages\nDeal stages\nRequired properties\nLead ownership\nFollow-up cadences\nNext-action tracking\n\nEvery meaningful prospect interaction had a defined state and next step, so interested prospects did not disappear inside an inbox, spreadsheet or LinkedIn conversation.",
      },
      {
        title: "Fed outbound with content and team building",
        body: "Outbound was only one part of the acquisition system.\n\nI also worked on company LinkedIn content, CEO personal-brand content, social strategy, and sales and marketing hiring.\n\nThis connected prospecting, content, CRM and team-building into a more repeatable sales operation.",
      },
    ],
    outcome: [
      "100–300 ICP-matched prospects sourced across the outbound motion",
      "Close to 20 discovery meetings booked with healthcare decision-makers",
      "A targeted network of roughly 500 relevant US healthcare operators built from zero",
      "A documented HubSpot pipeline the team could continue operating",
      "Sales and marketing hiring supported from job posting through candidate screening",
    ],
    outcomeHighlight:
      "The biggest outcome wasn't simply the lead count. It was leaving behind a repeatable pipeline system rather than a temporary outreach campaign.",
    owned: [
      {
        category: "Strategy",
        details: "ICP definition · outbound structure · channel strategy",
      },
      {
        category: "Execution",
        details: "Lead research · data verification · email · LinkedIn · content",
      },
      {
        category: "Systems",
        details: "HubSpot · pipeline architecture · follow-ups · documentation",
      },
      {
        category: "Team",
        details: "Hiring · candidate screening · sales & marketing support",
      },
    ],
    stack: [
      "LinkedIn Sales Navigator",
      "Apollo.io",
      "Instantly",
      "HubSpot",
      "Google Analytics",
      "Trello",
    ],
    ctaBody:
      "Tell me what is happening in the funnel right now. I'll tell you what I would fix first — whether or not we end up working together.",
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
    cover: "/images/work/healthcare-rag.png",
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
    cover: "/images/work/navttc.png",
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
    cover: "/images/work/gamexchange.png",
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
    cover: "/images/work/image-authentication.png",
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
