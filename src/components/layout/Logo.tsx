import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { PROFILE } from '@/data/profile';

/**
 * Brand mark: gradient monogram tile + wordmark. On the home page it smooth-
 * scrolls back to the top; on sub-pages (blog, case studies) it routes home.
 * The wordmark hides on very small screens to save space.
 */
export function Logo({ className }: { className?: string }) {
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  const classes = cn(
    'group flex items-center gap-2.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring',
    className,
  );

  const inner = (
    <>
      <span className="grid size-9 place-items-center rounded-lg bg-[linear-gradient(135deg,var(--primary),var(--secondary))] font-display text-base font-bold text-primary-foreground shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
        A
      </span>
      <span className="hidden font-display text-base font-semibold tracking-tight sm:block">
        {PROFILE.firstName}
        <span className="text-muted-foreground">.dev</span>
      </span>
    </>
  );

  // No aria-label override here: the accessible name should start with the
  // visible label ("Anwar.dev") for speech-input users, so extra context is
  // appended as trailing sr-only text instead of replacing it outright.
  return onHome ? (
    <a href="#top" className={classes}>
      {inner}
      <span className="sr-only">, back to top</span>
    </a>
  ) : (
    <Link to="/" className={classes}>
      {inner}
      <span className="sr-only">, home</span>
    </Link>
  );
}
