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
      className="relative overflow-hidden bg-background py-20 md:py-28 border-b border-border/70"
    >
      {/* 3-column factory workshop watermark grid matching mock */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 grid grid-cols-1 md:grid-cols-3 opacity-[0.16] dark:opacity-[0.06] mix-blend-luminosity grayscale contrast-125 overflow-hidden"
      >
        <div
          className="h-full w-full border-r border-slate-300/40 dark:border-slate-700/30 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/manufacturing-shop-overview.jpg)" }}
        />
        <div
          className="h-full w-full border-r border-slate-300/40 dark:border-slate-700/30 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/manufacturing-plant.webp)" }}
        />
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/images/manufacturing-shop-overview.jpg)" }}
        />
      </div>

      {/* Blueprint grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37, 99, 235, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft gradient wash ensuring high legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background"
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="max-w-2xl space-y-4">
          <motion.h1
            id="about-hero-heading"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-4xl font-extrabold tracking-tight text-[#133878] dark:text-brand-300 sm:text-5xl"
          >
            {ABOUT_HERO_CONTENT.heading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg"
          >
            {ABOUT_HERO_CONTENT.subheading}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
