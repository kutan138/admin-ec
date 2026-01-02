import CategoryEditContainer from "@/features/category/pages/CategoryEditContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/category/$id")({
  component: CategoryEditContainer,
});
