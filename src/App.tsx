import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ThemeProvider } from '@/providers/theme/ThemeProvider';
import { StyleProvider } from '@ant-design/cssinjs';
import { routeTree } from './routeTree.gen';
import { ConfigProvider } from './providers/config/ConfigProvider';
import { AuthProvider } from './providers/auth/AuthProvider';

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

const App = () => {

    return (
        <StyleProvider layer>
            <ConfigProvider>
                <ThemeProvider>
                    <AuthProvider>
                        <RouterProvider router={router} />
                    </AuthProvider>
                </ThemeProvider>
            </ConfigProvider>
        </StyleProvider >
    )
}

export default App