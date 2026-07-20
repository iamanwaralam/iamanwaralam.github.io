import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/common';
import { EXPERIENCE } from '@/data/experience';
import { staggerContainer } from '@/animations/variants';
import { TimelineItem } from './experience/TimelineItem';

/**
 * Experience — a modern vertical timeline. A continuous rail runs behind the
 * entries; each card staggers in on scroll. The current role pulses.
 */
export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">made an impact</span>
          </>
        }
        description="A track record of shipping real products — from client freelance work to a full-time developer role in Dubai."
      />

      <motion.ol
        variants={staggerContainer(0.12, 0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="relative mx-auto mt-14 flex max-w-3xl flex-col gap-6"
      >
        {/* Continuous rail */}
        <span
          aria-hidden
          className="absolute bottom-4 left-4 top-4 w-px bg-gradient-to-b from-primary/40 via-border to-transparent sm:left-5"
        />
        {EXPERIENCE.map((item) => (
          <TimelineItem key={`${item.company}-${item.role}`} item={item} />
        ))}
      </motion.ol>
    </Section>
  );
}
