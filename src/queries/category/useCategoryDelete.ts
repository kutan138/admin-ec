import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "@tanstack/react-router";
import { queryClient } from "@/lib/react-query/queryClient";
import { categoryService } from "@/api/services/category.service";
import { categoryKeys } from "@/queries/category/category.keys";
import { Route as CategoryAddRoute } from "@/routes/_authenticated/category/add";

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
      navigate({ to: CategoryAddRoute.id });
    },

    onError: () => {
      message.error("Xoá danh mục thất bại");
    },
  });
};
