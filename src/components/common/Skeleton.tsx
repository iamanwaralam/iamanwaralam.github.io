import { cn } from '@/lib/utils';

/** Pulsing placeholder block — building block for loading skeletons. */
export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('animate-pulse rounded-lg bg-muted', className)}
    />
  );
}
