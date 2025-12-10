import { useAuthContext } from '@/providers/auth/AuthProvider';

export const useAuth = () => {
  return useAuthContext();
};
