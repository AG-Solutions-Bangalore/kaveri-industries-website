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
  imageUrl: "/images/hero-fasteners.webp",
  imageAlt:
    "High-tensile MS structural bolts, hex nuts, and precision fasteners — Kaveri Industries",
} as const;

/**
 * Quality statement — sourced from brochure page 2 ("Quality") and page 3
 * ("Encompassing the total customer experience"). We keep the
 * "Zero defect" quote intact, the ISO 9001 paragraph, the employee
 * commitment paragraph, plus the "Vision / Mission" bullets from page 3.
 */
export const QUALITY_CONTENT = {
  badge: "About Kaveri",
  heading: "Focused on Quality and Precision",
  subheading: "Unmatched Solutions",
  /** Vision bullets as shown on brochure page 3. Note: "Techonology" is
   *  preserved as printed in the source brochure. */
  visionBullets: ["Practices", "Processes", "Ideas & Techonology"],
  paragraphs: [
    "The manufacturers of 'Zero defect' fasteners speaks volumes for our commitment to quality.",
    "We have made quality a way of life at every step of the manufacturing process. The ISO 9001 certification is ample proof of our insatiable quest for quality and desire for perfection.",
    "Each employee is immensely quality conscious and takes it upon himself to ensure that there is no room for even the slightest error. Accordingly, they deliver and settle for nothing but the very best.",
    "We have the privilege of serving our most quality conscious customers in the industry over the years, we have built up the reputation of being a reliable & quality supplier source to our esteemed clients.",
    "Our corporate mission is to aspire to achieve excellence in each area of our business so we can provide enduring value to the customer.",
  ],
  stats: [
    {
      value: "Zero",
      label: "Defect Objective",
    },
    {
      value: company.isoStandard,
      label: "Certified Quality",
    },
  ],
  cta: {
    label: "Learn More About Us",
    href: "/about",
  },
  /** Image URL for factory / quality visual; set to valid asset path or leave empty for styled mockup */
  imageUrl: "/images/manufacturing-plant.webp",
  imageAlt:
    "State-of-the-art precision machining and quality inspection facility — Kaveri Industries",
} as const;

/** Header copy for the auto-scrolling Products carousel (brochure pages 4–5). */
export const PRODUCTS_SECTION_HEADER = {
  badge: "Product Range",
  heading: "Precision Fastening Solutions",
  cta: {
    label: "View All Products",
    href: "/products",
  },
} as const;

/** Header copy for the Target Sectors grid (brochure pages 6–7). */
export const SECTORS_SECTION_HEADER = {
  badge: "Industries We Serve",
  heading: "Target Sectors",
  description:
    "Precision engineered for specific industrial requirements — from lattice towers to highways, refineries to rolling stock.",
} as const;

/**
 * CTA banner — sits between the Target Sectors grid and the footer.
 * Primary action redirects to the Contact Us page as requested.
 */
export const CTA_BANNER_CONTENT = {
  heading: "Looking for the Right Fastening Solution?",
  description:
    "Connect with our engineering team to discuss technical specifications, custom requirements, or to request a comprehensive quote for your project.",
  primaryCta: {
    label: "Contact Us",
    href: "/contact",
  },
  secondaryCta: {
    label: "Request a Quote",
    href: "/contact",
  },
} as const;