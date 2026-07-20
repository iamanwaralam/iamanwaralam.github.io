import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { fadeUp } from '@/animations/variants';
import type { ExperienceItem } from '@/data/types';

/**
 * One entry on the experience timeline: a dot on the rail + a content card.
 * `datesToConfirm` surfaces an honest "dates to confirm" note instead of
 * presenting estimated dates as fact.
 */
export function TimelineItem({ item }: { item: ExperienceItem }) {
  return (
    <motion.li variants={fadeUp} className="relative pl-10 sm:pl-14">
      {/* Rail node */}
      <span className="absolute left-0 top-1.5 grid size-8 place-items-center rounded-full border border-border bg-card sm:size-10">
        <Briefcase className="size-3.5 text-primary sm:size-4" />
        {item.current && (
          <span className="absolute -right-0.5 -top-0.5 flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-accent ring-2 ring-card" />
          </span>
        )}
      </span>

      <Card className="p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-semibold">{item.role}</h3>
            <p className="text-sm font-medium text-primary-text">{item.company}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              {item.current && <Badge variant="accent">Current</Badge>}
              <span className="font-mono text-xs text-muted-foreground">
                {item.period}
              </span>
            </div>
            <p className="mt-1 flex items-center justify-end gap-1 text-xs text-muted-foreground">
              <MapPin className="size-3" />
              {item.location}
            </p>
          </div>
        </div>

        <ul className="mt-4 flex flex-col gap-2">
          {item.responsibilities.map((r, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
              {r}
            </li>
          ))}
        </ul>

        {item.stack && item.stack.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {item.stack.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </div>
        )}

        {item.datesToConfirm && (
          <p className="mt-4 font-mono text-[0.7rem] text-muted-foreground/70">
            * Dates to confirm
          </p>
        )}
      </Card>
    </motion.li>
  );
}
