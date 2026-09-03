import { useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ProductsFilterBar,
  type CategoryFilter,
} from "@/feature/Products/components/ProductsFilterBar";
import { ProductCard } from "@/feature/Products/components/ProductCard";
import { PRODUCTS, type Product } from "@/feature/Products/api/products";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Product grid with category filter. Defaults to "All Categories" so the
 * entire catalogue is visible on first load — matching the design reference.
 */
export function ProductsGrid() {
  const [filter, setFilter] = useState<CategoryFilter>("all");

  const visible: Product[] = useMemo(
    () =>
      filter === "all"
        ? PRODUCTS
        : PRODUCTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section
      aria-labelledby="products-grid-heading"
      className="bg-background py-12 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 id="products-grid-heading" className="sr-only">
          Product catalogue
        </h2>
        <ProductsFilterBar
          value={filter}
          onChange={setFilter}
          resultCount={visible.length}
        />

        {visible.length > 0 ? (
          <motion.div
            layout
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {visible.map((product, idx) => (
              <ProductCard
                key={product.id}
                product={product}
                index={idx}
              />
            ))}
          </motion.div>
        ) : (
          <p className="mt-12 text-center text-sm text-muted-foreground">
            No products match this filter yet.
          </p>
        )}
      </div>
    </section>
  );
}
