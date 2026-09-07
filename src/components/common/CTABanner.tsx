import { ArrowRight, MessageSquareCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ShineButton } from "@/components/shine";
import { useQuoteModal } from "@/context/QuoteModalContext";

const EASE = [0.22, 1, 0.36, 1] as const;

export interface CTABannerProps {
  heading?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

/**
 * Reusable dark inverted CTA banner component.
 * Directs users to the Contact Us page for quotes and technical enquiries.
 */
export function CTABanner({
  heading = "Looking for the Right Fastening Solution?",
  description = "Connect with our engineering team to discuss technical specifications, custom requirements, or to request a comprehensive quote for your project.",
  primaryCta = { label: "Contact Us", href: "/contact" },
  secondaryCta = { label: "Request a Quote", href: "/contact" },
}: CTABannerProps) {
  const navigate = useNavigate();
  const { openQuoteModal } = useQuoteModal();
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden border-t border-slate-200 bg-slate-50 py-16 text-slate-900 md:py-24 dark:border-slate-800 dark:bg-slate-950 dark:text-white"
    >
      {/* Drifting blueprint grid */}
      <div
        aria-hidden="true"
        className="grid-drift pointer-events-none absolute inset-0 bg-[radial-gradient(#DAA235_1px,transparent_1px)] [background-size:20px_20px] opacity-10 dark:opacity-25"
      />
      {/* Brand radial wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-radial from-brand-600/20 via-transparent to-transparent opacity-90"
      />
      {/* Top accent hairline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 text-center">
        {/* Top Icon Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ willChange: "transform, opacity" }}
          className="inline-flex h-12 w-12 items-center justify-center rounded-sm border border-brand-500/30 bg-brand-500/10 text-brand-600 shadow-inner backdrop-blur-xs dark:border-brand-400/30 dark:bg-brand-600/20 dark:text-brand-400"
          aria-hidden="true"
        >
          <MessageSquareCheck className="h-6 w-6" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.08 }}
          id="cta-heading"
          className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl dark:text-white"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
          className="max-w-2xl text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-slate-300"
        >
          {description}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.24 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <ShineButton
            onClick={() => navigate(primaryCta.href)}
            className="group inline-flex items-center gap-2 rounded-sm bg-brand-500 px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950"
          >
            {primaryCta.label}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
              aria-hidden="true"
            />
          </ShineButton>
          <ShineButton
            onClick={() => {
              if (secondaryCta.label.toLowerCase().includes("quote")) {
                openQuoteModal();
              } else {
                navigate(secondaryCta.href);
              }
            }}
            className="inline-flex items-center gap-2 rounded-sm border border-slate-300 bg-white px-5 py-2.5 text-xs md:text-sm font-semibold text-slate-900 shadow-xs transition-colors duration-200 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white dark:hover:bg-slate-800 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
          >
            {secondaryCta.label}
          </ShineButton>
        </motion.div>
      </div>
    </section>
  );
}
