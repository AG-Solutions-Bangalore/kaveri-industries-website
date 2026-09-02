import type { AxiosError } from "axios";

export class ApiError extends Error {
  status: number | undefined;
  code: string | undefined;
  data: unknown;

  constructor(axiosError: AxiosError) {
    const message =
      (axiosError.response?.data as { message?: string } | undefined)?.message ??
      axiosError.message ??
      "Request failed";
    super(message);
    this.name = "ApiError";
    this.status = axiosError.response?.status;
    this.code = axiosError.code;
    this.data = axiosError.response?.data;
  }
}