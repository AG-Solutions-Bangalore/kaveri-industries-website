import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export interface ProductOverviewProps {
  paragraphs: string[];
}

/**
 * Two-column "Product Overview" + "Technical Specifications" block on the
 * detail page. The overview is plain prose; the specs table is rendered
 * by `ProductSpecsTable` (sibling component).
 */
export function ProductOverview({ paragraphs }: ProductOverviewProps) {
  return (
    <section
      aria-labelledby="product-overview-heading"
      className="py-8 md:py-12"
    >
      <h2
        id="product-overview-heading"
        className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
      >
        Product Overview
      </h2>
      <div className="mt-3 mb-6 h-px w-full bg-border" aria-hidden="true" />

      <div className="space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
        {paragraphs.map((para, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.5, ease: EASE, delay: idx * 0.05 }}
          >
            {para}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
