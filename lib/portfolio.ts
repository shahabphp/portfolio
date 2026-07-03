/**
 * Structured portfolio content.
 *
 * SOURCE OF TRUTH: content/portfolio-data.md
 * Every value here is derived from that file. Nothing is invented — no fake
 * companies, dates, or metrics. If a field is absent from the source, it is
 * absent here too.
 */

export type Capacity = {
  title: string;
  description: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Project = {
  index: string;
  title: string;
  kind: string;
  description: string;
  impact?: string;
  tags: string[];
};

export type Credential = {
  title: string;
  detail: string;
};

export const identity = {
  name: "Shahab Pakshekarestalkhi",
  roles: [
    "CTO",
    "Technical Product Manager",
    "Product Owner",
    "Full-Stack Developer",
    "Entrepreneur",
  ],
  location: "Tehran, Iran",
  availability: "Open to remote and international roles",
} as const;

/** The core thesis (docs/brand.md → Core Message) used as the hero headline. */
export const thesis = {
  headline: "Technology should solve business problems.",
  lead: "Senior technical leader working across product management, full-stack development, SEO, system architecture, and startup building — focused on scalable digital products with real business impact.",
} as const;

export const about = {
  paragraphs: [
    "I lead engineering and product as a CTO — translating strategy into architecture, and architecture into products that ship and scale.",
    "My work spans full-stack development, system design, and SEO-driven growth. I have built systems in both corporate environments and startup ecosystems, and launched products in the crypto market.",
  ],
  capacities: [
    {
      title: "Product Leadership",
      description:
        "Product strategy, direction, and engineering leadership — aligning teams around outcomes rather than output.",
    },
    {
      title: "Full-Stack Engineering",
      description:
        "System design and scalable architecture across PHP/Laravel back ends and React/Next.js front ends.",
    },
    {
      title: "SEO & Growth",
      description:
        "Technical, on-page, and off-page SEO systems that improve organic visibility and structured traffic growth.",
    },
  ] satisfies Capacity[],
} as const;

export const experience = {
  role: "CTO",
  organization: "Call Center Technology Company",
  summary:
    "Technical leadership, architecture, and product direction across the platform.",
  responsibilities: [
    "Product strategy",
    "System design",
    "Engineering leadership",
    "SEO and growth systems",
    "Platform scalability",
  ],
} as const;

export const projects: Project[] = [
  {
    index: "01",
    title: "SEO & Marketing Systems",
    kind: "Growth Engineering",
    description:
      "Built SEO systems and frameworks combining SEMrush methodologies, technical SEO audits, and keyword strategy systems.",
    impact: "Improved organic visibility and structured traffic growth.",
    tags: ["Technical SEO", "SEMrush", "Keyword Strategy", "Audits"],
  },
  {
    index: "02",
    title: "Crypto & Prop Trading",
    kind: "Markets & Product Launches",
    description:
      "Prop trading in forex markets with multiple passed FundedNext challenges, alongside Crown Trader and Elite Trader certifications. Launched memecoin products including $PEPEREAPER, $EYEPOP, and $MOT (Meme of Thrones).",
    tags: ["Forex", "FundedNext", "$PEPEREAPER", "$EYEPOP", "$MOT"],
  },
];

export const skills: SkillGroup[] = [
  { label: "Backend", items: ["PHP", "Laravel", "WordPress"] },
  {
    label: "Frontend",
    items: ["JavaScript / TypeScript", "React", "Next.js"],
  },
  {
    label: "Systems & Growth",
    items: [
      "Technical SEO",
      "On-page & Off-page SEO",
      "Performance Optimization",
      "System Design",
    ],
  },
];

export const certifications: Credential[] = [
  { title: "Google Digital Marketing", detail: "Certificate" },
  { title: "SEMrush SEO", detail: "Certifications" },
  { title: "ISO 9001", detail: "Fundamentals" },
  {
    title: "Management & Entrepreneurship",
    detail: "Various workshops",
  },
  { title: "Crown Trader & Elite Trader", detail: "Trading certifications" },
];

export const education: Credential[] = [
  {
    title: "BSc, Civil Engineering",
    detail: "K. N. Toosi University of Technology",
  },
  {
    title: "MSc, Offshore Structures",
    detail: "University of Guilan",
  },
];

/** Anchor targets used by the header nav and section elements. */
export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
] as const;
