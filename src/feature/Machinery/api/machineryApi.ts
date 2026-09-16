import {
  MACHINERY_HERO_PILLS,
  ADVANCED_EQUIPMENT_DATA,
  EQUIPMENT_TABLE_DATA,
  MACHINERY_GALLERY_DATA,
  MACHINERY_VERIFICATION_DATA,
  type MachineryHeroPill,
  type EquipmentItem,
  type EquipmentRow,
  type GalleryItem,
} from "./machineryConstants";

export function getMachineryHeroPills(): MachineryHeroPill[] {
  return MACHINERY_HERO_PILLS;
}

export function getAdvancedEquipment(): EquipmentItem[] {
  return ADVANCED_EQUIPMENT_DATA;
}

export function getEquipmentTable(): EquipmentRow[] {
  return EQUIPMENT_TABLE_DATA;
}

export function getMachineryGallery(): GalleryItem[] {
  return MACHINERY_GALLERY_DATA;
}

export function getMachineryVerificationData() {
  return MACHINERY_VERIFICATION_DATA;
}
