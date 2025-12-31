// features/category/hooks/useCategoryForm.ts

import {
  buildCategoryTree,
  type TreeSelectData,
} from "@/features/category/utils/buildCategoryTree";
import { useCategoryTree } from "@/queries/category/useCategoryTree";

export const useCategoryForm = (notIncludeIds: string[] = []) => {
  const { data: categories = [] } = useCategoryTree();

  const categorytreeData: TreeSelectData[] = buildCategoryTree({
    categories,
    notIncludeIds,
    mode: "TreeSelect",
  });

  return {
    categorytreeData,
  };
};
