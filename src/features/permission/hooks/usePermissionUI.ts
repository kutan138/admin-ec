import { APP_ROUTES } from "@/config/app.routes";
import { useNavigate } from "@tanstack/react-router";

export const usePermissionUI = () => {
  const navigate = useNavigate();

  const onClickAddPermission = () => {
    navigate({ to: APP_ROUTES.permissionAdd.to });
  };

  const onClickEditPermission = (id: string) => {
    navigate({ to: APP_ROUTES.permissionEdit.to, params: { id } });
  };

  const handleCancel = () => {
    navigate({ to: APP_ROUTES.permission.to });
  };

  return {
    onClickAddPermission,
    onClickEditPermission,
    handleCancel,
  };
};
