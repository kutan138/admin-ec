import { categoryService } from "@/api/services/category.service";
import { useQuery } from "@tanstack/react-query";

export const CATEGORY_DETAIL_QUERY_KEY = ["category-detail"];

export const useCategoryDetail = (categoryId?: string) => {
  return useQuery({
    queryKey: [...CATEGORY_DETAIL_QUERY_KEY, categoryId],
    queryFn: () => categoryService.getById(categoryId!),
    enabled: !!categoryId,
  });
};
