import type { SEOProps } from "@/components/common/SEO";

/**
 * SEO metadata for `/demo` — the internal component showcase.
 * Marked `noindex` so search engines don't surface what is effectively
 * a development scratchpad.
 */
export const demoSEO: Pick<SEOProps, "title" | "path" | "description" | "noindex"> = {
  title: "Component Showcase",
  description:
    "Internal showcase of isolated UI primitives used across the Kaveri Industries site — newsletter footer, social link buttons, theme switch, and more.",
  path: "/demo",
  noindex: true,
};