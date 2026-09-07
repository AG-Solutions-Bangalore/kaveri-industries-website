import * as Dialog from "@radix-ui/react-dialog";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { ContactForm } from "@/feature/Contact/components/ContactForm";

/**
 * Accessible, keyboard-navigable popup modal for "Request a Quote".
 *
 * Uses `@radix-ui/react-dialog` primitives for focus trapping, ESC-key dismissal,
 * backdrop click dismissal, and screen reader announcements.
 * Embeds `<ContactForm isModal={true} />` with all 6 contact fields and quick presets.
 */
export function QuoteModal() {
  const { isOpen, subject, closeQuoteModal } = useQuoteModal();

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && closeQuoteModal()}>
      <Dialog.Portal>
        {/* Backdrop Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs transition-opacity duration-200" />

        {/* Modal Window Container */}
        <Dialog.Content
          aria-describedby="quote-modal-desc"
          className="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-sm border border-slate-200/90 bg-white shadow-2xl duration-200 focus:outline-none max-h-[90vh] overflow-y-auto dark:border-slate-800 dark:bg-slate-900"
        >
          {/* Accessible Title & Description for Screen Readers */}
          <Dialog.Title className="sr-only">Request a Fastener Quote</Dialog.Title>
          <Dialog.Description id="quote-modal-desc" className="sr-only">
            Fill in your contact details and fastener specifications to request a quote from Kaveri Industries.
          </Dialog.Description>

          <ContactForm
            isModal={true}
            title="Request a Quote"
            subtitle="Submit your requirements below. Our engineering team will review your specifications and respond with pricing and lead times."
            defaultSubject={subject}
            onClose={closeQuoteModal}
          />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
