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
    image: `${WEB_IMAGE_BASE}/machinery/cnc_machining_centre.webp`,
    imageAlt: "CNC Machining Centre at Kaveri Industries",
    link: "/contact?subject=CNC+Machining+Inquiry",
  },
  {
    id: "cnc-lathe-machine",
    title: "CNC Lathe Machine",
    description: "Efficient turning operations with superior finish.",
    image: `${WEB_IMAGE_BASE}/machinery/cnc_lathe_machine.webp`,
    imageAlt: "CNC Lathe Machine in operation at Kaveri Industries",
    link: "/contact?subject=CNC+Turning+Inquiry",
  },
  {
    id: "drilling-milling-machine",
    title: "Drilling & Milling Machine",
    description: "Precision drilling and milling capabilities.",
    image: `${WEB_IMAGE_BASE}/machinery/drilling_milling_machine.webp`,
    imageAlt: "Drilling & Milling Machine setup at Kaveri Industries",
    link: "/contact?subject=Drilling+Milling+Inquiry",
  },
  {
    id: "testing-equipment",
    title: "Testing Equipment",
    description: "Advanced testing for quality assurance.",
    image: `${WEB_IMAGE_BASE}/machinery/testing_equipment.webp`,
    imageAlt: "Advanced Metrology and Testing Equipment at Kaveri Industries",
    link: "/contact?subject=Testing+Equipment+Inquiry",
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
