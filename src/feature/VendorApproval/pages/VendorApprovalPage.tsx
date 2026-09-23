import { SEO } from "@/components/common/SEO";
import { vendorApprovalSEO } from "../seo/vendorApprovalSeo";
import { VendorApprovalHero } from "../components/VendorApprovalHero";
import { ApprovalDocumentsGrid } from "../components/ApprovalDocumentsGrid";
import { TrustedRailwaysBanner } from "../components/TrustedRailwaysBanner";

/**
 * RDSO Approval Page.
 *
 * Implements (matches approved UIUX):
 * 1. Hero banner — RDSO Approval, railway compliance copy + badges
 * 2. Official Documents for Verification grid (Lab Report, ISO 9001:2015, RDSO Certificate)
 * 3. Trusted by Indian Railways banner
 */
export default function VendorApprovalPage() {
  return (
    <>
      <SEO {...vendorApprovalSEO} />
      <VendorApprovalHero />
      <ApprovalDocumentsGrid />
      <TrustedRailwaysBanner />
    </>
  );
}
