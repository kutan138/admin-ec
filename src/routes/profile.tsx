import ProfilePage from '@/components/pages/Profile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
    component: ProfilePage,
})
