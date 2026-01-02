import DashBoardPage from "@/features/dashboard/pages/DashBoardPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/")({
  component: DashBoardPage,
});
