import { Configuration } from "./generated/configuration";
import {
  AuthApi,
  CategoriesApi,
  UsersApi,
  PermissionsApi,
} from "./generated/api";
import { axiosInstance } from "./axios-instance";
import { axiosRefreshInstance } from "./axios-refresh-instance";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

// Configuration
const apiConfig = new Configuration({
  basePath: API_BASE_URL,
});

// Export API instances với axios custom
export const authApi = new AuthApi(apiConfig, undefined, axiosInstance);
export const usersApi = new UsersApi(apiConfig, undefined, axiosInstance);
export const permissionApi = new PermissionsApi(
  apiConfig,
  undefined,
  axiosInstance
);
export const categoriesApi = new CategoriesApi(
  apiConfig,
  undefined,
  axiosInstance
);

// Refresh token in response intercepter can not throw error
export const refreshAuthApi = new AuthApi(
  apiConfig,
  undefined,
  axiosRefreshInstance
);

// Helper functions
export const apiClient = {
  auth: authApi,
  users: usersApi,
  categories: categoriesApi,
  permission: permissionApi,
  refreshAuthApi,
};
