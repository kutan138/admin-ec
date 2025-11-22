import {
    AppstoreOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
    TagsOutlined,
    UserAddOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';
import { Menu } from 'antd';
import { useRouter, useRouterState } from '@tanstack/react-router';
import { Route as DashboardRoute } from "@/routes/index";
import { Route as OrdersRoute } from "@/routes/order";
import { Route as ProductsRoute } from "@/routes/product";
import { Route as CustomersRoute } from "@/routes/customer";
import { Route as ProfileRoute } from "@/routes/profile";
import { Route as CategoryRoute } from "@/routes/category";


const SideBar = () => {
    const router = useRouter()
    const { location } = useRouterState()

    const items = [
        {
            key: DashboardRoute.id,
            icon: <DashboardOutlined />,
            label: 'Dashboard',
        },
        {
            key: CategoryRoute.id,
            icon: <TagsOutlined />,
            label: 'Danh Mục',
        },
        {
            key: OrdersRoute.id,
            icon: <ShoppingCartOutlined />,
            label: 'Đơn Hàng',
        },
        {
            key: ProductsRoute.id,
            icon: <AppstoreOutlined />,
            label: 'Sản Phẩm',
        },
        {
            key: CustomersRoute.id,
            icon: <UsergroupAddOutlined />,
            label: 'Khách Hàng',
        },
        {
            key: ProfileRoute.id,
            icon: <UserAddOutlined />,
            label: 'User Profile',
        },
    ];

    return (
        <Menu mode="inline" selectedKeys={[location.pathname]} items={items} onClick={({ key }) => {
            router.navigate({ to: key });
        }} />
    )
}

export default SideBar