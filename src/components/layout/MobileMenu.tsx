import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Mail, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { SocialLinks, SoundToggle } from '@/components/common';
import { NAV_LINKS, RESUME_URL } from '@/data/navigation';
import { PROFILE } from '@/data/profile';
import { EASE_PREMIUM, staggerContainer, fadeUp } from '@/animations/variants';

interface MobileMenuProps {
  active: string;
  onClose: () => void;
}

/**
 * Full-screen glass overlay menu for mobile. Locks body scroll, closes on
 * Escape or link tap, and staggers its entrance. Rendered inside the navbar's
 * AnimatePresence so exit animates too.
 */
export function MobileMenu({ active, onClose }: MobileMenuProps) {
  // Lock scroll + wire Escape while open.
  useEffect(() => {
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: EASE_PREMIUM }}
      className="glass fixed inset-0 z-[55] flex flex-col md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      <div className="flex items-center justify-between px-6 pt-5">
        <span className="font-display text-lg font-semibold">
          {PROFILE.firstName}
          <span className="text-muted-foreground">.dev</span>
        </span>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="grid size-10 place-items-center rounded-lg text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-5" />
        </button>
      </div>

      <motion.nav
        variants={staggerContainer(0.06, 0.1)}
        initial="hidden"
        animate="visible"
        className="flex flex-1 flex-col justify-center gap-1 px-6"
        aria-label="Mobile"
      >
        {NAV_LINKS.map((link) => {
          const isHash = link.href.startsWith('#');
          const isActive = isHash && active === link.href.slice(1);
          const className = cn(
            'font-display text-3xl font-semibold tracking-tight transition-colors',
            isActive
              ? 'text-gradient'
              : 'text-foreground/80 hover:text-foreground',
          );
          return (
            <motion.div key={link.href} variants={fadeUp}>
              {isHash ? (
                <a href={link.href} onClick={onClose} className={className}>
                  {link.label}
                </a>
              ) : (
                <Link to={link.href} onClick={onClose} className={className}>
                  {link.label}
                </Link>
              )}
            </motion.div>
          );
        })}
      </motion.nav>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.25 }}
        className="flex flex-col gap-4 border-t border-border px-6 py-6"
      >
        <div className="flex gap-3">
          <Button asChild variant="outline" className="flex-1">
            <a href={RESUME_URL} download onClick={onClose}>
              <Download />
              Resume
            </a>
          </Button>
          <Button asChild variant="gradient" className="flex-1">
            <a href="#contact" onClick={onClose}>
              <Mail />
              Let&apos;s Talk
            </a>
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <SocialLinks />
          <SoundToggle />
        </div>
      </motion.div>
    </motion.div>
  );
}
