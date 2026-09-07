import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { CTA_BANNER_CONTENT } from "@/feature/Home/api/homeConstants";
import { ShineButton } from "@/components/shine";

const EASE = [0.22, 1, 0.36, 1] as const;

export function CTABanner() {
  const navigate = useNavigate();

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#071224] text-white py-12 md:py-8 border-t border-slate-800/80"
    >
      {/* Background right-side image + blueprint grid */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Right-side product image */}
        <img
          src="/images/home/CTABannerRightImage.webp"
          alt="Kaveri Industries high tensile fastener manufacturing"
          title="Kaveri Industries High Tensile Fastener Manufacturing"
          className="absolute right-0 top-[65%] h-[120%] w-auto -translate-y-1/2 object-contain opacity-90"
          loading="lazy"
        />
        {/* Dark gradient overlay for left-side text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#071224] via-[#071224]/85 to-transparent" />
        {/* Subtle blueprint grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#DAA235_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-8">
          {/* Left: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-6 space-y-3 flex-1"
          >
            <h2
              id="cta-heading"
              className="text-2xl sm:text-3xl lg:text-4xl whitespace-nowrap font-extrabold tracking-tight text-white leading-snug"
            >
              {CTA_BANNER_CONTENT.heading}
            </h2>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-300 max-w-xl">
              {CTA_BANNER_CONTENT.description}
            </p>
          </motion.div>

          {/* Middle: 2 Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="lg:col-span-3 mr-56 flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col justify-center"
          >
            <ShineButton
              onClick={() => navigate(CTA_BANNER_CONTENT.primaryCta.href)}
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-200 hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
            >
              {CTA_BANNER_CONTENT.primaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
                aria-hidden="true"
              />
            </ShineButton>

            <ShineButton
              onClick={() => navigate(CTA_BANNER_CONTENT.secondaryCta.href)}
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            >
              {CTA_BANNER_CONTENT.secondaryCta.label}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
                aria-hidden="true"
              />
            </ShineButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}