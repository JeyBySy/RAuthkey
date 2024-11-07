import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-clear.png'
import { LayoutDashboard, ChartNoAxesColumnIncreasing, Settings, CircleUser, ChartBar, LogOut } from 'lucide-react';
const Sidemenu = () => {
    return (
        <div className="sideNav h-screen  flex bg-elephant-800 fixed flex-col">
            <div className='w-full h-[60px] bg-elephant-950 flex items-center'>
                <img src={logo} alt="logo" className='w-[50px] h-[50px] object-contain' />
                <p className='hidden lg:flex'>
                    RauthKey
                </p>
            </div>
            <div className="hidden sm:w-[250px] flex-col gap-1 capitalize lg:flex font-medium text-white">
                <NavLink to="/dashboard" className={({ isActive }) => ` ${isActive && location.pathname === '/dashboard' && 'border-l-4 bg-elephant-900 transition lg:rounded-l-md'}`}>
                    <p className='p-4 flex gap-2 items-center'>
                        <ChartNoAxesColumnIncreasing color="white" />
                        Dashboard
                    </p>
                </NavLink>
                <NavLink to="/application" className={({ isActive }) => ` ${isActive && 'border-l-4 bg-elephant-900 transition lg:rounded-l-md'}`} >
                    <p className='p-4 flex gap-2 items-center'>
                        <LayoutDashboard color={'white'} />
                        Application
                    </p>
                </NavLink>
                <NavLink to="/users" className={({ isActive }) => ` ${isActive && ' border-l-4 bg-elephant-900 transition lg:rounded-l-md'}`} >
                    <p className='p-4 flex gap-2 items-center'>
                        <ChartBar color="white" />
                        Users</p>
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => ` ${isActive && ' border-l-4 bg-elephant-900 transition lg:rounded-l-md'}`} >
                    <p className='p-4 flex gap-2 items-center'>
                        <CircleUser color={'white'} />
                        Profile
                    </p>
                </NavLink>
                <NavLink to="/settings" className={({ isActive }) => ` ${isActive && '  border-l-4 bg-elephant-900 transition lg:rounded-l-md'}`}>
                    <p className='p-4 flex gap-2 items-center'>
                        <Settings color="white" />
                        Settings
                    </p>
                </NavLink>
                <NavLink to="/logut" className={({ isActive }) => ` ${isActive && '  border-l-4 bg-elephant-900 transition lg:rounded-l-md'}`}>
                    <p className='p-4 flex gap-2 items-center'>
                        <LogOut color={'white'} />
                        Logout
                    </p>
                </NavLink>
            </div>
        </div >
    )
}

export default Sidemenu