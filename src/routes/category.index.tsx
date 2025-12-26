import CategoryListPage from "@/features/category/pages/CategoryList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/")({
  component: CategoryListPage,
});
