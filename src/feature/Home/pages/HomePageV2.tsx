import { SEO } from "@/components/common/SEO";
import { HeroV2 } from "@/feature/Home/components/HeroV2";
import { ProductsSectionV2 } from "@/feature/Home/components/ProductsSectionV2";
import { AboutSectionV2 } from "@/feature/Home/components/AboutSectionV2";
import { TrustedSectionV2 } from "@/feature/Home/components/TrustedSectionV2";
import { homeSEO } from "@/feature/Home/seo/homeSeo";

export default function HomePageV2() {
  return (
    <>
      <SEO {...homeSEO} title="High-Tensile Fasteners Manufacturer — Kaveri Industries" />
      <HeroV2 />
      <ProductsSectionV2 />
      <AboutSectionV2 />
      <TrustedSectionV2 />
    </>
  );
}
