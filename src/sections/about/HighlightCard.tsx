import { Card } from '@/components/ui/card';
import { Icon } from '@/components/common';
import type { Highlight } from '@/data/about';

/** Compact "what I bring" card used in the About highlights grid. */
export function HighlightCard({ highlight }: { highlight: Highlight }) {
  return (
    <Card interactive className="group h-full p-5">
      <div className="mb-4 grid size-11 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon name={highlight.icon} />
      </div>
      <h3 className="font-display text-base font-semibold">
        {highlight.title}
      </h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        {highlight.description}
      </p>
    </Card>
  );
}
