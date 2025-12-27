import { categoryService } from "@/api/services/category.service";
import { useQuery } from "@tanstack/react-query";

export const useCategoryDetail = (categoryId?: string) => {
  return useQuery({
    queryKey: ["category-detail", categoryId],
    queryFn: () => categoryService.getById(categoryId!),
    enabled: !!categoryId,
  });
};
