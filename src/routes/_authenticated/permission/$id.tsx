import Component from "@/features/permission/pages/PermissionEditContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/permission/$id")({
  component: Component,
});
