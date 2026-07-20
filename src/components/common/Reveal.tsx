import { motion, type Variants } from 'framer-motion';
import { fadeUp } from '@/animations/variants';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Override the default fadeUp variant. */
  variants?: Variants;
  /** Delay the reveal (seconds). */
  delay?: number;
  /** Only animate the first time it enters the viewport. */
  once?: boolean;
  as?: 'div' | 'li' | 'span';
}

/**
 * Scroll-triggered entrance wrapper. Motion automatically respects
 * `prefers-reduced-motion` via MotionConfig set in App.
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
  as = 'div',
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
