import OrdersPage from '@/components/pages/Orders'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/order')({
    component: OrdersPage,
})