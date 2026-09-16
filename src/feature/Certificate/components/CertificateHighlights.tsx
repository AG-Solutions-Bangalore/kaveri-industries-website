import { Award, FileText, ShieldCheck, Users } from "lucide-react";
import { FloatingHighlightStrip } from "@/components/common/FloatingHighlightStrip";
import { HIGHLIGHT_ITEMS } from "../api/certificateConstants";

const ICON_MAP = {
  award: Award,
  "file-text": FileText,
  "shield-check": ShieldCheck,
  users: Users,
} as const;

export function CertificateHighlights() {
  const items = HIGHLIGHT_ITEMS.map((item) => ({
    title: item.title,
    description: item.description,
    icon: ICON_MAP[item.icon] ?? Award,
  }));

  return <FloatingHighlightStrip items={items} ariaLabel="Certificate Highlights" />;
}

