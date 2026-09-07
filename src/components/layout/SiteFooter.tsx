import { NAV } from "@/components/layout/Navbar";
import { FlipButton } from "@/components/ui/FlipButton";
import { Switch } from "@/components/ui/switch";
import { useMounted } from "@/hooks/useMounted";
import { company } from "@/lib/company";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { useTheme } from "next-themes";
import { type ReactElement, type SVGProps } from "react";
import { Link } from "react-router-dom";

const FOOTER_LINKS = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/compliance", label: "Compliance" },
  { to: "/sitemap", label: "Sitemap" },
];

/* ----------------------------------------------------------------
 * Brand icon set
 * lucide-react dropped the Meta / X / Instagram / LinkedIn / YouTube
 * glyphs from the default export, so we inline the SVGs here. Each
 * component accepts standard SVG props so it can be sized and
 * styled like any other icon used in the file.
 * ---------------------------------------------------------------- */
type IconProps = SVGProps<SVGSVGElement>;

const LinkedinIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

const TwitterIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
  </svg>
);

const YoutubeIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

/**
 * Maps a `company.social` URL to a brand icon + accessible label.
 * The fallback case logs a warning so missing icons are visible
 * during development rather than silently rendering nothing.
 */
function iconForUrl(url: string): { Icon: (p: IconProps) => ReactElement; label: string; title: string } | null {
  const lower = url.toLowerCase();
  if (lower.includes("linkedin.com")) return { Icon: LinkedinIcon, label: "LinkedIn", title: "Follow Kaveri Industries on LinkedIn" };
  if (lower.includes("facebook.com")) return { Icon: FacebookIcon, label: "Facebook", title: "Follow Kaveri Industries on Facebook" };
  if (lower.includes("twitter.com") || lower.includes("x.com")) return { Icon: TwitterIcon, label: "Twitter", title: "Follow Kaveri Industries on X (Twitter)" };
  if (lower.includes("youtube.com") || lower.includes("youtu.be")) return { Icon: YoutubeIcon, label: "YouTube", title: "Subscribe to Kaveri Industries on YouTube" };
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[SiteFooter] No icon mapping for social URL: ${url}`);
  }
  return null;
}

/* ----------------------------------------------------------------
 * ThemeSwitch
 * Radix Switch wired to `next-themes` — uses the `size="lg"` variant
 * for a generous hit-target between the social icons and the column
 * edge, and the Switch's own `transition-colors` + thumb
 * `transition-transform` handle the on/off animation natively (no
 * custom motion wrapper needed).
 *
 * `useMounted` guards the SSR/hydration mismatch that would otherwise
 * flip the switch on the first client render.
 * ---------------------------------------------------------------- */
function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="mt-5 rounded-sm bg-transparent p-4">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Theme
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <Switch
          size="lg"
          checked={mounted ? isDark : false}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          aria-label={mounted ? (isDark ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"}
          className="data-[state=checked]:bg-slate-900 data-[state=unchecked]:bg-amber-400"
        />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------
 * SiteFooter
 * Production footer using the four-column layout (brand + newsletter,
 * quick links, contact, social + theme) with real company data from
 * `company.ts` — no placeholder strings. Replaces the old inline
 * footer in `RootLayout`.
 * ---------------------------------------------------------------- */
export function SiteFooter() {
  const phoneList = company.contact.phones.map((p) => p.display).join(" / ");

  return (
    <footer
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50 pt-12 pb-5 text-slate-900 dark:border-slate-800/80 dark:bg-[#071224] dark:text-white"
      aria-label="Site footer"
    >


      {/* Background blueprint grid + radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-0 top-1/2 h-112.5 w-112.5 -translate-y-1/2 translate-x-1/4 rounded-full bg-brand-600/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#DAA235_1px,transparent_1px)] bg-size-[24px_24px] opacity-10 dark:opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Column 1: Brand + Newsletter ────────────────────────── */}
          <div>
            <Link
              to="/"
              title="Kaveri Industries Home"
              className="group inline-flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-white"
              aria-label={`${company.name} — go to home`}
            >
              <span
                className="grid h-7 w-7 place-items-center rounded-sm bg-brand-600 text-white transition-all duration-300 group-hover:bg-brand-500 group-hover:shadow-[0_0_0_4px_rgb(37_99_235/0.18)]"
                aria-hidden="true"
              >
                <span className="text-xs font-bold">{company.monogram}</span>
              </span>
              <span className="text-base font-bold">{company.wordmark}</span>
            </Link>

            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-400">
              {company.certificationStatement}
            </p>
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {company.description}
            </p>

           
          </div>

          {/* ── Column 2: Quick Links ───────────────────────────────── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV.map((item) => (
                <li key={item.to}>
                  <FlipButton
                    to={item.to}
                    title={item.title}
                    variant="link-brand"
                    className="gap-0 text-slate-600! hover:text-brand-600! dark:text-zinc-300! dark:hover:text-brand-500! [&_svg]:hidden"
                  >
                    {item.label}
                  </FlipButton>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact ──────────────────────────────────── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Works & Office
            </h3>
            <address className="mt-3 not-italic text-sm text-slate-600 dark:text-slate-300">

              <p className="mt-3 flex items-center gap-2">
                <Phone
                  className="h-3.5 w-3.5 shrink-0 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${company.contact.phones[0]?.tel}`}
                  title="Call Kaveri Industries"
                  className="link-underline hover:text-slate-900 dark:hover:text-white"
                >
                  {phoneList}
                </a>
              </p>
              <p className="mt-1.5 flex items-center gap-2">
                <Printer
                  className="h-3.5 w-3.5 shrink-0 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />
                <span>Fax: {company.contact.fax.display}</span>
              </p>
              <p className="mt-1.5 flex items-center gap-2">
                <Mail
                  className="h-3.5 w-3.5 shrink-0 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${company.contact.primaryEmail}`}
                  title="Email Kaveri Industries"
                  className="link-underline break-all font-mono text-xs hover:text-slate-900 dark:hover:text-white"
                >
                  {company.contact.primaryEmail}
                </a>
              </p>
              <p className="mt-1.5 flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />
                <span>
                  {company.address.street}
                  <br />
                  {company.address.city} - {company.address.postalCode}
                </span>
              </p>
            </address>
          </div>

          {/* ── Column 4: Social + Theme Toggle ────────────────────── */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Follow Us
            </h3>

            <ul className="mt-3 flex flex-wrap gap-2">
              {company.social.map((url) => {
                const mapping = iconForUrl(url);
                if (!mapping) return null;
                const { Icon, label, title } = mapping;
                return (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={title}
                      aria-label={`${company.name} on ${label}`}
                      className="grid h-9 w-9 place-items-center rounded-full border border-slate-300 bg-white text-slate-500 transition-all duration-200 hover:scale-105 hover:border-brand-500 hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Theme switch — segmented Light / Dark control. Larger
                touch target than the icon-only header toggle, both
                options visible at once, active state filled in brand
                colour so the current mode is unambiguous. */}
            <ThemeSwitch />
          </div>
        </div>

        {/* Bottom bar — copyright + legal links */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.copyright}
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <FlipButton
                    to={link.to}
                    variant="link-brand"
                    className="gap-0 text-xs [&_svg]:hidden"
                  >
                    {link.label}
                  </FlipButton>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}