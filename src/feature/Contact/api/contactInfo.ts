import { Building2, Phone, Mail, type LucideIcon } from "lucide-react";
import { company } from "@/lib/company";

/**
 * Contact data for the /contact page. Pulls the live values from
 * `@/lib/company` (the single source of truth) and adds the icon +
 * label metadata used by the info cards.
 *
 * `mapEmbedUrl` is a free OpenStreetMap embed that doesn't need an API key.
 * The user can swap in a Google Maps embed later if desired.
 */
export interface ContactCard {
  id: string;
  label: string;
  icon: LucideIcon;
  /** Plain-text value shown on the card. */
  value: string;
  /** Optional secondary line (city + postal code, etc.). */
  valueSecondary?: string;
  /** `tel:` / `mailto:` link target — when present, the value is a link. */
  href?: string;
}

const primaryPhone = company.contact.phones[0];

export const CONTACT_CARDS: ContactCard[] = [
  {
    id: "headquarters",
    label: "Headquarters",
    icon: Building2,
    value: company.address.street,
    valueSecondary: `${company.address.city} - ${company.address.postalCode}`,
  },
  {
    id: "phone",
    label: "Phone",
    icon: Phone,
    value: primaryPhone.display,
    href: `tel:${primaryPhone.tel}`,
  },
  {
    id: "email",
    label: "Email",
    icon: Mail,
    value: company.contact.primaryEmail,
    href: `mailto:${company.contact.primaryEmail}`,
  },
];

/**
 * Google Maps embed URL — uses the public `maps.google.com/maps?output=embed`
 * endpoint so no API key is required. Centred on the factory's lat/lng at
 * zoom 15. The `q=` param drives the pin; `z=` controls the zoom level.
 */
export const MAP_EMBED_URL =
  `https://maps.google.com/maps?q=${company.address.geo.lat},${company.address.geo.lng}` +
  `&hl=en&z=15&output=embed`;

/** "Open in Google Maps" link for the address callout. */
export const MAP_EXTERNAL_URL =
  `https://www.google.com/maps?q=${company.address.geo.lat},${company.address.geo.lng}` +
  `&hl=en&z=15`;

export const CONTACT_PAGE_CONTENT = {
  hero: {
    title: "Contact Us",
    description:
      "Get in touch with Kaveri Industries for your fastening requirements and enquiries.",
  },
  letsTalk: {
    heading: "Let's Talk",
    description:
      "Our sales and engineering teams respond to enquiries within one business day.",
  },
  location: {
    heading: "Our Location",
  },
  cta: {
    heading: "Looking for a Fastening Solution?",
    description:
      "Tell us what you need and our team will get back to you with precise engineering solutions.",
    cta: { label: "Request a Quote", href: "/contact" },
  },
} as const;
