import type { UserProfileDto } from "@/api/generated";
export type AuthState = {
  email: string;
  roles: Set<string>;
  permissions: Set<string>;
  isLoading: boolean;
  isAuthenticated: boolean;
  isReady: boolean;
  setAuth: (payload: UserProfileDto) => Promise<void>;
  setLoading: (payload: boolean) => void;
  reset: () => void;
};
