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
    `${company.name} is a premier manufacturer specializing in high-tensile MS fasteners designed to meet the rigorous demands of critical industrial infrastructure. We focus on delivering precision-engineered components that ensure structural integrity and operational safety across diverse sectors.`,
    "Our operational philosophy is grounded in manufacturing excellence. We maintain strict control over our production processes, utilizing advanced technology and stringent quality assurance protocols to provide reliable fastening solutions. We are committed to supplying components that consistently perform under demanding conditions, earning the trust of engineering and procurement professionals worldwide.",
  ],
  imageUrl: "/images/hero-fasteners.webp",
  imageAlt:
    "High-tensile MS fasteners, heavy hex structural bolts, and precision engineered threaded components — Kaveri Industries",
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
    `At ${company.name}, quality is not a department; it is the fundamental framework of our operations. Our focus is squarely on producing high-tensile MS fasteners that meet uncompromising standards of precision and consistency. Every batch engineered in our facility undergoes rigorous validation against stringent industrial benchmarks.`,
    "We invest continuously in advanced inspection technologies and continuous improvement protocols to ensure that our products deliver absolute reliability in the most demanding infrastructure and industrial applications.",
  ],
  imageUrl: "/images/quality-caliper.jpg",
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
  imageUrl: "/images/manufacturing-plant.webp",
  imageAlt:
    "Manufacturing shop quality overview showing precision CNC production lines and quality inspection floor at Kaveri Industries",
} as const;
