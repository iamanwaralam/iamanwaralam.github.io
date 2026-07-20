import { createContext } from 'react';

export interface SoundContextValue {
  enabled: boolean;
  toggle: () => void;
}

export const SoundContext = createContext<SoundContextValue | undefined>(
  undefined,
);
