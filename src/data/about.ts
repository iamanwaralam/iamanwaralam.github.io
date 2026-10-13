/**
 * About-section content. Verified against Anwar's official CV
 * (public/resume/Anwar_Alam_Full_Stack_Web_Developer_Dubai_CV.pdf). Education, languages, and
 * highlights are now real — no placeholders.
 */

export const ABOUT_STORY: string[] = [
  'Experienced full-stack web developer with a background across web and mobile development and professional experience in Dubai. Specializes in building reliable, high-performance websites, e-commerce platforms and digital experiences for UAE businesses. Rebuilt a 32-route corporate platform and led a zero-downtime migration to a cloud hosting platform while preserving Microsoft 365 email services. Combines development expertise with technical SEO, analytics and web infrastructure management.',
  'At AK International, I build and maintain corporate websites, product pages, and web applications using Next.js, WordPress, and React Native. I manage the Esthica e-commerce store on Shopify — theme updates, product catalog maintenance, and payment-gateway support — and handle technical, on-page, and off-page SEO — including Google Business Profile setup and optimization — with performance tracked through GA4 and Google Search Console. I also administer Microsoft 365, Google Workspace, cPanel, domains, DNS, SSL, hosting, backups, security, and disaster-recovery readiness.',
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
    title: 'Full-Stack Web Development',
    description:
      'Reliable, high-performance websites and web applications built with Next.js and React.',
  },
  {
    icon: 'ShoppingBag',
    title: 'E-commerce & Shopify',
    description:
      'Custom Shopify themes and Next.js headless storefronts for UAE brands.',
  },
  {
    icon: 'TrendingUp',
    title: 'SEO & Analytics',
    description:
      'Technical, on-page & off-page SEO, including Google Business Profile, tracked with GA4 and Search Console.',
  },
  {
    icon: 'Sparkles',
    title: 'AI-Assisted Engineering',
    description:
      'Early adopter of Claude Code and MCP connectors for GitHub, Figma, and deployment tools.',
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
