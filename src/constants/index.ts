/** App-wide constants (non-content). Content lives in src/data. */

/** Tailwind breakpoints mirrored for JS media-query hooks. */
export const BREAKPOINTS = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
} as const;

/** localStorage keys used across the app. */
export const STORAGE_KEYS = {
  theme: 'theme',
  soundEnabled: 'sound-enabled',
} as const;

/** Command palette / keyboard shortcut (Ctrl/Cmd + K) — wired in extras phase. */
export const SHORTCUTS = {
  commandPalette: 'k',
} as const;
