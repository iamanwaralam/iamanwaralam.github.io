import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Section, SectionHeader, Reveal } from '@/components/common';
import { Button } from '@/components/ui/button';
import { ABOUT_STORY, HIGHLIGHTS } from '@/data/about';
import { RESUME_URL } from '@/data/navigation';
import { staggerContainer, fadeUp } from '@/animations/variants';
import { HighlightCard } from './about/HighlightCard';
import { AtAGlance } from './about/AtAGlance';

/**
 * About — professional story + "at a glance" facts + career highlights.
 * Full experience timeline (Phase 7), tech grid (Phase 5), and certifications
 * (Phase 10) each get their own dedicated sections; About stays a focused intro.
 */
export function About() {
  return (
    <Section id="about">
      <SectionHeader
        align="left"
        eyebrow="About Me"
        title={
          <>
            Turning ideas into{' '}
            <span className="text-gradient">fast, elegant products</span>
          </>
        }
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Story */}
        <Reveal className="flex flex-col">
          <div className="flex flex-col gap-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {ABOUT_STORY.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="gradient">
              <a href="#contact">
                Let&apos;s work together
                <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={RESUME_URL} download>
                <Download />
                Download Resume
              </a>
            </Button>
          </div>
        </Reveal>

        {/* At a glance */}
        <Reveal delay={0.1}>
          <AtAGlance />
        </Reveal>
      </div>

      {/* Career highlights */}
      <motion.div
        variants={staggerContainer(0.08, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {HIGHLIGHTS.map((h) => (
          <motion.div key={h.title} variants={fadeUp}>
            <HighlightCard highlight={h} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
