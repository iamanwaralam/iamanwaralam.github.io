import { useEffect, useState } from 'react';

/**
 * Scroll-spy: returns the id of the section currently in view. Powers the
 * active-link highlight in the navbar. Accepts the ordered list of section
 * ids (without the leading '#'). Safely no-ops for ids not yet in the DOM,
 * so it works before later-phase sections are mounted.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top that is intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // Trigger when a section crosses the upper third of the viewport.
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
