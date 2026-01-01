import { cookieManager } from "@/utils/cookies";
import axios, { AxiosError, type InternalAxiosRequestConfig } from "axios";
import { baseConfig } from "./axios-instance";

export const axiosRefreshInstance = axios.create(baseConfig);

axiosRefreshInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = cookieManager.getRefreshToken();
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
