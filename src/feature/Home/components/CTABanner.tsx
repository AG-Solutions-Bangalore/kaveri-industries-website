import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Dark inverted CTA banner — sits between the TargetSectors grid and the
 * footer. Mirrors the design's "Looking for the Right Fastening Solution?"
 * section. The background uses the inverted semantic token so the look is
 * independent of the active color mode.
 */
export function CTABanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-inverted text-inverted-foreground"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center md:py-20">
        <span
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-700/40 text-brand-200"
          aria-hidden="true"
        >
          <Mail className="h-5 w-5" />
        </span>
        <h2
          id="cta-heading"
          className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Looking for the Right Fastening Solution?
        </h2>
        <p className="max-w-2xl text-sm text-inverted-foreground/80 md:text-base">
          Connect with our engineering team to discuss technical specifications,
          custom requirements, or to request a comprehensive quote for your
          project.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-inverted"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-inverted-foreground/30 bg-transparent px-5 py-2.5 text-sm font-medium text-inverted-foreground transition-colors hover:bg-inverted-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-inverted"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}