import ProfilePage from '@/components/pages/Profile'
import { PrivateRoute } from '@/routes/guards/PrivateRoute'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
    component: () => (
        <PrivateRoute>
            <ProfilePage />
        </PrivateRoute>
    ),
})
