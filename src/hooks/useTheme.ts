import { useContext } from 'react';
import { ThemeContext } from '@/context/theme-context';

/** Access theme state. Must be used within <ThemeProvider>. */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
