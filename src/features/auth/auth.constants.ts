export const AuthStatus = {
  LOADING: "1",
  UN_AUTHENTICATED: "2",
  AUTHENTICATED: "3",
} as const;

export type AuthStatus = (typeof AuthStatus)[keyof typeof AuthStatus];
