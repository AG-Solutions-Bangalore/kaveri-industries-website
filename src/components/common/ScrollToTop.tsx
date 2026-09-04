import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

/**
 * Restores scroll position on client-side navigation.
 *
 * Browsers preserve the document's scroll position across SPA route
 * changes, which means clicking a footer link from a long page (e.g. Home)
 * lands the user at the footer's vertical offset on the next page. Mount
 * this once inside the router tree (above the <Outlet />) to scroll to
 * the top on pathname change, or to the targeted hash when one is present
 * and valid.
 *
 * Uses the Lenis instance when available (so route changes don't fight
 * the in-flight smooth animation) and falls back to native `scrollTo`
 * when Lenis is disabled — e.g. `prefers-reduced-motion: reduce`.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // Hash navigation: honour the in-page anchor if it exists, otherwise
    // fall back to the top so we don't strand the user mid-page.
    if (hash) {
      const targetId = hash.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        if (lenis) {
          lenis.scrollTo(element, { offset: -80, immediate: true });
        } else {
          element.scrollIntoView({
            behavior: "instant" as ScrollBehavior,
            block: "start",
          });
        }
        return;
      }
    }

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash, lenis]);

  return null;
}