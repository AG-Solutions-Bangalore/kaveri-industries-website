import { breadcrumbSchema } from "@/lib/schemas";
import type { SEOProps } from "@/components/common/SEO";

export const productsSEO: Pick<SEOProps, "title" | "description" | "path" | "type"> = {
  title: "Products",
  description:
    "Browse engineered polymer components and precision-manufactured parts from Kaveri Industries.",
  path: "/products",
  type: "product",
};

export const productsBreadcrumb = () =>
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ]);