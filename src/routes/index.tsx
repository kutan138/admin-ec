import DashboardPage from '@/components/pages/Dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: DashboardPage,
})
