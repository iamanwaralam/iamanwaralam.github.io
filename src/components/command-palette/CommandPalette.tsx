import { useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSound } from '@/hooks';
import { EASE_PREMIUM } from '@/animations/variants';
import { useCommands, filterCommands, type Command } from './useCommands';

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Global command palette (Cmd/Ctrl+K). Fuzzy-filters a flat command list
 * (navigation, projects, actions, socials), grouped by category, with full
 * keyboard control: arrows to move, Enter to run, Escape to close.
 */
export function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const sound = useSound();

  const commands = useCommands(onClose);
  const filtered = useMemo(() => filterCommands(commands, query), [commands, query]);

  const groups = useMemo(() => {
    const order: Command['group'][] = ['Navigate', 'Projects', 'Actions', 'Connect'];
    return order
      .map((group) => ({ group, items: filtered.filter((c) => c.group === group) }))
      .filter((g) => g.items.length > 0);
  }, [filtered]);

  const flatItems = useMemo(() => groups.flatMap((g) => g.items), [groups]);

  // Reset on open/query change.
  useEffect(() => {
    if (open) {
      setQuery('');
      setActiveIndex(0);
      // Focus after the entrance animation starts, not before it exists.
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => setActiveIndex(0), [query]);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const run = (command: Command) => {
    sound.click();
    command.perform();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, flatItems.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = flatItems[activeIndex];
      if (cmd) run(cmd);
    }
  };

  // Keep the active item scrolled into view.
  useEffect(() => {
    const el = listRef.current?.querySelector('[data-active="true"]');
    el?.scrollIntoView({ block: 'nearest' });
  }, [activeIndex]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: EASE_PREMIUM }}
            onKeyDown={onKeyDown}
            className="glass relative w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections, projects, actions…"
                aria-label="Command search"
                aria-activedescendant={flatItems[activeIndex]?.id}
                role="combobox"
                aria-expanded="true"
                aria-controls="command-palette-list"
                autoComplete="off"
                className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
              <kbd className="hidden shrink-0 rounded border border-border px-1.5 py-0.5 font-mono text-[0.65rem] text-muted-foreground sm:block">
                esc
              </kbd>
            </div>

            <div
              ref={listRef}
              id="command-palette-list"
              role="listbox"
              className="max-h-[60vh] overflow-y-auto p-2"
            >
              {flatItems.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-muted-foreground">
                  No results for &ldquo;{query}&rdquo;.
                </p>
              )}

              {groups.map(({ group, items }) => (
                <div key={group} className="mb-1 last:mb-0">
                  <p className="px-3 pb-1 pt-2 font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground/70">
                    {group}
                  </p>
                  {items.map((command) => {
                    const index = flatItems.indexOf(command);
                    const active = index === activeIndex;
                    return (
                      <button
                        key={command.id}
                        id={command.id}
                        type="button"
                        role="option"
                        aria-selected={active}
                        data-active={active}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => run(command)}
                        className={cn(
                          'flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors',
                          active ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-muted',
                        )}
                      >
                        <command.icon className="size-4 shrink-0" />
                        <span className="truncate">{command.label}</span>
                      </button>
                    );
                  })}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
