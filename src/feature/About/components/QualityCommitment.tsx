import { motion } from "motion/react";
import { QUALITY_COMMITMENT_CONTENT } from "@/feature/About/api/aboutConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Quality Commitment section matching Image 2:
 * Left column: Image with CAD technical L-corner brackets.
 * Right column: Commitment manifesto text.
 */
export function QualityCommitment() {
  return (
    <section
      aria-labelledby="commitment-heading"
      className="bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Visual Column with CAD Technical L-Brackets */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="relative px-3 py-3"
          >
            {/* Top-Right Technical L-Bracket */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-1 -right-1 h-12 w-12 border-t-2 border-r-2 border-brand-600 dark:border-brand-400"
            />

            {/* Bottom-Left Technical L-Bracket */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 -left-1 h-12 w-12 border-b-2 border-l-2 border-brand-600 dark:border-brand-400"
            />

            {/* Main Inspection Photo */}
            <div className="relative aspect-4/3 overflow-hidden rounded-none border border-border bg-card shadow-sm">
              <img
                src={QUALITY_COMMITMENT_CONTENT.imageUrl}
                alt={QUALITY_COMMITMENT_CONTENT.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
            >
              {QUALITY_COMMITMENT_CONTENT.badge}
            </motion.p>

            <motion.h3
              id="commitment-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {QUALITY_COMMITMENT_CONTENT.heading}
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
              className="space-y-4 pt-2 text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {QUALITY_COMMITMENT_CONTENT.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
