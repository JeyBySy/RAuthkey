import { Outlet } from 'react-router-dom'
import Sidemenu from '../components/Global/SideMenu/Sidemenu'


const MainLayout = () => {
    return (
        <div className="grid lg:grid-cols-[250px_1fr] h-screen">
            <div>
                <Sidemenu />
            </div>
            <div className="p-5 mt-14 z-20 w-full">
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