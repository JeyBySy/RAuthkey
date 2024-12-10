
const Dashboard = () => {
    return (
        <div className='lg:w-full mx-auto container'>
            <div className="flex mb-5">
                <div className='w-full leading-8'>
                    <h1 className="title_page">Dashboard</h1>
                    <span className='text-gray-400 flex gap-2 items-center'>Welcome back, <p className="text-white">name-here</p></span>
                </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-6 gap-2 h-[80vh]">
                <div className="col-span-2 row-span-2 border">
                    Total number of users
                </div>
                <div className="col-span-2 row-span-2 col-start-3 border">
                    Total Applications
                </div>
                <div className="col-span-4 row-start-3 row-span-2 border overflow-y-auto">
                    Active users Today <br />
                    List projects in horizontal with icons then active users
                </div>
                <div className="row-start-5 row-span-2 border h-auto">
                    Some Graphs
                </div>
                <div className="row-start-5 row-span-2 border h-auto">
                    Some Graphs
                </div>
                <div className="row-start-5 row-span-2 border h-auto">
                    Login Activity <br />
                    List in vertical per project with numbers of login base on days/months
                </div>
                <div className="row-start-5 row-span-2 border h-auto">
                    Recent project created <br />
                    List of projects by date created
                </div>
            </div>


        </div>

    )
}

export default Dashboard