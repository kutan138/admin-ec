import { useActiveMenu } from "@/components/layout/hooks/useActiveMenu";
import { APP_ROUTES } from "@/config/app.routes";
import { type SidebarRoute } from "@/config/sidebar.routes";
import {
  DashboardOutlined,
  FileProtectOutlined,
  TagsOutlined,
} from "@ant-design/icons";
import { useNavigate } from "@tanstack/react-router";
import { Menu } from "antd";

const SideBar = () => {
  const navigate = useNavigate();

  const sidebarRoutes: SidebarRoute[] = [
    {
      key: APP_ROUTES.home.to,
      icon: DashboardOutlined,
      label: "Trang chủ",
      match: APP_ROUTES.home.match,
    },
    {
      key: APP_ROUTES.category.to,
      icon: TagsOutlined,
      label: "Danh mục",
      match: APP_ROUTES.category.match,
    },
    {
      key: APP_ROUTES.role.to,
      icon: FileProtectOutlined,
      label: "Vai trò",
      match: APP_ROUTES.role.match,
    },
    {
      key: APP_ROUTES.permission.to,
      icon: FileProtectOutlined,
      label: "Quyền",
      match: APP_ROUTES.permission.match,
    },
  ];
  const selectedKeys = useActiveMenu(sidebarRoutes);

  return (
    <Menu
      mode="inline"
      selectedKeys={selectedKeys ? [selectedKeys] : []}
      items={sidebarRoutes.map(({ key, label, icon: Icon }) => {
        return {
          key: key,
          label: label,
          icon: <Icon />,
        };
      })}
      onClick={(e) => {
        navigate({ to: e.key });
      }}
    />
  );
};

export default SideBar;
