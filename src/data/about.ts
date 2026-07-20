/**
 * About-section content. Verified against Anwar's official CV
 * (public/resume/Anwar_Alam_CV_OnePage.pdf). Education, languages, and
 * highlights are now real — no placeholders.
 */

export const ABOUT_STORY: string[] = [
  'I’m a full-stack developer with 8+ years across web and mobile, including the last 4 years based in Dubai, UAE. My focus today is building fast, modern web applications with Next.js and shipping e-commerce experiences that convert.',
  'At AK International I rebuilt the company’s corporate site as a Next.js 14 application with 32 statically generated routes, then led a zero-downtime migration to Vercel — preserving Microsoft 365 email with no interruption. Alongside that I ship custom Shopify OS 2.0 themes and headless storefronts for UAE brands, and own the SEO, analytics, and infrastructure that keep them performing.',
  'Before the web, I spent years as an Android and Flutter developer with published Google Play apps. That mobile background — plus an early move into AI-assisted engineering with Claude Code and MCP — shapes how I build: pragmatic, measurable, and fast.',
];

export interface Highlight {
  /** lucide-react icon name. */
  icon: string;
  title: string;
  description: string;
}

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: 'Code2',
    title: 'Next.js Full-Stack',
    description:
      'Modern, statically generated Next.js apps with strong Core Web Vitals.',
  },
  {
    icon: 'ShoppingBag',
    title: 'Shopify & Headless Commerce',
    description:
      'Custom Shopify OS 2.0 themes and Next.js headless storefronts for UAE brands.',
  },
  {
    icon: 'TrendingUp',
    title: 'SEO & Analytics',
    description:
      'Technical, on-page & off-page SEO tracked with GA4 and Search Console.',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Assisted Engineering',
    description:
      'Early adopter of Claude Code and MCP connectors (GitHub, Figma, Vercel).',
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  placeholder?: boolean;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: 'M.Tech, Computer Science',
    institution: 'JNTU Hyderabad, India',
    period: '',
  },
  {
    degree: 'B.E., Computer Science',
    institution: 'Osmania University, India',
    period: '',
  },
];

export interface LanguageItem {
  name: string;
  level: string;
  placeholder?: boolean;
}

export const LANGUAGES: LanguageItem[] = [
  { name: 'English', level: 'Professional' },
  { name: 'Hindi/Urdu', level: 'Fluent' },
  { name: 'Nepali', level: 'Fluent' },
];
