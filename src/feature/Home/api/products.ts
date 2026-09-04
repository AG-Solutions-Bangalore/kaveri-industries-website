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
    id: "hot-dip-galvanised",
    name: "Hot Dip Galvanized Fasteners",
    description:
      "Excellent finish, high corrosion resistance. Ideal for transmission structures.",
    icon: Settings2,
    imageUrl: "/images/home/product-galvanised.webp",
    imageAlt:
      "Hot dip galvanized structural fasteners with high corrosion resistance",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Length Range", value: "20mm to 1000mm" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9" },
    ],
  },
  {
    id: "studs-threaded-bars",
    name: "Studs & Threaded Bars",
    description:
      "Continuous threading for custom lengths. High-grade for severe flange bolting.",
    icon: Wrench,
    imageUrl: "/images/home/product-studs.webp",
    imageAlt:
      "Stud bolts and fully threaded bars in various diameters and grades",
    specs: [
      { label: "Dia Range", value: "M 6 to M 100" },
      { label: "Length Range", value: "10mm to 1000mm" },
      { label: "Grade", value: "B7, B7M, B8, B16, 4.6, 8.8, 10.9 etc." },
    ],
  },
  {
    id: "u-bolts-center-bolts",
    name: "U-Bolts, Center Bolts & Other Auto Fasteners",
    description:
      "A wide range of U-bolts, center bolts for all types of heavy & light vehicles.",
    icon: CircleDot,
    imageUrl: "/images/home/product-ubolts.webp",
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
      "All types of plain, machined & spring washers. Built for high performance.",
    icon: Cog,
    imageUrl: "/images/home/product-washers.webp",
    imageAlt:
      "Plain, machined, and spring washers as per IS: 2016 and 3063",
    specs: [
      { label: "Standards", value: "IS: 2016, 3063" },
      { label: "Custom", value: "As per customer's specifications" },
    ],
  },
  {
    id: "hex-head-bolts",
    name: "Hex Head Bolts & Screws",
    description:
      "Heavy hex bolts & fasteners (4.6/8.8/10.9/12.9) in various finishes.",
    icon: Bolt,
    imageUrl: "/images/home/product-hex-bolts.webp",
    imageAlt:
      "Heavy hex structural bolts and screws (HSFG bolts) — Kaveri Industries",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Length Range", value: "20mm to 1000mm" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9" },
    ],
  },
  {
    id: "hex-nuts",
    name: "Hex Nuts, Slotted Nuts & Nyloc Nuts",
    description:
      "Precision-engineered nuts for maximum engagement and long-term retention.",
    icon: Nut,
    imageUrl: "/images/home/product-hex-nuts.webp",
    imageAlt:
      "Assorted hex nuts, slotted nuts, and nyloc lock nuts in zinc and black finishes",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Grade", value: "4, 6, 8, 10, 12, 12H etc." },
    ],
  },
];