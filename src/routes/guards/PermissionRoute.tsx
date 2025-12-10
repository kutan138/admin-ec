import { usePermission } from '@/hooks/usePermission';
import { Result } from 'antd';
import type { PropsWithChildren, ReactNode } from 'react';

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
  const { hasPermission } = usePermission();

  if (!required.length) {
    return <>{children}</>;
  }

  const isAllowed = anyOf
    ? required.some((permission) => hasPermission(permission))
    : required.every((permission) => hasPermission(permission));

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
