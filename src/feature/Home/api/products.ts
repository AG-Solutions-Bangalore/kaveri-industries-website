import { Bolt, CircleDot, Cog, type LucideIcon, Nut, Settings2, Wrench } from "lucide-react";

/**
 * Product catalogue. Copy taken from the Kaveri Industries product brochure
 * (pages 4–5). Replace the icon with real photography when the asset library
 * is available — keep the schema, name, description, and specs identical.
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
      "Standardized high-strength bolting solutions for robust structural connections.",
    icon: Bolt,
    imageUrl: "/images/product-hex-bolts.svg",
    imageAlt: "Hex Head Bolts & Screws",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Length Range", value: "20mm to 1000mm" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9" },
    ],
  },
  {
    id: "hot-dip-galvanised",
    name: "Hot Dip Galvanized Fasteners",
    description:
      "Superior corrosion resistance for harsh environmental applications.",
    icon: Settings2,
    imageUrl: "/images/product-galvanised.svg",
    imageAlt: "Hot Dip Galvanized Fasteners",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Length Range", value: "20mm to 1000mm" },
      { label: "Grade", value: "4.6, 5.6, 8.8, 10.9 & 12.9" },
    ],
  },
  {
    id: "hex-nuts",
    name: "Hex Nuts",
    description:
      "Precision-tapped nuts ensuring secure mating and tension retention.",
    icon: Nut,
    imageUrl: "/images/product-hex-nuts.svg",
    imageAlt: "Hex Nuts, Slotted Nuts & Nylock Nuts",
    specs: [
      { label: "Dia Range", value: "M 6 to M 50" },
      { label: "Grade", value: "4, 6, 8, 10, 12, 12H etc." },
    ],
  },
  {
    id: "studs-threaded-bars",
    name: "Studs & Threaded Bars",
    description:
      "Continuous threading for custom length requirements and flange bolting.",
    icon: Wrench,
    imageUrl: "/images/product-studs.svg",
    imageAlt: "Studs & Threaded Bars",
    specs: [
      { label: "Dia Range", value: "M 6 to M 100" },
      { label: "Length Range", value: "10mm to 1000mm" },
      { label: "Grade", value: "B7, B7M, B3, B16, 4.6, 8.8, 10.9 etc." },
    ],
  },
  {
    id: "u-bolts-center-bolts",
    name: "U-Bolts / Center Bolts",
    description:
      "Robust pipe and leaf spring clamping solutions for automotive and structural assemblies.",
    icon: CircleDot,
    imageUrl: "/images/product-ubolts.svg",
    imageAlt: "U-Bolts and Center Bolts",
    specs: [
      { label: "Application", value: "Heavy & light vehicles" },
      { label: "Market", value: "India & export" },
    ],
  },
  {
    id: "washers",
    name: "Washers",
    description:
      "Load distribution and surface protection components built to exact dimensional specifications.",
    icon: Cog,
    imageUrl: "/images/product-washers.svg",
    imageAlt: "Plain, Machined & Spring Washers",
    specs: [
      { label: "Standards", value: "IS 2016, IS 3063" },
      { label: "Custom", value: "As per customer specs" },
    ],
  },
];
