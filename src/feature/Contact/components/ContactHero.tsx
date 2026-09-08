import { motion } from "motion/react";
import { CONTACT_PAGE_CONTENT } from "@/feature/Contact/api/contactInfo";
import { IMAGE_BASE_URL } from "@/lib/images";

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
      {/* Factory exterior photograph — real photo replaces earlier gradient mock */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${IMAGE_BASE_URL}/contact/contact-hero-factory.webp)` }}
      />
      {/* Dark gradient wash for legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.78)_0%,rgba(2,6,23,0.62)_50%,rgba(2,6,23,0.86)_100%)]"
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
