/**
 * Wire-format types for the enquiry endpoint.
 *
 * The PHP backend at `POST /enquiry.php` accepts the payload documented by
 * the backend team:
 *
 *   {
 *     "enquiryFullName": "Test",
 *     "enquiryEmail": "test@gmail.com",
 *     "enquiryMobile": "9876543210",
 *     "enquiryProduct": "Website Enquiry",
 *     "enquiryMessage": "This is a test enquiry.",
 *     "utm_medium": "website",
 *     "utm_source": "google",
 *     "utm_campaign": "test"
 *   }
 *
 * The mobile backend treats every field as optional, but the front-end still
 * enforces required fields client-side via the Zod schema in
 * `enquirySchema.ts`.
 */
import type { UtmParams } from "@/lib/api";

/** Raw payload accepted by `POST /enquiry.php`. */
export interface EnquiryPayload extends UtmParams {
  enquiryFullName: string;
  enquiryEmail: string;
  enquiryMobile: string;
  enquiryProduct: string;
  enquiryMessage: string;
}

/** Shape the PHP API returns on success. */
export interface EnquiryResponse {
  status?: string;
  code?: number | string;
  message?: string;
  enquiryId?: string | number;
}