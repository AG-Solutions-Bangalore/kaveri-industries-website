import { SECTORS_SECTION_HEADER } from "@/feature/Home/api/homeConstants";
import { TARGET_SECTORS } from "@/feature/Home/api/sectors";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export function TargetSectors() {

  return (
    <section
      aria-labelledby="sectors-heading"
      className="bg-[#071120] text-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
              {SECTORS_SECTION_HEADER.badge}
            </p>
            <h2
              id="sectors-heading"
              className="mt-1.5 text-2xl md:text-3xl font-extrabold tracking-tight text-white"
            >
              {SECTORS_SECTION_HEADER.heading}
            </h2>
          </div>

        
        </motion.div>

        {/* 3x2 Grid of Sector Cards */}
        <div
          role="list"
          aria-label="Industries served"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TARGET_SECTORS.map((sector, idx) => {
            const formattedIndex = String(idx + 1).padStart(2, "0");
            return (
              <motion.div
                key={sector.id}
                role="listitem"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.5, ease: EASE, delay: idx * 0.06 }}
                className="group relative flex min-h-72 flex-col justify-end overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900 p-6 shadow-md transition-all duration-300 hover:border-slate-700 hover:shadow-xl"
              >
                {/* Background Image */}
                {sector.imageUrl && (
                  <img
                    src={sector.imageUrl}
                    alt={sector.imageAlt ?? sector.name}
                    title={sector.imageTitle}
                    width={800}
                    height={500}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                )}

                {/* Dark Gradient Overlay for optimal contrast and mood */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#071120]/95 via-[#071120]/80 to-[#071120]/25"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071120] via-transparent to-transparent"
                />

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col items-start">
                  {/* Number Badge */}
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white shadow-md shadow-brand-600/30 mb-3">
                    {formattedIndex}
                  </span>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white leading-snug group-hover:text-brand-300 transition-colors">
                    {sector.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300 max-w-[90%]">
                    {sector.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}