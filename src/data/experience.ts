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
      'Rebuilt akiuae.com as a Next.js application with 32 statically generated routes, improving load performance and Core Web Vitals.',
      'Led a zero-downtime DNS and hosting migration from GoDaddy to a cloud hosting platform while preserving Microsoft 365 email records without interruption.',
      'Build and maintain corporate websites, product pages and web applications using Next.js, WordPress and React Native.',
      'Manage the Esthica e-commerce store on Shopify, including theme updates, product catalog maintenance and payment-gateway support.',
      'Built a Next.js headless storefront for Beatryx with checkout integrated into the Esthica Shopify backend.',
      'Manage technical, on-page and off-page SEO, with performance tracked through GA4 and Google Search Console.',
      'Set up Google Business Profile for AK International.',
      'Administer Microsoft 365, Google Workspace, cPanel, domains, DNS, SSL, hosting, backups, security and disaster-recovery readiness.',
    ],
    stack: ['Next.js', 'WordPress', 'React Native', 'Shopify', 'Shopify Headless', 'SEO', 'Microsoft 365'],
  },
  {
    company: 'Independent E-commerce & Web Projects',
    role: 'Freelance Full-Stack & E-commerce Developer (Part-time)',
    location: 'Dubai, UAE',
    period: '2023 — Present',
    responsibilities: [
      'Independently built, write for, and run techsavvyhelp.com — a WordPress site publishing Windows troubleshooting guides — owning site development, content, keyword research, and technical & on-page SEO end-to-end.',
      'Developed a fast, SEO-friendly Next.js content platform for Flavor & Figures, a Dubai food media channel.',
      'Integrated GitHub, Figma and deployment tools into an AI-assisted development workflow.',
    ],
    stack: ['Next.js', 'WordPress', 'SEO', 'GitHub', 'Figma', 'MCP'],
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
