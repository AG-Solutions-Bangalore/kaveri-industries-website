import { motion } from "motion/react";
import type { ProductSpec } from "@/feature/Products/api/products";

const EASE = [0.22, 1, 0.36, 1] as const;

export interface ProductSpecsTableProps {
  specs: ProductSpec[];
}

/**
 * Key-value specifications table — header row is uppercase, muted
 * foreground; value row uses the brand-navy colour. Striped rows in
 * `slate-50/50` for legibility, matching the design reference.
 */
export function ProductSpecsTable({ specs }: ProductSpecsTableProps) {
  return (
    <section
      aria-labelledby="product-specs-heading"
      className="py-12 md:py-16"
    >
      <h2
        id="product-specs-heading"
        className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
      >
        Technical Specifications
      </h2>
      <div className="mt-2 h-px w-24 bg-foreground/15" aria-hidden="true" />

      <div className="mt-6 overflow-hidden rounded-sm border border-border">
        <dl className="divide-y divide-border">
          {specs.map((spec, idx) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.4, ease: EASE, delay: idx * 0.03 }}
              className={
                "grid grid-cols-1 gap-2 px-5 py-4 sm:grid-cols-[200px_1fr] sm:gap-6 " +
                (idx % 2 === 0 ? "bg-slate-50/50 dark:bg-card/40" : "bg-card")
              }
            >
              <dt className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                {spec.label}
              </dt>
              <dd className="text-sm font-medium text-foreground sm:text-base">
                {spec.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
