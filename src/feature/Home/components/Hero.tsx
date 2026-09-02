import { ArrowRight, BadgeCheck } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Hero section — single h1 for SEO clarity. Copy drawn from the
 * "Manufacturers of High Tensile MS Fasteners" tagline in the brochure.
 * Visual reference only — no copy was lifted from the design PDF.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background py-12 md:py-20"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Kaveri Industries
          </p>
          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            High-Tensile MS Fasteners for{" "}
            <span className="text-accent">Demanding Applications</span>
          </h1>
          <p className="max-w-prose text-base text-muted-foreground md:text-lg">
            Manufacturers of high-tensile mild-steel fasteners engineered for
            uncompromising strength and exacting tolerances — serving OEMs
            across infrastructure, energy, and industrial sectors.
          </p>

          {/* ISO certification badge — mirrors the design's "ISO 9001:2015" callout */}
          <div className="inline-flex items-center gap-3 rounded-md bg-inverted px-4 py-3 text-inverted-foreground shadow-md">
            <BadgeCheck className="h-5 w-5 text-brand-300" aria-hidden="true" />
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] uppercase tracking-widest opacity-80">
                Certified Quality
              </span>
              <span className="text-sm font-semibold">ISO 9001:2015</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore Products
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Visual — placeholder for hero photography, mirrors the design's
            fastener-stack composition. Replace with a real image when available. */}
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,theme(colors.brand.500/0.15),transparent_50%),radial-gradient(circle_at_70%_80%,theme(colors.brand.700/0.25),transparent_50%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-3 opacity-80">
              {Array.from({ length: 9 }, (_, i) => (
                <div
                  key={i}
                  className="h-14 w-14 rounded-md bg-foreground/80 shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}