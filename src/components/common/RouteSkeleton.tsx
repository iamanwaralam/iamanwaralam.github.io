import { Container } from './Container';
import { Skeleton } from './Skeleton';

/**
 * Generic page-shaped skeleton shown while a lazy route chunk downloads.
 * Route chunks are small (a few KB gzipped) so this is mostly seen on slow
 * connections — a rough layout preview beats a bare spinner.
 */
export function RouteSkeleton() {
  return (
    <div className="min-h-dvh pt-32" role="status" aria-live="polite">
      <span className="sr-only">Loading page…</span>
      <Container className="flex flex-col gap-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-12 w-2/3" />
        <Skeleton className="h-4 w-full max-w-lg" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-48 w-full" />
          ))}
        </div>
      </Container>
    </div>
  );
}
