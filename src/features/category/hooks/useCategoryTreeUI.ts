import { useCategoryTree } from "@/queries/category/useCategoryTree";
import { Route as CategoryEditRoute } from "@/routes/category/$categoryId";
import { Route as CategoryAddRoute } from "@/routes/category/add";
import type { Key } from "@rc-component/tree/lib/interface";
import { useRouter } from "@tanstack/react-router";
import type { TreeDataNode } from "antd";
import type { SearchProps } from "antd/es/input";
import type { DirectoryTreeProps } from "antd/es/tree";
import { useCallback } from "react";

export const useCategoryTreeUI = () => {
  const router = useRouter();
  const { data = [], isLoading } = useCategoryTree();

  const onSelect: DirectoryTreeProps["onSelect"] = (keys: Key[]) => {
    if (!keys.length) return;

    router.navigate({
      to: CategoryEditRoute.id,
      params: {
        categoryId: String(keys[0]),
      },
    });
  };

  const categorytreeData: TreeDataNode[] = data.map((category) => ({
    title: category.name,
    key: category.id,
  }));

  const onSearch: SearchProps["onSearch"] = (value) => {
    console.log(value);
  };

  const onClickAddCategory = useCallback(() => {
    router.navigate({ to: CategoryAddRoute.id });
  }, [router]);

  return {
    categorytreeData,
    isLoading,
    onSearch,
    onSelect,
    onClickAddCategory,
  };
};
