import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Our Products" hero — matches the design reference: light background with
 * a subtle blueprint grid, centered eyebrow + heading + subhead.
 */
export function ProductsHero() {
  return (
    <section
      aria-labelledby="products-hero-heading"
      className="relative overflow-hidden border-b border-border bg-slate-50/70 py-16 md:py-24 dark:bg-card/30"
    >
      {/* Subtle blueprint grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37, 99, 235, 0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.10) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Brand radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial from-brand-600/8 via-transparent to-transparent"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          <span className="h-px w-6 bg-muted-foreground/60" aria-hidden="true" />
          Product Range
          <span className="h-px w-6 bg-muted-foreground/60" aria-hidden="true" />
        </motion.span>

        <motion.h1
          id="products-hero-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
        >
          Our Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
          className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          High-tensile fastening solutions designed for demanding industrial
          applications. Engineered for precision, manufactured for reliability.
        </motion.p>
      </div>
    </section>
  );
}
