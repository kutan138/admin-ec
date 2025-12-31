import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "@tanstack/react-router";
import { queryClient } from "@/lib/react-query/queryClient";
import { categoryService } from "@/api/services/category.service";
import type { UpdateCategoryDto } from "@/api/generated";
import { categoryKeys } from "@/queries/category/category.keys";
import { Route as CategoryDetailRoute } from "@/routes/category/$categoryId";

export const useCategoryUpdate = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateCategoryDto }) =>
      categoryService.updateById(id, data),

    onSuccess: (response) => {
      const { data } = response;

      message.success("Cập nhật danh mục thành công");

      // 🔄 Refresh tree
      queryClient.invalidateQueries({
        queryKey: categoryKeys.tree(),
      });

      // 👉 Navigate sang edit category vừa update
      navigate({
        to: CategoryDetailRoute.id,
        params: {
          categoryId: data.id,
        },
      });
    },

    onError: () => {
      message.error("Cập nhật danh mục thất bại");
    },
  });
};
