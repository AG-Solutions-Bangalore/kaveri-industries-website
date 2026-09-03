import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/feature/Products/api/products";
import { ProductPlaceholderImage } from "@/feature/Products/components/ProductPlaceholderImage";

const EASE = [0.22, 1, 0.36, 1] as const;

export interface ProductDetailHeroProps {
  product: Product;
}

/**
 * Detail-page hero: large product image on the left, name + description +
 * two CTAs (Request a Quote / Contact Us) on the right.
 *
 * Matches the design reference exactly: image card with subtle 1px border,
 * eyebrow "FASTENERS" in tracked uppercase, oversized product name,
 * supporting paragraph, and a primary + secondary CTA.
 */
export function ProductDetailHero({ product }: ProductDetailHeroProps) {
  const Icon = product.icon;

  return (
    <section
      aria-labelledby="product-heading"
      className="pb-12 md:pb-16"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative overflow-hidden rounded-sm border border-border bg-card shadow-sm"
        >
          <div className="aspect-[4/3]">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.imageAlt ?? product.name}
                className="h-full w-full object-cover"
                loading="eager"
              />
            ) : (
              <ProductPlaceholderImage icon={Icon} label={product.name} />
            )}
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-5">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-[11px] font-bold uppercase tracking-[0.25em] text-muted-foreground"
          >
            Fasteners
          </motion.p>

          <motion.h1
            id="product-heading"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
            className="text-3xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-4xl md:text-5xl"
          >
            {product.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
            className="max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base"
          >
            {product.longDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 pt-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-sm bg-brand-700 px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider text-white shadow-sm transition-colors duration-200 hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Request a Quote
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider text-foreground shadow-xs transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
