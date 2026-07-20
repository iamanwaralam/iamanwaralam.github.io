import { useScrollProgress } from '@/hooks';

/** Thin gradient bar at the top of the viewport showing reading progress. */
export function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[linear-gradient(90deg,var(--primary),var(--secondary))]"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}
