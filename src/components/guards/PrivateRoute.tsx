import { useAuth } from "@/hooks/useAuth";
import { Navigate, useRouterState } from "@tanstack/react-router";
import { Spin } from "antd";
import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  fallback?: ReactNode;
}>;

export const PrivateRoute = ({ children, fallback }: Props) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useRouterState({ select: (state) => state.location });

  const redirectTo = location.href ?? location.pathname;

  if (isLoading) {
    return (
      fallback ?? (
        <div className="flex h-screen items-center justify-center">
          <Spin />
        </div>
      )
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" search={{ redirect: redirectTo }} replace />;
  }

  return <>{children}</>;
};
