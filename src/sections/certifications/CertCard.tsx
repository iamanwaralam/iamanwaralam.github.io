import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import { Icon } from '@/components/common';
import { fadeUp } from '@/animations/variants';
import type { Certification } from '@/data/certifications';

/**
 * Certification card: badge-style with a verified check, hover lift + glow.
 * Shows the issuer/year when known, otherwise a neutral "Certified" label
 * (never a fabricated issuer).
 */
export function CertCard({ cert }: { cert: Certification }) {
  const meta = [cert.issuer, cert.year].filter(Boolean).join(' · ');

  return (
    <motion.div
      variants={fadeUp}
      className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Hover glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />

      <span className="relative grid size-14 shrink-0 place-items-center rounded-xl bg-[linear-gradient(135deg,var(--primary),var(--secondary))] text-primary-foreground">
        <Icon name={cert.icon} className="size-7" />
      </span>

      <div className="relative min-w-0">
        <div className="flex items-center gap-1.5">
          <h3 className="font-display text-base font-semibold">{cert.title}</h3>
          <BadgeCheck className="size-4 shrink-0 text-accent" />
        </div>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {meta || 'Certified'}
        </p>
      </div>
    </motion.div>
  );
}
