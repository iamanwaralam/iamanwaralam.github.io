import { PROJECTS } from './projects';
import type { Project } from './types';

/**
 * Case-study content. Every statement is grounded in Anwar's CV — no invented
 * metrics. Performance claims (Lighthouse scores, layout shift) are verified
 * against the live sites, not estimated — re-check with `npx lighthouse`
 * before editing these if the sites have changed materially.
 */
export interface CaseStudy {
  /** Matches a Project slug. */
  slug: string;
  tagline: string;
  overview: string;
  problem: string[];
  solution: string[];
  challenges: string[];
  results: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'akiuae',
    tagline:
      'Rebuilding a Dubai distributor’s corporate presence on Next.js 14 — and moving it to a cloud hosting platform without a second of downtime.',
    overview:
      'AK International (AKIUAE) needed its corporate website modernised for speed and search, while a legacy hosting setup on GoDaddy tied the domain to business-critical Microsoft 365 email. The brief: a faster, better-ranking site with a migration that could not risk email delivery.',
    problem: [
      'The existing site was slow and scored poorly on Core Web Vitals.',
      'Hosting and DNS lived on GoDaddy, coupled to Microsoft 365 email records that could not go down.',
      'Search visibility and analytics needed a stronger technical foundation.',
    ],
    solution: [
      'Rebuilt the entire site as a Next.js 14 application with 32 statically generated routes for fast, cacheable delivery.',
      'Planned and executed a zero-downtime DNS & hosting migration from GoDaddy to a cloud hosting platform.',
      'Preserved all Microsoft 365 email (MX) records through the cutover with no interruption.',
      'Implemented technical, on-page, and off-page SEO, wired up GA4 and Search Console for measurement.',
    ],
    challenges: [
      'Sequencing the DNS cutover so that web traffic moved to the new hosting platform while email routing stayed intact.',
      'Preserving existing URLs and SEO equity during the platform change.',
    ],
    results: [
      'Measurably improved load performance — a 91/100 mobile Lighthouse performance score with zero layout shift (tested Aug 2026).',
      'Zero email downtime across the entire migration.',
      'Ongoing organic search improvements, monitored via GA4 and Search Console.',
    ],
  },
  {
    slug: 'esthica',
    tagline:
      'Building and managing the Esthica Shopify store for AK International — theme, catalog, payments, and the marketing behind it.',
    overview:
      'Esthica, a UAE beauty brand, is one of AK International’s e-commerce accounts. As part of that role, I built and manage its complete Shopify presence — the theme, the catalog, payments, and the ongoing marketing and social media that drive traffic to it.',
    problem: [
      'The brand needed a complete Shopify presence, built and maintained as part of AK International’s work for it.',
      'The full product catalog needed to be uploaded and organised for a beauty retail experience.',
      'Payments, marketing, and social media all needed one owner to keep the brand consistent.',
    ],
    solution: [
      'Built and maintain the Esthica Shopify store, including a custom theme suited to the beauty category.',
      'Uploaded and organised the full product catalog for a smooth shopping experience.',
      'Integrated payment gateways for a reliable, secure checkout.',
      'Run ongoing marketing and manage social media for the product range to drive traffic and sales.',
    ],
    challenges: [
      'Structuring a beauty retail catalog for easy browsing and search.',
      'Owning store development, payments, and marketing together as a single point of accountability.',
    ],
    results: [
      'A complete, live Shopify store at esthica.com covering the full customer journey from discovery to checkout.',
      'A consistent brand presence across the store and social media, backed by ongoing marketing work.',
    ],
  },
  {
    slug: 'beatryx',
    tagline:
      'A Next.js headless storefront, built as part of AK International’s work, with checkout powered by the Esthica Shopify backend.',
    overview:
      'Beatryx needed a bespoke front-end experience that still leaned on Shopify’s proven commerce engine. As part of AK International’s work, the solution was a headless Next.js storefront wired into the Esthica Shopify backend for checkout.',
    problem: [
      'The brand wanted a custom front-end beyond what a standard theme allows.',
      'Rebuilding commerce, payments, and checkout from scratch was neither necessary nor wise.',
    ],
    solution: [
      'Built a headless storefront in Next.js for full control over the experience.',
      'Integrated checkout directly into the Esthica Shopify backend, reusing its commerce engine.',
    ],
    challenges: [
      'Connecting a custom Next.js front-end to Shopify’s checkout cleanly.',
      'Keeping the headless experience fast and consistent with the brand.',
    ],
    results: [
      'A bespoke storefront experience backed by reliable Shopify checkout.',
      'A reusable pattern for future headless commerce builds.',
    ],
  },
  {
    slug: 'flavor-and-figures',
    tagline:
      'A fast, SEO-friendly Next.js content platform for a Dubai food media channel.',
    overview:
      'Flavor & Figures, a Dubai food media channel, needed a performant publishing platform built for a growing audience and strong search discoverability.',
    problem: [
      'A media channel needs fast, SEO-friendly pages that scale with content.',
      'The publishing experience had to stay simple as the audience grew.',
    ],
    solution: [
      'Developed a Next.js content platform optimised for performance and SEO.',
      'Structured the site for fast page loads and clean, indexable content.',
    ],
    challenges: [
      'Keeping performance high as content volume grows.',
      'Designing a content structure that’s easy to publish into.',
    ],
    results: [
      'A fast, SEO-friendly platform ready to scale with the channel.',
    ],
  },
  {
    slug: 'r3hrs',
    tagline:
      'Migrated R3’s slow WordPress site to Next.js, improving Core Web Vitals and SEO along the way.',
    overview:
      'R3 needed its WordPress-based product site for a peptide-based hair follicle recovery spray rebuilt on modern infrastructure — faster, easier to maintain, and ready to scale content like the Science and Blog sections.',
    problem: [
      'The existing WordPress site was slow, with weak Core Web Vitals hurting both user experience and search rankings.',
      'Content across Science, Products, and Blog sections needed a more maintainable structure.',
      'The site needed stronger technical and on-page SEO to support organic search.',
    ],
    solution: [
      'Rebuilt the site from WordPress to Next.js, preserving the existing content and product pages.',
      'Improved Core Web Vitals (LCP, CLS, INP) through image optimisation, code splitting, and a leaner front-end.',
      'Implemented technical and on-page SEO to strengthen search visibility around the brand’s key actives (Redensyl®, AnaGain™, Baicapil™).',
    ],
    challenges: [
      'Migrating existing WordPress content and URLs without losing SEO equity.',
      'Matching the clinical, dermatologist-tested tone of the brand in a rebuilt front-end.',
    ],
    results: [
      'A faster, modern Next.js site live at r3hrs.com with an 82/100 mobile Lighthouse performance score and zero layout shift (tested Aug 2026).',
      'A stronger technical and on-page SEO foundation for organic search.',
      'A more maintainable content structure for ongoing Science and Blog updates.',
    ],
  },
  {
    slug: 'ceovia',
    tagline:
      'Rebuilt Ceovia’s slow WordPress site as a fast Next.js build, improving Core Web Vitals and SEO.',
    overview:
      'Ceovia’s clinically structured wellness system, built around Himalayan Sea Buckthorn bioactives, needed its WordPress site rebuilt for performance and a premium, editorial feel befitting a daily wellness product.',
    problem: [
      'The WordPress site was slow, with weak Core Web Vitals that undercut its premium, clinical positioning.',
      'Science, Products, and Clinical Insight content needed a cleaner structure.',
      'The site needed stronger technical SEO to support its core ingredient story.',
    ],
    solution: [
      'Rebuilt the site from WordPress to Next.js with a premium, editorial layout.',
      'Improved Core Web Vitals through image optimisation, code splitting, and a leaner, faster front-end.',
      'Implemented technical and on-page SEO around the brand’s Himalayan Sea Buckthorn ingredient story.',
    ],
    challenges: [
      'Preserving a premium, clinical tone through the rebuild.',
      'Migrating existing content without losing SEO equity.',
    ],
    results: [
      'A faster, premium Next.js site live at ceovia.com with a 95/100 mobile Lighthouse performance score and zero layout shift (tested Aug 2026).',
      'A stronger technical SEO foundation for the brand’s core ingredient content.',
    ],
  },
  {
    slug: 'skinin',
    tagline:
      'Migrated Skinin’s slow WordPress site to Next.js, improving Core Web Vitals and SEO for a professional audience.',
    overview:
      'Skinin, an advanced professional micro-needling system by AK Pharma, needed its WordPress site rebuilt to better present its technology, treatment protocol, and professional resources to clinics.',
    problem: [
      'The WordPress site was slow, with weak Core Web Vitals undercutting its clinical, professional positioning.',
      'Professional and clinical audiences needed clear technology and treatment-protocol information.',
      'The site needed stronger technical SEO to reach a specialist, professional audience.',
    ],
    solution: [
      'Rebuilt the site from WordPress to Next.js, covering Products, Technology, Treatment Protocol, and Resources.',
      'Improved Core Web Vitals and page speed through a leaner, optimised Next.js front-end.',
      'Implemented technical and on-page SEO to strengthen visibility for a specialist, professional audience.',
    ],
    challenges: [
      'Presenting technical, clinical information (depth control, sterilization, channel rate) clearly for professional buyers.',
      'Migrating existing WordPress content without losing SEO equity.',
    ],
    results: [
      'A faster, professional Next.js site live at skinin.org with an 86/100 mobile Lighthouse performance score and zero layout shift (tested Aug 2026).',
      'A stronger technical SEO foundation for a specialist, professional audience.',
    ],
  },
  {
    slug: 'prizmah',
    tagline:
      'Rebuilt Prizmah’s slow WordPress site as a fast Next.js build, improving Core Web Vitals and SEO.',
    overview:
      'Prizmah, a proprietary autologous Platelet-Rich Plasma system used across aesthetic, orthopedic, wound, and dental care, needed its WordPress site rebuilt to better present its technology, applications, and compliance credentials.',
    problem: [
      'The WordPress site was slow, with weak Core Web Vitals undercutting a credibility-critical medical device brand.',
      'Compliance credentials (cGMP, EN ISO 13485, ISO 9001) needed clear, credible presentation.',
      'The site needed stronger technical SEO across several distinct clinical use cases.',
    ],
    solution: [
      'Rebuilt the site from WordPress to Next.js, covering Technology, Applications, Resources, and compliance information.',
      'Improved Core Web Vitals and page speed through a leaner, optimised Next.js front-end.',
      'Implemented technical and on-page SEO across aesthetic, orthopedic, wound, and dental use cases.',
    ],
    challenges: [
      'Communicating a medical device’s technology and compliance credentials clearly to a professional audience.',
      'Migrating existing WordPress content without losing SEO equity.',
    ],
    results: [
      'A faster, professional Next.js site live at prizmah.com with a 90/100 mobile Lighthouse performance score and zero layout shift (tested Aug 2026).',
      'A stronger technical SEO foundation across multiple clinical use cases.',
    ],
  },
  {
    slug: 'lapromed',
    tagline:
      'Rebuilt Lapromed’s slow WordPress site as a fast Next.js build, improving Core Web Vitals and SEO.',
    overview:
      'Lapromed manufactures precision liposuction cannulas, hub-connection systems, and fat-transfer instruments for surgeons, clinics, and hospitals. Its WordPress site needed rebuilding to present a large, technical product range clearly to a professional medical audience.',
    problem: [
      'The WordPress site was slow, with weak Core Web Vitals undercutting a precision medical-device brand.',
      'Five cannula families across six interchangeable hub styles needed clear, browsable organisation.',
      'Cleaning & care guidance and technical resources needed a credible, easy-to-find home for clinical buyers.',
    ],
    solution: [
      'Rebuilt the site from WordPress to Next.js, covering Products, Cleaning & Care, and Resources.',
      'Structured the product catalogue by cannula type, with accessories and hub-connection systems browsable separately.',
      'Improved Core Web Vitals and page speed through a leaner, optimised Next.js front-end.',
      'Implemented technical and on-page SEO for a specialist surgical-device audience.',
    ],
    challenges: [
      'Organising a large, technical catalogue (five cannula families, six hub styles, accessories) for fast browsing.',
      'Migrating existing WordPress content without losing SEO equity.',
    ],
    results: [
      'A faster, professional Next.js site live at lapromed.com with a 98/100 mobile Lighthouse performance score, a 2.1s LCP, and zero layout shift (tested Sep 2026).',
      'A clearly organised product catalogue for surgeons, clinics, and hospitals.',
    ],
  },
  {
    slug: 'alameerali',
    tagline:
      'A Next.js e-commerce build for a luxury personalized gifting and corporate gifting brand.',
    overview:
      'AmeerAli needed a premium e-commerce presence for its luxury personalized gifts, perfumes, and corporate gifting line — built to serve both retail and wholesale customers with worldwide delivery.',
    problem: [
      'The brand needed a luxury-grade storefront that matched its premium positioning.',
      'Retail customers and wholesale/corporate buyers needed distinct, clear paths through the site.',
    ],
    solution: [
      'Built the storefront in Next.js for a fast, polished shopping experience.',
      'Structured separate Shop and Wholesale sections to serve both retail and corporate buyers.',
      'Optimised the site for search and page speed.',
    ],
    challenges: [
      'Balancing a rich, editorial luxury aesthetic with fast page loads.',
      'Supporting both individual retail orders and wholesale inquiries on one platform.',
    ],
    results: [
      'A premium Next.js storefront live at alameerali.com serving retail and wholesale customers worldwide.',
    ],
  },
  {
    slug: 'techsavvyhelp',
    tagline:
      'Practical Windows troubleshooting and online safety guides, founded and run by Anwar.',
    overview:
      'I founded and run TechSavvyHelp, a WordPress and Elementor site that publishes step-by-step fixes for Windows 11 problems, monthly Windows Update known-issue coverage, and practical guides to spotting online scams, including UAE-specific ones.',
    problem: [
      'A slow WordPress setup hurts both readers and search rankings — page speed and Core Web Vitals needed to be genuinely fast, not just adequate.',
      'Readers need clear, practical troubleshooting guides organised by topic.',
      'The site needed strong technical and on-page SEO, backed by real keyword research, to compete for high-intent troubleshooting searches.',
    ],
    solution: [
      'Built the site on WordPress with Elementor, organised into Windows, How To, Security, Software, Mobile, and Troubleshooter sections.',
      'Own content strategy, SEO, site design and development using WordPress, Elementor, and custom PHP, plus performance and caching.',
      'Developed topic clusters and pillar guides, a custom related-guides system, and a monthly Patch Tuesday update workflow.',
    ],
    challenges: [
      'Keeping Core Web Vitals strong on WordPress + Elementor, a stack that easily gets slow without careful optimisation.',
      'Structuring a large, growing library of guides for easy discovery.',
      'Keeping technical content accurate and genuinely useful, not generic filler.',
    ],
    results: [
      'A published, SEO-optimised WordPress site at techsavvyhelp.com with zero layout shift for readers — page-speed tuning remains an active, ongoing effort as the content library grows.',
      'A growing, SEO-optimised library of Windows guides built for organic search.',
    ],
  },
  {
    slug: 'mesoage',
    tagline: 'A Next.js site for a professional aesthetic mesotherapy product line.',
    overview:
      'MesoAge, a mesotherapy product line for aesthetic practitioners and clinics, needed a site that clearly presents its treatments, ingredients, and equipment to a professional buyer audience.',
    problem: [
      'Professional practitioners needed clear information on treatments, ingredients, and equipment before buying.',
      'The brand needed a site that read as credible and clinical, not consumer-facing.',
    ],
    solution: [
      'Built the site in Next.js, covering Treatments, Ingredients, Equipment, and Resources.',
      'Structured content for a professional, practitioner audience evaluating the product line.',
      'Optimised the site for search and page speed.',
    ],
    challenges: [
      'Presenting a wide product range (facial, body, hair, pigmentation) clearly without overwhelming visitors.',
      'Maintaining a credible, clinical tone throughout.',
    ],
    results: ['A professional Next.js site live at mesoage.com for practitioners and clinics.'],
  },
  {
    slug: 'google-play-apps',
    tagline:
      'Published Android and Flutter apps — including Islamic utility apps for a global audience.',
    overview:
      'Across earlier mobile roles, Anwar developed and published Android apps on Google Play, migrated legacy Java apps to Flutter, and improved stability through disciplined testing.',
    problem: [
      'Users needed reliable, responsive utility apps for a global audience.',
      'Legacy Java apps needed modernising onto a maintainable stack.',
    ],
    solution: [
      'Developed and published Android apps (Java, Flutter) on Google Play, including Islamic utility apps.',
      'Migrated legacy Java apps to Flutter with Firebase Realtime Database, Auth, and Analytics.',
      'Ran testing and debugging cycles to improve stability and responsiveness.',
    ],
    challenges: [
      'Migrating established Java apps to Flutter without regressing behaviour.',
      'Maintaining responsiveness across a range of devices.',
    ],
    results: [
      'Published, actively used apps on Google Play.',
      'A more maintainable Flutter + Firebase codebase after migration.',
    ],
  },
];

const CASE_STUDY_BY_SLUG = new Map(CASE_STUDIES.map((c) => [c.slug, c]));
const PROJECT_BY_SLUG = new Map(PROJECTS.map((p) => [p.slug, p]));

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDY_BY_SLUG.get(slug);
}

export function getProject(slug: string): Project | undefined {
  return PROJECT_BY_SLUG.get(slug);
}

/** Slug has a case study page? (used to conditionally show the card link). */
export function hasCaseStudy(slug: string): boolean {
  return CASE_STUDY_BY_SLUG.has(slug);
}
