import type { SocialLink, Stat } from './types';

/**
 * Core personal brand. Verified against Anwar's official one-page CV
 * (public/resume/Anwar_Alam_CV_OnePage.pdf) — the authoritative source for
 * roles, experience, and bio.
 */
export const PROFILE = {
  name: 'Anwar Alam',
  firstName: 'Anwar',
  location: 'Dubai, UAE',
  /** Rotating roles used by the hero typing animation (from CV headline + skills). */
  roles: [
    'Full-Stack Web Developer',
    'Next.js Developer',
    'Shopify Developer',
    'Flutter Developer',
    'SEO Specialist',
  ],
  primaryRole: 'Full-Stack Web Developer',
  availability: ['Remote', 'Hybrid', 'Onsite', 'Freelance'],
  available: true,
  yearsOfExperience: 8,
  /** Short hero line (condensed from the CV profile). */
  tagline:
    'Full-stack developer with 8+ years across web and mobile — building fast Next.js applications, custom Shopify storefronts, and headless commerce for UAE brands.',
  /** Longer about paragraph (from the CV profile summary). */
  bio: 'Full-stack developer with 8+ years across web and mobile, including 4 years in the UAE. I rebuild corporate sites as modern Next.js applications, ship custom Shopify OS 2.0 themes and headless storefronts, and drive the SEO and infrastructure work that keeps them fast and discoverable. Former Android/Flutter developer with published Google Play apps, and an early adopter of AI-assisted engineering with Claude Code and MCP.',
} as const;

/** Headline stats — grounded in the CV. */
export const STATS: Stat[] = [
  { value: '8+', label: 'Years of Experience' },
  { value: '4', label: 'Years in the UAE' },
  { value: '32', label: 'Static Routes Shipped' },
  { value: '100%', label: 'Zero-Downtime Migration' },
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
  { label: 'X (Twitter)', href: 'https://twitter.com/anwar_alam4U', icon: 'twitter' },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/971586619341',
    icon: 'whatsapp',
  },
  { label: 'Email', href: 'mailto:iamanwaralam48@gmail.com', icon: 'email' },
];
