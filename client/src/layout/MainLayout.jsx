import { Outlet } from 'react-router-dom'
import Sidemenu from '../components/Global/SideMenu/Sidemenu'


const MainLayout = () => {
    return (
        <div className="flex">
            <div className='sideNav'>
                <Sidemenu />
            </div>
            <div className='flex-grow p-5 mt-14 z-10'>
                <div className='lg:w-[90%] mx-auto'>
                    <Outlet />
                </div>
            </div>
            {/* <div className="lg:w-[86%] w-full p-10 overflow-y-auto border ml-auto">
            </div> */}
        </div>
    )
}

export default MainLayout