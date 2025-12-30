// features/category/hooks/useCategoryForm.ts

import { useCategoryTree } from "@/queries/category/useCategoryTree";
import type { DataNode } from "antd/es/tree";
import { buildCategoryTree } from "../utils/buildCategoryTree";

export const useCategoryForm = (notIncludeIds: string[] = []) => {
  const { data: categories = [] } = useCategoryTree();

  const treeData: DataNode[] = buildCategoryTree({ categories, notIncludeIds });

  return {
    categorytreeData: treeData,
  };
};
