import { useHasPermissions } from "@/features/auth/hooks/usePermission";
import type { PropsWithChildren, ReactNode } from "react";

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
  const allowed = useHasPermissions(required, { anyOf });

  if (!required.length) {
    return <>{children}</>;
  }

  if (!allowed) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
};
