import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/feature/Home/hooks/usePrefersReducedMotion";

/**
 * Adds `data-revealed="true"` to the returned element once it scrolls into
 * view. Pair with the `[data-reveal]` / `[data-revealed="true"]` CSS
 * utilities in `index.css` for the fade-up animation.
 *
 * Respects `prefers-reduced-motion`: the element is revealed immediately
 * and the entrance animation collapses.
 *
 * Usage:
 *   const { ref, revealed } = useReveal<HTMLDivElement>();
 *   <div ref={ref} data-reveal={!revealed} data-revealed={revealed}>...
 *
 * Or with the shorthand helpers in the returned object:
 *   <div ref={ref} {...revealProps}>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = {},
) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Skip the observer if motion is reduced — mark revealed immediately.
    if (reducedMotion || typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setRevealed(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px", ...options },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, options]);

  return {
    ref,
    revealed,
    /** Spread onto the element — encapsulates the data-attr dance. */
    revealProps: {
      "data-reveal": !revealed ? "" : undefined,
      "data-revealed": revealed ? "true" : undefined,
    },
  };
}