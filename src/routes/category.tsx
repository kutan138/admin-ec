import { PrivateRoute } from "@/components/guards/PrivateRoute";
import CategoryPage from "@/components/pages/Category";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category")({
  component: () => (
    <PrivateRoute>
      <CategoryPage />
    </PrivateRoute>
  ),
});
