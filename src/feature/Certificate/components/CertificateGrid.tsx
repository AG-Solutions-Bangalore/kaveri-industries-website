import { useState } from "react";
import { Download, Eye, Search } from "lucide-react";
import { MAIN_CERTIFICATES, type CertificateItem } from "../api/certificateConstants";
import { CertificateModal } from "./CertificateModal";

export function CertificateGrid() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const handleDownloadAll = () => {
    // Triggers download of primary ISO certificate or first item, or opens dialog
    const link = document.createElement("a");
    link.href = MAIN_CERTIFICATES[0].downloadUrl;
    link.download = "Kaveri_Industries_Certificates.webp";
    link.click();
  };

  return (
    <section
      aria-labelledby="cert-grid-heading"
      className="bg-slate-50/50 pt-12 sm:pt-20 md:pt-24 pb-12 sm:pb-16 dark:bg-[#071224]/50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header with Download All Action */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
              Our Certifications
            </span>
            <h2
              id="cert-grid-heading"
              className="mt-1 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl"
            >
              Quality Certifications & Approvals
            </h2>
            <p className="mt-2 max-w-2xl text-xs text-slate-600 dark:text-slate-400 sm:text-sm">
              Our certifications reflect our commitment to quality, safety and
              compliance with national and international standards.
            </p>
          </div>

          <button
            type="button"
            onClick={handleDownloadAll}
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-brand-500/40 bg-white px-4 py-2.5 text-xs font-semibold text-brand-700 shadow-xs transition-colors hover:bg-brand-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:border-brand-500/30 dark:bg-slate-900 dark:text-brand-300 dark:hover:bg-brand-950/40 sm:w-auto sm:text-sm"
          >
            <Download className="h-4 w-4 shrink-0" />
            Download All Certificates (PDF)
          </button>
        </div>

        {/* Certificate cards: 1-col on phones, 2-col on sm, 4-col on lg */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
          {MAIN_CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Certificate Image Frame: landscape on phones so cards stay
                  compact; portrait 3:4 from sm up where columns are narrower */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 p-3 sm:aspect-3/4 dark:bg-slate-950">
                <img
                  src={cert.image}
                  alt={cert.imageAlt}
                  className="h-full w-full rounded border border-slate-200/80 object-contain shadow-xs transition-transform duration-300 group-hover:scale-[1.02] dark:border-slate-800"
                />

                {/* Quick Zoom Button */}
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  aria-label={`Enlarge ${cert.title}`}
                  className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-md backdrop-blur-xs transition-transform duration-200 hover:scale-110 hover:bg-slate-900"
                >
                  <Search className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Certificate Details */}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                  {cert.subtitle}
                </p>

                {/* Metadata Table */}
                <div className="mb-4 mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-600 dark:border-slate-800 dark:text-slate-400 sm:text-xs">
                  <div className="flex justify-between gap-3">
                    <span className="shrink-0 text-slate-400 dark:text-slate-500">Certificate No.</span>
                    <span className="min-w-0 text-right font-semibold break-words text-slate-700 dark:text-slate-200">{cert.certNo}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="shrink-0 text-slate-400 dark:text-slate-500">Issued By</span>
                    <span className="min-w-0 text-right font-semibold break-words text-slate-700 dark:text-slate-200">{cert.issuedBy}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="shrink-0 text-slate-400 dark:text-slate-500">Valid Until</span>
                    <span className="min-w-0 text-right font-semibold break-words text-slate-700 dark:text-slate-200">{cert.validUntil}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-auto flex items-center justify-between gap-2 border-t border-slate-100 pt-4 text-xs dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    View Certificate
                  </button>

                  <a
                    href={cert.downloadUrl}
                    download
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                  >
                    <Download className="h-3.5 w-3.5" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Certificate Inspection */}
      <CertificateModal
        certificate={selectedCert}
        isOpen={Boolean(selectedCert)}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
