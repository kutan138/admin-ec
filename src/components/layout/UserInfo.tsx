const UserInfo = () => {
    return (
        <div className="flex items-center gap-3">
            <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 h-10"
                style={{
                    backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAT3Xsw_7YhmnfjAMWiykK6Gl2Hr24rsrO2zA8GGm9HgAeMXqnpekJvSqxPmJXtl0jVC0kYNCgBPhsbxYT-7yPVBgY1fONR8QM0Lc4j10X1loFbqYBp2cZo8BqS71mbInUZlp7MBqp8GCVifVbTizHYDU_O3sshbr3oFVcUSHxiO6Myjrf3B6e9d12zhbJRQ6FJIyeOe10eMiQCmKf0cR8NIQNOaMuJNxuAwmjYfUphUjsrAkUqDV-9pmJ61zpK-DM_qDyfMXkvGA")',
                }}
            />
            <div className="flex flex-col">
                <h1 className="text-white text-base font-medium leading-normal">Admin</h1>
                <p className="text-[#92adc9] text-sm font-normal leading-normal">
                    admin@example.com
                </p>
            </div>
        </div>
    )
}

export default UserInfo