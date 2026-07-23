import { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';
import { recordVisit } from '@/utils';

/**
 * Sitewide "opened N times" counter, shown quietly in the footer. Renders
 * nothing until (and unless) the count resolves — no loading flash, no
 * broken state visible if the counting service is ever unreachable.
 */
export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    recordVisit().then((value) => {
      if (!cancelled) setCount(value);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <Eye className="size-3.5" aria-hidden="true" />
      Visited {count.toLocaleString()} times
    </span>
  );
}
