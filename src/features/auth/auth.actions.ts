import { authService } from "@/api/services/auth.service";
import { cookieManager } from "@/utils/cookies";
import { useAuthStore } from "./auth.store";
import { userService } from "@/api/services/user.service";

export const loginAction = async (payload: {
  email: string;
  password: string;
}) => {
  const { setLoading, setAuth } = useAuthStore.getState();
  try {
    setLoading(true);
    const res = await authService.login(payload);
    const { accessToken, refreshToken } = res.data;
    cookieManager.setAccessToken(accessToken);
    cookieManager.setRefreshToken(refreshToken);
    const { data } = await userService.getProfile();
    setAuth(data);
  } finally {
    setLoading(false);
  }
};

export const logoutAction = async () => {
  const { setLoading, reset } = useAuthStore.getState();
  try {
    await authService.logout();
  } finally {
    setLoading(false);
    cookieManager.clearTokens();
    reset();
    window.location.href = "/login";
  }
};
