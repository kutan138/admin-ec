import { apiClient } from "@/api/api-client";
import type { CreatePermissionDto, UpdatePermissionDto } from "@/api/generated";

const api = apiClient.permission;

export const permissionService = {
  getAll: () => api.permissionsControllerFindAll(),
  create: (createPermissionDto: CreatePermissionDto) =>
    api.permissionsControllerCreate({ createPermissionDto }),
  getById: (id: string) => api.permissionsControllerFindOne({ id }),
  updateById: (id: string, updatePermissionDto: UpdatePermissionDto) =>
    api.permissionsControllerUpdate({ id, updatePermissionDto }),
  removeById: (id: string) => api.permissionsControllerRemove({ id }),
};
