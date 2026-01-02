import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/api/services/category.service";
import { permissionKeys } from "./permission.keys";

export const usePermissionDetail = (id: string) => {
  return useQuery({
    queryKey: permissionKeys.detail(id),
    queryFn: async () => {
      const res = await categoryService.getById(id);
      return res.data;
    },
    enabled: !!id,
  });
};
