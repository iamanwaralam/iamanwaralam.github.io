import { useEffect, useMemo } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks';

// Deterministic-ish particle field generated once per mount.
function useParticles(count: number) {
  return useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 3,
        duration: 6 + Math.random() * 8,
        delay: Math.random() * 6,
        opacity: 0.25 + Math.random() * 0.4,
      })),
    [count],
  );
}

/**
 * Ambient hero background: two gradient blobs that drift on their own and
 * parallax subtly toward the cursor, gradient light washes, a soft grid, and
 * a floating particle field. All motion is disabled under prefers-reduced-motion.
 */
export function HeroBackground() {
  const reduce = usePrefersReducedMotion();
  const particles = useParticles(reduce ? 0 : 22);

  // Cursor parallax: normalized [-0.5, 0.5] pointer position, spring-smoothed.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 40, damping: 20 });
  const sy = useSpring(py, { stiffness: 40, damping: 20 });

  const blobAX = useTransform(sx, (v) => v * 40);
  const blobAY = useTransform(sy, (v) => v * 40);
  const blobBX = useTransform(sx, (v) => v * -30);
  const blobBY = useTransform(sy, (v) => v * -30);

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      px.set(e.clientX / window.innerWidth - 0.5);
      py.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [px, py, reduce]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Grid wash */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.15] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Gradient blobs with cursor parallax */}
      <motion.div
        style={{ x: blobAX, y: blobAY }}
        className="absolute -top-32 left-[10%] h-[28rem] w-[28rem] rounded-full bg-primary/25 blur-[130px] animate-blob"
      />
      <motion.div
        style={{ x: blobBX, y: blobBY }}
        className="absolute -bottom-40 right-[8%] h-[30rem] w-[30rem] rounded-full bg-secondary/20 blur-[140px] animate-blob"
      />
      <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      {/* Floating particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-foreground/60 animate-float"
          style={
            {
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              '--float-duration': `${p.duration}s`,
              '--float-delay': `${p.delay}s`,
              '--float-opacity': p.opacity,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Bottom fade into the page background */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
