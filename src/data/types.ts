/** Shared content types for the portfolio data layer. */

export interface SocialLink {
  label: string;
  href: string;
  /** react-icons key resolved in the UI (kept as a string to keep data pure). */
  icon: 'github' | 'linkedin' | 'instagram' | 'twitter' | 'whatsapp' | 'email';
}

export interface NavLink {
  label: string;
  /** In-page anchor (e.g. "#projects") or route path (e.g. "/projects"). */
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  /** lucide-react icon name. */
  icon: string;
}

export interface Skill {
  name: string;
  /** Grouping used by the tech-stack section filters. */
  category: SkillCategory;
}

export type SkillCategory =
  | 'Frontend'
  | 'Mobile'
  | 'E-commerce'
  | 'SEO & Analytics'
  | 'Infrastructure'
  | 'Tools & AI';

export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  /** Path under /public; falls back to a generated cover if absent. */
  image?: string;
  featured?: boolean;
}

export type ProjectCategory =
  | 'Web'
  | 'E-commerce'
  | 'Mobile'
  | 'Data'
  | 'SEO';

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-07-18". */
  date: string;
  category: string;
  tags: string[];
  /** Estimated reading time in minutes. */
  readingMinutes: number;
}

export interface BlogPost extends BlogPostMeta {
  /** Raw markdown body (without frontmatter). */
  body: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  /** e.g. "2024 — Present". */
  period: string;
  current?: boolean;
  responsibilities: string[];
  /** Skills/tech chips shown on the card. */
  stack?: string[];
  /** True when dates are estimates awaiting confirmation from the CV. */
  datesToConfirm?: boolean;
}
