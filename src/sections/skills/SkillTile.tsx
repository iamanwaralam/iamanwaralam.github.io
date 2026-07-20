import { motion } from 'framer-motion';
import { TechIcon } from '@/components/common';
import { fadeUp } from '@/animations/variants';

/**
 * Single technology tile: glass chip that lifts and reveals the brand color
 * on hover. Wrapped in a motion item so parent stagger controls its entrance.
 */
export function SkillTile({ name }: { name: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-lg hover:shadow-primary/5"
    >
      <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-background group-hover:text-foreground">
        {/* Monochrome by default, brand color on hover */}
        <span className="group-hover:hidden">
          <TechIcon name={name} />
        </span>
        <span className="hidden group-hover:block">
          <TechIcon name={name} colored />
        </span>
      </span>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
}
