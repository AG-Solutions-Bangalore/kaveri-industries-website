import { Award, FileText, ShieldCheck, Users } from "lucide-react";
import { FloatingHighlightStrip } from "@/components/common/FloatingHighlightStrip";

const VENDOR_HIGHLIGHTS = [
  {
    title: "Government Approved",
    description: "Recognized by RDSO and other relevant authorities",
    icon: ShieldCheck,
  },
  {
    title: "Certified Quality",
    description: "Manufactured to meet stringent standards",
    icon: Award,
  },
  {
    title: "Reliable Documentation",
    description: "Complete records available for verification",
    icon: FileText,
  },
  {
    title: "Trusted by Industry",
    description: "Supplying to critical infrastructure sectors",
    icon: Users,
  },
];

export function VendorApprovalHighlights() {
  return (
    <FloatingHighlightStrip
      items={VENDOR_HIGHLIGHTS}
      ariaLabel="Vendor Approval Highlights"
    />
  );
}
