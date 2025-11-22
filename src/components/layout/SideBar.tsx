import {
    AppstoreOutlined,
    DashboardOutlined,
    ShoppingCartOutlined,
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


const SideBar = () => {
    const router = useRouter()
    const { location } = useRouterState()

    const items = [
        {
            key: DashboardRoute.id,
            icon: <DashboardOutlined className='text-xl' />,
            label: 'Dashboard',
        },
        {
            key: OrdersRoute.id,
            icon: <ShoppingCartOutlined className='text-xl' />,
            label: 'Đơn Hàng',
        },
        {
            key: ProductsRoute.id,
            icon: <AppstoreOutlined className='text-xl' />,
            label: 'Sản Phẩm',
        },
        {
            key: CustomersRoute.id,
            icon: <UsergroupAddOutlined className='text-xl' />,
            label: 'Khách Hàng',
        },
        {
            key: ProfileRoute.id,
            icon: <UserAddOutlined className='text-xl' />,
            label: 'User Profile',
        },
    ];

    return (
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={items} onClick={({ key }) => {
            router.navigate({ to: key });
        }} />
    )
}

export default SideBar