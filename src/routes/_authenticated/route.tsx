import { PrivateRoute } from "@/components/guards/PrivateRoute";
import MainLayout from "@/components/layout/MainLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated")({
  component: () => (
    <PrivateRoute>
      <MainLayout />
    </PrivateRoute>
  ),
});
