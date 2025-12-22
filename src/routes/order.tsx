import { PrivateRoute } from "@/components/guards/PrivateRoute";
import OrderPage from "@/features/order/pages/OrderPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/order")({
  component: () => (
    <PrivateRoute>
      <OrderPage />
    </PrivateRoute>
  ),
});
