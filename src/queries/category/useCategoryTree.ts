import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/api/services/category.service";
import { categoryKeys } from "./category.keys";

export const useCategoryTree = () => {
  return useQuery({
    queryKey: categoryKeys.tree(),
    queryFn: async () => {
      const res = await categoryService.getAll();
      return res.data;
    },
  });
};
