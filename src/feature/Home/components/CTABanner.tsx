import { CTABanner as CommonCTABanner } from "@/components/common/CTABanner";
import { CTA_BANNER_CONTENT } from "@/feature/Home/api/homeConstants";

/**
 * Homepage CTA banner wrapper reusing the common CTABanner.
 */
export function CTABanner() {
  return (
    <CommonCTABanner
      heading={CTA_BANNER_CONTENT.heading}
      description={CTA_BANNER_CONTENT.description}
      primaryCta={CTA_BANNER_CONTENT.primaryCta}
      secondaryCta={CTA_BANNER_CONTENT.secondaryCta}
    />
  );
}