import { IMAGE_BASE_URL } from "@/lib/images";
/**
 * Homepage section copy.
 *
 * Marketing strings only — brand identity, contact details, and
 * certifications live in `@/lib/company`. Anything you might need to
 * reuse site-wide belongs there, not here.
 *
 * Copy is sourced verbatim from the Kaveri Industries print brochure
 * (cover, pages 2–8) — see `public/images/assets.md` for the asset plan.
 */

export const HERO_CONTENT = {
  tagline: "KAVERI INDUSTRIES",
  headingPart1: "High-Tensile MS",
  headingPart2: "Fasteners for",
  headingHighlight: "Demanding",
  headingPart3: "Applications",
  description:
    "We deliver a wide range of high-tensile MS fasteners — the most critical and defect-free fastening solutions for our commitment to quality.",
  features: [
    {
      title: "ISO 9001:2008",
      subtitle: "Certified Company",
      icon: "badge-check",
    },
    {
      title: "Zero Defect",
      subtitle: "Zero Rejection",
      icon: "shield-check",
    },
    {
      title: "Reliable & Timely",
      subtitle: "Supply",
      icon: "truck",
    },
  ],
  primaryCta: {
    label: "Explore Products",
    href: "/products",
  },
  secondaryCta: {
    label: "Request a Quote",
    href: "/contact",
  },
  imageUrl: `${IMAGE_BASE_URL}/home/hero-fasteners.webp`,
  imageAlt:
    "High-tensile MS structural bolts, hex nuts, and precision fasteners — Kaveri Industries",
} as const;

export const HERO_VALUE_PILLARS = [
  {
    id: "precision-manufacturing",
    title: "Precision Manufacturing",
    description:
      "Advanced machining and strict process control for consistent quality.",
    icon: "cog",
  },
  {
    id: "quality-assured",
    title: "Quality Assured",
    description:
      "Zero defect approach with rigorous testing at every stage.",
    icon: "shield-check",
  },
  {
    id: "wide-product-range",
    title: "Wide Product Range",
    description:
      "Comprehensive range of MS fasteners to meet diverse industrial requirements.",
    icon: "package",
  },
  {
    id: "customer-focused",
    title: "Customer Focused",
    description:
      "Tailored solutions backed by expert support and on-time delivery.",
    icon: "users",
  },
] as const;

export const PRODUCTS_SECTION_HEADER = {
  badge: "OUR PRODUCT RANGE",
  heading: "Precision Fastening Solutions",
  cta: {
    label: "View All Products",
    href: "/products",
  },
} as const;

export const SECTORS_SECTION_HEADER = {
  badge: "INDUSTRIES WE SERVE",
  heading: "Engineering Solutions for Every Industry",
} as const;

export const QUALITY_CONTENT = {
  badge: "ABOUT KAVERI",
  heading: "Focused on Quality. Committed to Excellence.",
  description:
    "We follow a zero-defect manufacturing approach with a highly skilled team, advanced machinery and stringent quality control systems. Our goal is simple — to deliver reliable, durable and precision-engineered fastening solutions that strengthen your projects.",
  stats: [
    {
      value: "20+",
      label: "Years of Experience",
      icon: "calendar",
    },
    {
      value: "500+",
      label: "Satisfied Customers",
      icon: "users",
    },
    {
      value: "1000+",
      label: "Products Delivered",
      icon: "package",
    },
    {
      value: "100%",
      label: "Commitment to Quality",
      icon: "shield-check",
    },
  ],
  imageUrl: `${IMAGE_BASE_URL}/home/manufacturing-plant.webp`,
  imageAlt: "Kaveri Industries CNC machining and precision quality inspection",
  imageTitle: "Kaveri Industries CNC Manufacturing and Quality Inspection",
} as const;

export const CTA_BANNER_CONTENT = {
  heading: "Looking for the Right Fastening Solution?",
  description:
    "Our engineering team is ready to help you with technical specifications, custom requirements and the best solutions for your applications.",
  primaryCta: {
    label: "Request a Quote",
    href: "/contact",
  },
  secondaryCta: {
    label: "Contact Us",
    href: "/contact",
  },
  imageUrl: `${IMAGE_BASE_URL}/home/cta-bolt.webp`,
} as const;