import { SEO } from "@/components/common/SEO";
import { machinerySEO } from "../seo/machinerySeo";
import { MachineryHero } from "../components/MachineryHero";
import { MachineryHighlights } from "../components/MachineryHighlights";
import { AdvancedEquipmentGrid } from "../components/AdvancedEquipmentGrid";
import { EquipmentTable } from "../components/EquipmentTable";
import { MachineryGallery } from "../components/MachineryGallery";
import { MachineryVerificationBanner } from "../components/MachineryVerificationBanner";

/**
 * Machinery & Manufacturing Facilities Page.
 *
 * Implements:
 * 1. Hero banner with 16:9 industrial drilling/spindle background & 2-line badges
 * 2. Reusable 50/50 floating highlight strip
 * 3. Advanced Equipment for Superior Quality 4-card grid
 * 4. Equipment Details specification table with PDF download
 * 5. Machinery Gallery showcasing workshop facilities with carousel controls
 * 6. RDO / RDSO Verification banner
 */
export default function MachineryPage() {
  return (
    <>
      <SEO {...machinerySEO} />
      <MachineryHero />
      <MachineryHighlights />
      <AdvancedEquipmentGrid />
      <EquipmentTable />
      <MachineryGallery />
      <MachineryVerificationBanner />
    </>
  );
}
