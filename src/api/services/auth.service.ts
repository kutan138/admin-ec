import { apiClient } from "@/api/api-client";
import type { LoginDto } from "@/api/generated";

const authApi = apiClient.auth;

export const authService = {
  login: (loginDto: LoginDto) => authApi.authControllerLogin({ loginDto }),
  logout: () => {
    console.log("Call logout api");
  },
};
