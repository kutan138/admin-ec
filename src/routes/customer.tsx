import CustomerPage from '@/components/pages/Customer'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/customer')({
    component: CustomerPage,
})