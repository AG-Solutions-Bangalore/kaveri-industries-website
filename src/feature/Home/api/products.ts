import { Bolt, CircleDot, Cog, type LucideIcon, Nut, Settings2, Wrench } from "lucide-react";

/**
 * Product catalogue. Copy is sourced verbatim from the Kaveri Industries
 * product brochure (pages 4–5) — see `public/images/assets.md` for the
 * full asset plan. When photography becomes available, replace the SVG
 * placeholders with real imagery; keep the schema, name, description,
 * and specs identical.
 */
export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  imageUrl?: string;
  imageAlt?: string;
  tag?: string;
  specs: ProductSpec[];
}

export const PRODUCTS: Product[] = [
  {
    id: "hex-head-bolts",
    name: "Hex Head Bolts & Screws",
    description:
      "Heavy head structural fasteners (HSFG Bolts) — engineered for the most demanding structural connections.",
    icon: Bolt,
    imageUrl: "/images/product-hex-bolts.webp",
    imageAlt:
      "Heavy hex structural bolts and screws (HSFG bolts) — Kaveri Industries",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Length Range", value: "20mm to 1000mm" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9" },
    ],
  },
  {
    id: "hot-dip-galvanised",
    name: "Hot Dip Galvanised Fasteners",
    description:
      "Guard rail bolts, foundation bolts, anti-theft nuts & bolts — superior corrosion resistance for harsh environments.",
    icon: Settings2,
    imageUrl: "/images/product-galvanised.webp",
    imageAlt:
      "Hot dip galvanised structural fasteners with a bright zinc coating",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Length Range", value: "20mm to 1000mm" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9" },
    ],
  },
  {
    id: "hex-nuts",
    name: "Hex Nuts, Slotted Nuts & Nylock Nuts",
    description:
      "Precision-tapped mating hardware ensuring secure engagement and long-term tension retention across assemblies.",
    icon: Nut,
    imageUrl: "/images/product-hex-nuts.webp",
    imageAlt:
      "Assorted hex nuts, slotted nuts, and nylock lock nuts in zinc, black, and yellow finishes",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Grade", value: "4, 6, 8, 10, 12, 12H etc." },
    ],
  },
  {
    id: "studs-threaded-bars",
    name: "Studs & Threaded Bars",
    description:
      "Continuous threading for custom-length requirements and high-pressure flange bolting.",
    icon: Wrench,
    imageUrl: "/images/product-studs.webp",
    imageAlt:
      "Stud bolts and fully threaded bars in various diameters and grades",
    specs: [
      { label: "Dia Range", value: "M 6 to M 100" },
      { label: "Length Range", value: "10mm to 1000mm" },
      // Brochure lists "B7, B7M, B8, B16, 4.6, 8.8, 10.9 etc." — preserved verbatim.
      { label: "Grade", value: "B7, B7M, B8, B16, 4.6, 8.8, 10.9 etc." },
    ],
  },
  {
    id: "u-bolts-center-bolts",
    name: "U-Bolts, Center Bolts & Other Auto Fasteners",
    description:
      "All types of U-bolts and center bolts for heavy & light vehicles used in Indian and export markets.",
    icon: CircleDot,
    imageUrl: "/images/product-ubolts.webp",
    imageAlt:
      "U-bolts and leaf-spring center bolts for heavy and light commercial vehicles",
    specs: [
      { label: "Application", value: "Heavy & light vehicles" },
      { label: "Market", value: "India & export" },
    ],
  },
  {
    id: "washers",
    name: "Washers",
    description:
      "Plain, machined and spring washers for load distribution and surface protection — built to exact dimensional specs.",
    icon: Cog,
    imageUrl: "/images/product-washers.webp",
    imageAlt:
      "Plain, machined, and spring washers as per IS 2016 and IS 3063",
    specs: [
      { label: "Standards", value: "IS 2016, IS 3063" },
      { label: "Custom", value: "As per customer specs" },
    ],
  },
];