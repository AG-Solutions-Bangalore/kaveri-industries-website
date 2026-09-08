import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import { setLenisInstance, type LenisLike } from "@/lib/lenisInstance";
import { usePrefersReducedMotion } from "@/feature/Home/hooks/usePrefersReducedMotion";

/**
 * Wraps the app with a Lenis-powered smooth scroll.
 *
 * Performance & feel choices:
 * - `root` (no wrapper divs) keeps the document's normal layout intact so
 *   `position: sticky` / `position: fixed` continue to work and the
 *   existing IntersectionObserver-based animations (`motion`'s
 *   `whileInView`, `useReveal`) keep firing without any DOM change.
 * - `lerp: 0.1` (with `duration: 0`) instead of a duration-based easing —
 *   lerp is symmetric and convergent, so wheel events never cause the
 *   visible 1–2 tick "snap" that duration-based easing does on the first
 *   scroll. Pair with `overscroll-behavior: none` in `index.css` to keep
 *   the browser's native bounce at the page edges from compounding it.
 * - `syncTouch: false` keeps native touch / momentum scrolling on mobile —
 *   no fight with iOS Safari's pull-back gestures, no lost inertia.
 * - `prefers-reduced-motion: reduce` bypasses Lenis entirely and falls back
 *   to native browser scroll.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();
  // Upgrade to Lenis only after the browser is idle (or 2.5s fallback), so
  // its chunk + rAF loop never compete with FCP/LCP/TBT. Until then the app
  // scrolls natively — users notice no difference mid-load.
  const [upgrade, setUpgrade] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;
    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches
    )
      return;
    const ric = (
      window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      }
    ).requestIdleCallback;
    if (typeof ric === "function") {
      const h = ric.call(window, () => setUpgrade(true), { timeout: 2500 });
      return () => window.cancelIdleCallback?.(h);
    }
    const t = window.setTimeout(() => setUpgrade(true), 2500);
    return () => window.clearTimeout(t);
  }, [reducedMotion]);

  // Publish the instance for hook-free consumers (ScrollToTop) the moment
  // Lenis mounts — and clear it on unmount. `unknown` keeps this callback
  // assignable to ReactLenis's ref type without importing `lenis` types.
  const handleReady = useCallback((lenis: unknown) => {
    setLenisInstance(lenis as LenisLike | null);
  }, []);

  // Native scroll on reduced-motion AND touch/coarse-pointer devices:
  // Lenis hijacks wheel + runs a permanent rAF lerp loop that inflates
  // TBT/INP on mobile with zero UX benefit (syncTouch is already off).
  const isCoarsePointer =
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: coarse)").matches;

  if (reducedMotion || isCoarsePointer || !upgrade) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      ref={handleReady}
      options={{
        // Lerp mode — each frame: actual += (target - actual) * 0.1.
        // Stable, no overshoot, no boundary rubber-band.
        lerp: 0.1,
        // Explicit zero so Lenis uses lerp, not duration easing.
        duration: 0,
        smoothWheel: true,
        syncTouch: false,
        wheelMultiplier: 1,
        // Slightly faster touch-multiplier so mobile scroll doesn't feel
        // laggy when the user does opt into the wheel path.
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}