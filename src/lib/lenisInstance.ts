/**
 * Lenis instance singleton.
 *
 * `lenis/react` must never be imported on the critical path (it pulls the
 * whole Lenis runtime into the first-paint bundle — Lighthouse caught it in
 * bootup). Instead `<SmoothScroll>` publishes the instance here via ref once
 * it upgrades after idle, and consumers like `<ScrollToTop>` read it without
 * importing `lenis` at all. Structural typing keeps even the types erased.
 */
export interface LenisLike {
  scrollTo(
    target: number | string | HTMLElement,
    options?: Record<string, unknown>,
  ): void;
}

let instance: LenisLike | null = null;

export function setLenisInstance(next: LenisLike | null): void {
  instance = next;
}

export function getLenisInstance(): LenisLike | null {
  return instance;
}
