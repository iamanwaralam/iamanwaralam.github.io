import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll management on route change:
 * - plain pathname change → jump to top;
 * - hash present (e.g. footer "Quick links" → /#projects from a sub-page) →
 *   scroll to that section once the new page has painted. Smoothness follows
 *   the CSS `scroll-behavior` (disabled under prefers-reduced-motion).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target page/sections exist before scrolling.
      const raf = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
