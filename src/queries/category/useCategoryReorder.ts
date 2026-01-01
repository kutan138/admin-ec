import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { queryClient } from "@/lib/react-query/queryClient";
import { categoryService } from "@/api/services/category.service";
import { categoryKeys } from "@/queries/category/category.keys";
import type { ReorderCategoryDto } from "@/api/generated";

export const useCategoryReorder = (options?: { onSuccess?: () => void }) => {
  return useMutation({
    mutationFn: (reorderCategoryDto: ReorderCategoryDto) =>
      categoryService.reOrderCategories(reorderCategoryDto),

    onSuccess: () => {
      message.success("Cập nhật vị trí danh mục thành công");

      // 🔄 Refresh category tree
      queryClient.invalidateQueries({
        queryKey: categoryKeys.tree(),
      });

      options?.onSuccess?.();
    },

    onError: () => {
      message.error("Cập nhật vị trí danh mục thất bại");
    },
  });
};
