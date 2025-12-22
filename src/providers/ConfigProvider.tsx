import { ConfigProvider as AntdConfigProvider } from 'antd';
import { type FC } from 'react';

type Props = {
    children: React.ReactNode
}

export const ConfigProvider: FC<Props> = ({ children }) => {
    return (
        <AntdConfigProvider>
            {children}
        </AntdConfigProvider>
    )
}