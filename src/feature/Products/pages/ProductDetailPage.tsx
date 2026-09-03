import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { ProductDetailBreadcrumb } from "@/feature/Products/components/ProductDetailBreadcrumb";
import { ProductDetailHero } from "@/feature/Products/components/ProductDetailHero";
import { ProductOverview } from "@/feature/Products/components/ProductOverview";
import { ProductSpecsTable } from "@/feature/Products/components/ProductSpecsTable";
import { ProductCard } from "@/feature/Products/components/ProductCard";
import { CTABanner } from "@/components/common/CTABanner";
import {
  PRODUCTS,
  getProductBySlug,
} from "@/feature/Products/api/products";
import { productDetailSEO } from "@/feature/Products/seo/productDetailSeo";

/**
 * /products/:slug — single product detail page.
 * If the slug is unknown, renders a friendly 404 with a link back to the
 * catalogue. Otherwise renders breadcrumb, hero, overview, specs, related
 * products, and a CTA banner.
 */
export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? getProductBySlug(slug) : undefined;

  // Reset scroll to top on slug change.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

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
            className="inline-flex items-center gap-2 rounded-sm bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-800"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to all products
          </Link>
        </section>
      </>
    );
  }

  const { seo } = productDetailSEO(product);
  const sameCategory = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category,
  ).slice(0, 4);
  const otherCategory = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category !== product.category,
  ).slice(0, Math.max(0, 4 - sameCategory.length));
  const related = [...sameCategory, ...otherCategory].slice(0, 4);

  return (
    <>
      <SEO {...seo} />

      <div className="mx-auto max-w-7xl px-4">
        <ProductDetailBreadcrumb
          items={[
            { label: "Home", to: "/" },
            { label: "Products", to: "/products" },
            { label: product.name },
          ]}
        />

        <ProductDetailHero product={product} />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ProductOverview paragraphs={product.overview} />
          <ProductSpecsTable specs={product.specs} />
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section
          aria-labelledby="related-products-heading"
          className="border-t border-border bg-slate-50/40 py-16 md:py-20 dark:bg-card/30"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  You may also need
                </p>
                <h2
                  id="related-products-heading"
                  className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                >
                  Related Products
                </h2>
              </div>
              <Link
                to="/products"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-700 hover:text-brand-800"
              >
                View all
                <ArrowRight
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p, idx) => (
                <ProductCard key={p.id} product={p} index={idx} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        heading="Discuss Your Fastener Requirements"
        description="Our engineering team can help with material selection, custom dimensions, certifications, and bulk pricing for OEMs and infrastructure projects."
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
