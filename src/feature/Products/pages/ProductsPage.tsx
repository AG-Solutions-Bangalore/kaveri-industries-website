import { ProductsHero } from "@/feature/Products/components/ProductsHero";
import { ProductsGrid } from "@/feature/Products/components/ProductsGrid";
import { ProductsCTA } from "@/feature/Products/components/ProductsCTA";

/**
 * /products — list of every product line with category filter and a
 * quote-request CTA. Each card links to its own /products/:slug page.
 */
export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsGrid />
      <ProductsCTA />
    </>
  );
}
