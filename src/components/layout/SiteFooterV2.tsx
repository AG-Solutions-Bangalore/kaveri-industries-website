import { FlipButton } from "@/components/ui/FlipButton";
import { Switch } from "@/components/ui/switch";
import { useMounted } from "@/hooks/useMounted";
import { company } from "@/lib/company";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { useTheme } from "next-themes";
import { type ReactElement, type SVGProps } from "react";
import { Link } from "react-router-dom";

const NAV_V2_FOOTER = [
  { to: "/v2", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/products", label: "Products" },
  { to: "/industries", label: "Industries" },
  { to: "/contact", label: "Contact Us" },
];

const FOOTER_LINKS = [
  { to: "/privacy", label: "Privacy Policy" },
  { to: "/terms", label: "Terms of Service" },
  { to: "/compliance", label: "Compliance" },
  { to: "/sitemap", label: "Sitemap" },
];

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

function iconForUrl(url: string): { Icon: (p: IconProps) => ReactElement; label: string } | null {
  const lower = url.toLowerCase();
  if (lower.includes("linkedin.com")) return { Icon: LinkedinIcon, label: "LinkedIn" };
  if (lower.includes("facebook.com")) return { Icon: FacebookIcon, label: "Facebook" };
  if (lower.includes("twitter.com") || lower.includes("x.com")) return { Icon: TwitterIcon, label: "Twitter" };
  if (lower.includes("youtube.com") || lower.includes("youtu.be")) return { Icon: YoutubeIcon, label: "YouTube" };
  return null;
}



function ThemeSwitchV2() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="mt-5 rounded-none bg-transparent p-0">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">
          Theme
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <Switch
          size="lg"
          checked={mounted ? isDark : false}
          onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
          aria-label={mounted ? (isDark ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"}
          className="data-[state=checked]:bg-zinc-800 data-[state=unchecked]:bg-[#E5A83B]"
        />
      </div>
    </div>
  );
}

/**
 * SiteFooterV2: Clean, dark black industrial theme (#07090C / #0B0D12)
 * without blue undertones, preserving identical layouts, items, and functionality.
 */
export function SiteFooterV2() {
  const phoneList = company.contact.phones.map((p) => p.display).join(" / ");

  return (
    <footer
      className="relative overflow-hidden border-t border-zinc-800/80 bg-[#07090C] pt-12 pb-6 text-white"
      aria-label="Site footer V2"
    >
      {/* Background radial gold glow + subtle dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 translate-x-1/4 rounded-full bg-[#E5A83B]/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#E5A83B_1px,transparent_1px)] bg-size-[24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand + Newsletter */}
          <div>
            <Link
              to="/v2"
              className="group inline-flex items-center gap-2.5 font-semibold tracking-tight text-white"
              aria-label={`${company.name} — go to home`}
            >
              <span
                className="grid h-7 w-7 place-items-center rounded-[2px] bg-[#E5A83B] text-[#07090C] font-black text-sm transition-all duration-300 group-hover:bg-[#dca035]"
                aria-hidden="true"
              >
                {company.monogram}
              </span>
              <span className="text-base font-extrabold uppercase tracking-wider font-display">
                {company.wordmark}
              </span>
            </Link>

            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#E5A83B]">
              {company.certificationStatement}
            </p>
            <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-zinc-400">
              {company.description}
            </p>


          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_V2_FOOTER.map((item) => (
                <li key={item.to}>
                  <FlipButton
                    to={item.to}
                    variant="link-brand"
                    className="gap-0 text-zinc-300! hover:text-[#E5A83B] [&_svg]:hidden"
                  >
                    {item.label}
                  </FlipButton>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Works & Office
            </h3>
            <address className="mt-3 not-italic text-sm text-zinc-300">
              <p className="mt-3 flex items-center gap-2">
                <Phone
                  className="h-3.5 w-3.5 shrink-0 text-[#E5A83B]"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${company.contact.phones[0]?.tel}`}
                  className="link-underline hover:text-white"
                >
                  {phoneList}
                </a>
              </p>
              <p className="mt-1.5 flex items-center gap-2">
                <Printer
                  className="h-3.5 w-3.5 shrink-0 text-[#E5A83B]"
                  aria-hidden="true"
                />
                <span>Fax: {company.contact.fax.display}</span>
              </p>
              <p className="mt-1.5 flex items-center gap-2">
                <Mail
                  className="h-3.5 w-3.5 shrink-0 text-[#E5A83B]"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${company.contact.primaryEmail}`}
                  className="link-underline break-all font-mono text-xs hover:text-white"
                >
                  {company.contact.primaryEmail}
                </a>
              </p>
              <p className="mt-1.5 flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E5A83B]"
                  aria-hidden="true"
                />
                <span className="text-xs leading-relaxed text-zinc-400">
                  {company.address.street}
                  <br />
                  {company.address.city} - {company.address.postalCode}
                </span>
              </p>
            </address>
          </div>

          {/* Column 4: Social + Theme Toggle */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Follow Us
            </h3>

            <ul className="mt-3 flex flex-wrap gap-2">
              {company.social.map((url) => {
                const mapping = iconForUrl(url);
                if (!mapping) return null;
                const { Icon, label } = mapping;
                return (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${company.name} on ${label}`}
                      className="grid h-9 w-9 place-items-center rounded-none border border-zinc-800 bg-[#0B0D12] text-zinc-400 transition-all duration-200 hover:scale-105 hover:border-[#E5A83B] hover:text-[#E5A83B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A83B]"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>

            <ThemeSwitchV2 />
          </div>
        </div>

        {/* Bottom bar — copyright + legal links */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/80 pt-6 text-xs text-zinc-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.copyright}
          </p>
          <nav aria-label="Legal V2">
            <ul className="flex flex-wrap gap-4">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <FlipButton
                    to={link.to}
                    variant="link-brand"
                    className="gap-0 text-xs text-zinc-400 hover:text-[#E5A83B] [&_svg]:hidden"
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

export default SiteFooterV2;
