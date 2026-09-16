export interface HeroBadge {
  icon: "shield" | "briefcase" | "settings";
  line1: string;
  line2: string;
}

export interface ApprovalDetailRow {
  label: string;
  value: string;
  status?: boolean;
}

export interface ApprovedProductItem {
  id: string;
  title: string;
  approvalNo: string;
  image: string;
  imageAlt: string;
  link: string;
}

export const VENDOR_HERO_PILLS: HeroBadge[] = [
  { icon: "shield", line1: "Authorized", line2: "Manufacturer" },
  { icon: "briefcase", line1: "RDSO Approved", line2: "Products" },
  { icon: "settings", line1: "Compliant with", line2: "Industry Standards" },
];

export const VENDOR_APPROVAL_TABLE: ApprovalDetailRow[] = [
  { label: "Approval Authority", value: "RDSO (Research Designs and Standards Organisation)" },
  { label: "Vendor Name", value: "Kaveri Industries" },
  { label: "Vendor Code / Registration No.", value: "RDSO/XXXX/202X" },
  { label: "Approval No.", value: "RDSO/PE/S/XXX/202X" },
  { label: "Category", value: "High Tensile MS Fasteners" },
  { label: "Approved Products", value: "Studs & Threaded Bars, U-Bolts, Center Bolts, Washers, Other Fasteners" },
  { label: "Issue Date", value: "15 March 2023" },
  { label: "Validity", value: "14 March 2028" },
  { label: "Status", value: "Active", status: true },
];

export const APPROVED_PRODUCTS_DATA: ApprovedProductItem[] = [
  {
    id: "studs-threaded-bars",
    title: "Studs & Threaded Bars",
    approvalNo: "Approval No: RDSO/PE/S/XXX",
    image: "/images/vendor-approval/prod_studs_bars.webp",
    imageAlt: "High tensile studs and threaded bars approved by RDSO",
    link: "/products",
  },
  {
    id: "u-bolts",
    title: "U-Bolts",
    approvalNo: "Approval No: RDSO/PE/S/XXX",
    image: "/images/vendor-approval/prod_u_bolts.webp",
    imageAlt: "Heavy duty U-bolts approved by RDSO",
    link: "/products",
  },
  {
    id: "center-bolts",
    title: "Center Bolts & Other Fasteners",
    approvalNo: "Approval No: RDSO/PE/S/XXX",
    image: "/images/vendor-approval/prod_center_bolts.webp",
    imageAlt: "Precision center bolts and hex fasteners approved by RDSO",
    link: "/products",
  },
  {
    id: "washers",
    title: "Washers",
    approvalNo: "Approval No: RDSO/PE/S/XXX",
    image: "/images/vendor-approval/prod_washers.webp",
    imageAlt: "Industrial plain and spring washers approved by RDSO",
    link: "/products",
  },
];

export const RDSO_CERTIFICATE_DATA = {
  title: "Vendor Approval Certificate",
  subtitle: "Official approval certificate issued by RDSO.",
  image: "/images/vendor-approval/rdso_cert_preview.webp",
  imageAlt: "Official RDSO Vendor Approval Certificate preview",
  downloadUrl: "/images/vendor-approval/rdso_cert_preview.jpg",
  certNo: "RDSO/PE/S/XXX/202X",
  authority: "RDSO (Ministry of Railways)",
  validity: "14 March 2028",
};

export const VERIFICATION_BANNER_DATA = {
  eyebrow: "RDO / RDSO VERIFICATION",
  heading: "Complete Documentation for Verification",
  description:
    "All relevant documents certificates and supporting information are available for inspection and verification by RDO/RDSO and other authorized agencies.",
  ctaText: "Download All Approval Documents",
};
