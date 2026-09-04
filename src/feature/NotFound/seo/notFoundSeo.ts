import type { SEOProps } from "@/components/common/SEO";

export const notFoundSEO: Pick<SEOProps, "title" | "path" | "noindex"> = {
  title: "Page not found",
  path: "/404",
  noindex: true,
};