import { VendorApprovalHero } from "../components/VendorApprovalHero";
import { VendorApprovalInfoTable } from "../components/VendorApprovalInfoTable";
import { ApprovalDocumentsGrid } from "../components/ApprovalDocumentsGrid";
import { TrustedRailwaysBanner } from "../components/TrustedRailwaysBanner";

/**
 * RDSO Approval Page.
 *
 * Implements (matches approved UIUX):
 * 1. Hero banner — RDSO Approval, railway compliance copy + badges
 * 2. Vendor Profile & Approval Details — reference 3-column table
 *    (Item | Information / Sub-Tab | Details) in Kaveri theme,
 *    Proprietor Mr. Rajesh Bhalla, Kaveri data only
 * 3. Official Documents for Verification grid (Lab Report, ISO 9001:2015, RDSO Certificate)
 * 4. Trusted by Indian Railways banner
 */
export default function VendorApprovalPage() {
  return (
    <>
      <VendorApprovalHero />
      <VendorApprovalInfoTable />
      <ApprovalDocumentsGrid />
      <TrustedRailwaysBanner />
    </>
  );
}
