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
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37, 99, 235, 0.10) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.10) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft industrial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.05] dark:opacity-[0.03] mix-blend-luminosity"
        style={{
          backgroundImage: "url(/images/products/product-page-banner.webp)",
        }}
      />
      {/* Brand radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial from-brand-600/6 via-transparent to-transparent"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 text-center">
        <motion.h1
          id="products-hero-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
        >
          Our Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          High-tensile fastening solutions designed for demanding industrial applications.
          Engineered for precision, manufactured for reliability.
        </motion.p>
      </div>
    </section>
  );
}
