import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { PRODUCTS, type Product } from "@/feature/Home/api/products";
import { PRODUCTS_SECTION_HEADER } from "@/feature/Home/api/homeConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

export function ProductsCarousel() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="products-heading"
      className="bg-slate-50/60 dark:bg-background pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
              {PRODUCTS_SECTION_HEADER.badge}
            </p>
            <h2
              id="products-heading"
              className="mt-1.5 text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              {PRODUCTS_SECTION_HEADER.heading}
            </h2>
          </div>

          <button
            onClick={() => navigate(PRODUCTS_SECTION_HEADER.cta.href)}
            className="group inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400"
          >
            {PRODUCTS_SECTION_HEADER.cta.label}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
              aria-hidden="true"
            />
          </button>
        </motion.div>

        {/* 6-Card Product Range Grid */}
        <div
          role="list"
          aria-label="Product range"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {PRODUCTS.slice(0, 4).map((product, idx) => (
            <ProductCard key={product.id} product={product} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

/** Product card precisely matching input_file_2.png */
function ProductCard({ product, index }: { product: Product; index: number }) {
  const Icon = product.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.05 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:hover:border-brand-900"
    >
      <Link
        to="/products"
        className="flex flex-1 flex-col"
        aria-label={`View ${product.name}`}
      >
        {/* Product Image Frame — fills entire space, no inner padding */}
        <div className="relative aspect-10/9 w-full overflow-hidden bg-[#f4f5f8] dark:bg-slate-800/60">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.imageAlt ?? product.name}
              title={product.imageTitle}
              width={400}
              height={400}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-brand-600">
              <Icon className="h-10 w-10 transition-transform duration-500 ease-out group-hover:scale-110" strokeWidth={1.5} />
            </div>
          )}
        </div>

        {/* Info Section — only area with padding */}
        <div className="flex flex-1 flex-col p-3.5">
          <h3 className="text-sm font-bold leading-snug text-slate-900 dark:text-white group-hover:text-brand-600 transition-colors line-clamp-2 min-h-10">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3 flex-1">
            {product.description}
          </p>
        </div>
      </Link>

      {/* Bottom Arrow Indicator */}
      <div className="border-t border-slate-100 px-3.5 py-3 dark:border-slate-800/80">
        <Link
          to="/products"
          className="inline-flex items-center text-slate-400 transition-all duration-200 group-hover:text-brand-600 group-hover:translate-x-1 group-hover:-rotate-45"
          aria-label={`Details for ${product.name}`}
        >
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}