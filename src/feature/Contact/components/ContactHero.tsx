import { motion } from "motion/react";
import { CONTACT_PAGE_CONTENT } from "@/feature/Contact/api/contactInfo";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Dark hero with a mock factory image background (semi-transparent).
 * Centered title + description, matching the design reference.
 */
export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background mock image — gradient + faint bolt pattern until real photo lands */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(120deg,#0f172a_0%,#1e293b_50%,#0f172a_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148, 163, 184, 0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148, 163, 184, 0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Brand radial wash for warmth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial from-brand-600/20 via-transparent to-transparent opacity-80"
      />
      {/* Top + bottom hairlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 py-20 text-center md:py-28">
        <motion.h1
          id="contact-hero-heading"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          {CONTACT_PAGE_CONTENT.hero.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base"
        >
          {CONTACT_PAGE_CONTENT.hero.description}
        </motion.p>
      </div>
    </section>
  );
}
