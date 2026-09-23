import {
  MACHINERY_HERO_PILLS,
  ADVANCED_EQUIPMENT_DATA,
  MACHINERY_SECTIONS,
  MACHINERY_GALLERY_DATA,
  MACHINERY_VERIFICATION_DATA,
  type MachineryHeroPill,
  type EquipmentItem,
  type MachinerySection,
  type GalleryItem,
} from "./machineryConstants";

export function getMachineryHeroPills(): MachineryHeroPill[] {
  return MACHINERY_HERO_PILLS;
}

export function getAdvancedEquipment(): EquipmentItem[] {
  return ADVANCED_EQUIPMENT_DATA;
}

export function getEquipmentTable(): MachinerySection[] {
  return MACHINERY_SECTIONS;
}

export function getMachineryGallery(): GalleryItem[] {
  return MACHINERY_GALLERY_DATA;
}

export function getMachineryVerificationData() {
  return MACHINERY_VERIFICATION_DATA;
}
