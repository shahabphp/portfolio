/**
 * Site-wide configuration.
 *
 * Contact + social links are provided by the site owner (not present in the
 * original content/portfolio-data.md). Edit them here in one place.
 */
export const site = {
  name: "Shahab Pakshekarestalkhi",
  shortName: "Shahab Pakshekarestalkhi",
  role: "Product Manager & Technical Leader",
  url: "https://pakshekar.ir",
  locale: "en_US",
  email: "shahab@pakshekar.ir",
  phone: "+98 912 422 3254",
  phoneHref: "+989124223254",
  location: "Tehran, Iran",
  description:
    "Shahab Pakshekarestalkhi — Product Manager and Technical Leader with 15+ years delivering enterprise software, SaaS platforms, CRM, and government solutions.",
  links: {
    github: "https://github.com/shahabphp",
    x: "https://x.com/CryptoShahab",
    telegram: "https://t.me/shahabpk",
  },
} as const;

export type Site = typeof site;
