import { useQuery } from "@tanstack/react-query";
import { categoryService } from "@/api/services/category.service";

export const CATEGORY_TREE_QUERY_KEY = ["category-tree"];

export const useGetCategoryTree = () => {
  return useQuery({
    queryKey: CATEGORY_TREE_QUERY_KEY,
    queryFn: async () => {
      const res = await categoryService.getAll();
      return res.data;
    },
  });
};
