import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "@tanstack/react-router";
import { queryClient } from "@/lib/react-query";
import { categoryService } from "@/api/services/category.service";

export const useCategoryAdd = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: categoryService.create,

    onSuccess: (response) => {
      const { data } = response;
      message.success("Tạo danh mục thành công");

      // 🔄 Refresh tree
      queryClient.invalidateQueries({
        queryKey: ["category-tree"],
      });

      // 👉 Navigate sang edit category vừa tạo
      navigate({
        to: "/category/$categoryId",
        params: {
          categoryId: String(data.id),
        },
      });
    },

    onError: () => {
      message.error("Tạo danh mục thất bại");
    },
  });
};
