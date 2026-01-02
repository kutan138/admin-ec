import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticated/category/")({
  component: () => (
    <div className="text-gray-500">Chọn một category hoặc thêm mới</div>
  ),
});
