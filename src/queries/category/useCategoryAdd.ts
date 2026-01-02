import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "@tanstack/react-router";
import { queryClient } from "@/lib/react-query/queryClient";
import { categoryService } from "@/api/services/category.service";
import { categoryKeys } from "@/queries/category/category.keys";
import { Route as CategoryRoute } from "@/routes/_authenticated/category/route";

export const useCategoryAdd = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: categoryService.create,

    onSuccess: () => {
      message.success("Tạo danh mục thành công");

      queryClient.invalidateQueries({
        queryKey: categoryKeys.tree(),
      });

      navigate({
        to: CategoryRoute.id,
      });
    },

    onError: () => {
      message.error("Tạo danh mục thất bại");
    },
  });
};
