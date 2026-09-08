import { SEO } from "@/components/common/SEO";
import { ProductsHero } from "@/feature/Products/components/ProductsHero";
import { ProductsGrid } from "@/feature/Products/components/ProductsGrid";
import { ProductsCTA } from "@/feature/Products/components/ProductsCTA";
import { productsSEO } from "@/feature/Products/seo/productsSeo";
import { PRODUCTS } from "@/feature/Products/api/products";
import { breadcrumbSchema, productSchema, absUrl } from "@/lib/schemas";
import { IMAGE_BASE_URL } from "@/lib/images";

/**
 * /products — list of every product line with category filter and a
 * quote-request CTA. Each card links to its own /products/:slug page.
 */
export default function ProductsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absUrl(`/products/${p.slug}`),
      item: productSchema({
        name: p.name,
        description: p.shortDescription,
        image: p.imageUrl ?? `${IMAGE_BASE_URL}/home/product-hex-bolts.webp`,
        sku: p.id.toUpperCase(),
      }),
    })),
  };

  return (
    <>
      <SEO
        {...productsSEO}
        schema={[
          itemListSchema,
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Products", url: "/products" },
          ]),
        ]}
      />
      <ProductsHero />
      <ProductsGrid />
      <ProductsCTA />
    </>
  );
}
