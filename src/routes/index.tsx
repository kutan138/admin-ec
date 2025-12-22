import { PrivateRoute } from "@/components/guards/PrivateRoute";
import DashBoardPage from "@/features/dashboard/pages/DashBoardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <PrivateRoute>
      <DashBoardPage />
    </PrivateRoute>
  ),
});
