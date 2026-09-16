import { useState } from "react";
import { Download, Eye, FileText, Search } from "lucide-react";
import {
  VENDOR_APPROVAL_TABLE,
  RDSO_CERTIFICATE_DATA,
} from "../api/vendorApprovalConstants";
import { VendorCertificateModal } from "./VendorCertificateModal";

export function VendorApprovalDetails() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadSummary = () => {
    const link = document.createElement("a");
    link.href = RDSO_CERTIFICATE_DATA.downloadUrl;
    link.download = "RDSO_Vendor_Approval_Summary.webp";
    link.click();
  };

  return (
    <section
      aria-labelledby="approval-details-heading"
      className="bg-slate-50/50 pt-16 sm:pt-20 md:pt-24 pb-16 dark:bg-[#071224]/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Download Summary Action */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Approval Details
            </span>
            <h2
              id="approval-details-heading"
              className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              RDSO Vendor Approval
            </h2>
            <p className="mt-2 max-w-3xl text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-sm">
              We are an approved vendor under the Research Designs and Standards
              Organisation (RDSO), Ministry of Railways, for the supply of our
              products. Our manufacturing processes, quality systems and
              facilities have been audited and accepted as per the applicable
              RDSO standards.
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownloadSummary}
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-brand-500/40 bg-white px-4 py-2.5 text-xs font-semibold text-brand-700 shadow-xs transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-300 dark:hover:bg-brand-950/40 sm:w-auto sm:text-sm"
          >
            <Download className="h-4 w-4 shrink-0" />
            Download Approval Summary (PDF)
          </button>
        </div>

        {/* 2-Column Details & Certificate Layout */}
        <div className="mt-10 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Left Column: Specification Table */}
          <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs dark:border-slate-800 dark:bg-slate-900 lg:col-span-7">
            <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs sm:text-sm">
              {VENDOR_APPROVAL_TABLE.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-1 px-5 py-3.5 sm:grid-cols-12 sm:items-center sm:gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/30"
                >
                  <span className="font-semibold break-words text-slate-700 dark:text-slate-300 sm:col-span-5">
                    {row.label}
                  </span>
                  <div className="min-w-0 break-words text-slate-600 dark:text-slate-300 sm:col-span-7">
                    {row.status ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        {row.value}
                      </span>
                    ) : (
                      row.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Vendor Approval Certificate Card */}
          <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900 lg:col-span-5">
            {/* Header */}
            <div className="flex items-start gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {RDSO_CERTIFICATE_DATA.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {RDSO_CERTIFICATE_DATA.subtitle}
                </p>
              </div>
            </div>

            {/* Certificate Preview Frame */}
            <div className="relative mt-4 overflow-hidden rounded-lg border border-slate-200 bg-slate-100 p-2 dark:border-slate-800 dark:bg-slate-950">
              <img
                src={RDSO_CERTIFICATE_DATA.image}
                alt={RDSO_CERTIFICATE_DATA.imageAlt}
                className="h-auto w-full rounded object-contain shadow-xs transition-transform duration-300 hover:scale-[1.02]"
              />

              {/* Zoom Button */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                aria-label="Enlarge RDSO Certificate"
                className="absolute bottom-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/85 text-white shadow-md backdrop-blur-xs transition-transform hover:scale-110"
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Action Buttons: stacked on very small phones, side-by-side above 420px */}
            <div className="mt-5 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-brand-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-sm transition-colors hover:bg-brand-600 hover:text-white sm:text-sm"
              >
                <Eye className="h-4 w-4" />
                View Certificate
              </button>

              <a
                href={RDSO_CERTIFICATE_DATA.downloadUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-slate-200 px-4 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 sm:text-sm"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog for Certificate Zoom */}
      <VendorCertificateModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
