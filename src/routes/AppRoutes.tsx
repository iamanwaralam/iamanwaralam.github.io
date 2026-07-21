import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RouteSkeleton } from '@/components/common';
import { EASE_PREMIUM } from '@/animations/variants';

// Lazy-load pages for code splitting.
const HomePage = lazy(() => import('@/pages/HomePage'));
const CaseStudyPage = lazy(() => import('@/pages/CaseStudyPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

/**
 * Fades + rises each page in on mount. Deliberately does NOT use
 * AnimatePresence to animate the OLD page's exit: wrapping
 * `<Routes location={location} key={location.pathname}>` in
 * `<AnimatePresence>` reliably left the previous route's exit animation
 * stuck mid-flight in this app (two pages' content rendered simultaneously,
 * requiring a hard refresh to recover) — reproduced with and without
 * lazy-loaded routes, with and without `mode="wait"`. Animating only the
 * entrance sidesteps that failure mode entirely: React Router mounts the new
 * page and unmounts the old one synchronously and correctly, exactly like
 * plain `<Routes>` with no animation wrapper at all.
 */
function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: EASE_PREMIUM }}
    >
      <Suspense fallback={<RouteSkeleton />}>{children}</Suspense>
    </motion.div>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Page>
            <HomePage />
          </Page>
        }
      />
      <Route
        path="/projects/:slug"
        element={
          <Page>
            <CaseStudyPage />
          </Page>
        }
      />
      <Route
        path="/blog"
        element={
          <Page>
            <BlogPage />
          </Page>
        }
      />
      <Route
        path="/blog/:slug"
        element={
          <Page>
            <BlogPostPage />
          </Page>
        }
      />
      <Route
        path="*"
        element={
          <Page>
            <NotFoundPage />
          </Page>
        }
      />
    </Routes>
  );
}
