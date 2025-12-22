import { PrivateRoute } from "@/components/guards/PrivateRoute";
import ProductListPage from "@/features/product/pages/ProductListPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product")({
  component: () => (
    <PrivateRoute>
      <ProductListPage />
    </PrivateRoute>
  ),
});
