import {
  MAIN_CERTIFICATES,
  HIGHLIGHT_ITEMS,
  OTHER_CERTIFICATIONS,
  QUALITY_COMMITMENT_DATA,
  type CertificateItem,
} from "./certificateConstants";

export function getCertificates(): CertificateItem[] {
  return MAIN_CERTIFICATES;
}

export function getCertificateById(id: string): CertificateItem | undefined {
  return MAIN_CERTIFICATES.find((cert) => cert.id === id);
}

export {
  MAIN_CERTIFICATES,
  HIGHLIGHT_ITEMS,
  OTHER_CERTIFICATIONS,
  QUALITY_COMMITMENT_DATA,
};
