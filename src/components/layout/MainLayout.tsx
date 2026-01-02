import SideBar from "@/components/layout/SideBar";
import UserInfo from "@/components/layout/UserInfo";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Layout } from "antd";
import type { FC } from "react";

type Props = {
  hasSider?: boolean;
};
const { Content, Footer, Sider } = Layout;

const MainLayout: FC<Props> = ({ hasSider = true }) => {
  return (
    <>
      <Layout hasSider={hasSider}>
        <Sider theme="light" width={256}>
          <div className="overflow-auto h-screen sticky top-0 bottom-0 left-0 scrollbar-thin flex flex-col text-white gap-4">
            <UserInfo />
            <SideBar />
          </div>
        </Sider>
        <Layout>
          <Content className="overflow-visible">
            <div className="p-6 rounded-lg">
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
      <TanStackRouterDevtools />
    </>
  );
};

export default MainLayout;
