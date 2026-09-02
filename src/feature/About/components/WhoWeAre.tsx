import { motion } from "motion/react";
import { WHO_WE_ARE_CONTENT } from "@/feature/About/api/aboutConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Who We Are" section matching Image 1:
 * Two-column layout with company mission narrative on left and
 * precision fastener studio photography on right.
 */
export function WhoWeAre() {
  return (
    <section
      aria-labelledby="who-we-are-heading"
      className="bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content Column */}
          <div className="space-y-6">
            <motion.h2
              id="who-we-are-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {WHO_WE_ARE_CONTENT.heading}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {WHO_WE_ARE_CONTENT.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </motion.div>
          </div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            <div className="relative aspect-4/3 overflow-hidden rounded-sm border border-border bg-card shadow-sm">
              <img
                src={WHO_WE_ARE_CONTENT.imageUrl}
                alt={WHO_WE_ARE_CONTENT.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
