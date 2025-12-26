import { useUserInfo } from "@/features/auth/hooks/useUserInfo";

const UserInfo = () => {
  const { email } = useUserInfo();
  const displayName = email || "No Name";

  return (
    <div className="flex items-center gap-3 p-2">
      <div
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
        style={{
          backgroundImage: `url("https://i.pravatar.cc/150?img=3")`,
        }}
      />
      <div className="flex flex-col">
        <h1 className="text-black text-base font-medium">{displayName}</h1>
        <p className="text-black">{displayName}</p>
      </div>
    </div>
  );
};

export default UserInfo;
