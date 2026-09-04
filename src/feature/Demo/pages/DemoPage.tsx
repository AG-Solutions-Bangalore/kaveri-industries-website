import type { ReactNode } from "react";
import { SEO } from "@/components/common/SEO";
import { Footerdemo } from "@/components/ui/footer-section";
import { demoSEO } from "@/feature/Demo/seo/demoSeo";

/**
 * Section wrapper used by the `/demo` showcase page.
 *
 * Why a wrapper: every showcase block needs the same shape — a heading,
 * an optional description, and a framed surface to render the live
 * component inside. New demos stay consistent without each one having
 * to re-implement the surrounding layout.
 *
 * Usage:
 *   <DemoSection
 *     title="My Component"
 *     description="What it does."
 *   >
 *     <MyComponent />
 *   </DemoSection>
 */
function DemoSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-labelledby={`demo-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="border-t border-border bg-background py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4">
        <header className="mb-8 max-w-2xl">
          <h2
            id={`demo-${title.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-xl font-bold tracking-tight text-foreground md:text-2xl"
          >
            {title}
          </h2>
          {description ? (
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>
        {/* Framed surface so the demo sits in a visible "card" against the
            page background — easier to scan when several demos stack. */}
        <div className="overflow-hidden rounded-sm border border-border bg-card shadow-xs">
          {children}
        </div>
      </div>
    </section>
  );
}

/**
 * `/demo` — internal component showcase.
 *
 * Each new isolated UI primitive (footer, button variants, tooltip demos,
 * forms, etc.) is rendered inside its own `<DemoSection>`. The page is
 * marked `noindex` via `demoSEO` so it doesn't surface in search.
 */
export default function DemoPage() {
  return (
    <>
      <SEO {...demoSEO} />

      {/* Page header — keeps the same intro pattern as the other feature
          pages (label → heading → short description). */}
      <section className="bg-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Demo
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Component Showcase
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Isolated examples of reusable UI primitives used across the
            Kaveri Industries site. New demos land here as separate
            section blocks below.
          </p>
        </div>
      </section>

      {/* ── Demo 01: Footer section ──────────────────────────────────────
          Newsletter signup, social link buttons, and a dark-mode toggle
          powered by Radix Switch. */}
      <DemoSection
        title="Footer Section"
        description="Newsletter signup with submit button, social-media icon row (Radix Tooltip-wrapped), a Radix Switch-based dark-mode toggle, and a legal-links footer bar."
      >
        <Footerdemo />
      </DemoSection>
    </>
  );
}