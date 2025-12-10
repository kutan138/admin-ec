import { useAuth } from './useAuth';

export const usePermission = () => {
  const { hasPermission, hasRole, permissions, roles } = useAuth();
  return {
    hasPermission,
    hasRole,
    permissions,
    roles,
  };
};
