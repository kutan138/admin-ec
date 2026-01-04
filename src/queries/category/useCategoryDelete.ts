import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "@tanstack/react-router";
import { queryClient } from "@/lib/react-query/queryClient";
import { categoryService } from "@/api/services/category.service";
import { categoryKeys } from "@/queries/category/category.keys";
import { APP_ROUTES } from "@/config/app.routes";

export const useCategoryDelete = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: string) => categoryService.removeById(id),

    onSuccess: () => {
      message.success("Xoá danh mục thành công");

      // 🔄 Refresh category tree
      queryClient.invalidateQueries({
        queryKey: categoryKeys.tree(),
      });

      // 👉 Quay về danh sách category
      navigate({ to: APP_ROUTES.category.to });
    },

    onError: () => {
      message.error("Xoá danh mục thất bại");
    },
  });
};
