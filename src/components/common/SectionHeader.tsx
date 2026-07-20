import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  /** Small mono label above the title, e.g. "About Me". */
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

/** Consistent section heading (eyebrow + title + description) used site-wide. */
export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 font-mono text-sm font-medium text-primary-text">
          <span className="h-px w-6 bg-primary/50" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance text-4xl font-bold leading-tight sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-balance text-lg text-muted-foreground',
            align === 'center' ? 'max-w-2xl' : 'max-w-2xl',
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
