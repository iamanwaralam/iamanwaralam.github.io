import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Icon } from '@/components/common';
import { fadeUp } from '@/animations/variants';
import type { Service } from '@/data/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

/**
 * Premium service card with a cursor-following spotlight. The spotlight is a
 * radial gradient positioned via CSS vars updated on pointer move (cheap, no
 * React re-render). Links through to the contact section.
 */
export function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <motion.a
      ref={ref}
      href="#contact"
      variants={fadeUp}
      onPointerMove={onMove}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
      aria-label={`${service.title} — get in touch`}
    >
      {/* Cursor spotlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(240px circle at var(--x) var(--y), color-mix(in oklab, var(--primary) 12%, transparent), transparent 70%)',
        }}
      />

      <div className="relative flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon name={service.icon} className="size-6" />
        </span>
        <span className="font-mono text-sm text-muted-foreground/50">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-lg font-semibold">
        {service.title}
      </h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <span className="relative mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary-text opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-1">
        Get started
        <ArrowUpRight className="size-4" />
      </span>
    </motion.a>
  );
}
