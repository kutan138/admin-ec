import { selectHasRole } from "@/features/auth/auth.selectors";
import { useAuthStore } from "@/features/auth/auth.store";

export const useHasRole = (role: string) => useAuthStore(selectHasRole(role));
