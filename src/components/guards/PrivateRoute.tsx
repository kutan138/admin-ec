import { AuthStatus } from "@/features/auth/auth.constants";
import { useAuthView } from "@/features/auth/hooks/useAuthView";
import { Navigate, useRouterState } from "@tanstack/react-router";
import { Spin } from "antd";
import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  fallback?: ReactNode;
}>;

export const PrivateRoute = ({ children, fallback }: Props) => {
  const status = useAuthView();
  const location = useRouterState({ select: (state) => state.location });
  const redirectTo = location.href ?? location.pathname;

  if (status === AuthStatus.LOADING) {
    return (
      fallback ?? (
        <div className="flex h-screen items-center justify-center">
          <Spin />
        </div>
      )
    );
  }

  if (status === AuthStatus.UN_AUTHENTICATED) {
    return <Navigate to="/login" search={{ redirect: redirectTo }} replace />;
  }

  return <>{children}</>;
};
