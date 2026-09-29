import { WEB_IMAGE_BASE, pdfUrl } from "@/lib/images";
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
  imageName: string;
  capacity?: string;
  make?: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

export const ADVANCED_EQUIPMENT_DATA: EquipmentItem[] = [
  {
    id: "cold-heading-machine-m30x200",
    title: "Cold Heading Machine M30X200",
    imageName: "cold_headin_machine_m30x200.webp",
    capacity: "M30 × 200 mm",
    make: "Metal Folds",
    description: "High-speed multi-station cold heading machine engineered for forming high-tensile bolt heads and blanks up to M30×200 mm with optimal grain structure.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("cold_headin_machine_m30x200.webp")}`,
    imageAlt: "Cold Heading Machine M30X200 at Kaveri Industries",
    link: "/contact?subject=Cold+Heading+Machine+M30X200+Inquiry",
  },
  {
    id: "control-panel",
    title: "Control Panel",
    imageName: "control_paneal.webp",
    capacity: "Multi-Zone PID / SCADA",
    make: "Automated Control Systems",
    description: "Centralized PLC and digital temperature control panel engineered for precise multi-zone thermal cycle regulation across continuous heat treatment lines.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("control_paneal.webp")}`,
    imageAlt: "Control Panel at Kaveri Industries",
    link: "/contact?subject=Control+Panel+Inquiry",
  },
  {
    id: "electro-plating-plant",
    title: "Electro Plating Plant",
    imageName: "electro_plating_plant.webp",
    capacity: "All Bolt, Nut & Washer Sizes",
    make: "Surface Finishing Line",
    description: "Automated barrel and rack electro-galvanizing plant providing uniform anti-corrosion zinc electroplating and passivated finish for industrial fasteners.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("electro_plating_plant.webp")}`,
    imageAlt: "Electro Plating Plant at Kaveri Industries",
    link: "/contact?subject=Electro+Plating+Plant+Inquiry",
  },
  {
    id: "hardening-unit",
    title: "Hardening Unit",
    imageName: "hardning_unit.webp",
    capacity: "200 Kg / Hour",
    make: "Hi Heat Engineers",
    description: "Continuous mesh-belt atmosphere hardening furnace providing controlled heating up to 900°C for uniform core hardness, grain refinement, and tensile strength.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("hardning_unit.webp")}`,
    imageAlt: "Hardening Unit at Kaveri Industries",
    link: "/contact?subject=Hardening+Unit+Inquiry",
  },
  {
    id: "hot-dip-galvanizing-furnace",
    title: "Hot Dip Galvanizing Furnace",
    imageName: "hot_dip_galvanizing_furnace.webp",
    capacity: "Heavy-Duty Batch Capacity",
    make: "Changotra Furnace",
    description: "High-capacity molten zinc hot dip galvanizing furnace delivering durable, weather-resistant metallurgical zinc coatings compliant with IS/ASTM standards.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("hot_dip_galvanizing_furnace.webp")}`,
    imageAlt: "Hot Dip Galvanizing Furnace at Kaveri Industries",
    link: "/contact?subject=Hot+Dip+Galvanizing+Furnace+Inquiry",
  },
  {
    id: "hot-nut-former",
    title: "Hot Nut Former",
    imageName: "Hot_nut_former.webp",
    capacity: "Up to M36 (36 mm)",
    make: "Sukhjit Machine Tools",
    description: "High-tonnage hot forging nut header engineered for rapid, high-precision hot forming of heavy hexagonal, flange, and railway track nuts up to M36.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("Hot_nut_former.webp")}`,
    imageAlt: "Hot Nut Former at Kaveri Industries",
    link: "/contact?subject=Hot+Nut+Former+Inquiry",
  },
  {
    id: "quenching-tank",
    title: "Quenching Tank",
    imageName: "Ouenching_tank.webp",
    capacity: "Continuous Agitated Quench",
    make: "Changotra Furnace",
    description: "Agitated rapid quench oil and polymer bath engineered for immediate martensitic transformation, uniform hardness distribution, and distortion control.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("Ouenching_tank.webp")}`,
    imageAlt: "Quenching Tank at Kaveri Industries",
    link: "/contact?subject=Quenching+Tank+Inquiry",
  },
  {
    id: "roll-threading-machine-m30x200",
    title: "Roll Threading Machine M30X200",
    imageName: "Roll_threading_machine _m30x200.webp",
    capacity: "M30 × 200 mm",
    make: "Metal Folds",
    description: "Heavy-duty hydraulic thread rolling machine delivering uninterrupted grain flow, superior surface burnishing, and maximum fatigue resistance up to M30×200 mm.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("Roll_threading_machine _m30x200.webp")}`,
    imageAlt: "Roll Threading Machine M30X200 at Kaveri Industries",
    link: "/contact?subject=Roll+Threading+Machine+M30X200+Inquiry",
  },
  {
    id: "tempering-unit",
    title: "Tempering Unit",
    imageName: "Tempering_unit.webp",
    capacity: "200 Kg / Hour",
    make: "Hi Heat Engineers",
    description: "Continuous atmosphere tempering furnace calibrated to relieve internal quenching stresses and achieve precise ductility, impact toughness, and specified HRC.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("Tempering_unit.webp")}`,
    imageAlt: "Tempering Unit at Kaveri Industries",
    link: "/contact?subject=Tempering+Unit+Inquiry",
  },
  {
    id: "trimming-machine",
    title: "Trimming Machine",
    imageName: "Trimming_machine.webp",
    capacity: "M30 × 200 mm",
    make: "Metal Folds",
    description: "Automatic high-speed bolt head trimming machine for cutting sharp, clean hexagonal heads and circular flanges up to M30×200 mm with strict dimensional tolerance.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("Trimming_machine.webp")}`,
    imageAlt: "Trimming Machine at Kaveri Industries",
    link: "/contact?subject=Trimming+Machine+Inquiry",
  },
  {
    id: "wire-draw-machine-m36",
    title: "Wire Draw Machine M36",
    imageName: "Wire_draw _achine _m36.webp",
    capacity: "Up to 36 mm",
    make: "Ajit Machine Tools",
    description: "Heavy bull-block wire drawing machine with in-line pointing and descaling to calibrate raw wire rod diameters up to 36 mm for high-precision cold forging.",
    image: `${WEB_IMAGE_BASE}/machinery/${encodeURI("Wire_draw _achine _m36.webp")}`,
    imageAlt: "Wire Draw Machine M36 at Kaveri Industries",
    link: "/contact?subject=Wire+Draw+Machine+M36+Inquiry",
  },
];

export interface MachineRow {
  sNo: string;
  mcNo: string;
  name: string;
  manufacture: string;
  capacity: string;
  year: string;
}

export interface MachinerySection {
  code: string;
  title: string;
  rows: MachineRow[];
}

/**
 * Original machinery list — transcribed verbatim from
 * `public/pdf/vendor-approval/LIST OF MACHINE.pdf`
 * (Kaveri Industries, Bangalore — List of Machinery).
 * Names, makes and capacities match the audited document so the
 * website stays consistent with RDSO verification records.
 */
export const MACHINERY_SECTIONS: MachinerySection[] = [
  {
    code: "A",
    title: "Pickling Section",
    rows: [
      { sNo: "1", mcNo: "PT-02", name: "Pickling Tank", manufacture: "IN HOUSE", capacity: "8'x8'x6'", year: "2012" },
      { sNo: "2", mcNo: "WT-03", name: "Washing Tank", manufacture: "IN HOUSE", capacity: "4'x4'x4'", year: "2012" },
      { sNo: "3", mcNo: "LT-01", name: "Lime Tank", manufacture: "IN HOUSE", capacity: "4'x4'x4'", year: "2012" },
    ],
  },
  {
    code: "B",
    title: "Draw Section",
    rows: [
      { sNo: "1", mcNo: "PM-01", name: "Pointing Machine", manufacture: "AJIT MACHINE TOOLS", capacity: "up to 30 mm", year: "2012" },
      { sNo: "2", mcNo: "DSM-01", name: "De scale Machine", manufacture: "HANGZHOU SANJIN", capacity: "up to 36 mm", year: "2026" },
      { sNo: "3", mcNo: "WDM-02", name: "Wire Draw Machine", manufacture: "AJIT MACHINE TOOLS", capacity: "up to 36 mm", year: "2012" },
    ],
  },
  {
    code: "C",
    title: "Cold Forge Section",
    rows: [
      { sNo: "1", mcNo: "WS-04", name: "Wire Straightner Machine", manufacture: "METAL FOLDS", capacity: "16 mm", year: "2014" },
      { sNo: "2", mcNo: "HM-04", name: "Cold Forge Header Machine", manufacture: "METAL FOLDS", capacity: "M16x125", year: "2010" },
      { sNo: "3", mcNo: "TM-04", name: "Trimming Machine", manufacture: "METAL FOLDS", capacity: "M16x125", year: "2010" },
      { sNo: "4", mcNo: "RM-04", name: "Roll Thread Machine", manufacture: "METAL FOLDS", capacity: "M16x125", year: "2010" },
      { sNo: "5", mcNo: "WS-03", name: "Wire Straightner Machine", manufacture: "METAL FOLDS", capacity: "16 mm", year: "2014" },
      { sNo: "6", mcNo: "HM-03", name: "Cold Forge Header Machine", manufacture: "METAL FOLDS", capacity: "M16x125", year: "2012" },
      { sNo: "7", mcNo: "TM-03", name: "Trimming Machine", manufacture: "METAL FOLDS", capacity: "M16x125", year: "2012" },
      { sNo: "8", mcNo: "RM-03", name: "Roll Thread Machine", manufacture: "METAL FOLDS", capacity: "M16x125", year: "2012" },
      { sNo: "9", mcNo: "WS-02", name: "Wire Straightner Machine", manufacture: "METAL FOLDS", capacity: "16 mm", year: "2014" },
      { sNo: "10", mcNo: "HM-02", name: "Cold Forge Header Machine", manufacture: "METAL FOLDS", capacity: "M16x125", year: "2014" },
      { sNo: "11", mcNo: "TM-02", name: "Trimming Machine", manufacture: "METAL FOLDS", capacity: "M16x125", year: "2014" },
      { sNo: "12", mcNo: "RM-02", name: "Roll Thread Machine", manufacture: "METAL FOLDS", capacity: "M16x125", year: "2014" },
      { sNo: "13", mcNo: "WS-01", name: "Wire Straightner Machine", manufacture: "METAL FOLDS", capacity: "20 mm", year: "2014" },
      { sNo: "14", mcNo: "HM-01", name: "Cold Forge Header Machine", manufacture: "METAL FOLDS", capacity: "M20x300 mm", year: "2014" },
      { sNo: "15", mcNo: "TM-01", name: "Trimming Machine", manufacture: "METAL FOLDS", capacity: "M20x300 mm", year: "2014" },
      { sNo: "16", mcNo: "RM-01", name: "Roll Thread Machine", manufacture: "METAL FOLDS", capacity: "M20x300 mm", year: "2014" },
      { sNo: "17", mcNo: "WS-05", name: "Wire Straightner Machine", manufacture: "METAL FOLDS", capacity: "30 mm", year: "2018" },
      { sNo: "18", mcNo: "HM-05", name: "Cold Forge Header Machine", manufacture: "METAL FOLDS", capacity: "M30x200 mm", year: "2018" },
      { sNo: "19", mcNo: "TM-05", name: "Trimming Machine", manufacture: "METAL FOLDS", capacity: "M30x200 mm", year: "2018" },
      { sNo: "20", mcNo: "RM-05", name: "Roll Thread Machine", manufacture: "METAL FOLDS", capacity: "M30x200 mm", year: "2018" },
      { sNo: "21", mcNo: "WS-04", name: "Wire Straightner Machine", manufacture: "METAL FOLDS", capacity: "16 mm", year: "2026" },
      { sNo: "22", mcNo: "HM-04", name: "Cold Forge Header Machine", manufacture: "METAL FOLDS", capacity: "M16x150", year: "2026" },
      { sNo: "23", mcNo: "TM-04", name: "Trimming Machine", manufacture: "METAL FOLDS", capacity: "M16x150", year: "2026" },
      { sNo: "24", mcNo: "RM-04", name: "Roll Thread Machine", manufacture: "METAL FOLDS", capacity: "M16x150", year: "2026" },
      { sNo: "25", mcNo: "WS-04", name: "Wire Straightner Machine", manufacture: "NARINDER MACHINE", capacity: "16 mm", year: "2026" },
      { sNo: "26", mcNo: "HM-04", name: "Cold Forge Header Machine", manufacture: "NARINDER MACHINE", capacity: "M16x150", year: "2026" },
      { sNo: "27", mcNo: "RM-04", name: "Roll Thread Machine", manufacture: "BS SONS", capacity: "M16x150", year: "2026" },
    ],
  },
  {
    code: "D",
    title: "Cold Forge Nut Section",
    rows: [
      { sNo: "1", mcNo: "WS-01", name: "Wire Straightner Machine", manufacture: "KLER MACHINE TOOLS", capacity: "24 mm", year: "2016" },
      { sNo: "2", mcNo: "NF-01", name: "Nut Former machine", manufacture: "KLER MACHINE TOOLS", capacity: "16 mm", year: "2016" },
      { sNo: "3", mcNo: "WS-02", name: "Wire Straightner Machine", manufacture: "KLER MACHINE TOOLS", capacity: "24 mm", year: "2017" },
      { sNo: "4", mcNo: "NF-02", name: "Nut Former machine", manufacture: "KLER MACHINE TOOLS", capacity: "16 mm", year: "2017" },
      { sNo: "5", mcNo: "NT-01", name: "Double Spindle Nut Tapping Machine", manufacture: "L S DHIMAN", capacity: "12 mm", year: "2017" },
      { sNo: "6", mcNo: "NT-02", name: "Double Spindle Nut Tapping Machine", manufacture: "L S DHIMAN", capacity: "16 mm", year: "2016" },
      { sNo: "7", mcNo: "NT-03", name: "Double Spindle Nut Tapping Machine", manufacture: "L S DHIMAN", capacity: "16 mm", year: "2017" },
      { sNo: "8", mcNo: "NT-04", name: "Double Spindle Nut Tapping Machine", manufacture: "L S DHIMAN", capacity: "16 mm", year: "2017" },
      { sNo: "9", mcNo: "NT-05", name: "Double Spindle Nut Tapping Machine", manufacture: "L S DHIMAN", capacity: "16 mm", year: "2017" },
      { sNo: "10", mcNo: "NT-06", name: "Double Spindle Nut Tapping Machine", manufacture: "METAL FOLDS", capacity: "36 mm", year: "2018" },
    ],
  },
  {
    code: "E",
    title: "Hot Forge Nut Section",
    rows: [
      { sNo: "1", mcNo: "F-01", name: "Furnace", manufacture: "In House", capacity: "2 Meter", year: "2018" },
      { sNo: "2", mcNo: "HNF-02", name: "Hot Forge Nut Header", manufacture: "SUKHJIT MACHINE TOOLS", capacity: "36 MM", year: "2020" },
      { sNo: "3", mcNo: "HNF-01", name: "Hot Forge Nut Header", manufacture: "SUKHJIT MACHINE TOOLS", capacity: "25 MM", year: "2018" },
    ],
  },
  {
    code: "F",
    title: "Washer Section",
    rows: [
      { sNo: "1", mcNo: "SP-01", name: "Spring Washer Machine", manufacture: "VIRDI MECHANICAL WORK", capacity: "16 mm", year: "2018" },
      { sNo: "2", mcNo: "PP-01", name: "Power Press", manufacture: "ROSE MCHINE TOOLS", capacity: "50 TON", year: "2018" },
    ],
  },
  {
    code: "G",
    title: "Hot Dip Plant",
    rows: [
      { sNo: "1", mcNo: "PT-01", name: "Pickling Tank", manufacture: "IN HOUSE", capacity: "All sizes Bolt Nut, Washer", year: "2016" },
      { sNo: "2", mcNo: "WT-01", name: "Water Tank", manufacture: "IN HOUSE", capacity: "All sizes Bolt Nut, Washer", year: "2016" },
      { sNo: "3", mcNo: "FT-01", name: "Flux Tank", manufacture: "IN HOUSE", capacity: "All sizes Bolt Nut, Washer", year: "2016" },
      { sNo: "5", mcNo: "", name: "Hot Plate", manufacture: "CHANGOTRA FURNACE", capacity: "All sizes Bolt Nut, Washer", year: "2016" },
      { sNo: "6", mcNo: "HDF-01", name: "Hot Dip Galvanising Furnace", manufacture: "CHANGOTRA FURNACE", capacity: "All sizes Bolt Nut, Washer", year: "2016" },
      { sNo: "7", mcNo: "CM-01", name: "Centrifugal Machine", manufacture: "CHANGOTRA FURNACE", capacity: "All sizes Bolt Nut, Washer", year: "2016" },
      { sNo: "8", mcNo: "QT-01", name: "Quinching Tank", manufacture: "CHANGOTRA FURNACE", capacity: "All sizes Bolt Nut, Washer", year: "2016" },
      { sNo: "9", mcNo: "DT-01", name: "Dichromating Tank", manufacture: "CHANGOTRA FURNACE", capacity: "All sizes Bolt Nut, Washer", year: "2016" },
    ],
  },
  {
    code: "H",
    title: "Phosphate & Blacking Furnace",
    rows: [
      { sNo: "1", mcNo: "PBF-01", name: "Phosphate & Blacking Furnace", manufacture: "CHANGOTRA FURNACE", capacity: "All sizes Bolt Nut, Washer", year: "2021" },
    ],
  },
  {
    code: "I",
    title: "Rivet Section",
    rows: [
      { sNo: "1", mcNo: "AR-01", name: "Automatic Riveting Machine", manufacture: "A B Engg", capacity: "10 mm", year: "2021" },
    ],
  },
  {
    code: "J",
    title: "Heat Treatment Section",
    rows: [
      { sNo: "1", mcNo: "HTF-01", name: "Continuous Heat Treatment Furnace", manufacture: "Hi Heat Engineers", capacity: "200 Kg Per Hour", year: "2019" },
    ],
  },
  {
    code: "K",
    title: "Material Handling",
    rows: [
      { sNo: "1", mcNo: "OHC-01", name: "Over Head Crane", manufacture: "MM Crain", capacity: "5 Ton", year: "2014" },
      { sNo: "2", mcNo: "OHC-02", name: "Over Head Crane", manufacture: "MM Crain", capacity: "5 Ton", year: "2016" },
      { sNo: "3", mcNo: "OHC-03", name: "Over Head Crane", manufacture: "MM Crain", capacity: "5 Ton", year: "2018" },
      { sNo: "4", mcNo: "OHC-04", name: "Over Head Crane", manufacture: "MM Crain", capacity: "1.5 Ton", year: "2021" },
    ],
  },
  {
    code: "L",
    title: "Packing Section",
    rows: [
      { sNo: "1", mcNo: "BNA-01", name: "Bolt Nut Assembly Machine", manufacture: "METAL FOLDS", capacity: "16 mm", year: "2016" },
      { sNo: "2", mcNo: "BNA-02", name: "Bolt Nut Assembly Machine", manufacture: "METAL FOLDS", capacity: "16 mm", year: "2016" },
      { sNo: "3", mcNo: "BNA-03", name: "Bolt Nut Assembly Machine", manufacture: "METAL FOLDS", capacity: "20 mm", year: "2018" },
      { sNo: "4", mcNo: "WM-01", name: "Weighing Machine", manufacture: "QASIS", capacity: "250 kg", year: "2016" },
      { sNo: "5", mcNo: "WM-02", name: "Weighing Machine", manufacture: "QASIS", capacity: "250 kg", year: "2016" },
      { sNo: "6", mcNo: "WM-03", name: "Weighing Machine", manufacture: "QASIS", capacity: "250 kg", year: "2017" },
    ],
  },
  {
    code: "M",
    title: "Tool Room",
    rows: [
      { sNo: "1", mcNo: "LM-01", name: "Lathe Machine", manufacture: "ROYAL MACHINE", capacity: "6 feet", year: "2014" },
      { sNo: "2", mcNo: "LM-02", name: "Lathe Machine", manufacture: "ROYAL MACHINE", capacity: "3 feet", year: "2014" },
      { sNo: "3", mcNo: "LM-03", name: "Lathe Machine", manufacture: "ROYAL MACHINE", capacity: "6 feet", year: "2008" },
      { sNo: "4", mcNo: "BG-01", name: "Bench Grinder Machine", manufacture: "LAXMI GRINDER", capacity: "8 inch", year: "2013" },
      { sNo: "5", mcNo: "BG-02", name: "Bench Grinder Machine", manufacture: "LAXMI GRINDER", capacity: "9 inch", year: "2008" },
      { sNo: "6", mcNo: "HP-01", name: "Hydraulic Press", manufacture: "ROSE MACHINETOOLS", capacity: "100 ton", year: "2012" },
      { sNo: "7", mcNo: "HP-02", name: "Hydraulic Press", manufacture: "ROSE MACHINETOOLS", capacity: "40 Ton", year: "2010" },
      { sNo: "8", mcNo: "HG-01", name: "Hand Grinder machine", manufacture: "BOSH", capacity: "4 INCH", year: "2017" },
      { sNo: "9", mcNo: "HD-01", name: "Hand drill machine", manufacture: "BOSH", capacity: '3/4"', year: "2015" },
      { sNo: "10", mcNo: "ADM-01", name: "Automatic Drill Machine", manufacture: "SAGGU MACHINE", capacity: "16 MM", year: "2018" },
      { sNo: "11", mcNo: "DM-02", name: "Hand Drill Machine", manufacture: "TRIDENT MACHINERY", capacity: "13 MM", year: "2019" },
      { sNo: "12", mcNo: "DM-03", name: "Hand Drill Machine", manufacture: "TRIDENT MACHINERY", capacity: "13 MM", year: "2020" },
      { sNo: "13", mcNo: "DM-04", name: "Hand Drill Machine", manufacture: "TRIDENT MACHINERY", capacity: "25 MM", year: "2019" },
      { sNo: "14", mcNo: "PH-01", name: "Power Hacksaw Machine", manufacture: "LAXMI", capacity: '12"', year: "2012" },
      { sNo: "15", mcNo: "BSM-01", name: "Bag Sewing Machine", manufacture: "REVO", capacity: "15 mm", year: "2014" },
      { sNo: "16", mcNo: "PCG-01", name: "Power Cutting Grinder", manufacture: "BOSH", capacity: '10"', year: "2018" },
    ],
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
    image: `${WEB_IMAGE_BASE}/machinery/gallery_cnc_turning.webp`,
    imageAlt: "CNC Turning Centre inside Kaveri Industries plant",
  },
  {
    id: "gallery-vmc",
    title: "VMC Machine",
    image: `${WEB_IMAGE_BASE}/machinery/gallery_vmc.webp`,
    imageAlt: "Vertical Machining Centre in factory shop floor",
  },
  {
    id: "gallery-lathe",
    title: "Lathe Machine",
    image: `${WEB_IMAGE_BASE}/machinery/gallery_lathe.webp`,
    imageAlt: "Heavy Duty Lathe Machine setup",
  },
  {
    id: "gallery-grinding",
    title: "Grinding Machine",
    image: `${WEB_IMAGE_BASE}/machinery/gallery_grinding.webp`,
    imageAlt: "Precision Surface Grinding Machine",
  },
];

export const MACHINERY_VERIFICATION_DATA = {
  eyebrow: "RDO / RDSO VERIFICATION",
  heading: "Machinery & Equipment Information",
  description:
    "Complete machinery details, specifications and supporting documents are available for inspection and verification by RDO/RDSO and other authorized agencies.",
  ctaText: "Download Detailed Machinery List",
  downloadUrl: pdfUrl("vendor-approval/LIST OF MACHINE.pdf"),
  downloadFileName: "LIST OF MACHINE.pdf",
};
