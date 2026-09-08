import { Suspense, lazy } from "react";
import { SEO } from "@/components/common/SEO";
import { Hero } from "@/feature/Home/components/Hero";
import { homeSEO } from "@/feature/Home/seo/homeSeo";

// Below-the-fold sections are split into separate chunks and hydrated after
// the Hero paints, so LCP only waits on the hero + critical CSS/JS.
const ProductsCarousel = lazy(() =>
  import("@/feature/Home/components/ProductsCarousel").then((m) => ({
    default: m.ProductsCarousel,
  })),
);
const TargetSectors = lazy(() =>
  import("@/feature/Home/components/TargetSectors").then((m) => ({
    default: m.TargetSectors,
  })),
);
const QualityStatement = lazy(() =>
  import("@/feature/Home/components/QualityStatement").then((m) => ({
    default: m.QualityStatement,
  })),
);
const CTABanner = lazy(() =>
  import("@/feature/Home/components/CTABanner").then((m) => ({
    default: m.CTABanner,
  })),
);

export default function HomePage() {
  return (
    <>
      <SEO {...homeSEO} />

      <Hero />
      <Suspense fallback={null}>
        <ProductsCarousel />
        <TargetSectors />
        <QualityStatement />
        <CTABanner />
      </Suspense>
    </>
  );
}