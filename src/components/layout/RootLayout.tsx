import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { NavbarV2 } from "@/components/layout/NavbarV2";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteFooterV2 } from "@/components/layout/SiteFooterV2";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { QuoteModal } from "@/components/common/QuoteModal";

/**
 * Top-level chrome shared by every route: skip-link → navbar → scroll
 * restoration → routed page content → site footer → quote modal.
 *
 * Footer is mounted as a self-contained component in
 * `SiteFooter.tsx` so the layout itself stays focused on the page
 * shell.
 */
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

      {isV2 ? <NavbarV2 /> : <Navbar />}

      <ScrollToTop />

      <main
        id="main-content"
        className="bg-background"
        aria-label="Page content"
      >
        <Outlet />
      </main>

      {isV2 ? <SiteFooterV2 /> : <SiteFooter />}

      <QuoteModal />
    </div>
  );
}