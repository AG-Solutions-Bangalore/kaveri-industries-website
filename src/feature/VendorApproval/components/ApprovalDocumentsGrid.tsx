import { useState } from "react";
import { ArrowRight, Award, Download, FileText, FlaskConical, X } from "lucide-react";
import {
  RDSO_APPROVAL_DOCUMENTS,
  type ApprovalDocumentItem,
} from "../api/vendorApprovalConstants";
import { cn } from "@/lib/utils";

function BadgeIcon({ doc }: { doc: ApprovalDocumentItem }) {
  const cls = "h-5 w-5 text-white";
  if (doc.badgeIcon === "flask") return <FlaskConical className={cls} />;
  if (doc.badgeIcon === "award") return <Award className={cls} />;
  return <FileText className={cls} />;
}

function PdfFileIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden="true">
      <path
        fill="#DC2626"
        d="M6 2h8l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm7 1.5V8h4.5L13 3.5ZM8.5 12.5c.8 0 1.5.2 1.9.7.4.4.6 1 .6 1.7 0 .6-.2 1.2-.6 1.6-.4.4-1 .7-1.9.7H7.2v1.6H6V12.5h2.5Zm-.3 2.7c.5 0 .9-.1 1.1-.4.2-.2.4-.6.4-1s-.2-.8-.4-1c-.2-.2-.6-.4-1.1-.4H7.2v2.8h1ZM13 12.5c.9 0 1.6.3 2.1.8.4.5.7 1.2.7 2s-.3 1.5-.7 2c-.5.5-1.2.8-2.1.8h-2V12.5h2Zm-.2 4.8c.6 0 1-.2 1.3-.5.3-.3.4-.8.4-1.5s-.1-1.2-.4-1.5c-.3-.3-.7-.5-1.3-.5h-.6v4h.6ZM18.5 12.5v1h-2.7v1.4h2.5v1h-2.5v2.9h-1.2v-6.3h3.9Z"
      />
    </svg>
  );
}

export function ApprovalDocumentsGrid() {
  const [active, setActive] = useState<ApprovalDocumentItem | null>(null);

  return (
    <section
      aria-labelledby="approval-documents-heading"
      className="bg-white py-14 dark:bg-[#071224] sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-brand-500">
            RDSO Approval Documents
          </p>
          <h2
            id="approval-documents-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight text-[#16233f] dark:text-white sm:text-3xl"
          >
            Official Documents for Verification
          </h2>
          <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:text-sm">
            Access and download the key documents that demonstrate our
            compliance with railway standards, quality management systems, and
            product testing.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {RDSO_APPROVAL_DOCUMENTS.map((doc) => (
            <article
              key={doc.id}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xs transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Real PDF preview with overlapping badge */}
              <div className="relative">
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <iframe
                    src={`${doc.pdfUrl}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                    title={`${doc.title} document preview`}
                    loading="lazy"
                    tabIndex={-1}
                    className="pointer-events-none h-full w-full border-0"
                  />
                </div>
                <div
                  className={cn(
                    "absolute -bottom-5 left-4 flex h-11 w-11 items-center justify-center rounded-md shadow-md",
                    doc.badgeDark ? "bg-[#16233f]" : "bg-brand-500",
                  )}
                >
                  <BadgeIcon doc={doc} />
                </div>
              </div>

              <div className="flex flex-1 flex-col px-5 pt-8 pb-5">
                <h3 className="text-base font-bold text-[#16233f] dark:text-white">
                  {doc.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  {doc.description}
                </p>

                {/* Pinned to card bottom so rows align across cards */}
                <div className="mt-auto pt-4">
                  {/* PDF download row */}
                  <div className="flex items-center gap-3 rounded-lg border border-slate-200/80 bg-slate-50 px-3 py-2.5 dark:border-slate-800 dark:bg-slate-950">
                    <PdfFileIcon />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-bold text-[#16233f] dark:text-white">
                        {doc.pdfLabel}
                      </p>
                      <p className="text-[11px] text-slate-500">{doc.pdfSize}</p>
                    </div>
                    <a
                      href={doc.pdfUrl}
                      download={doc.fileName}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Download ${doc.pdfLabel}`}
                      title={`Download ${doc.pdfLabel}`}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-slate-200 bg-white text-slate-700 transition-colors hover:border-brand-500 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                    >
                      <Download className="h-4 w-4" />
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActive(doc)}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#16233f] transition-colors hover:text-brand-600 dark:text-slate-100"
                  >
                    View Details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Details modal — full real-PDF viewer */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title} details`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4 dark:border-slate-800">
              <div>
                <h3 className="text-base font-bold text-[#16233f] dark:text-white">
                  {active.title}
                </h3>
                <p className="text-xs text-slate-500">
                  {active.fileName} · {active.pdfSize}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close document preview"
                className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="min-h-0 flex-1 bg-slate-100 dark:bg-slate-950">
              <iframe
                src={active.pdfUrl}
                title={`${active.title} PDF document`}
                className="h-[65vh] w-full border-0"
              />
            </div>
            <div className="flex flex-col gap-3 px-5 py-4 sm:flex-row">
              <a
                href={active.pdfUrl}
                download={active.fileName}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-brand-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-brand-400"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="inline-flex flex-1 items-center justify-center rounded-lg border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
