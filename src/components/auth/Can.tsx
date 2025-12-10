import { usePermission } from '@/hooks/usePermission';
import type { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
  required?: string[];
  anyOf?: boolean;
  fallback?: ReactNode;
}>;

export const Can = ({
  required = [],
  anyOf = false,
  fallback = null,
  children,
}: Props) => {
  const { hasPermission } = usePermission();

  if (!required.length) {
    return <>{children}</>;
  }

  const allowed = anyOf
    ? required.some((permission) => hasPermission(permission))
    : required.every((permission) => hasPermission(permission));

  if (!allowed) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
