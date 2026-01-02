import Component from "@/features/permission/pages/PermissionAddContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/permission/add")({
  component: Component,
});
