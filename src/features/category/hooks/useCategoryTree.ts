import { apiClient } from "@/api/api-client";
import type { CategoryResponseDto } from "@/api/generated";
import { Route as CategoryAddRoute } from "@/routes/category.add";
import type { Key } from "@rc-component/tree/lib/interface";
import { useRouter } from "@tanstack/react-router";
import type { GetProps, Input } from "antd";
import { Tree } from "antd";
import { useCallback, useEffect, useState } from "react";

type DirectoryTreeProps = GetProps<typeof Tree.DirectoryTree>;
type SearchProps = GetProps<typeof Input.Search>;

// Encapsulates tree data and handlers so the page stays presentational.
export const useCategoryTree = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<CategoryResponseDto[]>([]);

  const onSelect: DirectoryTreeProps["onSelect"] = useCallback(
    (keys: Key[]) => {
      console.log("Trigger Select", keys);
    },
    []
  );

  const onSearch: SearchProps["onSearch"] = useCallback(
    (
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
    },
    []
  );

  const onAddCategory = useCallback(() => {
    router.navigate({ to: CategoryAddRoute.id });
  }, [router]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiClient.categories.categoriesControllerFindAll();
      setCategories(response.data);
    };
    fetchCategories();
  }, []);

  return {
    categories,
    onSelect,
    onSearch,
    onAddCategory,
  };
};
