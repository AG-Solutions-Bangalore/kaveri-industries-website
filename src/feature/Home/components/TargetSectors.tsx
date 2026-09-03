import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { TARGET_SECTORS } from "@/feature/Home/api/sectors";
import { SECTORS_SECTION_HEADER } from "@/feature/Home/api/homeConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Target sectors grid.
 * Sourced from brochure pages 6–7 ("Transmission & Telecommunication Towers" through
 * "Road Guard Rail Systems & Other Development Projects").
 * Follows the 3x2 card layout with top imagery and clean typography shown in the design reference.
 * Border radius set strictly to `sm` (smallest unit).
 */
export function TargetSectors() {
  return (
    <section
      aria-labelledby="sectors-heading"
      className="bg-background py-16 md:py-24 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10 max-w-2xl"
        >
          <h2
            id="sectors-heading"
            className="text-2xl md:text-3xl font-bold tracking-tight text-foreground"
          >
            {SECTORS_SECTION_HEADER.heading}
          </h2>
          <p className="mt-2 text-xs md:text-sm text-muted-foreground">
            {SECTORS_SECTION_HEADER.description}
          </p>
        </motion.header>

        {/* 3x2 Grid of Sector Cards */}
        <div
          role="list"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Industries served"
        >
          {TARGET_SECTORS.map((sector, idx) => {
            const Icon = sector.icon;
            return (
              <motion.article
                key={sector.id}
                role="listitem"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.55, ease: EASE, delay: idx * 0.06 }}
                className="group relative flex h-full flex-col rounded-sm border border-border bg-card overflow-hidden shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-md"
              >
                {/* Sector Image Frame */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-border">
                  {sector.imageUrl ? (
                    <img
                      src={sector.imageUrl}
                      alt={sector.imageAlt ?? sector.name}
                      width={1200}
                      height={750}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-secondary text-brand-700 transition-colors duration-300 group-hover:bg-brand-50 dark:group-hover:bg-brand-950/40">
                      <Icon
                        className="h-10 w-10 transition-transform duration-500 ease-out group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                  {/* Brand corner ribbon — fades in on hover */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-sm bg-brand-700/90 text-white opacity-0 backdrop-blur-xs transition-opacity duration-300 group-hover:opacity-100"
                  >
                    <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                  </span>
                </div>

                {/* Card Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-7 w-7 place-items-center rounded-sm bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white dark:bg-brand-950/80">
                      <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
                    </span>
                    <h3 className="text-sm md:text-base font-bold leading-snug text-foreground transition-colors group-hover:text-accent">
                      {sector.name}
                    </h3>
                  </div>

                  <p className="mt-2.5 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {sector.description}
                  </p>

                  <div className="mt-4 pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent transition-colors hover:text-brand-700"
                      aria-label={`Explore ${sector.name}`}
                    >
                      Explore Industry
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}