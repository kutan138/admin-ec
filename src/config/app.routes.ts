import { type FileRoutesByTo } from "@/routeTree.gen";

export type TRoutes = keyof FileRoutesByTo;

export type AppRoute = {
  key?: string;
  to: TRoutes;
  match?: (pathname: string) => boolean;
};

export const APP_ROUTES = {
  home: {
    key: "home",
    to: "/",
    match: (p) => p === "/",
  },
  permission: {
    key: "permission",
    to: "/permission",
    match: (p) => p.startsWith("/permission"),
  },
  permissionEdit: {
    key: "permission-edit",
    to: "/permission/$id",
  },
  permissionAdd: {
    key: "permission-add",
    to: "/permission/add",
  },
  category: {
    key: "category",
    to: "/category",
    match: (p) => p.startsWith("/category"),
  },
  categoryEdit: {
    key: "category-edit",
    to: "/category/$id",
  },
  categoryAdd: {
    key: "category-add",
    to: "/category/add",
  },
} satisfies Record<string, AppRoute>;
