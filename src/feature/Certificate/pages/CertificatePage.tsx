import { SEO } from "@/components/common/SEO";
import { certificateSEO } from "../seo/certificateSeo";
import { CertificateHero } from "../components/CertificateHero";
import { CertificateHighlights } from "../components/CertificateHighlights";
import { CertificateGrid } from "../components/CertificateGrid";
import { OtherCertifications } from "../components/OtherCertifications";
import { QualityCommitmentSection } from "../components/QualityCommitmentSection";

/**
 * Certifications & Approvals Page.
 *
 * Implements:
 * 1. Hero banner with dark industrial metallic aesthetic, credentials & Quality Builds Tomorrow seal
 * 2. 4-Pillar key quality highlights strip
 * 3. Featured Certifications grid (ISO 9001:2015, RDSO, BIS, ISO 14001:2015) with modal preview & download
 * 4. Other Certifications credential badges (OHSAS 45001, CE, RoHS, etc.)
 * 5. Our Commitment to Quality process and precision fastener detail
 */
export default function CertificatePage() {
  return (
    <>
      <SEO {...certificateSEO} />
      <CertificateHero />
      <CertificateHighlights />
      <CertificateGrid />
      <OtherCertifications />
      <QualityCommitmentSection />
    </>
  );
}
