import { SEO } from '@/components/common';
import { Navbar } from '@/components/layout';
import {
  Hero,
  About,
  TechStack,
  Services,
  Experience,
  Projects,
  Certifications,
  Testimonials,
  Contact,
} from '@/sections';
import { getPersonJsonLd } from '@/utils';

/**
 * Home page. Composes the single-page section layout. Sections are added
 * phase by phase (Hero → About → Skills → …).
 */
export function HomePage() {
  return (
    <>
      <SEO path="/" jsonLd={getPersonJsonLd()} />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Services />
        <Experience />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
        {/* Upcoming: Footer (Phase 14) */}
      </main>
    </>
  );
}

export default HomePage;
