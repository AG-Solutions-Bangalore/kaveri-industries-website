import { motion } from "motion/react";
import { ABOUT_HERO_CONTENT } from "@/feature/About/api/aboutConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * About Hero section matching Image 1:
 * High-key technical background with subtle blueprint grid and watermark,
 * bold brand heading and clear positioning statement.
 */
export function AboutHero() {
  return (
    <section
      aria-labelledby="about-hero-heading"
      className="relative overflow-hidden bg-background py-16 md:py-24 border-b border-border/80"
    >
      {/* Blueprint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37, 99, 235, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Subtle high-key translucent plant floor backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.07] dark:opacity-[0.04] mix-blend-luminosity"
        style={{
          backgroundImage: "url(/images/manufacturing-plant.webp)",
        }}
      />

      {/* Soft gradient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-3xl space-y-4">
          <motion.h1
            id="about-hero-heading"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-4xl font-extrabold tracking-tight text-brand-900 dark:text-brand-300 sm:text-5xl"
          >
            {ABOUT_HERO_CONTENT.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {ABOUT_HERO_CONTENT.subheading}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
