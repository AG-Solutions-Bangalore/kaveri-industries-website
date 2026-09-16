export interface MachineryHeroPill {
  line1: string;
  line2: string;
  icon: "cpu" | "factory" | "crosshair" | "users";
}

export const MACHINERY_HERO_PILLS: MachineryHeroPill[] = [
  {
    line1: "Modern Equipment",
    line2: "Advanced technology",
    icon: "cpu",
  },
  {
    line1: "High Capacity",
    line2: "Scalable production",
    icon: "factory",
  },
  {
    line1: "Precision Manufacturing",
    line2: "Consistent quality",
    icon: "crosshair",
  },
  {
    line1: "Experienced Team",
    line2: "Skilled operators",
    icon: "users",
  },
];

export interface EquipmentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

export const ADVANCED_EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: "cnc-machining-centre",
    title: "CNC Machining Centre",
    description: "High precision machining for complex components.",
    image: "/images/machinery/cnc_machining_centre.webp",
    imageAlt: "CNC Machining Centre at Kaveri Industries",
    link: "/contact?subject=CNC+Machining+Inquiry",
  },
  {
    id: "cnc-lathe-machine",
    title: "CNC Lathe Machine",
    description: "Efficient turning operations with superior finish.",
    image: "/images/machinery/cnc_lathe_machine.webp",
    imageAlt: "CNC Lathe Machine in operation at Kaveri Industries",
    link: "/contact?subject=CNC+Turning+Inquiry",
  },
  {
    id: "drilling-milling-machine",
    title: "Drilling & Milling Machine",
    description: "Precision drilling and milling capabilities.",
    image: "/images/machinery/drilling_milling_machine.webp",
    imageAlt: "Drilling & Milling Machine setup at Kaveri Industries",
    link: "/contact?subject=Drilling+Milling+Inquiry",
  },
  {
    id: "testing-equipment",
    title: "Testing Equipment",
    description: "Advanced testing for quality assurance.",
    image: "/images/machinery/testing_equipment.webp",
    imageAlt: "Advanced Metrology and Testing Equipment at Kaveri Industries",
    link: "/contact?subject=Testing+Equipment+Inquiry",
  },
];

export interface EquipmentRow {
  sNo: number;
  equipment: string;
  make: string;
  model: string;
  quantity: string | number;
  capacity: string;
  application: string;
}

export const EQUIPMENT_TABLE_DATA: EquipmentRow[] = [
  {
    sNo: 1,
    equipment: "CNC Turning Centre",
    make: "Ace Micromatic",
    model: "Jobber Elite",
    quantity: 2,
    capacity: "300 mm",
    application: "Precision machining",
  },
  {
    sNo: 2,
    equipment: "VMC (Vertical Machining Centre)",
    make: "BFW / Haas",
    model: "VF-2 / Chakra",
    quantity: 2,
    capacity: "1000 x 500 mm",
    application: "Complex component manufacturing",
  },
  {
    sNo: 3,
    equipment: "Lathe Machine",
    make: "HMT / Leader",
    model: "Heavy Duty",
    quantity: 5,
    capacity: "500 mm",
    application: "General machining",
  },
  {
    sNo: 4,
    equipment: "Drilling Machine",
    make: "Batliboi / Sagar",
    model: "Radial Arm",
    quantity: 3,
    capacity: "25 mm",
    application: "Drilling operations",
  },
  {
    sNo: 5,
    equipment: "Milling Machine",
    make: "BFW",
    model: "Universal",
    quantity: 2,
    capacity: "300 mm",
    application: "Milling and profiling",
  },
  {
    sNo: 6,
    equipment: "Grinding Machine",
    make: "Jones & Shipman",
    model: "Surface Grinder",
    quantity: 2,
    capacity: "250 mm",
    application: "Surface finishing",
  },
  {
    sNo: 7,
    equipment: "Testing Equipment",
    make: "Mitutoyo / Optical",
    model: "CMM / Profile Projector",
    quantity: 5,
    capacity: "—",
    application: "Quality inspection",
  },
  {
    sNo: 8,
    equipment: "Other Equipment",
    make: "Industrial Standard",
    model: "Various",
    quantity: "—",
    capacity: "—",
    application: "Supporting operations",
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
}

export const MACHINERY_GALLERY_DATA: GalleryItem[] = [
  {
    id: "gallery-cnc-turning",
    title: "CNC Turning Centre",
    image: "/images/machinery/gallery_cnc_turning.webp",
    imageAlt: "CNC Turning Centre inside Kaveri Industries plant",
  },
  {
    id: "gallery-vmc",
    title: "VMC Machine",
    image: "/images/machinery/gallery_vmc.webp",
    imageAlt: "Vertical Machining Centre in factory shop floor",
  },
  {
    id: "gallery-lathe",
    title: "Lathe Machine",
    image: "/images/machinery/gallery_lathe.webp",
    imageAlt: "Heavy Duty Lathe Machine setup",
  },
  {
    id: "gallery-grinding",
    title: "Grinding Machine",
    image: "/images/machinery/gallery_grinding.webp",
    imageAlt: "Precision Surface Grinding Machine",
  },
];

export const MACHINERY_VERIFICATION_DATA = {
  eyebrow: "RDO / RDSO VERIFICATION",
  heading: "Machinery & Equipment Information",
  description:
    "Complete machinery details, specifications and supporting documents are available for inspection and verification by RDO/RDSO and other authorized agencies.",
  ctaText: "Download Detailed Machinery List",
  downloadUrl: "/images/machinery/machinery_hero_banner.webp",
};
