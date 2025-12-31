import { AuthStatus } from "./auth.constants";
import type { AuthState } from "./auth.types";

export const selectHasRole = (role: string) => (state: AuthState) =>
  state.roles.has(role);

type HasPermissionsOptions = {
  anyOf?: boolean;
};

export const selectHasPermissions =
  (permissions: readonly string[], options?: HasPermissionsOptions) =>
  (state: AuthState) => {
    const anyOf = options?.anyOf ?? false;

    return anyOf
      ? permissions.some((p) => state.permissions.has(p))
      : permissions.every((p) => state.permissions.has(p));
  };

export const selectUserEmail = (s: AuthState) => s.email;

export const selectAuthLoading = (s: AuthState) => {
  return s.isLoading;
};

export const selectIsAuthenticated = (s: AuthState) => {
  return s.isAuthenticated && s.isReady;
};

export const selectAuthStatus = (s: AuthState) => ({
  isLoading: s.isLoading,
  isAuthenticated: s.isAuthenticated && s.isReady,
});

export const selectAuthView = (s: AuthState) => {
  if (s.isLoading) {
    return AuthStatus.LOADING;
  }

  if (s.isAuthenticated && s.isReady) {
    return AuthStatus.AUTHENTICATED;
  }

  return AuthStatus.UN_AUTHENTICATED;
};
