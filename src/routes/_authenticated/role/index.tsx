import { createFileRoute } from "@tanstack/react-router";
import Component from "@/features/role/pages/RoleListContainer";

export const Route = createFileRoute("/_authenticated/role/")({
  component: Component,
});
