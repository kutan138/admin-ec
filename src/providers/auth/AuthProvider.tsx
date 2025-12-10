import { AuthService } from '@/api/services/AuthService';
import { UsersService } from '@/api/services/UsersService';
import { OpenAPI } from '@/api/core/OpenAPI';
import type { LoginDto } from '@/api/models/LoginDto';
import type { TokenResponseDto } from '@/api/models/TokenResponseDto';
import type { UserResponseDto } from '@/api/models/UserResponseDto';
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

const setOpenApiToken = (token: string | null) => {
  OpenAPI.TOKEN = token ? () => token : undefined;
};

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

  const persistTokens = (tokens: TokenResponseDto) => {
    setAccessToken(tokens.accessToken);
    setRefreshToken(tokens.refreshToken);
    localStorage.setItem(STORAGE_KEYS.accessToken, tokens.accessToken);
    localStorage.setItem(STORAGE_KEYS.refreshToken, tokens.refreshToken);
    setOpenApiToken(tokens.accessToken);
  };

  const clearTokens = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem(STORAGE_KEYS.accessToken);
    localStorage.removeItem(STORAGE_KEYS.refreshToken);
    setOpenApiToken(null);
  };

  const loadProfile = useCallback(async () => {
    try {
      const profile = await UsersService.usersControllerGetProfile();
      const { permissions: perms, roles: profRoles } = extractAuthMeta(profile);
      setUser(profile);
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
        const tokens = await AuthService.authControllerLogin(payload);
        persistTokens(tokens);
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
      setOpenApiToken(storedAccess);
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

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuthContext must be used within AuthProvider');
  }
  return ctx as AuthContextValue;
};
