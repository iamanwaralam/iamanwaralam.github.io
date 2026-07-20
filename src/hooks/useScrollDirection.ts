import { useEffect, useRef, useState } from 'react';

export type ScrollDirection = 'up' | 'down';

interface ScrollState {
  direction: ScrollDirection;
  /** True once the user has scrolled past `offset` px from the top. */
  scrolled: boolean;
  y: number;
}

/**
 * Tracks scroll direction and whether the page is scrolled past an offset.
 * Powers the "hide navbar on scroll down, show on scroll up" behavior.
 * Uses rAF throttling to stay smooth.
 */
export function useScrollDirection(offset = 8): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: 'up',
    scrolled: false,
    y: 0,
  });
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      // Ignore tiny jitters to avoid flicker.
      if (Math.abs(delta) > 4) {
        setState({
          direction: delta > 0 && y > 80 ? 'down' : 'up',
          scrolled: y > offset,
          y,
        });
        lastY.current = y;
      } else {
        setState((s) => (s.scrolled === y > offset ? s : { ...s, scrolled: y > offset, y }));
      }
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return state;
}
