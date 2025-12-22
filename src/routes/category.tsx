import { PrivateRoute } from "@/components/guards/PrivateRoute";
import CategoryListPage from "@/features/category/pages/CategoryList";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category")({
  component: () => (
    <PrivateRoute>
      <CategoryListPage />
    </PrivateRoute>
  ),
});
