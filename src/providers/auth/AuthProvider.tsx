import { authApi, usersApi } from "@/api/api-client";
import {
  type LoginDto,
  type UserResponseDto
} from "@/api/generated";
import type { PropsWithChildren } from "react";
import { useCallback, useMemo, useState } from "react";
import { AuthContext, type AuthContextValue } from "./AuthContext";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const extractAuthMeta = (profile: any) => {
  const permissions: string[] = Array.isArray(profile?.permissions)
    ? profile.permissions
    : [];
  const roles: string[] = Array.isArray(profile?.roles) ? profile.roles : [];
  return { permissions, roles };
};

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserResponseDto | null>(null);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);


  const loadProfile = useCallback(async () => {
    try {
      const profile = await usersApi.usersControllerGetProfile();
      const { permissions: perms, roles: profRoles } = extractAuthMeta(profile.data);
      setUser(profile.data);
      setPermissions(perms);
      setRoles(profRoles);
    } catch (error) {
      console.error("Failed to load profile", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(
    async (payload: LoginDto) => {
      setIsLoading(true);
      try {
        await authApi.authControllerLogin({ loginDto: payload }
        );
        await loadProfile();
      } finally {
        setIsLoading(false);
      }
    },
    [loadProfile]
  );

  const logout = useCallback(() => {
    setUser(null);
    setPermissions([]);
    setRoles([]);
  }, []);

  const hasPermission = useCallback(
    (permission: string) => permissions.includes(permission),
    [permissions]
  );
  const hasRole = useCallback((role: string) => roles.includes(role), [roles]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      roles,
      permissions,
      isLoading,
      login,
      logout,
      hasPermission,
      hasRole,
    }),
    [
      user,
      roles,
      permissions,
      isLoading,
      login,
      logout,
      hasPermission,
      hasRole,
    ]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
