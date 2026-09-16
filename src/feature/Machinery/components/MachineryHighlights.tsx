import { ClipboardCheck, Layers, RotateCw, ShieldCheck } from "lucide-react";
import { FloatingHighlightStrip } from "@/components/common/FloatingHighlightStrip";

const MACHINERY_HIGHLIGHTS = [
  {
    title: "Wide Range of Machinery",
    description: "Complete setup for end-to-end manufacturing",
    icon: Layers,
  },
  {
    title: "Quality Production",
    description: "Ensures precision and reliability",
    icon: ShieldCheck,
  },
  {
    title: "Regular Maintenance",
    description: "Well-maintained for optimum performance",
    icon: RotateCw,
  },
  {
    title: "Inspection Ready",
    description: "Details available for RDO/RDSO verification",
    icon: ClipboardCheck,
  },
];

export function MachineryHighlights() {
  return (
    <FloatingHighlightStrip
      items={MACHINERY_HIGHLIGHTS}
      ariaLabel="Machinery Key Highlights"
    />
  );
}
