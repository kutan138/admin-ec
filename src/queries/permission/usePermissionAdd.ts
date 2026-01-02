import { permissionService } from "@/api/services/permission.service";
import { queryClient } from "@/lib/react-query/queryClient";
import { useMutation } from "@tanstack/react-query";
import { message } from "antd";
import { permissionKeys } from "./permission.keys";

export const usePermissionAdd = () => {
  return useMutation({
    mutationFn: permissionService.create,

    onSuccess: () => {
      message.success("Tạo danh mục thành công");

      queryClient.invalidateQueries({
        queryKey: permissionKeys.all,
      });
    },

    onError: () => {
      message.error("Tạo danh mục thất bại");
    },
  });
};
