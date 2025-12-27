import { PrivateRoute } from "@/components/guards/PrivateRoute";
import CategoryContainer from "@/features/category/pages/CategoryContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category")({
  component: () => (
    <PrivateRoute>
      <CategoryContainer />
    </PrivateRoute>
  ),
});
