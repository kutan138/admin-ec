import AddCategoryPage from "@/components/pages/Category/add";
import { PermissionRoute } from "@/routes/guards/PermissionRoute";
import { PrivateRoute } from "@/routes/guards/PrivateRoute";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/add")({
  component: () => (
    <PrivateRoute>
      <PermissionRoute required={['category:create']}>
        <AddCategoryPage />
      </PermissionRoute>
    </PrivateRoute>
  ),
});
