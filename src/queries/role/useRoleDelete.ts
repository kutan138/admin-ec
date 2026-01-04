import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "@tanstack/react-router";
import { queryClient } from "@/lib/react-query/queryClient";
import { permissionService } from "@/api/services/permission.service";
import { APP_ROUTES } from "@/config/app.routes";
import { roleKeys } from "./role.keys";

export const usePermissionDelete = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: string) => permissionService.removeById(id),

    onSuccess: () => {
      message.success("Xoá vai trò thành công");

      // 🔄 Refresh
      queryClient.invalidateQueries({
        queryKey: roleKeys.all,
      });

      // 👉 Quay về danh sách
      navigate({ to: APP_ROUTES.role.to });
    },

    onError: () => {
      message.error("Xoá vai trò thất bại");
    },
  });
};
