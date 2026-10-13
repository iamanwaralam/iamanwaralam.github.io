import type { Skill, SkillCategory } from './types';

/** Category display order for the tech-stack grid (mirrors the CV grouping). */
export const SKILL_CATEGORIES: SkillCategory[] = [
  'Web Development',
  'E-commerce & CMS',
  'Mobile & Backend Services',
  'SEO, Analytics & Infrastructure',
  'Tools & Delivery',
];

/**
 * Skills grouped by category — verified against Anwar's official CV
 * (public/resume/Anwar_Alam_Full_Stack_Web_Developer_Dubai_CV.pdf).
 */
export const SKILLS: Skill[] = [
  // Web Development
  { name: 'Next.js', category: 'Web Development' },
  { name: 'React', category: 'Web Development' },
  { name: 'TypeScript', category: 'Web Development' },
  { name: 'JavaScript', category: 'Web Development' },
  { name: 'Tailwind CSS', category: 'Web Development' },
  { name: 'HTML5', category: 'Web Development' },
  { name: 'CSS3', category: 'Web Development' },

  // E-commerce & CMS
  { name: 'Shopify', category: 'E-commerce & CMS' },
  { name: 'Liquid', category: 'E-commerce & CMS' },
  { name: 'WordPress', category: 'E-commerce & CMS' },
  { name: 'WooCommerce', category: 'E-commerce & CMS' },
  { name: 'Headless Commerce', category: 'E-commerce & CMS' },

  // Mobile & Backend Services
  { name: 'Flutter', category: 'Mobile & Backend Services' },
  { name: 'Dart', category: 'Mobile & Backend Services' },
  { name: 'Android (Java)', category: 'Mobile & Backend Services' },
  { name: 'Firebase Realtime Database', category: 'Mobile & Backend Services' },
  { name: 'Authentication', category: 'Mobile & Backend Services' },
  { name: 'Analytics', category: 'Mobile & Backend Services' },

  // SEO, Analytics & Infrastructure
  { name: 'Technical SEO', category: 'SEO, Analytics & Infrastructure' },
  { name: 'GA4', category: 'SEO, Analytics & Infrastructure' },
  { name: 'Search Console', category: 'SEO, Analytics & Infrastructure' },
  { name: 'Tag Manager', category: 'SEO, Analytics & Infrastructure' },
  { name: 'Google Business Profile', category: 'SEO, Analytics & Infrastructure' },
  { name: 'Web Hosting', category: 'SEO, Analytics & Infrastructure' },
  { name: 'DNS', category: 'SEO, Analytics & Infrastructure' },
  { name: 'cPanel', category: 'SEO, Analytics & Infrastructure' },
  { name: 'Microsoft 365', category: 'SEO, Analytics & Infrastructure' },
  { name: 'SSL', category: 'SEO, Analytics & Infrastructure' },

  // Tools & Delivery
  { name: 'Git', category: 'Tools & Delivery' },
  { name: 'GitHub', category: 'Tools & Delivery' },
  { name: 'CI/CD', category: 'Tools & Delivery' },
  { name: 'Gradle', category: 'Tools & Delivery' },
  { name: 'Claude Code', category: 'Tools & Delivery' },
  { name: 'MCP', category: 'Tools & Delivery' },
];
