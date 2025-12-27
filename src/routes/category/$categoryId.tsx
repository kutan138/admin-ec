import CategoryEditContainer from "@/features/category/pages/CategoryEditContainer";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/category/$categoryId")({
  component: CategoryEditContainer,
});
