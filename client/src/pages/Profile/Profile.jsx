const Profile = () => {
    return (
        <div className='lg:w-full container mx-auto'>
            <div className="flex mb-5">
                <div className='w-full leading-8'>
                    <h1 className="title_page">Profile</h1>
                    <span className='text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing</span>
                </div>
            </div>
            <div className="p-6 shadow-md bg-elephant-800 rounded">
                {/* User Info */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold">Personal Details</h3>
                    <p><strong>Name:</strong> John Doe</p>
                    <p><strong>Email:</strong> john.doe@example.com</p>
                    <p><strong>Role:</strong> Super Admin</p>
                    <p><strong>Last Login:</strong> 2024-11-29 10:00 AM</p>
                </div>
            </div>

        </div>
    )
}

export default Profile