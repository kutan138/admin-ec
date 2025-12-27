import CategoryAddContainer from "@/features/category/pages/CategoryAddContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/add")({
  component: CategoryAddContainer,
});
