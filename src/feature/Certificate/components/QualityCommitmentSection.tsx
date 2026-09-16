import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { QUALITY_COMMITMENT_DATA } from "../api/certificateConstants";

export function QualityCommitmentSection() {
  return (
    <section
      aria-labelledby="quality-commitment-heading"
      className="border-t border-slate-200 bg-slate-50 py-16 dark:border-slate-800 dark:bg-[#060e1d]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Description, CTA */}
          <div className="lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              {QUALITY_COMMITMENT_DATA.eyebrow}
            </span>
            <h2
              id="quality-commitment-heading"
              className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              {QUALITY_COMMITMENT_DATA.heading}
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
              {QUALITY_COMMITMENT_DATA.description}
            </p>

            <div className="mt-6">
              <Link
                to={QUALITY_COMMITMENT_DATA.ctaLink}
                className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-sm transition-all hover:bg-brand-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 sm:text-sm"
              >
                {QUALITY_COMMITMENT_DATA.ctaText}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Middle Column: 5 Quality Checkpoints */}
          <div className="space-y-3.5 lg:col-span-4">
            {QUALITY_COMMITMENT_DATA.checkpoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-lg border border-slate-200/60 bg-white p-3 shadow-2xs transition-colors hover:border-brand-500/30 dark:border-slate-800/80 dark:bg-slate-900/60"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <span className="text-xs font-medium text-slate-800 dark:text-slate-200 sm:text-sm">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column: Industrial Fastener Photo + Badge */}
          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 shadow-md dark:border-slate-800">
              <img
                src={QUALITY_COMMITMENT_DATA.image}
                alt={QUALITY_COMMITMENT_DATA.imageAlt}
                className="h-64 w-full object-cover sm:h-72"
              />

              {/* Quality In Every Detail Badge */}
              <div className="absolute bottom-3 right-3 rounded-md bg-slate-950/85 px-3 py-2 text-right backdrop-blur-xs border border-slate-800/80 shadow-lg">
                <p className="text-[10px] font-bold tracking-widest text-brand-400">
                  QUALITY
                </p>
                <p className="text-[10px] font-bold tracking-widest text-slate-200">
                  IN EVERY
                </p>
                <p className="text-[10px] font-bold tracking-widest text-slate-200">
                  DETAIL
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
