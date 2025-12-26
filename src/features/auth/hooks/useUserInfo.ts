import { selectUserEmail } from "@/features/auth/auth.selectors";
import { useAuthStore } from "@/features/auth/auth.store";

export const useUserInfo = () => {
  const email = useAuthStore(selectUserEmail);
  return { email };
};
