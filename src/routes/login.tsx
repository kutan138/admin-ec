import LoginPage from "@/features/auth/pages/Login";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});
