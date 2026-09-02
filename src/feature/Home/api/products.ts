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
  specs: ProductSpec[];
}

export const PRODUCTS: Product[] = [
  {
    id: "hex-head-bolts",
    name: "Hex Head Bolts & Screws",
    description:
      "Heavy-head structural fasteners (HSFG bolts) for critical bolted connections.",
    icon: Bolt,
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
      "Guard-rail bolts, foundation bolts, and anti-theft nuts & bolts for outdoor service.",
    icon: Settings2,
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
      "Precision-machined nuts in hex, slotted, and nylock profiles for every assembly.",
    icon: Nut,
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
    specs: [
      { label: "Dia Range", value: "M 6 to M 100" },
      { label: "Length Range", value: "10mm to 1000mm" },
      { label: "Grade", value: "B7, B7M, B3, B16, 4.6, 8.8, 10.9 etc." },
    ],
  },
  {
    id: "u-bolts-center-bolts",
    name: "U-Bolts, Center Bolts & Auto Fasteners",
    description:
      "All types of U-bolts and center bolts for heavy & light vehicles in Indian and export markets.",
    icon: CircleDot,
    specs: [
      { label: "Application", value: "Heavy & light vehicles" },
      { label: "Market", value: "India & export" },
    ],
  },
  {
    id: "washers",
    name: "Washers",
    description:
      "Plain, machined, and spring washers manufactured to IS 2016, IS 3063, and customer specifications.",
    icon: Cog,
    specs: [
      { label: "Standards", value: "IS 2016, IS 3063" },
      { label: "Custom", value: "As per customer specs" },
    ],
  },
];
