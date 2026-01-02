import { usePermissionTree } from "@/queries/category/usePermissionTree";
import { usePermissionDetail } from "@/queries/permission/usePermissionDetail";

export const usePermissionForm = () => {
  const { data: categories = [] } = usePermissionDetail();

  return {
    categorytreeData,
  };
};
