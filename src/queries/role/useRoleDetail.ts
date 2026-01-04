import { useQuery } from "@tanstack/react-query";
import { permissionService } from "@/api/services/permission.service";
import { roleKeys } from "./role.keys";

export const usePermissionDetail = (id: string) => {
  return useQuery({
    queryKey: roleKeys.detail(id),
    queryFn: async () => {
      const res = await permissionService.getById(id);
      return res.data;
    },
    enabled: !!id,
  });
};
