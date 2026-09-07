import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/feature/Products/api/products";
import { ProductPlaceholderImage } from "@/feature/Products/components/ProductPlaceholderImage";

const EASE = [0.22, 1, 0.36, 1] as const;

export interface ProductCardProps {
  product: Product;
  index: number;
}

/**
 * Product card used in the /products grid.
 * Matches the design reference: image (or placeholder), name, short
 * description, and a "View Details" link that navigates to the
 * /products/:slug detail page.
 */
export function ProductCard({ product, index }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.05 + index * 0.04 }}
      className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-xs transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
    >
      {/* Image / placeholder */}
      <Link
        to={`/products/${product.slug}`}
        title={product.linkTitle}
        className="relative block aspect-[4/3] overflow-hidden bg-muted"
        aria-label={`View details for ${product.name}`}
      >
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.imageAlt ?? product.name}
            title={product.imageTitle}
            width={1200}
            height={900}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <ProductPlaceholderImage icon={Icon} label={product.name} />
        )}
        {product.tag && (
          <span className="absolute left-3 top-3 inline-flex items-center rounded-xs bg-brand-700 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
            {product.tag}
          </span>
        )}
      </Link>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <Link to={`/products/${product.slug}`} title={product.linkTitle} className="block">
          <h3 className="text-base font-bold tracking-tight text-foreground transition-colors group-hover:text-brand-700">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {product.shortDescription}
        </p>
        <div className="mt-auto pt-4">
          <Link
            to={`/products/${product.slug}`}
            title={product.linkTitle}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            View Details
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
