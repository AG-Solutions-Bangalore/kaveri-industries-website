import axios, {
  AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type InternalAxiosRequestConfig,
} from "axios";
import { ApiError } from "@/utils/apiError";

/**
 * Base URL for all backend API calls.
 *
 * Resolution order:
 *   1. `VITE_API_BASE_URL` env var (preferred for staging/production)
 *   2. Hard-coded demo endpoint `https://agsdemo.in/kaveri/api`
 *
 * Trailing slashes are stripped so callers can safely write `enquiry.php`.
 */
const BASE_URL =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, "") ??
  "https://agsdemo.in/kaveri/api";

/**
 * Shared, pre-configured axios instance.
 *
 * - 15 s timeout (enquiry forms should not hang forever)
 * - JSON in / JSON out
 * - Auth header injected on every request if a token exists in storage
 * - All errors normalised to {@link ApiError} so React Query consumers never
 *   have to deal with `AxiosError` directly
 */
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Attach auth token on every request
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Centralised error shaping – never leak raw axios to React Query
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    if (status === 401 && typeof window !== "undefined") {
      localStorage.removeItem("token");
      // hook into your auth store / router here if needed
    }
    return Promise.reject(new ApiError(error));
  },
);

/**
 * Thin wrapper around axios that returns already-parsed `data`,
 * so React Query callers can write `queryFn: ({ queryKey }) => api.get(...)`.
 */
export const api = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(url, config).then((r) => r.data),
  post: <T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) =>
    axiosInstance.post<T>(url, body, config).then((r) => r.data),
  put: <T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) =>
    axiosInstance.put<T>(url, body, config).then((r) => r.data),
  patch: <T, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) =>
    axiosInstance.patch<T>(url, body, config).then((r) => r.data),
  delete: <T>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<T>(url, config).then((r) => r.data),
};

export default axiosInstance;