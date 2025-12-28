import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/api/services/category.service";
import { categoryKeys } from "./category.keys";

export const useCategoryDetail = (id: string) => {
  return useQuery({
    queryKey: categoryKeys.detail(id),
    queryFn: async () => {
      const res = await categoryService.getById(id);
      return res.data;
    },
    enabled: !!id,
  });
};
