import { PrivateRoute } from "@/components/guards/PrivateRoute";
import CustomerListPage from "@/features/customer/pages/CustomerListPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/customer")({
  component: () => (
    <PrivateRoute>
      <CustomerListPage />
    </PrivateRoute>
  ),
});
