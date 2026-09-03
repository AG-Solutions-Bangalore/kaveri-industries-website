import { ArrowRight, MessageSquareCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ShineButton } from "@/components/shine";

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
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-slate-950 text-white py-16 md:py-24"
    >
      {/* Drifting blueprint grid */}
      <div
        aria-hidden="true"
        className="grid-drift pointer-events-none absolute inset-0 bg-[radial-gradient(#DAA235_1px,transparent_1px)] [background-size:20px_20px] opacity-25"
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
          className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-brand-600/20 border border-brand-400/30 text-brand-400 shadow-inner backdrop-blur-xs"
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
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
        >
          {heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.65, ease: EASE, delay: 0.16 }}
          className="max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm"
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
            className="group inline-flex items-center gap-2 rounded-sm bg-brand-500 px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {primaryCta.label}
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
              aria-hidden="true"
            />
          </ShineButton>
          <ShineButton
            onClick={() => navigate(secondaryCta.href)}
            className="inline-flex items-center gap-2 rounded-sm border border-slate-700 bg-slate-900/80 px-5 py-2.5 text-xs md:text-sm font-semibold text-white shadow-xs transition-colors duration-200 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            {secondaryCta.label}
          </ShineButton>
        </motion.div>
      </div>
    </section>
  );
}
