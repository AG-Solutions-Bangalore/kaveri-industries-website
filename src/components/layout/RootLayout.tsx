import { Link, Outlet } from "react-router-dom";
import { NAV, Navbar } from "@/components/layout/Navbar";
import { company } from "@/lib/company";

const FOOTER_LINKS = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/compliance", label: "Compliance" },
  { to: "/sitemap", label: "Sitemap" },
];

export function RootLayout() {
  const phoneList = company.contact.phones
    .map((p) => p.display)
    .join(", ");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        className="bg-background"
        aria-label="Page content"
      >
        <Outlet />
      </main>

      <footer
        className="relative border-t border-border bg-[#F1F4F9] dark:bg-card py-12"
        aria-label="Site footer"
      >
        {/* Gradient hairline along the top edge */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent"
        />

        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {/* Brand & ISO */}
            <div className="md:col-span-2">
              <Link
                to="/"
                className="group inline-flex items-center gap-2 font-semibold tracking-tight text-foreground"
                aria-label={`${company.name} — go to home`}
              >
                <span
                  className="grid h-7 w-7 place-items-center rounded-sm bg-brand-700 text-white transition-all duration-300 group-hover:bg-brand-800 group-hover:shadow-[0_0_0_4px_rgb(37_99_235/0.18)]"
                  aria-hidden="true"
                >
                  <span className="text-xs font-bold">{company.monogram}</span>
                </span>
                <span className="text-base font-bold">{company.wordmark}</span>
              </Link>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-400">
                {company.certificationStatement}
              </p>
              <p className="mt-2 max-w-sm text-xs md:text-sm text-muted-foreground leading-relaxed">
                {company.description}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-foreground">Navigation</h3>
              <ul className="mt-3 space-y-2 text-xs md:text-sm">
                {NAV.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="link-underline text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Contact */}
            <div>
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-wider text-foreground">Works & Office</h3>
              <address className="mt-3 not-italic text-xs md:text-sm text-muted-foreground space-y-1.5 leading-relaxed">
                <p>{company.address.street}</p>
                <p>
                  {company.address.city} - {company.address.postalCode}
                </p>
                <p className="pt-2 text-foreground font-semibold">
                  Ph: {phoneList}
                </p>
                <p>Fax: {company.contact.fax.display}</p>
                <a
                  href={`mailto:${company.contact.primaryEmail}`}
                  className="link-underline inline-block text-xs text-muted-foreground font-mono transition-colors hover:text-foreground"
                >
                  {company.contact.primaryEmail}
                </a>
              </address>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row text-xs text-muted-foreground">
            <p>
              © {new Date().getFullYear()} {company.copyright}
            </p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap gap-4">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="link-underline transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}