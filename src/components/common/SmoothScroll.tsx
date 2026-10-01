import { useEffect, type ReactNode } from "react";
import { setLenisInstance, type LenisLike } from "@/lib/lenisInstance";
import { usePrefersReducedMotion } from "@/feature/Home/hooks/usePrefersReducedMotion";

/**
 * Wraps the app with a Lenis-powered smooth scroll.
 *
 * The rendered tree is ALWAYS a stable fragment — Lenis is instantiated
 * imperatively (dynamic `import("lenis")`) once the browser is idle, so the
 * upgrade never swaps wrapper components. Swapping wrappers (e.g. fragment
 * → `<ReactLenis>`) would unmount and remount the entire app subtree,
 * resetting router state and flashing a loading fallback — i.e. it looks
 * exactly like a full page refresh.
 *
 * Performance & feel choices:
 * - Lenis (~30-40KB) loads only after idle (or 2.5s fallback): the app
 *   paints and scrolls natively first, then upgrades silently.
 * - `lerp: 0.1` (with `duration: 0`) instead of a duration-based easing —
 *   lerp is symmetric and convergent, so wheel events never cause the
 *   visible 1–2 tick "snap" that duration-based easing does on the first
 *   scroll. Pair with `overscroll-behavior: none` in `index.css` to keep
 *   the browser's native bounce at the page edges from compounding it.
 * - `syncTouch: false` keeps native touch / momentum scrolling on mobile —
 *   no fight with iOS Safari's pull-back gestures, no lost inertia.
 * - `prefers-reduced-motion: reduce` (and coarse pointers) bypass Lenis
 *   entirely and keep native browser scroll.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    if (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(pointer: coarse)").matches
    )
      return;

    let alive = true;
    let lenis: LenisLike & { destroy(): void; raf(time: number): void } | null =
      null;
    let rafId = 0;
    let idleHandle: number | undefined;
    let timer: number | undefined;

    const loop = (time: number) => {
      lenis?.raf(time);
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      import("lenis").then((m) => {
        if (!alive) return;
        const instance = new m.default({
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
        });
        lenis = instance as unknown as LenisLike & {
          destroy(): void;
          raf(time: number): void;
        };
        // Publish the instance for hook-free consumers (ScrollToTop) — and
        // clear it on unmount. `unknown` keeps this assignable without
        // importing `lenis` types.
        setLenisInstance(instance as unknown as LenisLike);
        rafId = requestAnimationFrame(loop);
      });
    };

    const ric = (
      window as Window & {
        requestIdleCallback?: (
          cb: () => void,
          opts?: { timeout: number },
        ) => number;
      }
    ).requestIdleCallback;
    if (typeof ric === "function") {
      idleHandle = ric.call(window, start, { timeout: 2500 });
    } else {
      timer = window.setTimeout(start, 2500);
    }

    return () => {
      alive = false;
      if (idleHandle !== undefined) window.cancelIdleCallback?.(idleHandle);
      if (timer !== undefined) window.clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis?.destroy();
      lenis = null;
      setLenisInstance(null);
    };
  }, [reducedMotion]);

  // Native scroll on reduced-motion AND touch/coarse-pointer devices:
  // Lenis hijacks wheel + runs a permanent rAF lerp loop that inflates
  // TBT/INP on mobile with zero UX benefit (syncTouch is already off).
  // NOTE: the fragment below never changes shape — that is intentional.
  return <>{children}</>;
}
