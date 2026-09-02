import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { QUALITY_CONTENT } from "@/feature/Home/api/homeConstants";
import { company } from "@/lib/company";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "About Kaveri" / Quality Statement section.
 * Precisely matching the design reference.
 * Border radius set strictly to `sm` (smallest unit).
 */
export function QualityStatement() {
  return (
    <section
      aria-labelledby="quality-heading"
      className="bg-background py-16 md:py-24 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual Column — Clean Manufacturing Facility Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-border bg-card shadow-sm">
              <img
                src="/images/manufacturing-plant.svg"
                alt={QUALITY_CONTENT.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="order-1 space-y-6 lg:order-2">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.55, ease: EASE }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              {QUALITY_CONTENT.badge}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
              id="quality-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              {QUALITY_CONTENT.heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
              className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              <p>
                For over two decades, {company.name} has been synonymous with
                unyielding structural integrity. We specialize in the
                manufacturing of high-tensile MS fasteners, delivering critical
                components to sectors where failure is not an option.
              </p>
              <p>
                Our state-of-the-art facilities leverage advanced metallurgical
                testing and automated precision machining to ensure every batch
                meets rigorous international standards. We are not just
                suppliers; we are structural confidence.
              </p>
            </motion.div>

            {/* Stats with Left Vertical Indicator Bars */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
              className="grid grid-cols-2 gap-6 pt-2"
            >
              {QUALITY_CONTENT.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="group/stat relative border-l-2 border-foreground pl-4 transition-all duration-300 ease-out hover:translate-x-1 hover:border-brand-600"
                >
                  <p className="pulse-soft text-2xl md:text-3xl font-extrabold tracking-tight text-foreground group-hover/stat:text-brand-700 transition-colors">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.32 }}
              className="pt-2"
            >
              <Link
                to={QUALITY_CONTENT.cta.href}
                className="group inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-accent transition-colors hover:text-brand-700"
              >
                {QUALITY_CONTENT.cta.label}
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}