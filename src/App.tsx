import { MotionConfig } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeProvider';
import { SoundProvider } from '@/context/SoundProvider';
import {
  ScrollProgress,
  ScrollToTop,
  LoadingScreen,
  AnimatedCursor,
} from '@/components/common';
import { Footer } from '@/components/layout';
import { CommandPaletteProvider } from '@/components/command-palette';
import { AppRoutes } from '@/routes/AppRoutes';
import { EASE_PREMIUM } from '@/animations/variants';

/**
 * App shell: composes global providers (theme, sound, router, motion,
 * command palette) and mounts cross-cutting UI. Per-page <head> metadata is
 * handled by the SEO component using React 19's native document metadata.
 *
 * `reducedMotion="user"` makes every Framer animation honor the OS setting.
 */
export function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <MotionConfig reducedMotion="user" transition={{ ease: EASE_PREMIUM }}>
          <LoadingScreen />
          <AnimatedCursor />
          <BrowserRouter>
            <CommandPaletteProvider>
              <ScrollToTop />
              <ScrollProgress />
              <AppRoutes />
              <Footer />
            </CommandPaletteProvider>
          </BrowserRouter>
        </MotionConfig>
      </SoundProvider>
    </ThemeProvider>
  );
}

export default App;
