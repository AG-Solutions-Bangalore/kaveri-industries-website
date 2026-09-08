import { useState } from "react";
import { ArrowRight, Play, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { IMAGE_BASE_URL } from "@/lib/images";

const PILLARS = [
  {
    title: "Advanced",
    subtitle: "Manufacturing",
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
        {/* Quality Medal / Advanced Manufacturing */}
        <circle cx="18" cy="14" r="8" />
        <circle cx="18" cy="14" r="5" />
        <path d="M14 20 L11 31 L18 27 L25 31 L22 20" />
      </svg>
    ),
  },
  {
    title: "Global Quality",
    subtitle: "Standards",
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
        {/* Certified Quality Cog Gear */}
        <circle cx="18" cy="18" r="6" />
        <path d="M18 4 L18 7 M18 29 L18 32 M4 18 L7 18 M29 18 L32 18 M8 8 L10.5 10.5 M25.5 25.5 L28 28 M8 28 L10.5 25.5 M25.5 10.5 L28 8" />
        <circle cx="18" cy="18" r="12" strokeDasharray="2 3" />
      </svg>
    ),
  },
  {
    title: "Customer First",
    subtitle: "Approach",
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
        {/* Customer First User / Partnership */}
        <circle cx="18" cy="13" r="5" />
        <path d="M7 29 C7 23, 11 20, 18 20 C25 20, 29 23, 29 29" />
        <path d="M25 10 C27 12, 27 15, 25 17" />
        <path d="M11 10 C9 12, 9 15, 11 17" />
      </svg>
    ),
  },
];

export function AboutSectionV2() {
  const navigate = useNavigate();
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      aria-labelledby="about-v2-heading"
      className="relative w-full overflow-hidden bg-[#07090C] text-white"
    >
      {/* Background Hot Rolling Mill Photography */}
      <picture>
        <source
          srcSet={`${IMAGE_BASE_URL}/home/v2-hero-section-3rd-image-bg.webp`}
          type="image/webp"
        />
        <img
          src={`${IMAGE_BASE_URL}/home/v2-hero-section-3rd-image-bg.png`}
          alt="Kaveri Industries automated hot forging and fastener rolling facility"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* Cinematic Vignette Overlay — Dark contrast on left side for text readability */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#07090C] via-[#07090C]/90 to-transparent sm:w-4/5 lg:w-[58%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#07090C] via-transparent to-[#07090C]/40"
      />

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          {/* Left Text Block */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5">
            {/* Badge / Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E5A83B]">
                ABOUT KAVERI
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="space-y-1"
            >
              <h2
                id="about-v2-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white font-display leading-[1.08]"
              >
                Building Strength. <br />
                Delivering Trust.
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-lg text-xs sm:text-sm leading-relaxed text-slate-300 font-normal"
            >
              Kaveri High Tensile Fasteners is a trusted name in the manufacture
              of high quality fasteners since 1990. With advanced
              infrastructure, skilled expertise and a passion for excellence, we
              create fastening solutions that build a stronger tomorrow.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="pt-2"
            >
              <button
                type="button"
                onClick={() => navigate("/about")}
                className="group inline-flex items-center gap-2.5 rounded-none border border-[#E5A83B]/70 bg-black/40 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-sm transition-all duration-300 hover:border-[#E5A83B] hover:bg-[#E5A83B]/15 hover:text-[#E5A83B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5A83B]"
              >
                <span>KNOW MORE</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </button>
            </motion.div>

            {/* 3 Pillars in a Row at the bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10 sm:gap-6"
            >
              {PILLARS.map((pillar, idx) => (
                <div key={idx} className="flex items-center gap-2.5 sm:gap-3">
                  <div className="shrink-0">{pillar.icon}</div>
                  <div className="text-[10px] sm:text-xs font-bold text-white leading-tight">
                    <div>{pillar.title}</div>
                    <div className="text-slate-300 font-semibold mt-0.5">
                      {pillar.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Floating Card: Manufacturing Excellence Video Showcase */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-start lg:justify-end pb-4 lg:pb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              onClick={() => setVideoModalOpen(true)}
              className="group flex max-w-sm items-center gap-4 rounded-none border border-white/15 bg-[#12151C]/95 p-4 sm:p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#E5A83B]/60 hover:bg-[#161a22] cursor-pointer"
            >
              {/* Gold Circular Play Button */}
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E5A83B] text-[#0B0D12] shadow-lg transition-transform duration-300 group-hover:scale-110"
                aria-label="Play manufacturing video"
              >
                <Play className="h-5 w-5 fill-current ml-0.5" />
              </div>

              {/* Card Copy */}
              <div>
                <div className="text-xs font-extrabold uppercase tracking-wider text-white font-display leading-tight">
                  MANUFACTURING <br />
                  EXCELLENCE
                </div>
                <p className="mt-1 text-[11px] leading-snug text-slate-400">
                  State-of-the-art facilities ensuring unmatched precision and
                  consistency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal Preview */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setVideoModalOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl border border-white/20 bg-[#0B0D12] p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#E5A83B]">
                Manufacturing Excellence Tour
              </h3>
              <button
                type="button"
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-400 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 aspect-video w-full overflow-hidden bg-slate-900 flex items-center justify-center relative">
              <img
                src={`${IMAGE_BASE_URL}/home/v2-hero-section-3rd-image-bg.webp`}
                alt="Facility walkthrough"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-4">
                <div className="h-16 w-16 rounded-full bg-[#E5A83B] flex items-center justify-center text-[#0B0D12] mb-3">
                  <Play className="h-7 w-7 fill-current ml-1" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-white">
                  Automated Cold & Hot Forging Lines
                </p>
                <p className="text-[11px] text-slate-300 mt-1 max-w-xs">
                  Virtual facility tour demonstrating computerized thread rolling and rigorous metallurgical lab testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AboutSectionV2;
