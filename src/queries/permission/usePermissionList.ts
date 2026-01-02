import { useQuery } from "@tanstack/react-query";
import { permissionService } from "@/api/services/permission.service";
import { permissionKeys } from "./permission.keys";

export const useCategoryPermissionList = () => {
  return useQuery({
    queryKey: permissionKeys.all,
    queryFn: async () => {
      const res = await permissionService.getAll();
      return res.data;
    },
  });
};
