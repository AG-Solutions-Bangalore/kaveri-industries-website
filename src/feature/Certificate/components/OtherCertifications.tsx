import { Award, FileText, HardHat, Leaf, ArrowRight } from "lucide-react";
import { OTHER_CERTIFICATIONS, type OtherCertItem } from "../api/certificateConstants";

export function OtherCertifications() {
  const renderCertIcon = (type: OtherCertItem["type"]) => {
    switch (type) {
      case "hard-hat":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <HardHat className="h-5 w-5" />
          </div>
        );
      case "ce":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
            <span className="font-serif text-base font-black tracking-tighter">CE</span>
          </div>
        );
      case "leaf":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Leaf className="h-5 w-5" />
          </div>
        );
      case "file-text":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
            <FileText className="h-5 w-5" />
          </div>
        );
      case "award":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/10 text-brand-600 dark:text-brand-400">
            <Award className="h-5 w-5" />
          </div>
        );
    }
  };

  return (
    <section aria-labelledby="other-cert-heading" className="bg-white py-12 dark:bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Row: stacks on phones so title + link never squeeze */}
        <div className="flex flex-col items-start gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800">
          <h2
            id="other-cert-heading"
            className="text-xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl"
          >
            Other Certifications
          </h2>

          <a
            href="#other-cert-heading"
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 sm:text-sm"
          >
            View All Certificates
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* 5-Card Row */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {OTHER_CERTIFICATIONS.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white p-4 shadow-2xs transition-all hover:border-brand-500/40 hover:shadow-xs dark:border-slate-800 dark:bg-slate-900"
            >
              {renderCertIcon(item.type)}
              <div>
                <h3 className="text-xs font-bold text-slate-900 dark:text-white sm:text-sm">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
