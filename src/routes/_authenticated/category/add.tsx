import CategoryAddContainer from "@/features/category/pages/CategoryAddContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/category/add")({
  component: CategoryAddContainer,
});
