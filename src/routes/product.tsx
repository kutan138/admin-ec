import ProductsPage from '@/components/pages/Product'
import { PrivateRoute } from '@/routes/guards/PrivateRoute'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/product')({
    component: () => (
        <PrivateRoute>
            <ProductsPage />
        </PrivateRoute>
    ),
})