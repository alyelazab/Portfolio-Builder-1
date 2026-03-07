// All hardcoded text content lives here for easy editing.

export const siteConfig = {
  name: "Aly Elazab",
  title: "Aly Elazab | Senior AI Product Manager",
  description: "I build products that people actually use.",
  email: "alyelazab.1@gmail.com",
  linkedin: "https://linkedin.com/in/aly-elazab-23858716b",
  github: "https://github.com/alyelazab",
  location: "Abu Dhabi, UAE",
};

export const navLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Beyond Work", id: "beyond" },
];

export const heroData = {
  badge: "Based between Cairo & Abu Dhabi",
  headline: "I build products that people ",
  headlineAccent: "actually",
  headlineEnd: " use.",
  subtitle:
    "Senior AI Product Manager who turns complex technology into simple, intuitive experiences people love.",
  ctaPrimary: "View My Work",
  ctaSecondary: "Get In Touch",
};

export const aboutData = {
  paragraphs: [
    "Hi, I'm Aly. I'm a Senior AI Product Manager currently based in Abu Dhabi, originally from Egypt. I specialize in taking complex technical capabilities and translating them into products that people actually want to use.",
    "When I'm not writing specs or talking to users, I'm usually building my own side projects like MyMasareef or hacking together AI pipelines. I believe the best PMs are the ones who aren't afraid to get their hands dirty.",
  ],
  metrics: [
    { label: "ARPU Growth", value: "175%", color: "bg-aly-violet" },
    { label: "MAU & Power User Increase", value: "20%", color: "bg-aly-coral" },
    { label: "AI Insights Shipped", value: "Live", color: "bg-aly-teal" },
    { label: "Cups of Coffee", value: "\u221E", color: "bg-aly-violet" },
  ],
};

export const projectsData = [
  {
    title: "MyMasareef",
    description:
      "Free AI-powered spending analysis tool for CIB Egypt bank customers. Upload a bank CSV, get a categorized spending report in seconds. Financial data never leaves the browser.",
    tag: "Live Product",
    tagColor: "text-aly-teal bg-aly-teal/10",
    tech: ["React", "TypeScript", "Tailwind", "Supabase", "Express", "Gemini 2.5 Flash", "Claude Code", "Recharts", "Framer Motion"],
    link: "https://mymasareef.com",
    image: "mymasareef-demo",
    caseStudyKey: "mymasareef" as const,
  },
  {
    title: "Call Transcript Analyzer",
    description:
      "Multi-stage AI pipeline that extracts structured product feedback from hundreds of sales call transcripts. Turns buried feature requests and complaints into organized, actionable reports.",
    tag: "Internal Tool",
    tagColor: "text-aly-coral bg-aly-coral/10",
    tech: ["Claude Code", "Claude API", "Confluence"],
    link: "https://github.com/alyelazab/transcript-analyzer",
    image: "transcript-demo",
    caseStudyKey: "transcript" as const,
  },
];

export const processSteps = [
  {
    emoji: "\uD83D\uDD0D",
    title: "Discover",
    desc: "Talk to users. Understand the real problem before jumping to solutions.",
  },
  {
    emoji: "\u26A1",
    title: "Prototype Fast",
    desc: "Build rough, test early. Validate hypotheses with minimum viable effort.",
  },
  {
    emoji: "\uD83D\uDE80",
    title: "Ship & Measure",
    desc: "Get it in production. Set up analytics. See what people actually do.",
  },
  {
    emoji: "\uD83D\uDD04",
    title: "Iterate",
    desc: "Use the data. Refine the experience. Make it slightly better every day.",
  },
];

export const experienceRoles = [
  {
    year: "2025",
    role: "Senior AI Product Manager",
    company: "Luciq.ai",
    impact:
      "Overhauled the alerting system from a legacy cron-based framework to a continuous evaluation engine, significantly improving detection accuracy. Redesigned the alert experience end-to-end, from payload to landing page.",
  },
  {
    year: "2024",
    role: "Product Manager",
    company: "Luciq.ai",
    impact:
      "Launched Business Impact Dashboard connecting app quality metrics to business outcomes. Shipped AI-powered release insights that eliminated manual navigation.",
  },
  {
    year: "2023",
    role: "APM, Growth",
    company: "Luciq.ai",
    impact:
      "Redesigned pricing model driving 175% ARPU growth. Converted self-serve users into a profitable revenue motion.",
  },
  {
    year: "2021 - 2023",
    role: "Sales Engineer",
    company: "Luciq.ai (formerly Instabug)",
    impact:
      "100+ tailored demos and enterprise POCs across the sales cycle.",
  },
  {
    year: "2020",
    role: "Full-Stack Developer",
    company: "Itlize Global",
    impact:
      "Built full-stack web applications as a software developer.",
  },
];

export const speakingTalks = [
  { title: "Product Talk 1", event: "Tech Conference '24" },
  { title: "Product Talk 2", event: "Tech Conference '24" },
  { title: "Product Talk 3", event: "Tech Conference '24" },
];

export const beyondWorkCards = [
  {
    emoji: "\uD83C\uDFD0",
    title: "Volleyball",
    desc: "Professional volleyball player, spiking on and off the court.",
  },
  {
    emoji: "\uD83C\uDF0D",
    title: "Egypt \u2192 Abu Dhabi",
    desc: "Native Arabic speaker, blending cultures and perspectives.",
  },
  {
    emoji: "\uD83C\uDF30",
    title: "Ohio State Grad 🇺🇸",
    desc: "B.S. Information Systems from a top-100 US university. Dean's List, 3.53 GPA.",
  },
  {
    emoji: "\uD83D\uDEE0\uFE0F",
    title: "Weekend Builder",
    desc: "Always experimenting with the latest AI tools, agents, and frameworks.",
  },
];

export const contactData = {
  heading: "Let's build something",
  subheading:
    "Whether you're looking to build a new product, or just want to chat about AI and SaaS, I'm always open to connecting.",
  emailLabel: "Email",
  linkedinLabel: "LinkedIn",
  locationLabel: "Location",
};

export const footerText = {
  credit: "Built by Aly",
  tagline: "Made with code, coffee, and Claude",
};

// Case study content for the expanded project view
export const myMasareefCaseStudy = {
  story: {
    hook: "Egyptian banks don't categorize your spending. No charts, no breakdowns, nothing.",
    detail:
      "When I opened my CIB bank statement to try doing it myself, the CSV was full of entries like `Kashier*Zooba October` and `GEIDEA*TALABAT-07A EGY`. Payment processors mask the actual merchant name behind cryptic codes, location suffixes, and terminal IDs. So I built MyMasareef to solve both problems: classify the merchants and give you the spending breakdown your bank won't.",
  },
  steps: [
    "Pattern matching against 90+ known Egyptian merchants, with normalization that strips processor prefixes, location suffixes, and terminal codes",
    "Gemini Flash for anything unrecognized, prompted with Egyptian market context",
    "Manual user override as a last resort. Every classification gets saved to a shared merchant dictionary that improves over time",
    "All financial processing happens in the browser. Transaction amounts, dates, and balances never touch the server. Only merchant name strings are sent to the AI",
  ],
  productDecisions: [
    "Email gate comes AFTER the user sees their report being built, not before. Show value first, then ask for identity",
    "Crowdsourced merchant dictionary means cost per report goes down over time while accuracy goes up",
    "Debit cards got their own experience with income, spending, transfers, and savings rate",
  ],
  buildTime: "4 days",
};

export const transcriptAnalyzerCaseStudy = {
  story: {
    hook: "Hundreds of sales calls per quarter, each full of buried product feedback. No systematic way to capture any of it.",
    detail:
      "The sales team would sometimes relay the loudest asks, but feature requests, complaints, and workarounds customers had invented were lost in transcripts. I built a Claude Code-powered pipeline to process them at scale and turn them into structured, actionable product intelligence.",
  },
  steps: [
    "Transcript ingestion from Clari Copilot exports",
    "Multi-pass feedback extraction, separating feature requests, bugs, complaints, and praise",
    "Categorization by product area and severity",
    "Cross-transcript deduplication to surface recurring themes",
    "Confluence-ready report generation with evidence trails back to source transcripts",
  ],
  productDecisions: [
    "Used CLAUDE.md as a context engineering layer, giving Claude Code persistent instructions about our product taxonomy, team vocabulary, and output format across the entire pipeline",
    "Multi-stage processing instead of single-pass. Extraction accuracy improved dramatically when each stage had a focused, narrow job",
    "Chose Confluence output over a dashboard because the team already lived in Confluence. The real unlock wasn't the AI, it was structuring the pipeline so each stage had a single, clear job",
  ],
  buildTime: "3 days",
};
