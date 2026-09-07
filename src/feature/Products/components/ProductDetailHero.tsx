import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import type { Product } from "@/feature/Products/api/products";
import { ProductPlaceholderImage } from "@/feature/Products/components/ProductPlaceholderImage";
import { ShineButton } from "@/components/shine";
import { useQuoteModal } from "@/context/QuoteModalContext";

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
  const navigate = useNavigate();
  const { openQuoteModal } = useQuoteModal();

  return (
    <section
      aria-labelledby="product-heading"
      className="pb-12 md:pb-16"
    >
      <div className="grid items-start gap-10 lg:grid-cols-2">
        {/* Image Container Framed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative flex items-center justify-center overflow-hidden rounded-none border border-slate-200/80 bg-[#F6F8FB] p-6 sm:p-10 dark:border-border dark:bg-card/40"
        >
          <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden bg-white shadow-xs">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.imageAlt ?? product.name}
                title={product.imageTitle}
                width={1200}
                height={900}
                decoding="async"
                className="h-full w-full object-cover"
                loading="eager"
              />
            ) : (
              <ProductPlaceholderImage icon={Icon} label={product.name} />
            )}
          </div>
        </motion.div>

        {/* Content */}
        <div className="space-y-5 pt-2">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground"
          >
            {product.category === "bolts" ? "Fasteners" : product.category}
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
            className="max-w-prose text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300"
          >
            {product.longDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <ShineButton
              onClick={() => openQuoteModal(product.name)}
              className="inline-flex items-center justify-center rounded-none bg-brand-500 px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-colors duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Request a Quote
            </ShineButton>
            <ShineButton
              onClick={() => navigate("/contact")}
              className="inline-flex items-center justify-center rounded-none border border-slate-300 bg-white px-7 py-3 text-xs font-bold uppercase tracking-wider text-foreground shadow-xs transition-colors duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:border-slate-700 dark:bg-card dark:hover:bg-slate-800"
            >
              Contact Us
            </ShineButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
