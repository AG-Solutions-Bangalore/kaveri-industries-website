/**
 * Eagerly warm the lazy chunks for routes they're likely to visit next.
 * Kept out of `routes.tsx` so that file only exports components (Fast
 * Refresh needs that).
 */
export function routePreloader(): void {
  // Fire-and-forget — these promises are cached by the lazy() loader above.
  void import("@/feature/About/pages/AboutPage");
  void import("@/feature/Products/pages/ProductsPage");
  void import("@/feature/Products/pages/ProductDetailPage");
  void import("@/feature/Industries/pages/IndustriesPage");
  void import("@/feature/Contact/pages/ContactPage");
}