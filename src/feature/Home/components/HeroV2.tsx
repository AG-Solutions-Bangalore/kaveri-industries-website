import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { IMAGE_BASE_URL } from "@/lib/images";

const HERO_SLIDES = [
  {
    id: "01",
    line1: "PRECISION",
    line2: "THAT HOLDS",
    description:
      "High tensile fasteners engineered for strength, reliability and performance across industries.",
    ctaLabel: "EXPLORE PRODUCTS",
    ctaHref: "/products",
  },
  {
    id: "02",
    line1: "ENGINEERED",
    line2: "FOR RIGOR",
    description:
      "High grade 10.9 & 12.9 structural bolts built to withstand extreme dynamic and static loads.",
    ctaLabel: "OUR CAPABILITIES",
    ctaHref: "/about",
  },
  {
    id: "03",
    line1: "GLOBAL",
    line2: "EXCELLENCE",
    description:
      "Supplying premier infrastructure, energy, rail, and engineering projects across 40+ nations.",
    ctaLabel: "VIEW INDUSTRIES",
    ctaHref: "/industries",
  },
];

const METRICS = [
  {
    value: "30+",
    line1: "YEARS OF",
    line2: "EXCELLENCE",
    icon: (
      <svg
        className="h-9 w-9 text-[#E5A83B]"
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Plant Silos Icon matching reference */}
        <rect x="4" y="16" width="7" height="15" rx="1" />
        <path d="M4 16 C4 11.5, 11 11.5, 11 16" />
        <line x1="4" y1="21" x2="11" y2="21" />
        <line x1="4" y1="26" x2="11" y2="26" />
        <rect x="14" y="11" width="8" height="20" rx="1" />
        <path d="M14 11 C14 6.5, 22 6.5, 22 11" />
        <line x1="14" y1="17" x2="22" y2="17" />
        <line x1="14" y1="23" x2="22" y2="23" />
        <path d="M25 31 L25 18 L32 18 L32 31" />
        <path d="M25 18 L28.5 14 L32 18" />
        <line x1="2" y1="31" x2="34" y2="31" />
      </svg>
    ),
  },
  {
    value: "50,000+",
    line1: "TONS ANNUAL",
    line2: "CAPACITY",
    icon: (
      <svg
        className="h-9 w-9 text-[#E5A83B]"
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Gear with Center Bolt Icon matching reference */}
        <path d="M16 3 L20 3 L21 6.8 C22.4 7.4 23.6 8.2 24.7 9.2 L28.4 7.5 L31.2 11.4 L28.9 14.8 C29.4 16 29.8 17.3 30 18.7 L33.8 20.3 L33.2 24.8 L29.4 25.9 C29 27.2 28.2 28.4 27.2 29.4 L28.8 33.1 L24.9 34.8 L21.9 32.2 C20.7 32.8 19.3 33.1 17.8 33.1 L15.6 33.1 C14.1 33.1 12.7 32.8 11.5 32.2 L8.5 34.8 L4.6 33.1 L6.2 29.4 C5.2 28.4 4.4 27.2 4 25.9 L0.2 24.8 L-0.4 20.3 L3.4 18.7 C3.6 17.3 4 16 4.5 14.8 L2.2 11.4 L5 7.5 L8.7 9.2 C9.8 8.2 11 7.4 12.4 6.8 Z" />
        <circle cx="18" cy="18" r="6" />
        <circle cx="18" cy="18" r="2.5" />
      </svg>
    ),
  },
  {
    value: "40+",
    line1: "COUNTRIES",
    line2: "SERVED",
    icon: (
      <svg
        className="h-9 w-9 text-[#E5A83B]"
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Grid Globe matching reference */}
        <circle cx="18" cy="18" r="14" />
        <line x1="4" y1="18" x2="32" y2="18" />
        <ellipse cx="18" cy="18" rx="7.5" ry="14" />
        <path d="M6.5 10 C10.5 13, 25.5 13, 29.5 10" />
        <path d="M6.5 26 C10.5 23, 25.5 23, 29.5 26" />
      </svg>
    ),
  },
  {
    value: "100%",
    line1: "QUALITY",
    line2: "ASSURANCE",
    icon: (
      <svg
        className="h-9 w-9 text-[#E5A83B]"
        viewBox="0 0 36 36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {/* Quality Shield matching reference */}
        <path d="M18 4 L29 8 C29 20, 24 28, 18 32 C12 28, 7 20, 7 8 Z" />
        <path d="M18 7 L26.5 10.5 C26.5 19.5, 22.5 26, 18 29.5 C13.5 26, 9.5 19.5, 9.5 10.5 Z" />
      </svg>
    ),
  },
];

export function HeroV2() {
  const navigate = useNavigate();
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Auto-advance slides smoothly every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = HERO_SLIDES[activeSlideIndex];

  return (
    <section
      aria-label="Kaveri Fasteners Hero"
      className="relative w-full overflow-hidden bg-[#0A0D12] text-white"
    >
      {/* Visual Canvas — Compact, balanced height without bloated vertical empty space */}
      <div className="relative w-full">
        {/* Industrial Bolt Photography Background — webp primary with
            explicit dimensions (no CLS); PNG kept only as legacy fallback. */}
        <picture>
          <source
            srcSet={`${IMAGE_BASE_URL}/home/hero-banner-bg-v2.webp`}
            type="image/webp"
          />
          <img
            src={`${IMAGE_BASE_URL}/home/hero-banner-bg-v2.webp`}
            alt="Kaveri High Tensile 10.9 Hex Bolts and Fasteners"
            className="absolute inset-0 h-full w-full bg-[#0A0D12] object-cover object-[70%_center] md:object-[62%_center]"
            width={1920}
            height={1080}
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>

        {/* Left Dark Vignette & Gradient for Sharp Text Legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#07090C] via-[#07090C]/85 to-transparent sm:w-3/5 lg:w-[52%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-transparent to-black/30"
        />

        {/* Hero Content Container — Tight, balanced padding matching reference */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-10 sm:pb-12 md:pt-12 md:pb-12 lg:pt-36 lg:pb-14">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 xl:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Hero Headline — Tall, condensed, bold font matching Oswald in mockup */}
                  <div className="space-y-0.5">
                    <h1 className="text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.95rem] leading-[0.94] font-['Oswald',sans-serif]">
                      {currentSlide.line1}
                    </h1>
                    <div className="text-5xl font-bold uppercase tracking-tight text-[#E5A83B] sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.95rem] leading-[0.94] font-['Oswald',sans-serif]">
                      {currentSlide.line2}
                    </div>
                  </div>

                  {/* Subtitle Description */}
                  <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base font-normal">
                    {currentSlide.description}
                  </p>

                  {/* Outlined Industrial CTA Button */}
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => navigate(currentSlide.ctaHref)}
                      className="group inline-flex items-center gap-2.5 border border-[#E5A83B]/60 bg-black/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#E5A83B] hover:bg-[#E5A83B]/15 hover:text-[#E5A83B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A83B]"
                    >
                      <span>{currentSlide.ctaLabel}</span>
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side Vertical Slider Indicator */}
            <div className="hidden lg:col-span-4 lg:flex lg:justify-end xl:col-span-5">
              <div className="flex flex-col items-center gap-2 pr-6">
                <button
                  type="button"
                  onClick={() => setActiveSlideIndex(0)}
                  className={`text-[11px] font-mono transition-colors duration-200 ${
                    activeSlideIndex === 0
                      ? "text-[#E5A83B] font-bold"
                      : "text-slate-500 hover:text-white"
                  }`}
                  aria-label="Slide 1"
                >
                  01
                </button>

                {/* Vertical Track with Active Slider Indicator */}
                <div
                  role="tablist"
                  aria-label="Slide Selection"
                  className="relative h-20 w-[2px] bg-white/20 rounded-full my-0.5 cursor-pointer"
                  onClick={() =>
                    setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length)
                  }
                >
                  <motion.div
                    className="absolute left-[-1px] w-[4px] rounded-full bg-[#E5A83B] shadow-[0_0_8px_rgba(229,168,59,0.8)]"
                    animate={{
                      top: `${(activeSlideIndex / (HERO_SLIDES.length - 1)) * 70}%`,
                      height: "22px",
                    }}
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => setActiveSlideIndex(HERO_SLIDES.length - 1)}
                  className={`text-[11px] font-mono transition-colors duration-200 ${
                    activeSlideIndex === HERO_SLIDES.length - 1
                      ? "text-[#E5A83B] font-bold"
                      : "text-slate-500 hover:text-white"
                  }`}
                  aria-label="Slide 3"
                >
                  0{HERO_SLIDES.length}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Integrated Metrics Bar with Vertical Dividers */}
      <div className="relative border-t border-white/10 bg-[#0E1014] py-5 sm:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-6 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
            {METRICS.map((metric, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3.5 sm:gap-4 ${
                  idx === 0
                    ? "lg:pr-6"
                    : idx === METRICS.length - 1
                      ? "lg:pl-8"
                      : "lg:px-6"
                }`}
              >
                {/* Gold Icon */}
                <div className="shrink-0 flex items-center justify-center">
                  {metric.icon}
                </div>

                {/* Metric Number & 2-Line Label */}
                <div>
                  <div className="text-2xl font-bold tracking-tight text-white sm:text-3xl font-['Oswald',sans-serif] leading-none">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 leading-snug mt-1">
                    <div>{metric.line1}</div>
                    <div>{metric.line2}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroV2;
