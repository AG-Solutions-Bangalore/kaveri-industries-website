/**
 * Eagerly warm the lazy chunks for routes they're likely to visit next.
 * Kept out of `routes.tsx` so that file only exports components (Fast
 * Refresh needs that).
 *
 * Perf guards: skip entirely on Save-Data / 2G-slow connections so idle
 * prefetching never saturates mobile networks right after LCP, and stagger
 * imports so they don't compete with the critical path. Only the two most
 * likely next routes (Products, Contact) are warmed; the rest load on
 * hover / navigation intent.
 */
export function routePreloader(): void {
  try {
    const conn = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection;
    if (conn?.saveData) return;
    if (conn?.effectiveType && /2g|slow-2g/i.test(conn.effectiveType)) return;
  } catch {
    // navigator.connection unavailable — proceed with staggered preload.
  }

  const warm = (loader: () => Promise<unknown>, delayMs: number) => {
    window.setTimeout(() => {
      void loader().catch(() => {});
    }, delayMs);
  };

  // Fire-and-forget — these promises are cached by the lazy() loader above.
  // Staggered so they yield to LCP/TBT instead of bursting at idle time.
  warm(() => import("@/feature/Products/pages/ProductsPage"), 2500);
  warm(() => import("@/feature/Contact/pages/ContactPage"), 3500);
}