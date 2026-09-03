import { SEO } from "@/components/common/SEO";
import { CTABanner } from "@/components/common/CTABanner";
import { aboutSEO } from "@/feature/About/seo/aboutSeo";
import { AboutHero } from "@/feature/About/components/AboutHero";
import { WhoWeAre } from "@/feature/About/components/WhoWeAre";
import { QualityBanner } from "@/feature/About/components/QualityBanner";
import { QualityCommitment } from "@/feature/About/components/QualityCommitment";
import { QualityFocus } from "@/feature/About/components/QualityFocus";
import { QualityProcess } from "@/feature/About/components/QualityProcess";
import { AboutCapabilities } from "@/feature/About/components/AboutCapabilities";

/**
 * About Us Page with integrated Quality at the Core architecture.
 *
 * Implements:
 * 1. Hero banner with technical blueprint aesthetic & factory panorama
 * 2. Who We Are narrative & precision fastener photography
 * 3. Quality at the Core transition banner
 * 4. Committed to Quality with CAD corner brackets & vernier inspection photo
 * 5. Our Quality Focus (4 Core Tenets on blueprint drafting grid)
 * 6. Quality Through Manufacturing (Process Integration & Shop View Dashboard)
 * 7. Capabilities (Engineering team, tensile + hardness testing, certifications)
 * 8. Contact CTA
 */
export default function AboutPage() {
  return (
    <>
      <SEO {...aboutSEO} />

      <AboutHero />
      <WhoWeAre />
      <QualityBanner />
      <QualityCommitment />
      <QualityFocus />
      <QualityProcess />
      <AboutCapabilities />
      <CTABanner />
    </>
  );
}