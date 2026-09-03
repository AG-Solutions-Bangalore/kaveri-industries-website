import { motion } from "motion/react";
import {
  Crosshair,
  Layers,
  ClipboardCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { QUALITY_TENETS } from "@/feature/About/api/aboutConstants";

const EASE = [0.22, 1, 0.36, 1] as const;

const ICON_MAP: Record<string, LucideIcon> = {
  Ruler: Crosshair,
  Layers: Layers,
  ClipboardCheck: ClipboardCheck,
  ShieldCheck: ShieldCheck,
};

/**
 * "Our Quality Focus" / Core Tenets section matching Image 2:
 * 4 cards over a blueprint grid background highlighting Precision,
 * Consistency, Quality Assurance, and Zero-Defect Objective.
 */
export function QualityFocus() {
  return (
    <section
      aria-labelledby="tenets-heading"
      className="relative overflow-hidden bg-slate-50/70 dark:bg-card/40 py-16 md:py-24 border-y border-border"
    >
      {/* Blueprint grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37, 99, 235, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 99, 235, 0.12) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="space-y-2">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400"
          >
            CORE TENETS
          </motion.p>

          <motion.h3
            id="tenets-heading"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Our Quality Focus
          </motion.h3>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {QUALITY_TENETS.map((tenet, idx) => {
            const Icon = ICON_MAP[tenet.icon] ?? ShieldCheck;

            return (
              <motion.div
                key={tenet.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{
                  duration: 0.6,
                  ease: EASE,
                  delay: 0.1 + idx * 0.08,
                }}
                className="group relative flex flex-col justify-between rounded-sm border border-border bg-card p-6 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-300 hover:shadow-md dark:hover:border-brand-700"
              >
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center text-brand-600 dark:text-brand-400">
                    <Icon className="h-6 w-6 stroke-[1.75]" aria-hidden="true" />
                  </div>

                  <h4 className="text-sm font-bold text-foreground sm:text-base">
                    {tenet.title}
                  </h4>

                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                    {tenet.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
