import { Route as CategoryEditRoute } from "@/routes/category/$categoryId";
import { Route as CategoryAddRoute } from "@/routes/category/add";
import type { Key } from "@rc-component/tree/lib/interface";
import { useRouter } from "@tanstack/react-router";
import type { GetProps, Input, TreeDataNode } from "antd";
import { Tree } from "antd";
import { useCallback } from "react";
import { useGetCategoryTree } from "./useGetCategoryTree";

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;
type SearchProps = GetProps<typeof Input.Search>;

export const useCategoryTree = () => {
  const router = useRouter();

  const { data: categories = [], isLoading } = useGetCategoryTree();

  const onSelect: DirectoryTreeProps["onSelect"] = (keys: Key[]) => {
    if (!keys.length) return;

    router.navigate({
      to: CategoryEditRoute.id,
      params: {
        categoryId: String(keys[0]),
      },
    });
  };

  const categorytreeData: TreeDataNode[] = categories.map((category) => ({
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
    categories,
    isLoading,
    onSelect,
    onSearch,
    onClickAddCategory,
  };
};
