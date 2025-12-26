import { useHasPermissions } from "@/features/auth/hooks/usePermission";
import { Result } from "antd";
import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  required?: string[];
  anyOf?: boolean;
  fallback?: ReactNode;
}>;

export const PermissionRoute = ({
  required = [],
  anyOf = false,
  fallback,
  children,
}: Props) => {
  const isAllowed = useHasPermissions(required, { anyOf });

  if (!required.length) {
    return <>{children}</>;
  }

  if (!isAllowed) {
    return (
      fallback ?? (
        <Result
          status="403"
          title="403"
          subTitle="Bạn không có quyền truy cập trang này."
        />
      )
    );
  }

  return <>{children}</>;
};
