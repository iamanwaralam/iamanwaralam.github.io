import type { ExperienceItem } from './types';

/**
 * Work experience — verified from Anwar's official CV
 * (public/resume/Anwar_Alam_CV_OnePage.pdf). Real roles, dates, and
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
      'Rebuilt the corporate website (akiuae.com) as a Next.js 14 app with 32 statically generated routes, improving load performance and Core Web Vitals.',
      'Led a zero-downtime DNS & hosting migration from GoDaddy to Vercel, preserving Microsoft 365 email records with no interruption.',
      'Drove technical, on-page, and off-page SEO; grew organic traffic and rankings tracked via GA4 and Search Console.',
      'Administer email systems (Microsoft 365, Google Workspace, cPanel), domains, SSL, and hosting; own security, backups, and DR readiness.',
    ],
    stack: ['Next.js 14', 'Vercel', 'SEO', 'GA4', 'Microsoft 365'],
  },
  {
    company: 'Independent eCommerce & Web Projects',
    role: 'Full-Stack Developer (concurrent)',
    location: 'Dubai, UAE',
    period: '2023 — Present',
    responsibilities: [
      'Built the Esthica.com Shopify store from scratch for a UAE beauty brand — custom OS 2.0 theme, full product catalog upload, and payment gateway integration.',
      'Own ongoing marketing and social media management for Esthica’s full product range, driving traffic and sales.',
      'Built a Next.js headless storefront for Beatryx with checkout integrated into the Esthica Shopify backend.',
      'Developed a Next.js content platform for Flavor & Figures, a Dubai food media channel.',
      'Integrated MCP connectors (GitHub, Figma, Vercel) into an AI-assisted development workflow.',
    ],
    stack: ['Shopify OS 2.0', 'Next.js', 'Payment Integration', 'Marketing', 'MCP'],
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
