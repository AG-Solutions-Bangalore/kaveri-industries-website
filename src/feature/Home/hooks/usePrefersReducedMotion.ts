import { useSyncExternalStore } from "react";

/**
 * `true` when the user has requested reduced motion at the OS level.
 * Uses `useSyncExternalStore` so the rule about setState-in-effect stays
 * happy — there is no setState in an effect, the value is delivered by the
 * browser's media-query subscription.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
      mql.addEventListener("change", cb);
      return () => mql.removeEventListener("change", cb);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false, // server snapshot — assume motion is OK
  );
}