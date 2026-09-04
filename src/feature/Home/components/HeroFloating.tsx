import { Box, Cog, Headphones, ShieldCheck } from "lucide-react";
import { HERO_VALUE_PILLARS } from "@/feature/Home/api/homeConstants";

const PILLAR_ICONS = {
  cog: Cog,
  "shield-check": ShieldCheck,
  package: Box,
  users: Headphones,
} as const;

export function HeroFloating() {
  return (
    <div className="relative z-20 -mb-16 hidden justify-center px-4 lg:flex">
      <div className="w-full max-w-7xl rounded-xl border border-slate-200/90 bg-white p-6 pt-24 shadow-2xl md:p-8 dark:border-slate-800 dark:bg-slate-900">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-100 dark:lg:divide-slate-800">
          {HERO_VALUE_PILLARS.map((pillar, index) => {
            const Icon = PILLAR_ICONS[pillar.icon as keyof typeof PILLAR_ICONS] ?? Cog;
            return (
              <div
                key={pillar.id}
                className={`flex items-start gap-3 ${
                  index === 0
                    ? "pr-3 lg:pr-6"
                    : index === HERO_VALUE_PILLARS.length - 1
                      ? "pl-3 lg:pl-6"
                      : "px-3 lg:px-6"
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeroFloating;