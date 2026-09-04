import { Calendar, Package, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";
import { QUALITY_CONTENT } from "@/feature/Home/api/homeConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

export function QualityStatement() {
  return (
    <section
      aria-labelledby="quality-heading"
      className="bg-white dark:bg-background py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Top 2-Column Section */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Visual Column — CNC Machine Operator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-slate-200/90 dark:border-slate-800 bg-slate-100 shadow-md">
              <img
                src={QUALITY_CONTENT.imageUrl}
                alt={QUALITY_CONTENT.imageAlt}
                width={800}
                height={600}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400"
            >
              {QUALITY_CONTENT.badge}
            </motion.p>

            <motion.h2
              id="quality-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.06 }}
              className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight"
            >
              {QUALITY_CONTENT.heading}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.55, ease: EASE, delay: 0.12 }}
              className="text-xs sm:text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300"
            >
              {QUALITY_CONTENT.description}
            </motion.p>

            {/* 4 Stats Grid with Blue Line Icons */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4"
            >
              {/* Stat 1: 20+ */}
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                  <Calendar className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                    20+
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Years of Experience
                  </p>
                </div>
              </div>

              {/* Stat 2: 500+ */}
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                  <Users className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                    500+
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Satisfied Customers
                  </p>
                </div>
              </div>

              {/* Stat 3: 1000+ */}
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                  <Package className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                    1000+
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Products Delivered
                  </p>
                </div>
              </div>

              {/* Stat 4: 100% */}
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-slate-900 dark:text-white">
                    100%
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Commitment to Quality
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Certifications Banner Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
          className="mt-14 rounded-xl border border-slate-200/80 bg-slate-50/70 p-6 md:px-8 md:py-6 dark:border-slate-800 dark:bg-slate-900/50"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: OUR CERTIFICATIONS + ISO 9001:2008 */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              <span className="text-xs md:text-sm font-extrabold tracking-wider text-slate-900 dark:text-white uppercase">
                OUR CERTIFICATIONS
              </span>

              <div className="h-8 w-px bg-slate-300 dark:bg-slate-700 hidden sm:block" />

              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  ISO 9001:2008
                </p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  CERTIFIED COMPANY
                </p>
              </div>
            </div>

            {/* Middle: IAF & NABCB + Make in India Logos */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8">
              {/* IAF & NABCB Combined Logo */}
              <img
                src="/images/iaf-and-nbac-logo.webp"
                alt="IAF and NABCB accredited — QMS 011"
                title="IAF — International Accreditation Forum & NABCB — QMS 011"
                width={140}
                height={48}
                className="h-17.5 w-auto object-contain"
                loading="lazy"
              />

              {/* Make In India Lion Logo */}
              <img
                src="/images/made-in-india-logo.webp"
                alt="Make In India certified"
                title="Make In India Certified"
                width={160}
                height={48}
                className="h-17.5 w-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Right: Description note */}
            <div className="max-w-xs text-xs text-slate-500 dark:text-slate-400 leading-relaxed border-t border-slate-200 pt-4 lg:border-t-0 lg:pt-0 lg:border-l lg:border-slate-200/80 lg:pl-6 dark:border-slate-800">
              We are an ISO 9001:2008 certified company committed to international quality standards and continuous improvement.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}