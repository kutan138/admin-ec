import { selectAuthView } from "@/features/auth/auth.selectors";
import { useAuthStore } from "@/features/auth/auth.store";

export const useAuthView = () => useAuthStore(selectAuthView);
