import { PROJECTS } from './projects';
import type { Project } from './types';

/**
 * Case-study content. Every statement is grounded in Anwar's CV — no invented
 * metrics. Where an outcome isn't quantified on the CV it's stated
 * qualitatively (e.g. "improved Core Web Vitals") rather than with a made-up
 * number. Screenshots are TODO (see docs/TODO.md).
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
      'Rebuilding a Dubai distributor’s corporate presence on Next.js 14 — and moving it to Vercel without a second of downtime.',
    overview:
      'AK International (AKIUAE) needed its corporate website modernised for speed and search, while a legacy hosting setup on GoDaddy tied the domain to business-critical Microsoft 365 email. The brief: a faster, better-ranking site with a migration that could not risk email delivery.',
    problem: [
      'The existing site was slow and scored poorly on Core Web Vitals.',
      'Hosting and DNS lived on GoDaddy, coupled to Microsoft 365 email records that could not go down.',
      'Search visibility and analytics needed a stronger technical foundation.',
    ],
    solution: [
      'Rebuilt the entire site as a Next.js 14 application with 32 statically generated routes for fast, cacheable delivery.',
      'Planned and executed a zero-downtime DNS & hosting migration from GoDaddy to Vercel.',
      'Preserved all Microsoft 365 email (MX) records through the cutover with no interruption.',
      'Implemented technical, on-page, and off-page SEO, wired up GA4 and Search Console for measurement.',
    ],
    challenges: [
      'Sequencing the DNS cutover so that web traffic moved to Vercel while email routing stayed intact.',
      'Preserving existing URLs and SEO equity during the platform change.',
    ],
    results: [
      'Measurably improved load performance and Core Web Vitals.',
      'Zero email downtime across the entire migration.',
      'Organic traffic and rankings grew, tracked via GA4 and Search Console.',
    ],
  },
  {
    slug: 'esthica',
    tagline:
      'A custom Shopify OS 2.0 storefront for a UAE beauty brand, built for catalog depth and conversion.',
    overview:
      'Esthica, a UAE beauty store, needed a distinctive storefront on Shopify OS 2.0 with its full catalog cleanly integrated and a shopping experience tuned for conversion.',
    problem: [
      'Off-the-shelf themes didn’t match the brand or handle the catalog structure well.',
      'The store needed a flexible, maintainable theme the team could keep running.',
    ],
    solution: [
      'Designed and shipped a custom Shopify OS 2.0 theme with full catalog integration.',
      'Built flexible sections so the team can merchandise without developer help.',
      'Focused the layout and product presentation on a smooth path to checkout.',
    ],
    challenges: [
      'Mapping a real-world beauty catalog into Shopify’s data model cleanly.',
      'Balancing bespoke design with Shopify OS 2.0’s section-based flexibility.',
    ],
    results: [
      'A distinctive, on-brand storefront live at esthica.com.',
      'A maintainable OS 2.0 theme the team can extend over time.',
    ],
  },
  {
    slug: 'beatryx',
    tagline:
      'A Next.js headless storefront with checkout powered by an existing Shopify backend.',
    overview:
      'Beatryx needed a bespoke front-end experience that still leaned on Shopify’s proven commerce engine. The solution: a headless Next.js storefront wired into the Esthica Shopify backend for checkout.',
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
