import { NavLink } from 'react-router-dom';
const Sidemenu = () => {
    return (
        <div className="border-r-2 border-slate-500 h-screen w-[250px] flex px-5 py-8">
            <div className="flex flex-col gap-5 capitalize font-medium ">
                <NavLink to="/dashboard" className={({ isActive }) => `menu-item ${isActive && location.pathname === '/dashboard' && 'text-elephant-400 transition'}`}>
                    Getting Started
                </NavLink>
                <NavLink to="application" className={({ isActive }) => `menu-item ${isActive && 'text-elephant-400 transition'}`} >
                    Application
                </NavLink>
                <NavLink to="authentication" className={({ isActive }) => `menu-item ${isActive && 'text-elephant-400 transition'}`}>
                    Authentication
                </NavLink>
                <NavLink to="profile" className={({ isActive }) => `menu-item ${isActive && 'text-elephant-400 transition'}`} >
                    Profile
                </NavLink>
                <NavLink to="settings" className={({ isActive }) => `menu-item ${isActive && 'text-elephant-400 transition'}`}>
                    Settings
                </NavLink>
            </div>
        </div >
    )
}

export default Sidemenu