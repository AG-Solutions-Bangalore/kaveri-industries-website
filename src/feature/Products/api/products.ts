import {
  Bolt,
  CircleDot,
  Cog,
  type LucideIcon,
  Nut,
  Settings2,
  Wrench,
} from "lucide-react";

/**
 * Full product catalogue for the Products page and detail pages.
 *
 * Source: verbatim copy from the Kaveri Industries product brochure
 * (pages 4–5). The Home carousel uses a 6-item subset (`../Home/api/products.ts`).
 * This file is the authoritative source for the dedicated /products routes.
 *
 * Photography: where `imageUrl` is unset, a styled placeholder (icon + subtle
 * grid) is rendered. The user will supply real assets later — when they do,
 * just fill in `imageUrl` and `imageAlt` for that product.
 */

export type ProductCategory =
  | "bolts"
  | "fasteners"
  | "nuts"
  | "threaded"
  | "auto";

export const PRODUCT_CATEGORIES: { id: ProductCategory; label: string }[] = [
  { id: "bolts", label: "Bolts" },
  { id: "fasteners", label: "Galvanised Fasteners" },
  { id: "nuts", label: "Nuts" },
  { id: "threaded", label: "Threaded Bars & Studs" },
  { id: "auto", label: "Automotive" },
];

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  /** Slug used in /products/:slug routes. */
  slug: string;
  name: string;
  category: ProductCategory;
  /** Short description shown on the card. */
  shortDescription: string;
  /** Long description shown on the detail page hero. */
  longDescription: string;
  /** Card-grid icon (used as fallback when no image is set). */
  icon: LucideIcon;
  /** Image path consumed by the site. Empty → render placeholder. */
  imageUrl?: string;
  imageAlt?: string;
  /** Optional badge shown on the card (e.g. "Bestseller"). */
  tag?: string;
  /** Key-value spec rows shown in the spec table on the detail page. */
  specs: ProductSpec[];
  /** Two-paragraph "Product Overview" prose block on the detail page. */
  overview: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: "hex-head-bolts",
    slug: "hex-head-bolts",
    name: "Hex Head Bolts & Screws",
    category: "bolts",
    shortDescription:
      "High-strength hex bolts designed for heavy-duty fastening applications. Available in various grades.",
    longDescription:
      "Precision-engineered hex head bolts and screws designed for high-stress industrial applications. Manufactured to exacting tolerances to ensure reliable performance in structural engineering, heavy machinery, and critical infrastructure projects.",
    icon: Bolt,
    imageUrl: "/images/product-hex-bolts.webp",
    imageAlt:
      "Heavy hex structural bolts and screws (HSFG bolts) — Kaveri Industries",
    tag: "Bestseller",
    specs: [
      { label: "Product Type", value: "Hex Head Bolts & Cap Screws" },
      { label: "Material", value: "Carbon Steel, Alloy Steel, Stainless Steel" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9 (ISO) / Grade 5, 8 (SAE)" },
      { label: "Size Range", value: "M 6 to M 50 (Metric) / 1/4\" to 2-1/2\" (Imperial)" },
      { label: "Length", value: "20mm to 1000mm / Custom lengths available" },
      { label: "Finish", value: "Plain, Zinc Plated, Hot Dip Galvanised, PTFE" },
    ],
    overview: [
      "Our hex head bolts are cold-forged and precision-machined from high-grade alloy steel, providing exceptional tensile strength and shear resistance. These fasteners form the backbone of robust structural connections where failure is not an option.",
      "Rigorous quality control protocols, including dimensional checks and material composition analysis, guarantee that every batch meets stringent international standards. Ideal for applications requiring high clamp loads and secure, vibration-resistant fastening.",
    ],
  },
  {
    id: "hot-dip-galvanised",
    slug: "hot-dip-galvanised",
    name: "Hot Dip Galvanised Fasteners",
    category: "fasteners",
    shortDescription:
      "Corrosion-resistant fasteners ideal for outdoor and harsh environmental conditions.",
    longDescription:
      "Hot-dip galvanised fasteners with a heavy zinc coating for outdoor and corrosive-service applications. Engineered for guard rails, foundations, transmission towers and anti-theft assemblies.",
    icon: Settings2,
    imageUrl: "/images/product-galvanised.webp",
    imageAlt:
      "Hot dip galvanised structural fasteners with a bright zinc coating",
    specs: [
      { label: "Product Type", value: "Galvanised Bolts, Nuts, Foundation Bolts" },
      { label: "Material", value: "Carbon Steel, Alloy Steel" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9" },
      { label: "Coating", value: "Hot Dip Galvanised (IS 4759 / ASTM A153)" },
      { label: "Size Range", value: "M 6 to M 50" },
      { label: "Length", value: "20mm to 1000mm" },
    ],
    overview: [
      "Our hot-dip galvanised fasteners are designed for the most punishing outdoor environments. The thick, metallurgically-bonded zinc coating provides decades of maintenance-free service, even in coastal and chemically-aggressive atmospheres.",
      "Each batch is tested for coating thickness, adhesion and uniformity to comply with IS 4759 and ASTM A153. We supply guard rail bolts, foundation bolts, anti-theft nuts and bolts, and complete sub-assemblies for highway and infrastructure projects.",
    ],
  },
  {
    id: "hex-nuts",
    slug: "hex-nuts",
    name: "Hex Nuts",
    category: "nuts",
    shortDescription:
      "Standard internal threaded fasteners used with mating bolts or threaded rod.",
    longDescription:
      "Standard hex nuts precision-tapped to mate with high-tensile bolts and threaded rod. Manufactured to ISO 4032 / IS 1363 tolerances with controlled thread profile and proof-load testing.",
    icon: Nut,
    imageUrl: "/images/product-hex-nuts.webp",
    imageAlt: "Assorted hex nuts in zinc, black-oxide and yellow finishes",
    specs: [
      { label: "Product Type", value: "Hex Nuts (Full & Half)" },
      { label: "Material", value: "Carbon Steel, Alloy Steel, Stainless Steel" },
      { label: "Grade", value: "4, 6, 8, 10, 12, 12H etc." },
      { label: "Size Range", value: "M 6 to M 50" },
      { label: "Standard", value: "IS 1363, ISO 4032, DIN 934" },
      { label: "Finish", value: "Plain, Zinc Plated, Hot Dip Galvanised" },
    ],
    overview: [
      "Our hex nuts are cold-forged and precision-tapped to ensure consistent thread engagement and long-term tension retention. Each production lot is proof-load tested to validate the clamping performance required by structural bolting assemblies.",
      "Available in a wide range of grades, finishes and sizes, our hex nuts are the dependable mating half of any high-tensile fastening system.",
    ],
  },
  {
    id: "slotted-nuts",
    slug: "slotted-nuts",
    name: "Slotted Nuts",
    category: "nuts",
    shortDescription:
      "Specialized nuts designed to be secured with a cotter pin to prevent loosening.",
    longDescription:
      "Slotted (castle) nuts machined with axial slots to accept a cotter pin, providing positive locking against vibration and dynamic loading.",
    icon: Cog,
    imageAlt: "Slotted castle nuts ready for cotter pin locking",
    specs: [
      { label: "Product Type", value: "Slotted / Castle Nuts" },
      { label: "Material", value: "Carbon Steel, Alloy Steel, Stainless Steel" },
      { label: "Grade", value: "4, 6, 8, 10, 12" },
      { label: "Size Range", value: "M 6 to M 50" },
      { label: "Standard", value: "IS 2232, DIN 935" },
      { label: "Locking", value: "Cotter Pin (MS / SS)" },
    ],
    overview: [
      "Slotted (castle) nuts are the classic positive-locking solution for assemblies subject to vibration, shock or cyclic loading. The crown slots accept a cotter pin that passes through a transverse hole in the mating bolt, mechanically preventing rotation.",
      "Used extensively in axle hubs, kingpins, and heavy-machinery assemblies, our slotted nuts are machined to tight dimensional tolerances and proof-load tested.",
    ],
  },
  {
    id: "nylock-nuts",
    slug: "nylock-nuts",
    name: "Nylock Nuts",
    category: "nuts",
    shortDescription:
      "Self-locking nuts featuring a nylon collar to resist turning under vibration.",
    longDescription:
      "Nylock lock nuts with an integrated nylon insert that grips the bolt thread and resists loosening under vibration — re-usable up to several cycles.",
    icon: Nut,
    imageAlt: "Nylock nuts with integrated nylon locking collar",
    specs: [
      { label: "Product Type", value: "Nylon Insert Lock Nuts (Nylock)" },
      { label: "Material", value: "Carbon Steel, Stainless Steel" },
      { label: "Grade", value: "6, 8, 10" },
      { label: "Size Range", value: "M 6 to M 30" },
      { label: "Temperature", value: "-40 °C to +120 °C" },
      { label: "Finish", value: "Zinc Plated, Hot Dip Galvanised" },
    ],
    overview: [
      "Nylock nuts embed a precision-moulded nylon collar that grips the bolt thread and resists back-off under vibration. The locking torque is consistent across the full re-use life of the fastener.",
      "Our nylock nuts are widely specified for automotive, white-goods and light-industrial assemblies where field serviceability matters.",
    ],
  },
  {
    id: "studs-threaded-bars",
    slug: "studs-threaded-bars",
    name: "Studs & Threaded Bars",
    category: "threaded",
    shortDescription:
      "Fully threaded or double-ended studs for structural and piping applications.",
    longDescription:
      "Continuous-thread studs and fully-threaded bars for high-pressure flange bolting, foundation anchoring and custom-length applications.",
    icon: Wrench,
    imageUrl: "/images/product-studs.webp",
    imageAlt: "Stud bolts and fully threaded bars in various diameters and grades",
    specs: [
      { label: "Product Type", value: "Stud Bolts, Threaded Bars, Double-Ended Studs" },
      { label: "Material", value: "Carbon Steel, Alloy Steel, Stainless Steel" },
      { label: "Grade", value: "B7, B7M, B8, B16, 4.6, 8.8, 10.9 etc." },
      { label: "Size Range", value: "M 6 to M 100" },
      { label: "Length", value: "10mm to 1000mm" },
      { label: "Finish", value: "Plain, Zinc, PTFE, Xylan, Galvanised" },
    ],
    overview: [
      "Our stud bolts and threaded bars are produced to ASME B16.5 / B18.31 and metric equivalents. Each piece is rolled-threaded for superior grain-flow and fatigue resistance, then proof-load tested.",
      "Available in B7, B7M, B8, B16 and ISO metric grades, our studs are the preferred choice for high-pressure flanges, pressure vessels, and structural tie-downs.",
    ],
  },
  {
    id: "u-bolts",
    slug: "u-bolts",
    name: "U-Bolts",
    category: "auto",
    shortDescription:
      "U-shaped bolts with threads on both ends, primarily used for supporting pipework.",
    longDescription:
      "U-bolts with two threaded legs for clamping pipework, tubes and round sections. Available in round-bend and square-bend configurations, with standard or custom centre-to-centre dimensions.",
    icon: CircleDot,
    imageUrl: "/images/product-ubolts.webp",
    imageAlt: "U-bolts for pipe and tube clamping",
    specs: [
      { label: "Product Type", value: "Round Bend / Square Bend U-Bolts" },
      { label: "Material", value: "Carbon Steel, Stainless Steel" },
      { label: "Thread", value: "BSP / Metric / UNC / UNF" },
      { label: "Size Range", value: "M 6 to M 24" },
      { label: "Centre Distance", value: "As per customer drawing" },
      { label: "Finish", value: "Zinc, Hot Dip Galvanised, PTFE" },
    ],
    overview: [
      "U-bolts are the workhorse clamp for pipework, exhaust systems, sign-mounting and structural round-sections. We produce them to customer drawings with tight centre-distance and thread-length tolerances.",
      "Each U-bolt is bend-tested and thread-gauged before dispatch. Bulk-pack or kit-pack options are available for OEM customers.",
    ],
  },
  {
    id: "center-bolts",
    slug: "center-bolts",
    name: "Center Bolts",
    category: "auto",
    shortDescription:
      "Critical components for automotive leaf spring assemblies, ensuring secure clamping.",
    longDescription:
      "Leaf-spring center bolts for heavy and light commercial vehicles. Forged and machined to OEM specifications, supplied to Indian and export markets.",
    icon: CircleDot,
    imageUrl: "/images/product-ubolts.webp",
    imageAlt: "Leaf-spring center bolts for heavy and light commercial vehicles",
    specs: [
      { label: "Product Type", value: "Leaf Spring Center Bolts" },
      { label: "Material", value: "Carbon Steel, Alloy Steel (10.9, 12.9)" },
      { label: "Thread", value: "Metric / BSW / As per OEM" },
      { label: "Size Range", value: "M 10 to M 24" },
      { label: "Application", value: "Heavy & light commercial vehicles" },
      { label: "Market", value: "India & export" },
    ],
    overview: [
      "Center bolts clamp the leaves of a leaf-spring pack together, ensuring the entire spring acts as a single unit. Failure of a center bolt leads to catastrophic suspension failure, so we manufacture to the highest grade with full traceability.",
      "Each batch is supplied with material test certificates and is dimensionally inspected against the OEM drawing. We supply Tier-1 auto-ancillary customers across India and to export markets in Europe and Africa.",
    ],
  },
];

/** Lookup by slug for detail routes. */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
