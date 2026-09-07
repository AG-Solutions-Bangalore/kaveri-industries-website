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
  /** Image title attribute for SEO */
  imageTitle?: string;
  /** Link title attribute for SEO */
  linkTitle?: string;
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
      "Heavy head structural Fasteners (HSFG BOLTS) — engineered for the most demanding structural connections.",
    longDescription:
      "Heavy head structural Fasteners (HSFG BOLTS) — engineered for the most demanding structural connections in transmission towers, buildings, bridges, refineries, and rail infrastructure.",
    icon: Bolt,
    imageUrl: "/images/home/product-hex-bolts.webp",
    imageAlt:
      "Heavy hex structural bolts and screws (HSFG bolts) — Kaveri Industries",
    imageTitle: "Heavy Hex Structural Bolts and HSFG Bolts",
    linkTitle: "Hex Head Bolts",
    tag: "HSFG Bolts",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Length Range", value: "20mm to 1000mm" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9" },
    ],
    overview: [
      "Kaveri Industries manufactures heavy hex head structural bolts and screws, commonly specified as HSFG (High-Strength Friction Grip) bolts for critical structural connections.",
      "Each bolt is produced to exacting dimensional tolerances and tested for proof load, hardness, and tensile strength — the hallmarks of zero-defect manufacturing that anchor our reputation with structural engineers and OEM procurement teams.",
    ],
  },
  {
    id: "hot-dip-galvanised",
    slug: "hot-dip-galvanised",
    name: "Hot Dip Galvanised Fasteners",
    category: "fasteners",
    shortDescription:
      "Guard Rail Bolts, Foundation Bolts, Anti Theft Nut & Bolts — superior corrosion resistance for outdoor service.",
    longDescription:
      "Guard Rail Bolts, Foundation Bolts, Anti Theft Nut & Bolts — hot-dip galvanised for decades of maintenance-free service in outdoor and corrosive environments.",
    icon: Settings2,
    imageUrl: "/images/home/product-galvanised.webp",
    imageAlt:
      "Hot dip galvanised structural fasteners with a bright zinc coating",
    imageTitle: "Hot Dip Galvanised Structural Fasteners",
    linkTitle: "Hot Dip Galvanised Fasteners",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Length Range", value: "20mm to 1000mm" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9" },
      { label: "Includes", value: "Guard Rail Bolts, Foundation Bolts, Anti-Theft Nut & Bolts" },
    ],
    overview: [
      "Our hot-dip galvanised fastener range covers the three most commonly specified outdoor products: guard rail bolts for highway crash barriers, foundation bolts for tower bases, and anti-theft nuts & bolts for secured infrastructure assemblies.",
      "The metallurgically-bonded zinc coating provides decades of maintenance-free service, even in coastal and chemically-aggressive atmospheres.",
    ],
  },
  {
    id: "hex-nuts",
    slug: "hex-nuts",
    name: "Hex Nuts",
    category: "nuts",
    shortDescription:
      "Standard hex nuts — the dependable mating half of any high-tensile bolting assembly.",
    longDescription:
      "Hex nuts precision-tapped to mate with high-tensile bolts. The dependable mating half of any structural bolting assembly.",
    icon: Nut,
    imageUrl: "/images/home/product-hex-nuts.webp",
    imageAlt: "Assorted hex nuts in zinc, black-oxide and yellow finishes",
    imageTitle: "High Tensile Hex Nuts in Zinc and Black Oxide",
    linkTitle: "Hex Nuts",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Grade", value: "4, 6, 8, 10, 12, 12H etc." },
    ],
    overview: [
      "Our hex nuts are cold-forged and precision-tapped to ensure consistent thread engagement and long-term tension retention across structural bolting assemblies.",
      "Each production lot is proof-load tested to validate the clamping performance required by high-tensile connections.",
    ],
  },
  {
    id: "slotted-nuts",
    slug: "slotted-nuts",
    name: "Slotted Nuts",
    category: "nuts",
    shortDescription:
      "Slotted (castle) nuts — positive locking with a cotter pin for vibration-proof assemblies.",
    longDescription:
      "Slotted (castle) nuts machined with axial slots to accept a cotter pin — the classic positive-locking solution for vibration and dynamic loading.",
    icon: Cog,
    imageUrl: "/images/products/product-slotted-nuts.webp",
    imageAlt: "Slotted castle nuts ready for cotter pin locking",
    imageTitle: "Slotted Castle Nuts for Cotter Pin Locking",
    linkTitle: "Slotted Nuts",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Grade", value: "4, 6, 8, 10, 12, 12H etc." },
    ],
    overview: [
      "Slotted (castle) nuts are the classic positive-locking solution for assemblies subject to vibration, shock or cyclic loading. The crown slots accept a cotter pin that passes through a transverse hole in the mating bolt, mechanically preventing rotation.",
      "Used extensively in axle hubs, kingpins, and heavy-machinery assemblies where back-off is unacceptable.",
    ],
  },
  {
    id: "nylock-nuts",
    slug: "nylock-nuts",
    name: "Nylock Nuts",
    category: "nuts",
    shortDescription:
      "Nylon insert lock nuts — self-locking under vibration, reusable across multiple cycles.",
    longDescription:
      "Nylock lock nuts with an integrated nylon insert that grips the bolt thread and resists loosening under vibration — reusable across multiple cycles.",
    icon: Nut,
    imageUrl: "/images/products/product-nylock-nuts.webp",
    imageAlt: "Nylock nuts with integrated nylon locking collar",
    imageTitle: "Nylock Nuts with Nylon Locking Collar",
    linkTitle: "Nylock Nuts",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Grade", value: "4, 6, 8, 10, 12, 12H etc." },
    ],
    overview: [
      "Nylock nuts embed a precision-moulded nylon collar that grips the bolt thread and resists back-off under vibration. The locking torque is consistent across the full re-use life of the fastener.",
      "Widely specified for automotive, white-goods and light-industrial assemblies where field serviceability matters.",
    ],
  },
  {
    id: "studs-threaded-bars",
    slug: "studs-threaded-bars",
    name: "Studs & Threaded Bars",
    category: "threaded",
    shortDescription:
      "Studs and threaded bars for high-pressure flange bolting and custom-length assemblies.",
    longDescription:
      "Studs and threaded bars for high-pressure flange bolting, foundation anchoring, and custom-length requirements.",
    icon: Wrench,
    imageUrl: "/images/home/product-studs.webp",
    imageAlt: "Stud bolts and fully threaded bars in various diameters and grades",
    imageTitle: "Stud Bolts and Fully Threaded Bars",
    linkTitle: "Studs and Threaded Bars",
    specs: [
      { label: "Dia Range", value: "M 6 to M 100" },
      { label: "Length Range", value: "10mm to 1000mm" },
      { label: "Grade", value: "B7, B7M, B8, B16, 4.6, 8.8, 10.9 etc." },
    ],
    overview: [
      "Our stud bolts and threaded bars cover the full ASTM/ASME B-class and ISO metric range — rolled-threaded for superior grain-flow and fatigue resistance, then proof-load tested.",
      "Preferred choice for high-pressure flanges, pressure vessels, and structural tie-downs across process industries.",
    ],
  },
  {
    id: "u-bolts",
    slug: "u-bolts",
    name: "U-Bolts, Center Bolts & Other Auto Fasteners",
    category: "auto",
    shortDescription:
      "All type of U-Bolts, Center Bolts for all types of heavy & light vehicles used in Indian & foreign market.",
    longDescription:
      "All type of U-Bolts, Center Bolts for all types of heavy & light vehicles used in Indian & foreign market.",
    icon: CircleDot,
    imageUrl: "/images/home/product-ubolts.webp",
    imageAlt: "U-bolts for heavy and light commercial vehicles",
    imageTitle: "U-Bolts for Commercial Vehicles",
    linkTitle: "U-Bolts",
    specs: [
      { label: "Application", value: "Heavy & light vehicles" },
      { label: "Market", value: "India & export" },
    ],
    overview: [
      "Our U-bolts and center bolts are the workhorse fasteners of the Indian and export automotive aftermarket. Each piece is bend-tested and thread-gauged before dispatch.",
      "Bulk-pack or kit-pack options are available for OEM customers.",
    ],
  },
  {
    id: "center-bolts",
    slug: "center-bolts",
    name: "Center Bolts",
    category: "auto",
    shortDescription:
      "Leaf-spring center bolts — critical components for heavy and light commercial vehicle suspensions.",
    longDescription:
      "Leaf-spring center bolts for heavy and light commercial vehicles. Forged and machined to OEM specifications, supplied to Indian and export markets.",
    icon: CircleDot,
    imageUrl: "/images/products/product-center-bolts.webp",
    imageAlt: "Leaf-spring center bolts for heavy and light commercial vehicles",
    imageTitle: "Leaf Spring Center Bolts for Commercial Vehicles",
    linkTitle: "Center Bolts",
    specs: [
      { label: "Application", value: "Heavy & light commercial vehicles" },
      { label: "Market", value: "India & export" },
    ],
    overview: [
      "Center bolts clamp the leaves of a leaf-spring pack together, ensuring the entire spring acts as a single unit. Failure of a center bolt leads to catastrophic suspension failure, so we manufacture to the highest grade with full traceability.",
      "Each batch is supplied with material test certificates and dimensionally inspected against the OEM drawing.",
    ],
  },
  {
    id: "washers",
    slug: "washers",
    name: "Washers",
    category: "fasteners",
    shortDescription:
      "All type of plain, machined & spring washers As per IS: 2016, 3063 & as per customer's specifications.",
    longDescription:
      "All type of plain, machined & spring washers As per IS: 2016, 3063 & as per customer's specifications.",
    icon: Cog,
    imageUrl: "/images/products/product-washers.webp",
    imageAlt:
      "Plain, machined, and spring washers as per IS: 2016 and 3063",
    imageTitle: "Plain, Machined and Spring Washers",
    linkTitle: "Washers",
    specs: [
      { label: "Types", value: "Plain / Machined / Spring Washers" },
      { label: "Standard", value: "IS: 2016, 3063" },
      { label: "Custom", value: "As per customer's specifications" },
    ],
    overview: [
      "We supply the full washer family — plain, machined and spring-lock — produced to IS 2016 and IS 3063 tolerances with full dimensional inspection and surface-finish control.",
      "Each lot is hardness-tested to ensure consistent load distribution under clamp. Custom thicknesses, inner/outer diameters, and material grades are available on request.",
    ],
  },
];

/** Lookup by slug for detail routes. */
export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
