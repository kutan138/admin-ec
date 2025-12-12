import type { LoginDto } from "@/api/generated/models/LoginDto";
import type { UserResponseDto } from "@/api/generated/models/UserResponseDto";
import { createContext, useContext } from "react";

export type AuthContextValue = {
  user: UserResponseDto | null;
  roles: string[];
  permissions: string[];
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginDto) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
};

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined
);

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return ctx;
};
