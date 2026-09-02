import { Link, NavLink, Outlet } from "react-router-dom";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/schemas";

const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/quality", label: "Quality" },
  { to: "/contact", label: "Contact Us" },
];

const FOOTER_LINKS = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/compliance", label: "Compliance" },
  { to: "/sitemap", label: "Sitemap" },
];

export function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <nav
          aria-label="Primary"
          className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4"
        >
          <Link
            to="/"
            className="flex items-center gap-2 font-semibold tracking-tight"
            aria-label={`${siteConfig.name} — go to home`}
          >
            <span
              className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground"
              aria-hidden="true"
            >
              <span className="text-xs font-bold">K</span>
            </span>
            <span className="hidden sm:inline">
              KAVERI<span className="text-brand-600">.</span> INDUSTRIES
            </span>
          </Link>

          <ul className="hidden items-center gap-1 text-sm md:flex" role="list">
            {NAV.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-1.5 transition-colors hover:bg-accent hover:text-accent-foreground",
                      isActive && "text-accent",
                    )
                  }
                  aria-label={item.label}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-md bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:inline-flex"
            >
              Request a Quote
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main
        id="main-content"
        className="bg-background"
        aria-label="Page content"
      >
        <Outlet />
      </main>

      <footer
        className="border-t border-border bg-background py-10"
        aria-label="Site footer"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold tracking-tight"
              aria-label={`${siteConfig.name} — go to home`}
            >
              <span
                className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground"
                aria-hidden="true"
              >
                <span className="text-xs font-bold">K</span>
              </span>
              <span>KAVERI INDUSTRIES</span>
            </Link>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Precision engineered high-tensile fasteners for demanding
              industrial applications worldwide.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}