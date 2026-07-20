import { createContext } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextValue {
  theme: Theme;
  /** Explicitly set the theme. */
  setTheme: (theme: Theme) => void;
  /** Flip between light and dark. */
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(
  undefined,
);
