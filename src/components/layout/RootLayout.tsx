import { Suspense, lazy } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { useQuoteModal } from "@/context/QuoteModalContext";

// Defer everything not needed for first paint:
// - QuoteModal pulls @radix-ui/react-dialog + the 700-line ContactForm +
//   react-query mutation — only needed when the user opens the modal.
// - V2 chrome is only used on /v2, so the default route never downloads it.
const NavbarV2 = lazy(() =>
  import("@/components/layout/NavbarV2").then((m) => ({ default: m.NavbarV2 })),
);
const SiteFooterV2 = lazy(() =>
  import("@/components/layout/SiteFooterV2").then((m) => ({
    default: m.SiteFooterV2,
  })),
);
const QuoteModal = lazy(() =>
  import("@/components/common/QuoteModal").then((m) => ({
    default: m.QuoteModal,
  })),
);

/**
 * Top-level chrome shared by every route: skip-link → navbar → scroll
 * restoration → routed page content → site footer → quote modal.
 *
 * Footer is mounted as a self-contained component in
 * `SiteFooter.tsx` so the layout itself stays focused on the page
 * shell.
 */
/**
 * Quote modal is gated on `isOpen` so its chunk (radix-dialog + form) is
 * never even requested until the user first opens it — zero bytes on
 * initial load, maximum Lighthouse TBT savings.
 */
function DeferredQuoteModal() {
  const { isOpen } = useQuoteModal();
  if (!isOpen) return null;
  return (
    <Suspense fallback={null}>
      <QuoteModal />
    </Suspense>
  );
}

export function RootLayout() {
  const location = useLocation();
  const isV2 = location.pathname.startsWith("/v2");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        title="Skip to Main Content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      {isV2 ? (
        <Suspense fallback={null}>
          <NavbarV2 />
        </Suspense>
      ) : (
        <Navbar />
      )}

      <ScrollToTop />

      <main
        id="main-content"
        className="bg-background"
        aria-label="Page content"
      >
        <Outlet />
      </main>

      {isV2 ? (
        <Suspense fallback={null}>
          <SiteFooterV2 />
        </Suspense>
      ) : (
        <SiteFooter />
      )}

      <DeferredQuoteModal />
    </div>
  );
}