import { useQuery } from "@tanstack/react-query";
import { permissionService } from "@/api/services/role.service";
import { roleKeys } from "./role.keys";

export const useCategoryPermissionList = () => {
  return useQuery({
    queryKey: roleKeys.all,
    queryFn: async () => {
      const res = await permissionService.getAll();
      return res.data;
    },
  });
};
