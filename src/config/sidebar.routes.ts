import type { ComponentType } from "react";
import type { TRoutes } from "./app.routes";

export type SidebarRoute = {
  key: TRoutes;
  icon: ComponentType;
  label: string;
  match: (pathname: string) => boolean;
};
