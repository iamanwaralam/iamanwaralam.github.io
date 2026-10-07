import type { Project } from './types';

/**
 * Projects — verified from Anwar's CV (public/resume/Anwar_Alam_CV.pdf)
 * and the live links on https://iamanwaralam.github.io. Descriptions are
 * recruiter-focused and factual. Missing live URLs / screenshots are TODOs
 * (see docs/TODO.md) — cards simply omit links that aren't available yet.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'akiuae',
    title: 'AKIUAE Corporate Website',
    description:
      'Rebuilt a Dubai distributor’s corporate site as a Next.js 14 application with 32 statically generated routes, then led a zero-downtime DNS & hosting migration from GoDaddy to a cloud hosting platform — improving load performance and Core Web Vitals with no email interruption.',
    tech: ['Next.js 14', 'Web Hosting', 'SEO', 'GA4'],
    category: 'Web',
    liveUrl: 'https://akiuae.com',
    featured: true,
    image: '/projects/akiuae.jpg',
  },
  {
    slug: 'esthica',
    title: 'Esthica — Shopify Store',
    description:
      'Built and manage the Esthica e-commerce store on Shopify as part of AK International’s work for the UAE beauty brand — theme design and updates, full product catalog maintenance, payment-gateway support, and ongoing marketing and social media management.',
    tech: ['Shopify', 'Payment Integration', 'E-commerce'],
    category: 'E-commerce',
    liveUrl: 'https://esthica.com',
    featured: true,
    image: '/projects/esthica.jpg',
  },
  {
    slug: 'beatryx',
    title: 'Beatryx — Headless Storefront',
    description:
      'Built a Next.js headless storefront for Beatryx as part of AK International’s work, with checkout integrated into the Esthica Shopify backend — combining a bespoke front-end experience with Shopify’s commerce engine.',
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
      'Developed a fast, SEO-friendly Next.js content platform for Flavor & Figures, a Dubai food media channel.',
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
    slug: 'lapromed',
    title: 'Lapromed — Liposuction Cannulas',
    description:
      'Rebuilt Lapromed’s surgical cannula and accessories site from WordPress to Next.js — covering its full liposuction cannula and hub-connection range, cleaning & care guidance, and resources for surgeons and clinics.',
    tech: ['Next.js', 'WordPress Migration', 'SEO'],
    category: 'Web',
    liveUrl: 'https://lapromed.com',
    image: '/projects/lapromed.jpg',
  },
  {
    slug: 'alameerali',
    title: 'AmeerAli — Luxury Gifting',
    description:
      'Built a Next.js e-commerce site for AmeerAli, a luxury personalized gifting brand — custom bags, premium perfumes, and corporate gifting, serving both retail and wholesale buyers with worldwide delivery.',
    tech: ['Next.js', 'E-commerce', 'SEO'],
    category: 'E-commerce',
    liveUrl: 'https://alameerali.com',
    image: '/projects/alameerali.jpg',
  },
  {
    slug: 'techsavvyhelp',
    title: 'TechSavvyHelp — Windows troubleshooting & online safety guides',
    description:
      'I founded and run TechSavvyHelp, a WordPress and Elementor site publishing step-by-step fixes for Windows 11 problems, monthly Windows Update known-issue coverage, and practical guides to spotting online scams, including UAE-specific ones.',
    tech: ['WordPress', 'Elementor', 'SEO', 'Content Strategy', 'PHP'],
    category: 'Web',
    liveUrl: 'https://techsavvyhelp.com',
    image: '/projects/techsavvyhelp.jpg',
  },
  {
    slug: 'mesoage',
    title: 'MesoAge — Mesotherapy Products',
    description:
      'Built a Next.js site for MesoAge, an aesthetic mesotherapy product line for professional practitioners and clinics — covering treatments, ingredients, and equipment.',
    tech: ['Next.js', 'SEO'],
    category: 'Web',
    liveUrl: 'https://mesoage.com',
    image: '/projects/mesoage.jpg',
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
