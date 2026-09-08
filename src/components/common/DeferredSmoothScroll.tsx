import { Suspense, lazy, type ReactNode } from "react";

// Lenis (~30-40KB + rAF loop) stays off the critical path: the app paints
// with native scroll first, then upgrades once the chunk arrives. The inner
// <SmoothScroll> additionally waits for browser idle before mounting Lenis.
const SmoothScroll = lazy(() =>
  import("@/components/common/SmoothScroll").then((m) => ({
    default: m.SmoothScroll,
  })),
);

export function DeferredSmoothScroll({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={null}>
      <SmoothScroll>{children}</SmoothScroll>
    </Suspense>
  );
}
