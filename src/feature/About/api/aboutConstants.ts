/**
 * About page and integrated Quality section copy.
 *
 * Sourced directly from the Kaveri Industries brand specifications and
 * brochure documentation, matching the reference layouts.
 */

import { company } from "@/lib/company";

export const ABOUT_HERO_CONTENT = {
  heading: `About ${company.name}`,
  subheading:
    "Precision, quality and reliable fastening solutions for demanding industrial applications.",
} as const;

export const WHO_WE_ARE_CONTENT = {
  badge: "About Us",
  heading: "Who We Are",
  paragraphs: [
    `The manufacturers of 'Zero defect' fasteners speaks volumes for our commitment to quality.`,
    `We have made quality a way of life at every step of the manufacturing process. The ${company.isoStandard.split(":")[0]} certification is ample proof of our insatiable quest for quality and desire for perfection.`,
    "Each employee is immensely quality conscious and takes it upon himself to ensure that there is no room for even the slightest error. Accordingly, they deliver and settle for nothing but the very best.",
    "Encompassing the total customer experience — we have the privilege of serving our most quality conscious customers in the industry. Over the years, we have built up the reputation of being a reliable & quality supplier source to our esteemed clients.",
  ],
  imageUrl: "/images/about/about-who-we-are.webp",
  imageAlt:
    "High-tensile MS hex head bolts, threaded fasteners, and structural washers on workshop bench — Kaveri Industries",
} as const;

export const QUALITY_HERO_CONTENT = {
  heading: "Quality at the Core",
  subheading:
    "A strong commitment to quality, precision and consistency in manufacturing.",
} as const;

export const QUALITY_COMMITMENT_CONTENT = {
  badge: "COMMITMENT",
  heading: "Committed to Quality",
  paragraphs: [
    `The manufacturers of 'Zero defect' fasteners speaks volumes for our commitment to quality.`,
    `We have made quality a way of life at every step of the manufacturing process. The ${company.isoStandard.split(":")[0]} certification is ample proof of our insatiable quest for quality and desire for perfection.`,
    "Each employee is immensely quality conscious and takes it upon himself to ensure that there is no room for even the slightest error. Accordingly, they deliver and settle for nothing but the very best.",
  ],
  imageUrl: "/images/about/quality-caliper.webp",
  imageAlt:
    "Precision digital vernier caliper measuring high-tensile hex bolt on granite surface table during quality control inspection",
} as const;

export const QUALITY_TENETS = [
  {
    id: "precision",
    title: "Precision",
    description:
      "Focus on exact dimensional accuracy in manufacturing, ensuring every component meets tight tolerances.",
    icon: "Ruler",
  },
  {
    id: "consistency",
    title: "Consistency",
    description:
      "Maintaining absolute consistency across large production runs, guaranteeing reliable performance.",
    icon: "Layers",
  },
  {
    id: "assurance",
    title: "Quality Assurance",
    description:
      "Quality remains an integrated and vital part of our entire manufacturing approach from raw material to final dispatch.",
    icon: "ClipboardCheck",
  },
  {
    id: "zero-defect",
    title: "Zero-Defect Objective",
    description:
      "Driven by our stated objective of zero-defect manufacturing through continuous systemic improvements.",
    icon: "ShieldCheck",
  },
] as const;

export const QUALITY_PROCESS_CONTENT = {
  badge: "PROCESS INTEGRATION",
  heading: "Quality Through Manufacturing",
  paragraph:
    "Quality is integral to Kaveri's manufacturing approach, woven directly into the fabric of our production line. Rather than treating inspection as an afterthought, process controls are embedded at critical junctures. This systemic approach ensures that deviations are identified and corrected at the source, maintaining the integrity of the high-tensile fasteners we produce.",
  imageUrl: "/images/about/manufacturing-shop-overview.webp",
  imageAlt:
    "High-angle view of modern CNC manufacturing floor and automated production lines at Kaveri Industries",
} as const;
