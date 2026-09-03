import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { CONTACT_PAGE_CONTENT } from "@/feature/Contact/api/contactInfo";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Looking for a Fastening Solution?" — light themed CTA strip between
 * the location map and the footer. Matches the design reference.
 */
export function ContactCTA() {
  const cta = CONTACT_PAGE_CONTENT.cta;

  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="bg-slate-50/40 py-14 md:py-20 dark:bg-card/30"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="flex flex-col items-start gap-6 rounded-sm border border-slate-200/70 bg-white p-6 shadow-xs sm:flex-row sm:items-center sm:justify-between sm:p-8 dark:border-slate-700/60 dark:bg-slate-900/40"
        >
          <div className="max-w-2xl space-y-1.5">
            <h2
              id="contact-cta-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              {cta.heading}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {cta.description}
            </p>
          </div>
          <Link
            to={cta.cta.href}
            className="group inline-flex shrink-0 items-center gap-2 rounded-sm border border-foreground/15 bg-white px-5 py-2.5 text-xs md:text-sm font-semibold text-foreground shadow-xs transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-slate-900/60"
          >
            {cta.cta.label}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
