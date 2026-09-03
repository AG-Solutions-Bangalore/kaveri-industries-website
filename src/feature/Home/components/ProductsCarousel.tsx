import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { PRODUCTS, type Product } from "@/feature/Home/api/products";
import { PRODUCTS_SECTION_HEADER } from "@/feature/Home/api/homeConstants";
import { usePrefersReducedMotion } from "@/feature/Home/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Auto-scrolling product carousel.
 * - Pure continuous CSS marquee animation, paused on hover.
 * - Card styling precisely matching the provided design reference.
 * - Border radius strictly set to `sm` (smallest unit).
 */
export function ProductsCarousel() {
  const reducedMotion = usePrefersReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section
      aria-labelledby="products-heading"
      className="bg-background py-16 md:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          style={{ willChange: "transform, opacity" }}
          className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {PRODUCTS_SECTION_HEADER.badge}
            </p>
            <h2
              id="products-heading"
              className="mt-1 text-2xl md:text-3xl font-bold tracking-tight text-foreground"
            >
              {PRODUCTS_SECTION_HEADER.heading}
            </h2>
          </div>
          <Link
            to={PRODUCTS_SECTION_HEADER.cta.href}
            className="group inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-accent transition-colors hover:text-brand-700"
          >
            {PRODUCTS_SECTION_HEADER.cta.label}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        {/* Carousel Region — Continuous Infinite Auto-Scroll */}
        <div
          className="relative group"
          role="region"
          aria-roledescription="carousel"
          aria-label="Product range — auto-scrolling carousel"
        >
          {/* Subtle side edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-linear-to-l from-background to-transparent" />

          {/* Infinite Track */}
          <div
            ref={trackRef}
            className={cn(
              "flex w-max gap-4 overflow-x-auto scroll-smooth py-1 scrollbar-none hover:[animation-play-state:paused]",
            )}
            style={{
              animation: reducedMotion
                ? "none"
                : "marquee 35s linear infinite",
            }}
            aria-hidden="true"
          >
            {[...PRODUCTS, ...PRODUCTS].map((p, i) => (
              <ProductCard key={`${p.id}-${i}`} product={p} />
            ))}
          </div>

          {/* Accessible static list for screen readers */}
          <ul className="sr-only" aria-label="Product range">
            {PRODUCTS.map((p) => (
              <li key={p.id}>
                <strong>{p.name}</strong>: {p.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Product card matching the visual reference screenshot. */
function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;
  return (
    <motion.article
      data-card
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: EASE }}
      style={{ willChange: "transform, opacity" }}
      className="group/card flex w-[280px] shrink-0 flex-col rounded-sm border border-border bg-card p-3 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-sm bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.imageAlt ?? product.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-secondary text-brand-700 transition-colors duration-300 group-hover/card:bg-brand-50 dark:group-hover/card:bg-brand-950/40">
            <Icon className="h-10 w-10 transition-transform duration-500 ease-out group-hover/card:scale-110" strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Product Information */}
      <div className="flex flex-1 flex-col pt-3.5 pb-1">
        <h3 className="text-sm font-bold leading-snug text-foreground group-hover/card:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.article>
  );
}