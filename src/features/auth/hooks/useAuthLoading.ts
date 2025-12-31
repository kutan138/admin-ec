import { selectAuthLoading } from "@/features/auth/auth.selectors";
import { useAuthStore } from "@/features/auth/auth.store";

export const useAuthLoading = () => useAuthStore(selectAuthLoading);
