import CustomerPage from '@/components/pages/Customer'
import { PrivateRoute } from '@/routes/guards/PrivateRoute'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/customer')({
    component: () => (
        <PrivateRoute>
            <CustomerPage />
        </PrivateRoute>
    ),
})