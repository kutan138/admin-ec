import RoleListPage from "@/features/role/pages/RoleListPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/role")({
  component: RoleListPage,
});
