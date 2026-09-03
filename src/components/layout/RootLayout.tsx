import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ScrollToTop } from "@/components/common/ScrollToTop";

/**
 * Top-level chrome shared by every route: skip-link → navbar → scroll
 * restoration → routed page content → site footer.
 *
 * Footer is mounted as a self-contained component in
 * `SiteFooter.tsx` so the layout itself stays focused on the page
 * shell.
 */
export function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <Navbar />

      <ScrollToTop />

      <main
        id="main-content"
        className="bg-background"
        aria-label="Page content"
      >
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}