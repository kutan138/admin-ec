import AddCategoryPage from "@/features/category/pages/CategoryAdd";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/add")({
  component: AddCategoryPage,
});
