import { ArrowRight, Award, ShieldCheck, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { HERO_CONTENT } from "@/feature/Home/api/homeConstants";
import { ShineButton } from "@/components/shine";
import HeroFloating from "./HeroFloating";
import { RollingText } from "@/components/animate-ui/primitives/texts/rolling";
import { useQuoteModal } from "@/context/QuoteModalContext";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const navigate = useNavigate();
  const { openQuoteModal } = useQuoteModal();

  const slideUp = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative text-white">
      {/* Background banner image */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <img
          src="/images/home/home_banner_image.webp"
          alt="High tensile MS fasteners manufactured by Kaveri Industries"
          title="High Tensile MS Fasteners Manufacturer – Kaveri Industries"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />

        {/* <div className="absolute inset-0 bg-[#071120]/75" /> */}
      </div>

      <section
        aria-labelledby="hero-heading"
        className="relative mx-auto max-w-7xl px-4 pt-12 pb-20 md:pb-28 lg:pb-32"
      >
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tagline / Eyebrow */}
            <motion.div
              {...slideUp}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center"
            >
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300">
                {HERO_CONTENT.tagline}
              </span>
            </motion.div>

            {/* Main Heading with Vertical Accent Line */}
            <motion.div
              {...slideUp}
              transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
              className="relative"
            >
              <h1
                id="hero-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12]"
              >
                High-Tensile MS <br />
                Fasteners for <br />
                <span className="text-brand-500 inline-block">
                  <RollingText
                    text="Demanding"
                    transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                  />
                </span>{" "}
                Applications
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              {...slideUp}
              transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
              className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* 3 Value Badges in a Row */}
            <motion.div
              {...slideUp}
              transition={{ duration: 0.6, ease: EASE, delay: 0.22 }}
              className="grid grid-cols-1 shadow-lg gap-4 pt-2 sm:grid-cols-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-brand-400">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">ISO 9001:2008</p>
                  <p className="text-[11px] text-slate-400">Certified Company</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-brand-400">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Zero Defect</p>
                  <p className="text-[11px] text-slate-400">Zero Rejection</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-brand-400">
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Reliable & Timely</p>
                  <p className="text-[11px] text-slate-400">Supply</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              {...slideUp}
              transition={{ duration: 0.6, ease: EASE, delay: 0.28 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <ShineButton
                onClick={() => navigate(HERO_CONTENT.primaryCta.href)}
                className="group inline-flex items-center gap-2 rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all duration-200 hover:bg-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
              >
                {HERO_CONTENT.primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-rotate-45"
                  aria-hidden="true"
                />
              </ShineButton>
              <ShineButton
                onClick={() => openQuoteModal()}
                className="group inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:border-slate-600 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
              >
                {HERO_CONTENT.secondaryCta.label}
               
              </ShineButton>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full bg-transparent"><HeroFloating /></div>
    </div>
  ) 
}