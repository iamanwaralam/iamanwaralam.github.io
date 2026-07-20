import { Search } from 'lucide-react';
import { useCommandPalette } from '@/hooks';
import { cn } from '@/lib/utils';

/** Discoverable "⌘K" affordance — the shortcut alone is too hidden to rely on. */
export function CommandPaletteTrigger({ className }: { className?: string }) {
  const { setOpen } = useCommandPalette();
  const isMac =
    typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.userAgent);

  return (
    <button
      type="button"
      onClick={() => setOpen(true)}
      className={cn(
        'flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground',
        className,
      )}
    >
      {/* Not aria-label: the accessible name derives from this visible
          content (like Logo.tsx) so it can never drift from what's on
          screen. This lead-in is invisible but keeps the name descriptive
          even below lg, where only the kbd hint is visually shown. */}
      <span className="sr-only">Search — </span>
      <Search className="size-3.5" />
      <span className="hidden lg:inline">Search</span>
      <kbd className="ml-1 flex items-center gap-0.5 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.65rem]">
        {isMac ? '⌘' : 'Ctrl'}K
      </kbd>
    </button>
  );
}
