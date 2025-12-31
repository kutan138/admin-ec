import { cookieManager } from "@/utils/cookies";
import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";

export const axiosRefreshInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosRefreshInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = cookieManager.getAccessToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
