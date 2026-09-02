import { breadcrumbSchema } from "@/lib/schemas";
import { company } from "@/lib/company";
import type { SEOProps } from "@/components/common/SEO";

export const productsSEO: Pick<SEOProps, "title" | "description" | "path" | "type"> = {
  title: "Products",
  description: `Browse high-tensile MS fasteners and precision-manufactured components from ${company.name}.`,
  path: "/products",
  type: "product",
};

export const productsBreadcrumb = () =>
  breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
  ]);