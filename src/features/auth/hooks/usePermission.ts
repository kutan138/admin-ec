import { selectHasPermissions } from "@/features/auth/auth.selectors";
import { useAuthStore } from "@/features/auth/auth.store";

export const useHasPermissions = (
  permissions: readonly string[],
  options?: { anyOf?: boolean }
) => useAuthStore(selectHasPermissions(permissions, options));
