import { categoryService } from "@/api/services/category.service";
import { APP_ROUTES } from "@/config/app.routes";
import { queryClient } from "@/lib/react-query/queryClient";
import { categoryKeys } from "@/queries/category/category.keys";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { message } from "antd";

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
        to: APP_ROUTES.category.to,
      });
    },

    onError: () => {
      message.error("Tạo danh mục thất bại");
    },
  });
};
