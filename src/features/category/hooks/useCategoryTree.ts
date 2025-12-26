import type { CategoryResponseDto } from "@/api/generated";
import { Route as CategoryAddRoute } from "@/routes/category.add";
import { categoryService } from "@/api/services/category.service";
import type { Key } from "@rc-component/tree/lib/interface";
import { useRouter } from "@tanstack/react-router";
import type { GetProps, Input, TreeDataNode } from "antd";
import { Tree } from "antd";
import { useCallback, useEffect, useState } from "react";

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;
type SearchProps = GetProps<typeof Input.Search>;

// Encapsulates tree data and handlers so the page stays presentational.
export const useCategoryTree = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoryResponseDto[]>([]);

  const onSelect: DirectoryTreeProps["onSelect"] = (keys: Key[]) => {
    console.log("Trigger Select", keys);
  };

  const categorytreeData: TreeDataNode[] = categories.map((category) => ({
    title: category.name,
    key: category.id,
  }));

  const onSearch: SearchProps["onSearch"] = (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.KeyboardEvent<HTMLInputElement>,
    info?: {
      source?: "clear" | "input";
    }
  ) => {
    console.log(value, event, info);
  };

  const onAddCategory = useCallback(() => {
    router.navigate({ to: CategoryAddRoute.id });
  }, [router]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await categoryService.getAll();
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return {
    categorytreeData,
    categories,
    onSelect,
    onSearch,
    onAddCategory,
  };
};
