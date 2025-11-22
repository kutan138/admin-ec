import { RouterProvider, createRouter } from '@tanstack/react-router';
import { ThemeProvider } from '@/providers/theme/ThemeProvider';
import { StyleProvider } from '@ant-design/cssinjs';
import { routeTree } from './routeTree.gen';

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
            <ThemeProvider>
                <RouterProvider router={router} />
            </ThemeProvider>
        </StyleProvider >
    )
}

export default App