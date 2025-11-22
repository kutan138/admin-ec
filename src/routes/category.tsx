import CategoryPage from '@/components/pages/Category'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/category')({
  component: CategoryPage,
})