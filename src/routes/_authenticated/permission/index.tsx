import { createFileRoute } from "@tanstack/react-router";
import Component from "@/features/permission/pages/PermissonListContainer";

export const Route = createFileRoute("/_authenticated/permission/")({
  component: Component,
});
