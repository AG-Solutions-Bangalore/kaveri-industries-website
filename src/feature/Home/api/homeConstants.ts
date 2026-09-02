/**
 * Homepage section copy.
 *
 * Marketing strings only — brand identity, contact details, and
 * certifications live in `@/lib/company`. Anything you might need to
 * reuse site-wide belongs there, not here.
 */

import { company } from "@/lib/company";

export const HERO_CONTENT = {
  tagline: company.name,
  heading: "High-Tensile MS Fasteners for",
  headingHighlight: "Demanding Applications",
  description:
    "Manufacturers of high-tensile mild-steel fasteners engineered for uncompromising strength and exacting tolerances — serving OEMs across infrastructure, energy, and industrial sectors.",
  isoBadge: {
    tag: "Certified Quality",
  },
  primaryCta: {
    label: "Explore Products",
    href: "/products",
  },
  secondaryCta: {
    label: "Request a Quote",
    href: "/contact",
  },
  /** Image URL for hero visual; set to valid asset path or leave empty for styled mockup */
  imageUrl: "",
  imageAlt: "High-tensile MS structural bolts and precision fasteners",
} as const;

export const QUALITY_CONTENT = {
  badge: "About Kaveri",
  heading: "Focused on Quality and Precision",
  subheading: "Quality Unmatched Solutions",
  paragraphs: [
    "The manufacturers of 'Zero defect' fasteners speaks volumes for our commitment to quality.",
    "We have made quality a way of life at every step of the manufacturing process. The ISO 9001 certification is ample proof of our insatiable quest for quality and desire for perfection.",
    "Each employee is immensely quality conscious and takes it upon himself to ensure that there is no room for even the slightest error. Accordingly, they deliver and settle for nothing but the very best.",
  ],
  stats: [
    {
      value: "20+",
      label: "Years Engineering",
    },
    {
      value: "Zero",
      label: "Defect Objective",
    },
  ],
  cta: {
    label: "Learn More About Us",
    href: "/about",
  },
  /** Image URL for factory / quality visual; set to valid asset path or leave empty for styled mockup */
  imageUrl: "",
  imageAlt: "State-of-the-art precision machining and quality inspection facility",
} as const;

export const PRODUCTS_SECTION_HEADER = {
  badge: "Product Range",
  heading: "Precision Fastening Solutions",
  cta: {
    label: "View All Products",
    href: "/products",
  },
} as const;

export const SECTORS_SECTION_HEADER = {
  badge: "Industries We Serve",
  heading: "Target Sectors",
  description:
    "Precision engineered for specific industrial requirements — from lattice towers to highways, refineries to rolling stock.",
} as const;

export const CTA_BANNER_CONTENT = {
  heading: "Looking for the Right Fastening Solution?",
  description:
    "Connect with our engineering team to discuss technical specifications, custom requirements, or to request a comprehensive quote for your project.",
  primaryCta: {
    label: "Request a Quote",
    href: "/contact",
  },
  secondaryCta: {
    label: "Contact Us",
    href: "/contact",
  },
} as const;