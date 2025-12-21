import type { LoginDto, UserResponseDto } from "@/api/generated";
import { createContext, useContext } from "react";

export type AuthContextValue = {
  user: UserResponseDto | null;
  roles: string[];
  permissions: string[];
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginDto) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
};

export const AuthContext = createContext<AuthContextValue | undefined>({
  user: null,
  roles: [],
  permissions: [],
  isAuthenticated: false,
  isLoading: false,
  login: async () => {},
  logout: () => {},
  hasPermission: () => false,
  hasRole: () => false,
});

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuthContext must be used within AuthProvider");
  }
  return ctx;
};
