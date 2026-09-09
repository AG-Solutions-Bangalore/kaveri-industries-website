import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useQuoteModal } from "@/context/QuoteModalContext";

interface MobileSidebarProps {
  /** Nav links shown inside the drawer. Mirrors the desktop nav. */
  navItems: ReadonlyArray<{ to: string; label: string; title?: string; end?: boolean }>;
}

/**
 * Slide-in mobile navigation drawer.
 *
 * Behaviour:
 * - Hamburger button visible only below the `md` breakpoint.
 * - Backdrop + right-anchored panel, both fade/slide in via Tailwind
 *   transitions (no extra runtime cost vs. a JS animation library).
 * - Closes on route change, on backdrop click, on the X button, or on
 *   Escape — and the close path always resets focus back to the trigger.
 * - Body scroll is locked while open so the page underneath doesn't drift.
 * - Hidden from assistive tech entirely on `md+` via `md:hidden`.
 */
export function MobileSidebar({ navItems }: MobileSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openQuoteModal } = useQuoteModal();

  // Close on route change so the drawer doesn't linger after navigation.
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setIsOpen(false);
  }

  // Lock body scroll while open; restore the prior value on close/unmount.
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  // Escape key closes the drawer.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      {/* Hamburger trigger — only on mobile. */}
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-sidebar-panel"
        onClick={() => setIsOpen((open) => !open)}
        className="grid h-9 w-9 place-items-center rounded-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
      >
        {isOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => setIsOpen(false)}
        className={cn(
          "fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Sidebar panel */}
      <aside
        id="mobile-sidebar-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-72 max-w-[85vw] flex-col border-l border-border bg-background shadow-xl transition-transform duration-300 ease-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header row — matches the navbar's own header treatment */}
        <div className="flex h-16 items-center justify-between border-b border-border px-5">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
            className="grid h-9 w-9 place-items-center rounded-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {/* Nav links — primary route list, mobile-friendly tap targets */}
        <nav
          aria-label="Primary mobile"
          className="flex-1 overflow-y-auto px-3 py-4"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  title={item.title || item.label}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      "block rounded-sm px-4 py-3 text-sm font-semibold transition-colors",
                      isActive
                        ? "bg-brand-50 text-brand-700 dark:bg-brand-950/40 dark:text-brand-300"
                        : "text-foreground hover:bg-muted",
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom CTA — surfaces the primary conversion action. */}
        <div className="border-t border-border p-4">
          <button
            type="button"
            onClick={() => {
              setIsOpen(false);
              openQuoteModal();
            }}
            className="group inline-flex w-full items-center justify-center gap-2 bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Request a Quote
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
              aria-hidden="true"
            />
          </button>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            ISO 9001:2008 Certified Manufacturer
          </p>
        </div>
      </aside>
    </>
  );
}