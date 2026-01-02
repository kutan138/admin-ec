import CategoryContainer from "@/features/category/pages/CategoryContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/category")({
  component: CategoryContainer,
});
