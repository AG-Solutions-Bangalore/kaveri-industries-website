import { createContext, useContext, useState, type ReactNode } from "react";

interface QuoteModalContextValue {
  isOpen: boolean;
  subject?: string;
  openQuoteModal: (initialSubject?: string) => void;
  closeQuoteModal: () => void;
}

const QuoteModalContext = createContext<QuoteModalContextValue | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>();

  const openQuoteModal = (initialSubject?: string) => {
    setSubject(initialSubject);
    setIsOpen(true);
  };

  const closeQuoteModal = () => {
    setIsOpen(false);
    setSubject(undefined);
  };

  return (
    <QuoteModalContext.Provider
      value={{ isOpen, subject, openQuoteModal, closeQuoteModal }}
    >
      {children}
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext);
  if (!ctx) {
    throw new Error("useQuoteModal must be used within a QuoteModalProvider");
  }
  return ctx;
}
