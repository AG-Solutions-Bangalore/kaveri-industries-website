import { Hero } from "@/feature/Home/components/Hero";
import { ProductsCarousel } from "@/feature/Home/components/ProductsCarousel";
import { TargetSectors } from "@/feature/Home/components/TargetSectors";
import { QualityStatement } from "@/feature/Home/components/QualityStatement";
import { CTABanner } from "@/feature/Home/components/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductsCarousel />
      <TargetSectors />
      <QualityStatement />
      <CTABanner />
    </>
  );
}