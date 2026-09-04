import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLenis } from "lenis/react";
import { SEO } from "@/components/common/SEO";
import { ProductDetailBreadcrumb } from "@/feature/Products/components/ProductDetailBreadcrumb";
import { ProductDetailHero } from "@/feature/Products/components/ProductDetailHero";
import { ProductOverview } from "@/feature/Products/components/ProductOverview";
import { ProductSpecsTable } from "@/feature/Products/components/ProductSpecsTable";
import { getProductBySlug } from "@/feature/Products/api/products";
import { productDetailSEO } from "@/feature/Products/seo/productDetailSeo";

/**
 * /products/:slug — single product detail page matching Image 2 reference:
 * Breadcrumb strip, hero with framed image & CTA buttons, and two-column
 * Product Overview + Technical Specifications table.
 */
export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;
  const lenis = useLenis();

  // Reset scroll to top on slug change. Uses Lenis when available so the
  // jump stays instantaneous instead of animating through the new page.
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [slug, lenis]);

  if (!product) {
    return (
      <>
        <SEO
          title="Product not found"
          path={`/products/${slug ?? ""}`}
          noindex
        />
        <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 px-4 py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            404 / Product
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            We couldn't find that product
          </h1>
          <p className="max-w-md text-sm text-muted-foreground">
            The product you're looking for may have been moved, renamed, or
            temporarily unavailable.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-sm bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all products
          </Link>
        </section>
      </>
    );
  }

  const { seo } = productDetailSEO(product);

  return (
    <>
      <SEO {...seo} />

      <div className="mx-auto max-w-7xl px-4 pb-16 md:pb-24">
        <ProductDetailBreadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: product.name },
          ]}
        />

        <ProductDetailHero product={product} />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 pt-4">
          <ProductOverview paragraphs={product.overview} />
          <ProductSpecsTable specs={product.specs} />
        </div>
      </div>
    </>
  );
}
