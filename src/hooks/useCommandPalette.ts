import { useContext } from 'react';
import { CommandPaletteContext } from '@/context/command-palette-context';

/** Open/close the global command palette from anywhere (e.g. a navbar button). */
export function useCommandPalette() {
  const ctx = useContext(CommandPaletteContext);
  if (!ctx) {
    throw new Error('useCommandPalette must be used within a CommandPaletteProvider');
  }
  return ctx;
}
