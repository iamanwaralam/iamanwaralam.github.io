import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useMediaQuery, usePrefersReducedMotion } from '@/hooks';

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor-hover]';

/**
 * Custom two-layer cursor: a small dot tracks the pointer exactly, a larger
 * ring trails behind on a spring and scales up over interactive elements.
 * Only mounts for mice/trackpads (`pointer: fine`) with no reduced-motion
 * preference — touch devices and motion-sensitive visitors keep the native
 * cursor untouched.
 */
export function AnimatedCursor() {
  const isFinePointer = useMediaQuery('(pointer: fine)');
  const reduce = usePrefersReducedMotion();
  const active = isFinePointer && !reduce;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30, mass: 0.5 });

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) return;

    document.documentElement.classList.add('custom-cursor-active');

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest(INTERACTIVE_SELECTOR));
    };
    const onLeave = () => setVisible(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- x/y motion values are stable refs
  }, [active]);

  if (!active) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[90]"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s' }}
    >
      {/* Dot: exact position */}
      <motion.div
        style={{ x, y }}
        className="absolute left-0 top-0 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
      />
      {/* Ring: trails via spring, grows over interactive elements */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{ scale: hovering ? 1.8 : 1 }}
        transition={{ scale: { duration: 0.2 } }}
        className="absolute left-0 top-0 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50"
      />
    </div>
  );
}
