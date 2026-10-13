import type { SocialLink, Stat } from './types';

/**
 * Core personal brand. Verified against Anwar's official one-page CV
 * (public/resume/Anwar_Alam_Full_Stack_Web_Developer_Dubai_CV.pdf) — the authoritative source for
 * roles, experience, and bio.
 */
export const PROFILE = {
  name: 'Anwar Alam',
  firstName: 'Anwar',
  location: 'Dubai, UAE',
  /**
   * Rotating roles used by the hero typing animation. The first item is the
   * main professional headline verbatim from the CV — it's what visitors see
   * by default before the typewriter cycles. None of these lead with a
   * specific framework/language name (Next.js, React, TypeScript stay in the
   * Skills section and project descriptions instead).
   */
  roles: [
    'Full-Stack Web Developer | E-commerce & SEO',
    'E-commerce Developer',
    'SEO Specialist',
    'Shopify Developer',
    'WordPress Developer',
  ],
  /** Short role label for sentence contexts (alt text, schema, footer). */
  primaryRole: 'Full-Stack Web Developer',
  availability: ['Remote', 'Hybrid', 'Onsite', 'Freelance'],
  available: true,
  /** Short hero line (condensed from the CV profile — no exact duration). */
  tagline:
    'Experienced full-stack web developer building reliable, high-performance websites, e-commerce platforms, and digital experiences for UAE businesses.',
  /** Longer about paragraph — mirrors the CV's professional summary verbatim. */
  bio: 'Experienced full-stack web developer with a background across web and mobile development and professional experience in Dubai. Specializes in building reliable, high-performance websites, e-commerce platforms and digital experiences for UAE businesses. Rebuilt a 32-route corporate platform and led a zero-downtime migration to a cloud hosting platform while preserving Microsoft 365 email services. Combines development expertise with technical SEO, analytics and web infrastructure management.',
} as const;

/** Headline stats — grounded in the CV. No exact-duration figures. */
export const STATS: Stat[] = [
  { value: '50+', label: 'Web Projects Shipped' },
  { value: '100%', label: 'Zero-Downtime Migration' },
  { value: 'UAE', label: 'Dubai-Based Developer' },
];

export const SOCIALS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/iamanwaralam', icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/iamanwaralam/',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/anwaralam4u/',
    icon: 'instagram',
  },
  { label: 'X (Twitter)', href: 'https://x.com/iamanwaralam', icon: 'twitter' },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/971586619341',
    icon: 'whatsapp',
  },
  { label: 'Email', href: 'mailto:iamanwaralam48@gmail.com', icon: 'email' },
];
