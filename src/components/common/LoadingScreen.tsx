import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { EASE_PREMIUM } from '@/animations/variants';
import { usePrefersReducedMotion } from '@/hooks';

const MIN_VISIBLE_MS = 350;
const MAX_WAIT_MS = 1200;

/**
 * Brief branded loader shown while web fonts finish loading. Gated on
 * `document.fonts.ready`, floored at MIN_VISIBLE_MS (so it never flashes on
 * fast/cached loads) and capped at MAX_WAIT_MS (so a slow font never blocks
 * real content for long) — never a fake artificial delay.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const reduce = usePrefersReducedMotion();

  useEffect(() => {
    let cancelled = false;
    const started = performance.now();

    const finish = () => {
      if (cancelled) return;
      const elapsed = performance.now() - started;
      const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
      window.setTimeout(() => !cancelled && setVisible(false), remaining);
    };

    const fontsReady = document.fonts?.ready ?? Promise.resolve();
    const maxWait = new Promise<void>((resolve) => window.setTimeout(resolve, MAX_WAIT_MS));

    Promise.race([fontsReady, maxWait]).then(finish).catch(finish);

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.15 : 0.4, ease: EASE_PREMIUM }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
          role="status"
          aria-live="polite"
        >
          <span className="sr-only">Loading</span>
          <motion.span
            initial={reduce ? undefined : { scale: 0.85, opacity: 0.6 }}
            animate={
              reduce
                ? undefined
                : { scale: [0.85, 1, 0.85], opacity: [0.6, 1, 0.6] }
            }
            transition={
              reduce ? undefined : { duration: 1.1, repeat: Infinity, ease: 'easeInOut' }
            }
            aria-hidden="true"
            className="grid size-12 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] font-display text-lg font-bold text-primary-foreground"
          >
            A
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
