/**
 * Client-side validation for the enquiry form.
 *
 * Kept light — the PHP backend is the source of truth for required fields.
 * These checks only exist to give users fast feedback and avoid wasting a
 * round-trip on obviously bad data.
 */

export interface EnquiryFieldErrors {
  enquiryFullName?: string;
  enquiryEmail?: string;
  enquiryMobile?: string;
  enquiryProduct?: string;
  enquiryMessage?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** India-only phone numbers: must start with `+91` followed by exactly 10 digits. */
export const PHONE_PREFIX = "+91";
export const PHONE_DIGIT_MAX = 10;
export const PHONE_DIGIT_MIN = 10;
const PHONE_RE = /^\+91\d{10}$/;

/**
 * Strip everything that isn't a digit. Used by the form to sanitise
 * keystrokes before they reach React state — the user physically cannot
 * paste a letter into the field.
 */
export function digitsOnly(raw: string): string {
  return raw.replace(/\D+/g, "");
}

/**
 * Build the full international number from the 10-digit local part.
 * Returns `undefined` for inputs shorter than 10 digits so callers can
 * decide whether to send what they have or block the request.
 */
export function toInternationalNumber(localDigits: string): string | undefined {
  const trimmed = digitsOnly(localDigits).slice(0, PHONE_DIGIT_MAX);
  if (trimmed.length !== PHONE_DIGIT_MAX) return undefined;
  return `${PHONE_PREFIX}${trimmed}`;
}

/** True when the full international number is well-formed. */
export function isValidPhone(value: string): boolean {
  return PHONE_RE.test(value);
}

export function validateEnquiry(input: {
  enquiryFullName?: string;
  enquiryEmail?: string;
  enquiryMobile?: string;
  enquiryProduct?: string;
  enquiryMessage?: string;
}): EnquiryFieldErrors {
  const errors: EnquiryFieldErrors = {};

  if (!input.enquiryFullName?.trim()) {
    errors.enquiryFullName = "Please tell us your name.";
  }

  if (!input.enquiryEmail?.trim()) {
    errors.enquiryEmail = "Email is required.";
  } else if (!EMAIL_RE.test(input.enquiryEmail.trim())) {
    errors.enquiryEmail = "Enter a valid email address.";
  }

  const phone = input.enquiryMobile?.trim() ?? "";
  if (!phone) {
    errors.enquiryMobile = "Phone number is required.";
  } else if (!isValidPhone(phone)) {
    errors.enquiryMobile = `Enter a valid 10-digit mobile number with ${PHONE_PREFIX} prefix.`;
  }

  if (!input.enquiryProduct?.trim()) {
    errors.enquiryProduct = "Please mention what this is about.";
  }

  if (!input.enquiryMessage?.trim() || input.enquiryMessage.trim().length < 10) {
    errors.enquiryMessage = "Please add a few words about your requirement.";
  }

  return errors;
}

export function hasEnquiryErrors(errors: EnquiryFieldErrors): boolean {
  return Object.values(errors).some(Boolean);
}