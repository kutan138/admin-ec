import { apiClient } from "@/api/api-client";
import type { UpdateCategoryDto, CreateCategoryDto } from "@/api/generated";

const categoryApi = apiClient.categories;

export const categoryService = {
  getAll: () => categoryApi.categoriesControllerFindAll(),
  create: (createCategoryDto: CreateCategoryDto) =>
    categoryApi.categoriesControllerCreate({ createCategoryDto }),
  getById: (id: string) => categoryApi.categoriesControllerFindOne({ id }),
  updateById: (id: string, updateCategoryDto: UpdateCategoryDto) =>
    categoryApi.categoriesControllerUpdate({ id, updateCategoryDto }),
  removeById: (id: string) => categoryApi.categoriesControllerRemove({ id }),
};
