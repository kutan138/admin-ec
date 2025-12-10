import CategoryPage from "@/components/pages/Category";
import { PermissionRoute } from "@/routes/guards/PermissionRoute";
import { PrivateRoute } from "@/routes/guards/PrivateRoute";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/")({
  component: () => (
    <PrivateRoute>
      <PermissionRoute required={['category:view']}>
        <CategoryPage />
      </PermissionRoute>
    </PrivateRoute>
  ),
});
