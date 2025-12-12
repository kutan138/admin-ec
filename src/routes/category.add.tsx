import { PrivateRoute } from "@/components/guards/PrivateRoute";
import AddCategoryPage from "@/components/pages/Category/add";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/add")({
  component: () => (
    <PrivateRoute>
      <AddCategoryPage />
    </PrivateRoute>
  ),
});
