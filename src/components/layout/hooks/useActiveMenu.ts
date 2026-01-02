import type { SidebarRoute } from "@/config/sidebar.routes";
import { useRouterState } from "@tanstack/react-router";

export function useActiveMenu(sidebarRoutes: SidebarRoute[]) {
  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });
  const selectedKey = sidebarRoutes.find((r) => r.match(pathname))?.key;

  return selectedKey;
}
