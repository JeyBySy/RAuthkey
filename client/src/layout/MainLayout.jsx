import { Outlet } from 'react-router-dom'
import Sidemenu from '../components/Global/SideMenu/Sidemenu'
import { useState } from 'react';

const MainLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className={`grid h-screen ${isCollapsed ? "grid-cols-[82px_1fr]" : "grid-cols-[300px_1fr]"}`}>
            <div>
                <Sidemenu isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            </div>
            <div className={`transition-all duration-300  mt-14 z-20 w-[95%] m-auto `}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;