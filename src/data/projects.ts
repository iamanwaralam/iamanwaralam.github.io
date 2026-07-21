import type { Project } from './types';

/**
 * Projects — verified from Anwar's CV (public/resume/Anwar_Alam_CV_OnePage.pdf)
 * and the live links on https://iamanwaralam.github.io. Descriptions are
 * recruiter-focused and factual. Missing live URLs / screenshots are TODOs
 * (see docs/TODO.md) — cards simply omit links that aren't available yet.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'akiuae',
    title: 'AKIUAE Corporate Website',
    description:
      'Rebuilt a Dubai distributor’s corporate site as a Next.js 14 application with 32 statically generated routes, then led a zero-downtime DNS & hosting migration from GoDaddy to Vercel — improving load performance and Core Web Vitals with no email interruption.',
    tech: ['Next.js 14', 'Vercel', 'SEO', 'GA4'],
    category: 'Web',
    liveUrl: 'https://akiuae.com',
    featured: true,
    image: '/projects/akiuae.jpg',
  },
  {
    slug: 'esthica',
    title: 'Esthica — Shopify Store',
    description:
      'Built the Esthica Shopify store from scratch for a UAE beauty brand — theme design, full product catalog upload, payment gateway integration, and ongoing marketing and social media management for the full product range.',
    tech: ['Shopify OS 2.0', 'Payment Integration', 'Marketing'],
    category: 'E-commerce',
    liveUrl: 'https://esthica.com',
    featured: true,
    image: '/projects/esthica.jpg',
  },
  {
    slug: 'beatryx',
    title: 'Beatryx — Headless Storefront',
    description:
      'Built a Next.js headless storefront for Beatryx with checkout integrated directly into the Esthica Shopify backend — combining a bespoke front-end experience with Shopify’s commerce engine.',
    tech: ['Next.js', 'Shopify Headless', 'TypeScript'],
    category: 'E-commerce',
    liveUrl: 'https://beatryx.com',
    featured: true,
    image: '/projects/beatryx.jpg',
  },
  {
    slug: 'flavor-and-figures',
    title: 'Flavor & Figures',
    description:
      'Developed a Next.js content platform for Flavor & Figures, a Dubai food media channel — a fast, SEO-friendly publishing experience for a growing audience.',
    tech: ['Next.js', 'Content Platform', 'SEO'],
    category: 'Web',
    liveUrl: 'https://flavorandfigures.com',
    image: '/projects/flavor-and-figures.jpg',
  },
  {
    slug: 'r3hrs',
    title: 'R3 — Hair Revitalizing Spray',
    description:
      'Migrated R3’s hair-revitalizing product site from WordPress to Next.js — a peptide-based follicle recovery brand built around Redensyl®, AnaGain™, and Baicapil™ actives, rebuilt for speed and easier content updates.',
    tech: ['Next.js', 'WordPress Migration', 'SEO'],
    category: 'Web',
    liveUrl: 'https://r3hrs.com',
    image: '/projects/r3hrs.jpg',
  },
  {
    slug: 'ceovia',
    title: 'Ceovia — Wellness System',
    description:
      'Rebuilt Ceovia’s 90-day wellness supplement site from WordPress to Next.js — a Himalayan Sea Buckthorn-based daily wellness system with a premium, editorial product presentation.',
    tech: ['Next.js', 'WordPress Migration', 'SEO'],
    category: 'Web',
    liveUrl: 'https://ceovia.com',
    image: '/projects/ceovia.jpg',
  },
  {
    slug: 'skinin',
    title: 'Skinin — Micro-Needling System',
    description:
      'Migrated Skinin’s professional micro-needling device site from WordPress to Next.js — a clinical collagen-induction system site covering technology, treatment protocol, and professional resources.',
    tech: ['Next.js', 'WordPress Migration', 'SEO'],
    category: 'Web',
    liveUrl: 'https://www.skinin.org',
    image: '/projects/skinin.jpg',
  },
  {
    slug: 'prizmah',
    title: 'Prizmah — PRP System',
    description:
      'Rebuilt Prizmah’s autologous platelet-rich plasma (PRP/PRF) device site from WordPress to Next.js — covering technology, clinical applications, and compliance credentials (cGMP, ISO 13485, ISO 9001).',
    tech: ['Next.js', 'WordPress Migration', 'SEO'],
    category: 'Web',
    liveUrl: 'https://prizmah.com',
    image: '/projects/prizmah.jpg',
  },
  {
    slug: 'google-play-apps',
    title: 'Google Play Apps',
    description:
      'Developed and published Android apps (Java, Flutter) on Google Play, including Islamic utility apps for international users, with legacy Java apps migrated to Flutter on Firebase (Realtime DB, Auth, Analytics).',
    tech: ['Flutter', 'Dart', 'Android (Java)', 'Firebase'],
    category: 'Mobile',
    githubUrl: 'https://github.com/iamanwaralam',
  },
];
