// src/utils/cookies.ts
import Cookies from "js-cookie";

const TOKEN_KEY = "accessToken";
const REFRESH_TOKEN_KEY = "refreshToken";

const COOKIE_OPTIONS = {
  expires: 7, // 7 ngày
  secure: true, // Chỉ gửi qua HTTPS (production)
  sameSite: "strict" as const, // Chống CSRF
  path: "/", // Accessible từ mọi path
};

export const cookieManager = {
  // Lưu access token
  setAccessToken(token: string) {
    Cookies.set(TOKEN_KEY, token, COOKIE_OPTIONS);
  },

  // Lấy access token
  getAccessToken(): string | undefined {
    return Cookies.get(TOKEN_KEY);
  },

  // Xóa access token
  removeAccessToken() {
    Cookies.remove(TOKEN_KEY, { path: "/" });
  },

  // Lưu refresh token
  setRefreshToken(token: string) {
    Cookies.set(REFRESH_TOKEN_KEY, token, {
      ...COOKIE_OPTIONS,
      expires: 30, // Refresh token sống lâu hơn (30 ngày)
    });
  },

  // Lấy refresh token
  getRefreshToken(): string | undefined {
    return Cookies.get(REFRESH_TOKEN_KEY);
  },

  // Xóa tất cả tokens
  clearTokens() {
    Cookies.remove(TOKEN_KEY, { path: "/" });
    Cookies.remove(REFRESH_TOKEN_KEY, { path: "/" });
  },

  // Kiểm tra có token không
  hasToken(): boolean {
    return !!this.getAccessToken();
  },
};
