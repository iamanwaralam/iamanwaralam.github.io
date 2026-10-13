import type { NavLink } from './types';

/**
 * Primary in-page navigation. "Blog" is deliberately not listed here —
 * pulled from nav until there's real published content (the /blog route
 * itself still works, it's just not promoted). Add it back once articles
 * exist.
 */
export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

/** Path to the resume PDF (Anwar's one-page CV). */
export const RESUME_URL = '/resume/Anwar_Alam_Full_Stack_Web_Developer_Dubai_CV.pdf';
