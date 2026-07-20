import { cn } from '@/lib/utils';

/** Centered max-width wrapper with consistent horizontal gutters. */
export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-6xl px-6', className)} {...props}>
      {children}
    </div>
  );
}
