import { SEO } from "@/components/common/SEO";
import { vendorApprovalSEO } from "../seo/vendorApprovalSeo";
import { VendorApprovalHero } from "../components/VendorApprovalHero";
import { VendorApprovalHighlights } from "../components/VendorApprovalHighlights";
import { VendorApprovalDetails } from "../components/VendorApprovalDetails";
import { ApprovedProductsGrid } from "../components/ApprovedProductsGrid";
import { VerificationBanner } from "../components/VerificationBanner";

/**
 * RDSO Vendor Approval Page.
 *
 * Implements:
 * 1. Hero banner with 16:9 full-width workshop stamping background & 2-line badges
 * 2. Reusable 50/50 floating highlight card (Government Approved, Certified Quality, etc.)
 * 3. RDSO Vendor Approval specification table & interactive certificate card with modal preview
 * 4. Products Covered Under Approval grid (Studs, U-Bolts, Center Bolts, Washers)
 * 5. Complete Documentation for Verification CTA banner
 */
export default function VendorApprovalPage() {
  return (
    <>
      <SEO {...vendorApprovalSEO} />
      <VendorApprovalHero />
      <VendorApprovalHighlights />
      <VendorApprovalDetails />
      <ApprovedProductsGrid />
      <VerificationBanner />
    </>
  );
}
