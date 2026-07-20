import { useCallback, useEffect, useMemo, useState } from 'react';
import { CommandPaletteContext } from '@/context/command-palette-context';
import { useSound } from '@/hooks';
import { CommandPalette } from './CommandPalette';

const TYPING_TAGS = new Set(['INPUT', 'TEXTAREA', 'SELECT']);

/**
 * Owns command-palette open state and the global Cmd/Ctrl+K shortcut.
 * Must be mounted inside the router (the palette navigates via react-router).
 * Any descendant can open it via useCommandPalette() (e.g. a navbar button).
 */
export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const sound = useSound();

  const handleSetOpen = useCallback(
    (next: boolean) => {
      setOpen((prev) => {
        if (next === prev) return prev;
        if (next) sound.open();
        else sound.close();
        return next;
      });
    },
    [sound],
  );

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey);
      if (isK) {
        e.preventDefault();
        handleSetOpen(!open);
        return;
      }
      // "/" opens too (GitHub-style), but never while typing in a field.
      const target = e.target as HTMLElement | null;
      const isTyping = !!target && (TYPING_TAGS.has(target.tagName) || target.isContentEditable);
      if (e.key === '/' && !isTyping && !open) {
        e.preventDefault();
        handleSetOpen(true);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, handleSetOpen]);

  const value = useMemo(
    () => ({ open, setOpen: handleSetOpen }),
    [open, handleSetOpen],
  );

  return (
    <CommandPaletteContext.Provider value={value}>
      {children}
      <CommandPalette open={open} onClose={() => handleSetOpen(false)} />
    </CommandPaletteContext.Provider>
  );
}
