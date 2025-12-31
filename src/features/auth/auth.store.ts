import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthState } from "./auth.types";
import type { UserProfileDto } from "@/api/generated";

export const useAuthStore = create<AuthState>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, _) => ({
      isLoading: false,
      isAuthenticated: false,
      isReady: true,
      email: "",
      roles: new Set<string>(),
      permissions: new Set<string>(),
      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },
      setAuth: async ({ email, roles, permissions }: UserProfileDto) => {
        set({
          isReady: true,
          isAuthenticated: true,
          email,
          roles: new Set(roles),
          permissions: new Set(permissions),
        });
      },
      reset: () => {
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
