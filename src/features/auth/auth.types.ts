import type { LoginDto } from "@/api/generated";

export type AuthState = {
  email: string;
  roles: Set<string>;
  permissions: Set<string>;
  isLoading: boolean;
  isAuthenticated: boolean;
  isReady: boolean;
  login: (payload: LoginDto) => Promise<void>;
  logout: () => void;
};
