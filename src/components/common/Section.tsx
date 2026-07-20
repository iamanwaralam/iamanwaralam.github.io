import { cn } from '@/lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Anchor id used by nav links and the command palette. */
  id?: string;
  /** Set false to render without the inner Container (full-bleed sections). */
  contained?: boolean;
}

/**
 * Standard section wrapper: Apple-like vertical rhythm and an optional
 * anchor id. Keeps spacing consistent across every section component.
 */
export function Section({
  id,
  className,
  contained = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('scroll-mt-24 py-24 md:py-32', className)}
      {...props}
    >
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
