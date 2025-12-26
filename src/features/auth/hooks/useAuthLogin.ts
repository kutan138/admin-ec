import { selectAuthLoading, selectLogin } from "@/features/auth/auth.selectors";
import { useAuthStore } from "@/features/auth/auth.store";

export const useAuthLogin = () => {
  const login = useAuthStore(selectLogin);
  const isLoading = useAuthStore(selectAuthLoading);

  return { login, isLoading };
};
