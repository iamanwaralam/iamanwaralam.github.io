import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/common';
import { SKILLS, SKILL_CATEGORIES } from '@/data/skills';
import { staggerContainer } from '@/animations/variants';
import { SkillTile } from './skills/SkillTile';

/**
 * Tech Stack — every technology grouped by category in an animated grid.
 * Tiles stagger in on scroll and reveal their brand color on hover.
 */
export function TechStack() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Tech Stack"
        title={
          <>
            Tools I use to <span className="text-gradient">ship</span>
          </>
        }
        description="A full-stack toolkit spanning modern web, mobile, e-commerce, SEO, infrastructure, and AI-assisted engineering — chosen for speed, reliability, and results."
      />

      <div className="mt-14 flex flex-col gap-10">
        {SKILL_CATEGORIES.map((category) => {
          const items = SKILLS.filter((s) => s.category === category);
          if (items.length === 0) return null;
          return (
            <div key={category}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {category}
                </h3>
                <span className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs text-muted-foreground/60">
                  {items.length}
                </span>
              </div>

              <motion.div
                variants={staggerContainer(0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
              >
                {items.map((skill) => (
                  <SkillTile key={skill.name} name={skill.name} />
                ))}
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
