import { Download, FileCheck } from "lucide-react";
import {
  VERIFICATION_BANNER_DATA,
  RDSO_CERTIFICATE_DATA,
} from "../api/vendorApprovalConstants";

export function VerificationBanner() {
  const handleDownloadAll = () => {
    const link = document.createElement("a");
    link.href = RDSO_CERTIFICATE_DATA.downloadUrl;
    link.download = "RDSO_Vendor_Approval_All_Documents.jpg";
    link.click();
  };

  return (
    <section aria-labelledby="verification-heading" className="bg-slate-50 py-12 dark:bg-[#050c18]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-[#071224] p-6 shadow-xl sm:p-8 lg:p-10">
          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/10 blur-2xl"
          />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left: Icon + Content */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-500/30 bg-brand-500/10 text-brand-400 sm:h-14 sm:w-14">
                <FileCheck className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-brand-400">
                  {VERIFICATION_BANNER_DATA.eyebrow}
                </span>
                <h2
                  id="verification-heading"
                  className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl"
                >
                  {VERIFICATION_BANNER_DATA.heading}
                </h2>
                <p className="mt-1.5 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm">
                  {VERIFICATION_BANNER_DATA.description}
                </p>
              </div>
            </div>

            {/* Right: CTA Button */}
            <div className="shrink-0 lg:self-center">
              <button
                type="button"
                onClick={handleDownloadAll}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-6 py-3 text-xs font-bold text-slate-950 shadow-md transition-colors hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:w-auto sm:text-sm"
              >
                <Download className="h-4 w-4" />
                {VERIFICATION_BANNER_DATA.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
