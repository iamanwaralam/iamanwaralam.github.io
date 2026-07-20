import { useContext } from 'react';
import { SoundContext } from '@/context/sound-context';
import { playClick, playOpen, playClose } from '@/utils/sound';

/** UI sound effects, gated by the visitor's sound preference. */
export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) throw new Error('useSound must be used within a SoundProvider');

  const { enabled, toggle } = ctx;
  return {
    enabled,
    toggle,
    click: () => enabled && playClick(),
    open: () => enabled && playOpen(),
    close: () => enabled && playClose(),
  };
}
