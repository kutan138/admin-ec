import { AuthProvider } from "@/providers/AuthProvider";
import { ConfigProvider } from "@/providers/ConfigProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { StyleProvider } from "@ant-design/cssinjs";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/react-query";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const App = () => {
  return (
    <StyleProvider layer>
      <ConfigProvider>
        <ThemeProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </QueryClientProvider>
        </ThemeProvider>
      </ConfigProvider>
    </StyleProvider>
  );
};

export default App;
