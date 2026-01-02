import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "@tanstack/react-router";
import { queryClient } from "@/lib/react-query/queryClient";
import { permissionService } from "@/api/services/permission.service";
import type { UpdateCategoryDto } from "@/api/generated";
import { categoryKeys } from "@/queries/category/category.keys";
import { APP_ROUTES } from "@/config/app.routes";

export const usePermissionUpdate = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateCategoryDto }) =>
      permissionService.updateById(id, data),

    onSuccess: (response) => {
      const { data } = response;

      message.success("Cập nhật quyền thành công");

      // 🔄 Refresh tree
      queryClient.invalidateQueries({
        queryKey: categoryKeys.tree(),
      });

      // 👉 Navigate sang edit category vừa update
      navigate({
        to: APP_ROUTES.permissionEdit.to,
        params: {
          id: data.id,
        },
      });
    },

    onError: () => {
      message.error("Cập nhật quyền thất bại");
    },
  });
};
