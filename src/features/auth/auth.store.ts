// stores/auth.store.ts
import { authService } from "@/api/services/auth.service";
import { userService } from "@/api/services/user.service";
import { cookieManager } from "@/utils/cookies";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "./auth.types";
import { AuthStatus } from "./auth.constants";

export const useAuthStore = create<AuthState>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, _) => ({
      isLoading: false,
      isAuthenticated: false,
      isReady: true,
      email: "",
      status: AuthStatus.LOADING,
      roles: new Set<string>(),
      permissions: new Set<string>(),

      login: async (payload) => {
        set({ isLoading: true, isReady: false });

        try {
          const loginResponse = await authService.login({
            email: payload.email,
            password: payload.password,
          });
          const { accessToken, refreshToken } = loginResponse.data;

          cookieManager.setAccessToken(accessToken);
          cookieManager.setRefreshToken(refreshToken);

          const profileResponse = await userService.getProfile();
          const { email, permissions, roles } = profileResponse.data;

          set({
            isAuthenticated: true,
            email,
            roles: new Set(roles),
            permissions: new Set(permissions),
          });
        } finally {
          set({ isLoading: false, isReady: true });
        }
      },

      logout: () => {
        cookieManager.clearTokens();
        set({
          isLoading: false,
          isAuthenticated: false,
          isReady: true,
          email: "",
          roles: new Set<string>(),
          permissions: new Set<string>(),
        });
      },
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        email: state.email,
        roles: state.roles,
        permissions: state.permissions,
        isAuthenticated: state.isAuthenticated,
        isReady: state.isReady,
        isLoading: state.isLoading,
      }),
    }
  )
);
