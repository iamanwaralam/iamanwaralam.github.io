import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks';
import { Button } from '@/components/ui/button';

/** Accessible light/dark switch with a crossfading icon. */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={className}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
          transition={{ duration: 0.2 }}
          className="flex"
        >
          {isDark ? <Sun /> : <Moon />}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
