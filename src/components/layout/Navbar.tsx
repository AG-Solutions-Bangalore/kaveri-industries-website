import { Link, NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { company } from "@/lib/company";

export const NAV = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us", end: false },
  { to: "/products", label: "Products", end: false },
  { to: "/industries", label: "Industries", end: false },
  { to: "/quality", label: "Quality", end: false },
  { to: "/contact", label: "Contact Us", end: false },
];

/**
 * Plain, decoration-free nav. The active item is just text in the brand
 * colour; non-active items are muted foreground. No background pill, no
 * cursor-follow, no motion — a calm, minimal treatment.
 */
export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-3xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4"
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-bold tracking-tight"
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
          {NAV.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                aria-label={item.label}
                className={({ isActive }) =>
                  cn(
                    "font-medium transition-colors duration-200",
                    isActive
                      ? "text-brand-700"
                      : "text-foreground/70 hover:text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 bg-brand-700 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Request a Quote
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out -rotate-45"
              aria-hidden="true"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}
