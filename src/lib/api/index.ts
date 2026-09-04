/**
 * Barrel for the centralised API layer.
 *
 * Feature code should import from `@/lib/api` rather than reaching into
 * individual files — that way the surface stays small and we can swap the
 * transport later (e.g. move to `fetch` or `ofetch`) without touching
 * call sites.
 */
export { ENDPOINTS, type EndpointKey } from "./endpoints";
export { queryKeys, type QueryKeys } from "./keys";
export {
  type ApiSuccess,
  type ApiFailure,
  type ApiResponse,
  type UtmParams,
  isApiSuccess,
  isApiFailure,
} from "./types";
export { axiosInstance, api } from "../axios";
export { ApiError } from "@/utils/apiError";