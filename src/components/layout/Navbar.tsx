import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ThemeToggle, SoundToggle } from '@/components/common';
import { CommandPaletteTrigger } from '@/components/command-palette';
import { useScrollDirection, useActiveSection } from '@/hooks';
import { NAV_LINKS, RESUME_URL } from '@/data/navigation';
import { EASE_PREMIUM } from '@/animations/variants';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

// Section ids derived from the in-page (hash) nav links only.
const SECTION_IDS = NAV_LINKS.filter((l) => l.href.startsWith('#')).map((l) =>
  l.href.slice(1),
);

/**
 * Premium floating navbar.
 * - Glass pill that intensifies once the page is scrolled.
 * - Hides on scroll-down, reveals on scroll-up (useScrollDirection).
 * - Active link tracked via scroll-spy (useActiveSection).
 * - Desktop actions: theme, resume, contact. Mobile: hamburger → MobileMenu.
 */
export function Navbar() {
  const { direction, scrolled } = useScrollDirection();
  const active = useActiveSection(SECTION_IDS);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Keep the bar pinned while the mobile menu is open.
  const hidden = direction === 'down' && !mobileOpen;

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -96 : 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE_PREMIUM }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          aria-label="Primary"
          className={cn(
            'flex w-full max-w-4xl items-center justify-between gap-2 rounded-full border px-3 py-2 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
            scrolled
              ? 'glass border-border shadow-lg shadow-black/5'
              : 'border-transparent bg-transparent',
          )}
        >
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const isHash = link.href.startsWith('#');
              const isActive = isHash && active === link.href.slice(1);
              const className = cn(
                'relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors',
                isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              );
              const pill = isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 -z-10 rounded-full bg-muted"
                  transition={{ duration: 0.3, ease: EASE_PREMIUM }}
                />
              );
              return (
                <li key={link.href}>
                  {isHash ? (
                    <a href={link.href} className={className}>
                      {pill}
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.href} className={className}>
                      {pill}
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop actions */}
          <div className="hidden items-center gap-1.5 md:flex">
            <CommandPaletteTrigger className="hidden lg:flex" />
            <ThemeToggle />
            <SoundToggle />
            <Button asChild variant="ghost" size="sm">
              <a href={RESUME_URL} download>
                <Download />
                Resume
              </a>
            </Button>
            <Button asChild variant="gradient" size="sm">
              <a href="#contact">
                <Mail />
                Let&apos;s Talk
              </a>
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="grid size-10 place-items-center rounded-lg text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-current" />
                <span className="h-0.5 w-5 rounded-full bg-current" />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileMenu
            active={active}
            onClose={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
