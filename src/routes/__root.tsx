import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import SideBar from '@/components/layout/sidebar/SideBar'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
    <>
        <Header />
        <SideBar />
        <Outlet />
        <Footer />
        <TanStackRouterDevtools />
    </>
)

export const Route = createRootRoute({ component: RootLayout })