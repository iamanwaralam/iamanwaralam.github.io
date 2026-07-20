import { useCallback, useEffect, useMemo, useState } from 'react';
import { SoundContext } from './sound-context';
import { STORAGE_KEYS } from '@/constants';
import { playClick } from '@/utils/sound';

/**
 * UI sound preference — off by default (a portfolio shouldn't make noise
 * uninvited). Persists the visitor's choice once they opt in.
 */
export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(STORAGE_KEYS.soundEnabled) === 'true';
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEYS.soundEnabled, String(enabled));
  }, [enabled]);

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      if (next) playClick(); // confirmation tone, only when turning on
      return next;
    });
  }, []);

  const value = useMemo(() => ({ enabled, toggle }), [enabled, toggle]);

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}
