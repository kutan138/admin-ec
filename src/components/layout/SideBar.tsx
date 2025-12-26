import {
  AppstoreOutlined,
  DashboardOutlined,
  FileProtectOutlined,
  ShoppingCartOutlined,
  TagsOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useRouter } from "@tanstack/react-router";
import { Route as DashboardRoute } from "@/routes";
import { Route as OrdersRoute } from "@/routes/order";
import { Route as ProductsRoute } from "@/routes/product";
import { Route as CustomersRoute } from "@/routes/customer";
import { Route as ProfileRoute } from "@/routes/profile";
import { Route as CategoryRoute } from "@/routes/category";
import { Route as RoleRoute } from "@/routes/role";
import { useActiveMenu } from "@/components/layout/hooks/useActiveMenu";

const SideBar = () => {
  const router = useRouter();

  const items = [
    {
      key: DashboardRoute.id,
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: CategoryRoute.id,
      icon: <TagsOutlined />,
      label: "Danh Mục",
    },
    {
      key: OrdersRoute.id,
      icon: <ShoppingCartOutlined />,
      label: "Đơn Hàng",
    },
    {
      key: ProductsRoute.id,
      icon: <AppstoreOutlined />,
      label: "Sản Phẩm",
    },
    {
      key: CustomersRoute.id,
      icon: <UsergroupAddOutlined />,
      label: "Khách Hàng",
    },
    {
      key: ProfileRoute.id,
      icon: <UserAddOutlined />,
      label: "User Profile",
    },
    {
      key: RoleRoute.id,
      icon: <FileProtectOutlined />,
      label: "Role",
    },
  ];

  const selectedKeys = useActiveMenu(items);

  return (
    <Menu
      mode="inline"
      selectedKeys={selectedKeys}
      items={items}
      onClick={({ key }) => {
        router.navigate({ to: key });
      }}
    />
  );
};

export default SideBar;
