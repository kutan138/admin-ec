import { useAuthContext } from "@/providers/auth/AuthContext";

export const useAuth = () => {
  return useAuthContext();
};
