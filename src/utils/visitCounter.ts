/**
 * Sitewide visit counter via CounterAPI (counterapi.dev) — a free, no-signup
 * hit counter with CORS enabled for browser use. One shared namespace/key
 * means every page view across the whole site increments the same total.
 * Fails silently (returns null) if the service is ever unreachable, so a
 * visitor never sees a broken counter.
 */
const NAMESPACE = 'iamanwaralam-github-io-portfolio-v1';
const KEY = 'visits';

export async function recordVisit(): Promise<number | null> {
  try {
    const res = await fetch(
      `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`,
    );
    if (!res.ok) return null;
    const data: unknown = await res.json();
    const value = (data as { count?: unknown })?.count;
    return typeof value === 'number' ? value : null;
  } catch {
    return null;
  }
}
