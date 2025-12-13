
import { authApi, usersApi } from '@/api/api-client';
import type { LoginDto, UserResponseDto } from '@/api/generated';
import type { PropsWithChildren } from 'react';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

type AuthContextValue = {
  user: UserResponseDto | null;
  roles: string[];
  permissions: string[];
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: LoginDto) => Promise<void>;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
};

const STORAGE_KEYS = {
  accessToken: 'auth.accessToken',
  refreshToken: 'auth.refreshToken',
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

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
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [permissions, setPermissions] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isAuthenticated = Boolean(accessToken);

  const clearTokens = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.refreshToken);
  };

  const loadProfile = useCallback(async () => {
    try {
      const profile = await usersApi.usersControllerGetProfile();
      const { permissions: perms, roles: profRoles } = extractAuthMeta(profile.data);
      // setUser(profile);
      setPermissions(perms);
      setRoles(profRoles);
    } catch (error) {
      console.error('Failed to load profile', error);
      clearTokens();
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(
    async (payload: LoginDto) => {
      setIsLoading(true);
      try {
        await authApi.authControllerLogin({ loginDto: payload });
        await loadProfile();
      } finally {
        setIsLoading(false);
      }
    },
    [loadProfile],
  );

  const logout = useCallback(() => {
    setUser(null);
    setPermissions([]);
    setRoles([]);
    clearTokens();
  }, []);

  useEffect(() => {
    const storedAccess = localStorage.getItem(STORAGE_KEYS.accessToken);
    const storedRefresh = localStorage.getItem(STORAGE_KEYS.refreshToken);
    if (storedAccess && storedRefresh) {
      setAccessToken(storedAccess);
      setRefreshToken(storedRefresh);
      loadProfile();
    } else {
      setIsLoading(false);
    }
  }, [loadProfile]);

  const hasPermission = useCallback(
    (permission: string) => permissions.includes(permission),
    [permissions],
  );
  const hasRole = useCallback((role: string) => roles.includes(role), [roles]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      roles,
      permissions,
      accessToken,
      refreshToken,
      isAuthenticated,
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
      accessToken,
      refreshToken,
      isAuthenticated,
      isLoading,
      login,
      logout,
      hasPermission,
      hasRole,
    ],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return ctx as AuthContextValue;
};
