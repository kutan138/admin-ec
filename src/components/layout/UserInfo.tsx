import { useAuth } from '@/hooks/useAuth';

const UserInfo = () => {
    const { user } = useAuth();
    const displayName = user?.fullName || user?.email || 'User';

    return (
        <div className="flex items-center gap-3 p-2">
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
                style={{
                    backgroundImage:
                        `url("${user?.avatar || 'https://i.pravatar.cc/150?img=3'}")`,
                }}
            />
            <div className="flex flex-col">
                <h1 className="text-black text-base font-medium leading-normal">{displayName}</h1>
                <p className="text-black font-normal leading-normal">
                    {user?.email || 'admin@example.com'}
                </p>
            </div>
        </div>
    )
}

export default UserInfo