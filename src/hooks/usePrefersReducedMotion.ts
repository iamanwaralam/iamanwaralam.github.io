import { useMediaQuery } from './useMediaQuery';

/**
 * True when the user has requested reduced motion. Gate non-essential
 * animations behind this so the portfolio stays accessible.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
