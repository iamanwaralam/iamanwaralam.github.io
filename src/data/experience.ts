import type { ExperienceItem } from './types';

/**
 * Work experience — verified from Anwar's official CV
 * (public/resume/Anwar_Alam_Full_Stack_Web_Developer_Dubai_CV.pdf). Real roles, dates, and
 * responsibilities. No placeholders.
 */
export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'AK International LLC (AKI)',
    role: 'Web Developer & SEO Specialist',
    location: 'Dubai, UAE',
    period: '2022 — Present',
    current: true,
    responsibilities: [
      'Rebuilt the company website akiuae.com from the ground up as a Next.js application, making it 35% faster on Google’s page-speed measures.',
      'Led a zero-downtime DNS and hosting migration from GoDaddy to a cloud hosting platform while preserving Microsoft 365 email records without interruption.',
      'Build and maintain corporate websites, product pages and web applications using Next.js and WordPress.',
      'Manage the Esthica e-commerce store on Shopify, including theme updates, product catalog maintenance and payment-gateway support.',
      'Rebuilt six medical and aesthetic product websites (R3, Ceovia, Skinin, Prizmah, Lapromed, MesoAge), moving most off WordPress so pages load faster and are easier to update.',
      'Built a Next.js headless storefront for Beatryx with checkout integrated into the Esthica Shopify backend.',
      'Manage technical, on-page and off-page SEO, with performance tracked through GA4 and Google Search Console.',
      'Set up Google Business Profile for AK International.',
      'Administer Microsoft 365, Google Workspace, cPanel, domains, DNS, SSL, hosting, backups, security and disaster-recovery readiness.',
    ],
    stack: ['Next.js', 'WordPress', 'Shopify', 'Shopify Headless', 'SEO', 'Microsoft 365'],
  },
  {
    company: 'Independent Web, E-commerce & App Projects',
    role: 'Freelance Full-Stack & E-commerce Developer (Part-time)',
    location: 'Dubai, UAE',
    period: '2023 — Present',
    responsibilities: [
      'Independently built, write for, and run techsavvyhelp.com — a WordPress site publishing Windows troubleshooting guides — owning site development, content, keyword research, and technical & on-page SEO end-to-end.',
      'Built fast, search-friendly Next.js websites for Flavor & Figures, a Dubai food media channel, and AmeerAli, a luxury gifting online store.',
      'Designed and built Netcurb, a per-app internet firewall for Android, Linux and Windows from one Kotlin Multiplatform codebase — live on the Microsoft Store, released for Linux and in closed testing on Google Play.',
      'Designed and built Dualfon, a native Kotlin and Jetpack Compose Android app that switches a phone between data-only and calls-only modes, now in closed testing on Google Play.',
      'Designed and built LetsEditPDF (letseditpdf.com), a free Next.js toolkit of 80 PDF and image tools that run entirely in the browser.',
      'Integrated GitHub, Figma and deployment tools into an AI-assisted development workflow.',
    ],
    stack: ['Next.js', 'WordPress', 'Kotlin', 'Jetpack Compose', 'SEO', 'GitHub Actions', 'MCP'],
  },
  {
    company: 'ArhamTechMind',
    role: 'Android & Flutter Developer',
    location: 'Remote / India',
    period: '2020 — 2022',
    responsibilities: [
      'Developed and published Android apps (Java, Flutter) on Google Play, including Islamic utility apps for international users.',
      'Migrated legacy Java apps to Flutter with Firebase Realtime Database, Auth, and Analytics.',
      'Drove testing and debugging cycles that improved stability and responsiveness.',
    ],
    stack: ['Flutter', 'Dart', 'Android (Java)', 'Firebase'],
  },
  {
    company: 'csdevbin',
    role: 'Android Developer',
    location: 'Hyderabad, India',
    period: '2017 — 2019',
    responsibilities: [
      'Built and maintained native Android apps in Java within an agile delivery team, shipping high-quality mobile modules on schedule.',
    ],
    stack: ['Android (Java)', 'Gradle', 'Git'],
  },
];
