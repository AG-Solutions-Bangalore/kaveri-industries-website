import * as Dialog from "@radix-ui/react-dialog";
import { Download, X } from "lucide-react";
import { RDSO_CERTIFICATE_DATA } from "../api/vendorApprovalConstants";

interface VendorCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VendorCertificateModal({
  isOpen,
  onClose,
}: VendorCertificateModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          aria-describedby="vendor-cert-dialog-desc"
          className="fixed left-1/2 top-1/2 z-50 max-h-[92vh] w-[95vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-xl border border-slate-700/60 bg-slate-900 p-4 text-white shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <Dialog.Title className="text-xl font-bold tracking-tight text-white">
                {RDSO_CERTIFICATE_DATA.title}
              </Dialog.Title>
              <p id="vendor-cert-dialog-desc" className="text-sm text-brand-400">
                {RDSO_CERTIFICATE_DATA.subtitle}
              </p>
            </div>
            <Dialog.Close
              aria-label="Close certificate preview"
              className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>

          {/* Certificate Document Display */}
          <div className="my-6 flex justify-center overflow-hidden rounded-lg border border-slate-800 bg-slate-950 p-2 shadow-inner">
            <img
              src={RDSO_CERTIFICATE_DATA.image}
              alt={RDSO_CERTIFICATE_DATA.imageAlt}
              className="max-h-[65vh] w-auto rounded object-contain shadow-md"
            />
          </div>

          {/* Metadata & Actions */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs break-words sm:text-sm">
              <span className="text-slate-400">Approval No:</span>
              <span className="font-semibold break-words text-slate-200">{RDSO_CERTIFICATE_DATA.certNo}</span>
              <span className="text-slate-400">Authority:</span>
              <span className="font-semibold break-words text-slate-200">{RDSO_CERTIFICATE_DATA.authority}</span>
              <span className="text-slate-400">Valid Until:</span>
              <span className="font-semibold break-words text-slate-200">{RDSO_CERTIFICATE_DATA.validity}</span>
            </div>

            <a
              href={RDSO_CERTIFICATE_DATA.downloadUrl}
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-md transition-colors hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 sm:w-auto"
            >
              <Download className="h-4 w-4" />
              Download Official PDF
            </a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
