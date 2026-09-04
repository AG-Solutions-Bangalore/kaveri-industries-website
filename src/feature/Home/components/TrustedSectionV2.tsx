import { motion } from "motion/react";

const INDUSTRIES = [
  {
    name: "AUTOMOTIVE",
    icon: (
      <svg
        className="h-8 w-8 mx-auto text-slate-800 transition-colors duration-200 group-hover:text-[#E5A83B] dark:text-slate-200"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 16 L8.5 9 C9 7.8 10 7 11.5 7 L20.5 7 C22 7 23 7.8 23.5 9 L26 16" />
        <rect x="4" y="16" width="24" height="9" rx="2.5" />
        <circle cx="8.5" cy="20.5" r="1.75" />
        <circle cx="23.5" cy="20.5" r="1.75" />
        <line x1="12" y1="20.5" x2="20" y2="20.5" />
        <path d="M6 25 L6 27.5 M26 25 L26 27.5" />
      </svg>
    ),
  },
  {
    name: "CONSTRUCTION",
    icon: (
      <svg
        className="h-8 w-8 mx-auto text-slate-800 transition-colors duration-200 group-hover:text-[#E5A83B] dark:text-slate-200"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 4 L16 28" />
        <path d="M8 28 L24 28" />
        <path d="M16 4 L5 10 L27 10 Z" />
        <line x1="27" y1="10" x2="27" y2="18" />
        <rect x="25" y="18" width="4" height="4" />
        <path d="M12 28 L16 16 L20 28" />
        <path d="M6 28 L10 20 L14 28" />
      </svg>
    ),
  },
  {
    name: "ENERGY",
    icon: (
      <svg
        className="h-8 w-8 mx-auto text-slate-800 transition-colors duration-200 group-hover:text-[#E5A83B] dark:text-slate-200"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="11" />
        <circle cx="16" cy="16" r="2.5" fill="currentColor" />
        <line x1="16" y1="2" x2="16" y2="5" />
        <line x1="16" y1="27" x2="16" y2="30" />
        <line x1="2" y1="16" x2="5" y2="16" />
        <line x1="27" y1="16" x2="30" y2="16" />
        <path d="M16 13.5 C14 9, 18 9, 16 13.5" />
        <path d="M13.5 17.5 C9 15.5, 9 19.5, 13.5 17.5" />
        <path d="M18.5 17.5 C20 22, 16 22, 18.5 17.5" />
      </svg>
    ),
  },
  {
    name: "RAILWAYS",
    icon: (
      <svg
        className="h-8 w-8 mx-auto text-slate-800 transition-colors duration-200 group-hover:text-[#E5A83B] dark:text-slate-200"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="7" y="5" width="18" height="20" rx="3.5" />
        <line x1="7" y1="14" x2="25" y2="14" />
        <circle cx="11.5" cy="19.5" r="1.5" />
        <circle cx="20.5" cy="19.5" r="1.5" />
        <line x1="13" y1="9" x2="19" y2="9" />
        <path d="M8 28 L11 25 M24 28 L21 25" />
        <line x1="6" y1="28" x2="26" y2="28" />
      </svg>
    ),
  },
  {
    name: "MARINE",
    icon: (
      <svg
        className="h-8 w-8 mx-auto text-slate-800 transition-colors duration-200 group-hover:text-[#E5A83B] dark:text-slate-200"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 20 L7 13 L25 13 L28 20 C24 22, 20 18, 16 20 C12 22, 8 18, 4 20 Z" />
        <path d="M11 13 L11 7 L21 7 L21 13" />
        <line x1="16" y1="7" x2="16" y2="3" />
        <path d="M2 26 C6 28, 10 24, 14 26 C18 28, 22 24, 26 26 C28 27, 30 26, 31 25" />
      </svg>
    ),
  },
  {
    name: "INFRASTRUCTURE",
    icon: (
      <svg
        className="h-8 w-8 mx-auto text-slate-800 transition-colors duration-200 group-hover:text-[#E5A83B] dark:text-slate-200"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4 27 L8 9 L12 9 L12 27" />
        <path d="M20 27 L20 9 L24 9 L28 27" />
        <path d="M8 9 L16 4 L24 9" />
        <path d="M12 15 C14 13, 18 13, 20 15" />
        <line x1="2" y1="27" x2="30" y2="27" />
        <line x1="2" y1="21" x2="30" y2="21" />
      </svg>
    ),
  },
];

export function TrustedSectionV2() {
  return (
    <section
      aria-label="Trusted industries and certifications"
      className="border-t border-slate-200/90 bg-white py-10 sm:py-12 dark:border-slate-800 dark:bg-[#07090C]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Trusted by Industries Worldwide */}
          <div className="lg:col-span-8 xl:col-span-8">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-[0.14em] text-slate-800 dark:text-slate-200 mb-6"
            >
              TRUSTED BY INDUSTRIES WORLDWIDE
            </motion.h3>

            {/* 6 Industry Icons Grid */}
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-6 sm:gap-4 items-end text-center">
              {INDUSTRIES.map((industry, idx) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="group flex flex-col items-center justify-end cursor-pointer"
                >
                  <div className="transition-transform duration-200 group-hover:scale-110">
                    {industry.icon}
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-700 transition-colors duration-200 group-hover:text-[#E5A83B] dark:text-slate-300 mt-2.5">
                    {industry.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Certified & Compliant */}
          <div className="lg:col-span-4 xl:col-span-4 lg:border-l lg:border-slate-200 lg:dark:border-slate-800 lg:pl-10">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xs font-bold uppercase tracking-[0.14em] text-slate-800 dark:text-slate-200 mb-6"
            >
              CERTIFIED & COMPLIANT
            </motion.h3>

            {/* Certification Logo Images */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-7 sm:gap-9"
            >
              {/* ISO 9001:2015 Image */}
              <div className="flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:scale-105">
                <img
                  src="/images/certifications/iso-9001-2015.webp"
                  alt="ISO 9001:2015 Certified"
                  className="h-12 w-auto object-contain dark:invert dark:brightness-125 transition-all"
                  loading="lazy"
                />
              </div>

              {/* CE Mark Image */}
              <div className="group cursor-pointer transition-transform duration-200 hover:scale-105">
                <img
                  src="/images/certifications/ce-mark.webp"
                  alt="CE Conformity Certified"
                  className="h-10 w-auto object-contain dark:invert dark:brightness-125 transition-all"
                  loading="lazy"
                />
              </div>

              {/* ISI Mark Image */}
              <div className="group cursor-pointer transition-transform duration-200 hover:scale-105">
                <img
                  src="/images/certifications/isi-mark.webp"
                  alt="ISI BIS Quality Certified"
                  className="h-11 w-auto object-contain dark:invert dark:brightness-125 transition-all"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedSectionV2;
