import { useMatchRoute } from "@tanstack/react-router";

export function useActiveMenu(sidebarRoutes: { key: string; label: string }[]) {
  const matchRoute = useMatchRoute();

  const matches = sidebarRoutes
    .filter((route) => matchRoute({ to: route.key, fuzzy: true }))
    .sort((a, b) => b.key.length - a.key.length); // Longest first

  return matches[0] ? [matches[0].key] : [];
}
