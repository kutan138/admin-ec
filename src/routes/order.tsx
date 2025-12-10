import OrdersPage from '@/components/pages/Orders'
import { PrivateRoute } from '@/routes/guards/PrivateRoute'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/order')({
    component: () => (
        <PrivateRoute>
            <OrdersPage />
        </PrivateRoute>
    ),
})