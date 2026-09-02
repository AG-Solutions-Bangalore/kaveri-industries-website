import { SEO } from "@/components/common/SEO";
import { Testimonials } from "@/feature/Home/components/Testimonials";
import { Hero } from "@/feature/Home/components/Hero";
import { QualityStatement } from "@/feature/Home/components/QualityStatement";
import { ProductsCarousel } from "@/feature/Home/components/ProductsCarousel";
import { TargetSectors } from "@/feature/Home/components/TargetSectors";
import { CTABanner } from "@/feature/Home/components/CTABanner";
import { homeSEO } from "@/feature/Home/seo/homeSeo";

export default function HomePage() {
  return (
    <>
      <SEO {...homeSEO} />

      <Hero />
      <QualityStatement />
      <ProductsCarousel />
      <TargetSectors />
      <Testimonials />
      <CTABanner />
    </>
  );
}