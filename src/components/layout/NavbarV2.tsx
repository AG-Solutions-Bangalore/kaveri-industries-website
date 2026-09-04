import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Globe, Menu, X } from "lucide-react";
import { FlipButton } from "@/components/ui/FlipButton";
import { ShineButton } from "@/components/shine";
import { cn } from "@/lib/utils";

export const NAV_ITEMS_V2 = [
  { to: "/v2", label: "Home", end: true },
  { to: "/about", label: "About Us", end: false },
  { to: "/products", label: "Products", hasDropdown: true, end: false },
  { to: "/industries", label: "Industries", end: false },
  { to: "/about", label: "Quality", end: false },
  { to: "/contact", label: "Careers", end: false },
  { to: "/contact", label: "Contact Us", end: false },
];

export function NavbarV2() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0B0D12] text-white">
      <nav
        aria-label="Primary V2"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* Brand Logo matching design */}
        <Link
          to="/v2"
          className="flex items-center gap-3 group"
          aria-label="Kaveri High Tensile Fasteners — Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-[2px] bg-[#E5A83B] text-[#0B0D12] font-black text-lg shadow-md transition-transform duration-200 group-hover:scale-105">
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M4 2 H8 V10.5 L15.5 2 H20.5 L12.5 11 L21 22 H16 L9.5 13.2 L8 15 V22 H4 Z" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-black tracking-wider text-white uppercase leading-tight font-display">
              KAVERI
            </span>
            <span className="text-[7.5px] font-bold uppercase tracking-[0.22em] text-slate-400 leading-none mt-0.5">
              HIGH TENSILE FASTENERS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with V1 FlipButton Text Animation and Active State */}
        <ul className="hidden items-center gap-5 xl:gap-7 text-xs font-semibold lg:flex">
          {NAV_ITEMS_V2.map((item) => {
            const isActive = item.end
              ? location.pathname === item.to
              : location.pathname.startsWith(item.to) && item.to !== "/v2";

            return (
              <li key={item.label} className="relative py-1">
                <div className="flex items-center gap-0.5">
                  <FlipButton
                    to={item.to}
                    variant="link-brand"
                    aria-label={item.label}
                    className={cn(
                      "font-display gap-0 py-1 text-[#FAFAFB]! hover:text-[#E5A83B] transition-colors duration-200 [&_svg]:hidden",
                      isActive && "!text-[#E5A83B] font-bold"
                    )}
                  >
                    {item.label}
                  </FlipButton>
                  {item.hasDropdown && (
                    <ChevronDown className="h-3 w-3 text-slate-400 stroke-[2]" />
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        {/* Right Controls: Language Selector + V1 ShineButton "GET A QUOTE" */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white cursor-pointer transition-colors">
            <Globe className="h-3.5 w-3.5 text-slate-400" />
            <span>EN</span>
            <ChevronDown className="h-3 w-3 text-slate-400" />
          </div>

          {/* V1 ShineButton with Shine Sweep Effect */}
          <ShineButton
            onClick={() => navigate("/contact")}
            className="group inline-flex items-center gap-2 rounded-none bg-[#E5A83B] px-4 py-2 sm:px-5 sm:py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#0B0D12] shadow-sm transition-all duration-200 hover:bg-[#dca035] hover:shadow-[0_0_12px_rgba(229,168,59,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A83B]"
          >
            <span>GET A QUOTE</span>
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
              aria-hidden="true"
            />
          </ShineButton>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center justify-center p-2 text-slate-300 hover:text-white lg:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#0B0D12] px-4 pt-3 pb-6 lg:hidden">
          <ul className="flex flex-col space-y-3 text-xs font-semibold">
            {NAV_ITEMS_V2.map((item) => {
              const isActive = item.end
                ? location.pathname === item.to
                : location.pathname.startsWith(item.to) && item.to !== "/v2";

              return (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block py-1.5 transition-colors",
                      isActive ? "text-[#E5A83B] font-bold" : "text-slate-300 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavbarV2;
