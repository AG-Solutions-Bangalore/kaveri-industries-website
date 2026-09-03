import type { Product } from "@/feature/Products/api/products";
import {
  absUrl,
  breadcrumbSchema,
  productSchema,
  type JsonLd,
} from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";
import { company } from "@/lib/company";

/**
 * Build a per-product SEO config (title / description / path / image /
 * Product + BreadcrumbList JSON-LD) for `<SEO />`.
 */
export function productDetailSEO(product: Product): {
  seo: Pick<SEOProps, "title" | "description" | "path" | "image" | "imageAlt" | "type" | "schema">;
  schema: JsonLd[];
} {
  const path = `/products/${product.slug}`;
  const image = product.imageUrl ?? company.logo;
  const imageAlt = product.imageAlt ?? product.name;

  const schema: JsonLd[] = [
    productSchema({
      name: product.name,
      description: product.shortDescription,
      image: absUrl(image),
      sku: product.id.toUpperCase(),
    }),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Products", url: "/products" },
      { name: product.name, url: path },
    ]),
  ];

  return {
    seo: {
      title: product.name,
      description: product.shortDescription,
      path,
      image,
      imageAlt,
      type: "product",
      schema,
    },
    schema,
  };
}
