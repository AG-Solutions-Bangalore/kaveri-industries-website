import { motion } from "motion/react";
import { QUALITY_HERO_CONTENT } from "@/feature/About/api/aboutConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Quality Hero / Transition Banner matching Image 2 top:
 * Dark inverted navy banner introducing the quality architecture.
 */
export function QualityBanner() {
  return (
    <section
      id="quality"
      aria-labelledby="quality-banner-heading"
      className="relative overflow-hidden bg-slate-950 text-white py-16 md:py-24 border-t border-slate-800"
    >
      {/* Blueprint grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-25"
      />

      {/* Radial brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial from-brand-600/15 via-transparent to-transparent opacity-80"
      />

      {/* Top accent hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/70 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-3xl space-y-3">
          <motion.h2
            id="quality-banner-heading"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            {QUALITY_HERO_CONTENT.heading}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            {QUALITY_HERO_CONTENT.subheading}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
