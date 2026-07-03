/**
 * Site-wide configuration.
 *
 * Contact + social links are NOT present in content/portfolio-data.md.
 * The email was provided by the site owner. The social URLs below are
 * domain-derived defaults — edit them here in one place if the handles differ.
 */
export const site = {
  name: "Shahab Pakshekarestalkhi",
  shortName: "Shahab Pakshekarestalkhi",
  role: "CTO & Technical Product Leader",
  url: "https://pakshekar.ir",
  locale: "en_US",
  email: "shahab@pakshekar.ir",
  location: "Tehran, Iran",
  description:
    "Shahab Pakshekarestalkhi — CTO and technical product leader. Product strategy, system architecture, full-stack engineering, and SEO-driven growth.",
  links: {
    github: "https://github.com/pakshekar",
    x: "https://x.com/pakshekar",
  },
} as const;

export type Site = typeof site;
