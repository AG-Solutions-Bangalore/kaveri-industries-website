import { MobileSidebar } from "@/components/layout/MobileSidebar";
import { company } from "@/lib/company";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FlipButton } from "@/components/ui/FlipButton";
import { ShineButton } from "@/components/shine";

export const NAV = [
  { to: "/", label: "Home", title: "Kaveri Industries Home", end: true },
  { to: "/about", label: "About Us", end: false },
  { to: "/products", label: "Products", end: false },
  { to: "/industries", label: "Industries", end: false },
  { to: "/contact", label: "Contact Us", end: false },
];

/**
 * Plain, decoration-free nav. The active item is just text in the brand
 * colour; non-active items are muted foreground. No background pill, no
 * cursor-follow, no motion — a calm, minimal treatment.
 */
export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background text-foreground">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4"
      >
        <Link
          to="/"
          title="Kaveri Industries Home"
          className="flex items-center gap-2 font-bold tracking-tight text-foreground"
          aria-label={`${company.name} — go to home`}
        >
          <span
            className="grid h-7 w-7 place-items-center rounded-sm bg-brand-700 text-white shadow-sm"
            aria-hidden="true"
          >
            <span className="text-xs font-bold">{company.monogram}</span>
          </span>
          <span className="hidden sm:inline">
            {company.wordmark.split(" ").map((part, i, arr) => (
              <span key={part}>
                {part}
                {i < arr.length - 1 ? (
                  <span className="text-brand-600">.</span>
                ) : null}
              </span>
            ))}
          </span>
        </Link>

        <ul className="hidden items-center gap-7 text-sm md:flex">
          {NAV.map((item) => {
            const isActive = item.end
              ? location.pathname === item.to
              : location.pathname.startsWith(item.to);
            return (
              <li key={item.to}>
                <FlipButton
                  to={item.to}
                  title={item.title}
                  variant="link-brand"
                  aria-label={item.label}
                  className={cn(
                    "relative font-display gap-0 py-1 [&_svg]:hidden",
                    isActive && "!text-brand-500 font-semibold",
                  )}
                >
                  {item.label}
                </FlipButton>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">

          <ShineButton
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-1.5 bg-brand-500 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:px-4 sm:text-sm"
          >
            Request a Quote
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out -rotate-45"
              aria-hidden="true"
            />
          </ShineButton>
          <MobileSidebar navItems={NAV} />

        </div>
      </nav>
    </header>
  );
}
