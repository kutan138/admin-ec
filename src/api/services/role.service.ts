import { apiClient } from "@/api/api-client";
import type { CreateRoleDto } from "../generated";

const api = apiClient.role;

export const roleService = {
  getAll: () => api.rolesControllerFindAll(),
  create: (createRoleDto: CreateRoleDto) =>
    api.rolesControllerCreateRole({ createRoleDto }),
  getById: (id: string) => api.permissionsControllerFindOne({ id }),
  updateById: (id: string, updatePermissionDto: UpdatePermissionDto) =>
    api.permissionsControllerUpdate({ id, updatePermissionDto }),
  removeById: (id: string) => api.permissionsControllerRemove({ id }),
  getMeta: () => api.permissionsControllerGetMeta(),
};
