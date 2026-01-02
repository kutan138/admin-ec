import { useRouter } from "@tanstack/react-router";

export const usePermissionList = () => {
  const router = useRouter();
  const {} = usePermissionList();

  const onClickAddPermission = () => {
    console.log("Add permission");
  };

  return {
    onClickAddPermission,
  };
};
