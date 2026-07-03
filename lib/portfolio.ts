/**
 * Structured portfolio content.
 *
 * SOURCE OF TRUTH: the owner's CV (provided directly) plus content/portfolio-data.md.
 * Every value here is derived from those sources. Nothing is invented — no fake
 * companies, dates, or metrics. Where the CV and the original data file differ,
 * the CV is authoritative (real titles, dates, employers).
 */

export type Capacity = {
  title: string;
  description: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Role = {
  period: string;
  title: string;
  focus?: string;
  organization: string;
  summary?: string;
  points: string[];
};

export type Product = {
  name: string;
  role: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type Credential = {
  title: string;
  detail: string;
};

export type Language = {
  name: string;
  level: string;
};

export const identity = {
  name: "Shahab Pakshekarestalkhi",
  roles: [
    "Product Manager",
    "Product Owner",
    "Technical Leader",
    "Full-Stack Developer",
  ],
  location: "Tehran, Iran",
  availability: "Open to remote and international roles",
} as const;

/** The core thesis (docs/brand.md → Core Message) used as the hero headline. */
export const thesis = {
  headline: "Technology should solve business problems.",
  lead: "Senior Product Manager and Technical Leader with 15+ years delivering enterprise software, SaaS platforms, CRM systems, and government solutions — bridging business strategy and engineering execution.",
} as const;

export const about = {
  paragraphs: [
    "I began as a software engineer and grew into product leadership, delivering enterprise software, SaaS platforms, CRM systems, learning management systems, digital media platforms, marketplaces, and government solutions.",
    "I lead cross-functional teams across the full product lifecycle — from discovery and roadmap planning through development, launch, and continuous improvement. My background in software architecture, UX, Agile delivery, and digital strategy lets me build scalable, user-centered products that create measurable business value.",
  ],
  stats: [
    { value: "15+", label: "Years in software & product" },
    { value: "3,000+", label: "CRM agents supported" },
    { value: "8", label: "Flagship products delivered" },
  ] satisfies Stat[],
  capacities: [
    {
      title: "Product Management",
      description:
        "Product strategy, ownership, roadmaps, and Agile delivery across the full product lifecycle.",
    },
    {
      title: "Technical Leadership",
      description:
        "Software architecture and full-stack delivery across PHP/Laravel, REST APIs, MySQL, and Linux.",
    },
    {
      title: "UX & Digital Growth",
      description:
        "UX strategy, user journeys, technical SEO, and performance optimization for user-centered products.",
    },
  ] satisfies Capacity[],
} as const;

export const experience: Role[] = [
  {
    period: "Sep 2021 — 2026",
    title: "Product Owner / Product Manager",
    organization: "Kavin Pishro Sharif Samaneh (Call-Tech)",
    summary:
      "Lead product strategy, roadmap definition, and Agile execution across enterprise platforms including CRM, SaaS, crowdfunding, LMS, and smart-mobility systems.",
    points: [
      "Define product vision and long-term roadmap",
      "Manage cross-functional Agile teams across engineering, design, QA, and stakeholders",
      "Own the enterprise CRM used by 3,000+ call center agents",
      "Translate business needs into scalable product and technical solutions",
      "Drive continuous product improvement and delivery",
    ],
  },
  {
    period: "Dec 2017 — Aug 2021",
    title: "Technical Director",
    focus: "Learning Systems & Digital Platforms",
    organization: "Laitec Sharif — IT Learning Laboratory",
    points: [
      "Designed and delivered learning management systems",
      "Managed infrastructure and backend architecture decisions",
      "Improved usability, scalability, and system performance",
      "Defined development standards and release processes",
    ],
  },
  {
    period: "Aug 2014 — Nov 2017",
    title: "Technical Director",
    focus: "Enterprise Media & Web Platforms",
    organization: "AIAMEDIAGROUP.ir",
    points: [
      "Directed architecture for media and content platforms",
      "Managed WordPress and Laravel-based enterprise systems",
      "Improved SEO, performance, scalability, and infrastructure",
      "Coordinated development teams and technical delivery cycles",
    ],
  },
  {
    period: "Apr 2012 — Jul 2014",
    title: "Senior Web Developer / Full-Stack Developer",
    organization: "RGS Gemstones",
    points: ["Built corporate websites and custom web applications"],
  },
  {
    period: "Apr 2010 — Mar 2012",
    title: "WordPress / Web Developer",
    organization: "Miadgah Foundation",
    points: ["Developed WordPress-based websites"],
  },
];

export const products: Product[] = [
  { name: "Enterprise CRM — 3,000+ Call Center Agents", role: "Product Manager" },
  { name: "Cheshmeh Crowdfunding Platform", role: "Product Owner" },
  { name: "Kish 141 Smart Mobility Platform", role: "Product Owner" },
  { name: "Laitec Learning Management System", role: "Technical Director" },
  { name: "Daryachi Marketplace", role: "Technical Director" },
  { name: "ArtTalks Media Platform", role: "Technical Director" },
  { name: "TechTalks Media Platform", role: "Technical Director" },
  { name: "FaceNegah Social Platform", role: "Senior Full-Stack Developer" },
];

export const skills: SkillGroup[] = [
  {
    label: "Product & Delivery",
    items: [
      "Product Strategy",
      "Product Ownership",
      "Roadmap Planning",
      "Agile & Scrum",
      "Business Analysis",
      "Requirements Engineering",
      "Stakeholder Management",
    ],
  },
  {
    label: "Engineering",
    items: [
      "PHP",
      "Laravel",
      "WordPress",
      "REST APIs",
      "MySQL",
      "JavaScript",
      "HTML5 / CSS3",
      "Bootstrap / jQuery",
    ],
  },
  {
    label: "Infrastructure",
    items: [
      "Linux (Ubuntu / CentOS)",
      "Git",
      "Server Administration",
      "System Integration",
    ],
  },
  {
    label: "UX & Growth",
    items: [
      "UX Strategy",
      "User Journey Mapping",
      "Information Architecture",
      "Technical SEO",
      "Performance Optimization",
      "Digital Marketing",
    ],
  },
];

/** Additional expertise (CV → Certifications & Additional Expertise). */
export const additionalExpertise: string[] = [
  "AI-assisted Software Development",
  "SaaS Architecture",
  "Technical Consulting",
  "Startup Product Development",
  "Process Automation",
  "Digital Business Strategy",
];

export const certifications: Credential[] = [
  {
    title: "Google Digital Garage",
    detail: "Fundamentals of Digital Marketing",
  },
  {
    title: "SEMrush SEO Certifications",
    detail: "Technical, Local, Mobile & Keyword Research",
  },
  { title: "Laitec", detail: "Digital Marketing" },
  {
    title: "Iran Management Association",
    detail: "Entrepreneurship, Creativity, Teamwork & E-Commerce",
  },
  {
    title: "ISO 9001:2000 (NISCERT)",
    detail: "Principles & Requirements",
  },
];

export const education: Credential[] = [
  {
    title: "M.Sc. Marine Structures Engineering",
    detail: "University of Guilan",
  },
  {
    title: "B.Sc. Civil Engineering",
    detail: "Khajeh Nasir Toosi University of Technology",
  },
];

export const languages: Language[] = [
  { name: "Persian", level: "Native" },
  { name: "English", level: "Advanced" },
  { name: "German", level: "Basic" },
  { name: "French", level: "Basic" },
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
