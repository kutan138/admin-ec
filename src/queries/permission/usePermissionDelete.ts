import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { useNavigate } from "@tanstack/react-router";
import { queryClient } from "@/lib/react-query/queryClient";
import { permissionService } from "@/api/services/permission.service";
import { APP_ROUTES } from "@/config/app.routes";
import { permissionKeys } from "./permission.keys";

export const usePermissionDelete = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (id: string) => permissionService.removeById(id),

    onSuccess: () => {
      message.success("Xoá quyền thành công");

      // 🔄 Refresh
      queryClient.invalidateQueries({
        queryKey: permissionKeys.all,
      });

      // 👉 Quay về danh sách
      navigate({ to: APP_ROUTES.permission.to });
    },

    onError: () => {
      message.error("Xoá quyền thất bại");
    },
  });
};
