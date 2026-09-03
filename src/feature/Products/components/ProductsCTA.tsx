import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ShineButton } from "@/components/shine";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Need a Specific Fastener?" — light themed CTA section that sits between
 * the product grid and the footer on the /products list page.
 * Routes to /contact (the canonical quote request destination).
 */
export function ProductsCTA() {
  const navigate = useNavigate();
  return (
    <section
      aria-labelledby="products-cta-heading"
      className="relative overflow-hidden bg-slate-50/70 py-16 md:py-24 dark:bg-card/30"
    >
      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center">
        <motion.h2
          id="products-cta-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
        >
          Need a Specific Fastener?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          Share your requirements with our engineering team for custom
          specifications, bulk orders, or specialized materials.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
        >
          <ShineButton
            onClick={() => navigate("/contact")}
            className="inline-flex items-center gap-2 rounded-sm bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Request a Quote
          </ShineButton>
        </motion.div>
      </div>
    </section>
  );
}
