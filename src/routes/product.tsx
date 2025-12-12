import { PrivateRoute } from "@/components/guards/PrivateRoute";
import ProductsPage from "@/components/pages/Product";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product")({
  component: () => (
    <PrivateRoute>
      <ProductsPage />
    </PrivateRoute>
  ),
});
