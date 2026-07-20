import { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { RouteSkeleton } from '@/components/common';
import { pageTransition } from '@/animations/variants';

// Lazy-load pages for code splitting.
const HomePage = lazy(() => import('@/pages/HomePage'));
const CaseStudyPage = lazy(() => import('@/pages/CaseStudyPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

/** Wrap each page with an animated transition. */
function Page({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export function AppRoutes() {
  const location = useLocation();
  return (
    <Suspense fallback={<RouteSkeleton />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
    </Suspense>
  );
}
