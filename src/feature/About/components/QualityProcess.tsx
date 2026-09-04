import { motion } from "motion/react";
import { User, Activity } from "lucide-react";
import { QUALITY_PROCESS_CONTENT } from "@/feature/About/api/aboutConstants";
import { company } from "@/lib/company";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "Quality Through Manufacturing" / Process Integration section matching Image 2:
 * Left column: Process integration narrative.
 * Right column: Framed Manufacturing Shop Quality Dashboard window.
 */
export function QualityProcess() {
  return (
    <section
      aria-labelledby="process-heading"
      className="bg-background py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content Column */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400"
            >
              {QUALITY_PROCESS_CONTENT.badge}
            </motion.p>

            <motion.h3
              id="process-heading"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
              className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {QUALITY_PROCESS_CONTENT.heading}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.16 }}
              className="pt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base"
            >
              {QUALITY_PROCESS_CONTENT.paragraph}
            </motion.p>
          </div>

          {/* Framed Application / Dashboard Window Frame */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            className="overflow-hidden rounded-none border border-slate-300/80 dark:border-border bg-card shadow-lg"
          >
            {/* Window Top Navigation Bar */}
            <div className="flex flex-wrap items-center justify-between border-b border-border bg-slate-100/90 px-3 py-2 text-xs text-muted-foreground dark:bg-slate-900/90 gap-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="grid h-5 w-5 place-items-center rounded-xs bg-brand-700 text-[10px] font-bold text-white shadow-xs">
                  {company.monogram}
                </span>
                <span className="font-bold text-foreground text-[11px] hidden sm:inline">
                  {company.name}
                </span>
                <div className="hidden md:flex items-center gap-2 pl-2 text-[10px] text-muted-foreground">
                  <span className="font-semibold text-brand-600 dark:text-brand-400">Dashboard</span>
                  <span>•</span>
                  <span>Inspections</span>
                  <span>•</span>
                  <span>Defect Log</span>
                  <span>•</span>
                  <span>Reports</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
                  <Activity className="h-3 w-3 animate-pulse" />
                  <span className="hidden sm:inline">Live Line Sync</span>
                </div>
                <div className="h-3.5 w-px bg-border" />
                <div className="grid h-5 w-5 place-items-center rounded-full bg-slate-200 dark:bg-slate-800 text-foreground">
                  <User className="h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Window Subtitle Header */}
            <div className="border-b border-border/70 bg-white/60 dark:bg-slate-950/60 px-3 py-1.5 text-[11px] font-medium text-foreground/80 flex items-center justify-between">
              <span>Manufacturing Shop — Quality Overview</span>
              <span className="text-[10px] font-mono text-muted-foreground">Station 04 Active</span>
            </div>

            {/* Window Image Content */}
            <div className="relative aspect-16/10 overflow-hidden bg-slate-950">
              <img
                src={QUALITY_PROCESS_CONTENT.imageUrl}
                alt={QUALITY_PROCESS_CONTENT.imageAlt}
                width={1600}
                height={1000}
                decoding="async"
                className="h-full w-full object-cover grayscale contrast-115"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
