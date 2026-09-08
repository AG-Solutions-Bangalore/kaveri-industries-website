import { Suspense, lazy, type CSSProperties } from "react";
import { ArrowRight, Award, ShieldCheck, Truck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { HERO_CONTENT } from "@/feature/Home/api/homeConstants";
import { ShineButton } from "@/components/shine";
import HeroFloating from "./HeroFloating";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { LOCAL_IMAGE_BASE } from "@/lib/images";

// RollingText pulls the whole `motion` runtime — defer it past first paint.
// Fallback renders the identical word statically, so there is no layout
// shift when the animated version hydrates.
const RollingText = lazy(() =>
  import("@/components/animate-ui/primitives/texts/rolling").then((m) => ({
    default: m.RollingText,
  })),
);

export function Hero() {
  const navigate = useNavigate();
  const { openQuoteModal } = useQuoteModal();

  // CSS-only staggered entrance (see `.hero-enter` in index.css) — same
  // fade + 16px rise the motion version had, but zero JS on the critical
  // path so `motion` never blocks FCP/LCP.
  const enter = (delayMs: number): { style: CSSProperties } => ({
    style: { "--enter-delay": `${delayMs}ms` } as CSSProperties,
  });

  return (
    <div className="relative text-white">
      {/* Background banner image — explicit dimensions reserve layout space
          (no CLS) and sizes lets the browser pick the right bytes. The slate
          bg paints instantly so LCP never shows a white flash. */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden bg-slate-900"
      >
        <img
          src={`${LOCAL_IMAGE_BASE}/home/home_banner_image-1280.webp`}
          srcSet={`${LOCAL_IMAGE_BASE}/home/home_banner_image-768.webp 768w, ${LOCAL_IMAGE_BASE}/home/home_banner_image-1280.webp 1280w, ${LOCAL_IMAGE_BASE}/home/home_banner_image-1440.webp 1440w, ${LOCAL_IMAGE_BASE}/home/home_banner_image.webp 1920w`}
          alt="High tensile MS fasteners manufactured by Kaveri Industries"
          title="High Tensile MS Fasteners Manufacturer – Kaveri Industries"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          sizes="100vw"
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
            <div {...enter(0)} className="hero-enter flex items-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-300">
                {HERO_CONTENT.tagline}
              </span>
            </div>

            {/* Main Heading with Vertical Accent Line */}
            <div {...enter(80)} className="hero-enter relative">
              <h1
                id="hero-heading"
                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.12]"
              >
                High-Tensile MS <br />
                Fasteners for <br />
                <span className="text-brand-500 inline-block">
                  <Suspense fallback={<span>Demanding</span>}>
                    <RollingText
                      text="Demanding"
                      transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
                    />
                  </Suspense>
                </span>{" "}
                Applications
              </h1>
            </div>

            {/* Description */}
            <p
              {...enter(160)}
              className="hero-enter max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              {HERO_CONTENT.description}
            </p>

            {/* 3 Value Badges in a Row */}
            <div
              {...enter(220)}
              className="hero-enter grid grid-cols-1 shadow-lg gap-4 pt-2 sm:grid-cols-3"
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
            </div>

            {/* CTA Buttons */}
            <div
              {...enter(280)}
              className="hero-enter flex flex-wrap items-center gap-4 pt-4"
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
            </div>
          </div>
        </div>
      </section>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full bg-transparent"><HeroFloating /></div>
    </div>
  ) 
}