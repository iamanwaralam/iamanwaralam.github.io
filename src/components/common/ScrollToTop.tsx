import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Re-correction delays (ms) for hash scrolling. A single post-paint scroll
 * lands short: web fonts swapping in, lazy project images loading, and the
 * hero's typewriter animation all keep reshuffling layout for over a second
 * after first paint, so the target section's offset keeps moving.
 */
const RESCROLL_DELAYS_MS = [0, 150, 400, 800, 1400];

/**
 * Scroll management on route change:
 * - plain pathname change → jump to top;
 * - hash present (e.g. footer "Quick links" → /#projects from a sub-page) →
 *   scroll to that section, then re-correct a few times while layout above
 *   it is still settling. Stops the moment the visitor scrolls manually, so
 *   it never yanks them back mid-read. Smoothness follows the CSS
 *   `scroll-behavior` (disabled under prefers-reduced-motion).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }

    const id = hash.slice(1);
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };

    const timers = RESCROLL_DELAYS_MS.map((delay) =>
      setTimeout(() => {
        if (!cancelled) document.getElementById(id)?.scrollIntoView();
      }, delay),
    );

    window.addEventListener('wheel', cancel, { once: true, passive: true });
    window.addEventListener('touchstart', cancel, { once: true, passive: true });

    return () => {
      cancel();
      timers.forEach(clearTimeout);
      window.removeEventListener('wheel', cancel);
      window.removeEventListener('touchstart', cancel);
    };
  }, [pathname, hash]);

  return null;
}
