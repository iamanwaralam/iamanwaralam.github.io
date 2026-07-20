import type { Skill, SkillCategory } from './types';

/** Category display order for the tech-stack grid (mirrors the CV grouping). */
export const SKILL_CATEGORIES: SkillCategory[] = [
  'Frontend',
  'Mobile',
  'E-commerce',
  'SEO & Analytics',
  'Infrastructure',
  'Tools & AI',
];

/**
 * Skills grouped by category — verified against Anwar's official CV
 * (public/resume/Anwar_Alam_CV_OnePage.pdf).
 */
export const SKILLS: Skill[] = [
  // Frontend
  { name: 'Next.js 14', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'HTML5 & CSS3', category: 'Frontend' },

  // Mobile
  { name: 'Flutter', category: 'Mobile' },
  { name: 'Dart', category: 'Mobile' },
  { name: 'Android (Java)', category: 'Mobile' },
  { name: 'Firebase', category: 'Mobile' },

  // E-commerce
  { name: 'Shopify OS 2.0', category: 'E-commerce' },
  { name: 'Liquid', category: 'E-commerce' },
  { name: 'WordPress', category: 'E-commerce' },
  { name: 'WooCommerce', category: 'E-commerce' },

  // SEO & Analytics
  { name: 'Technical SEO', category: 'SEO & Analytics' },
  { name: 'GA4', category: 'SEO & Analytics' },
  { name: 'Search Console', category: 'SEO & Analytics' },
  { name: 'Tag Manager', category: 'SEO & Analytics' },

  // Infrastructure
  { name: 'Vercel', category: 'Infrastructure' },
  { name: 'DNS', category: 'Infrastructure' },
  { name: 'cPanel', category: 'Infrastructure' },
  { name: 'Microsoft 365', category: 'Infrastructure' },
  { name: 'SSL', category: 'Infrastructure' },

  // Tools & AI
  { name: 'Git', category: 'Tools & AI' },
  { name: 'GitHub', category: 'Tools & AI' },
  { name: 'Gradle', category: 'Tools & AI' },
  { name: 'Claude Code', category: 'Tools & AI' },
  { name: 'MCP', category: 'Tools & AI' },
  { name: 'CI/CD', category: 'Tools & AI' },
];
