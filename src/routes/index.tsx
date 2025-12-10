import DashboardPage from '@/components/pages/Dashboard'
import { PrivateRoute } from '@/routes/guards/PrivateRoute'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: () => (
        <PrivateRoute>
            <DashboardPage />
        </PrivateRoute>
    ),
})
