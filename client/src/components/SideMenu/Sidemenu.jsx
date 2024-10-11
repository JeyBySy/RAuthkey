import { NavLink } from 'react-router-dom';
const Sidemenu = () => {
    return (
        <div className="sm:w-[10px] border-r-2 border-slate-500 h-screen lg:w-[250px] flex px-5 py-8">
            <div className="hidden  sm:w-[250px] flex-col gap-5 capitalize lg:flex font-medium">
                <NavLink to="/dashboard" className={({ isActive }) => ` ${isActive && location.pathname === '/dashboard' && 'text-elephant-400 transition'}`}>
                    Getting Started
                </NavLink>
                <NavLink to="application" className={({ isActive }) => ` ${isActive && 'text-elephant-400 transition'}`} >
                    Application
                </NavLink>
                <NavLink to="authentication" className={({ isActive }) => ` ${isActive && 'text-elephant-400 transition'}`}>
                    Authentication
                </NavLink>
                <NavLink to="users" className={({ isActive }) => ` ${isActive && 'text-elephant-400 transition'}`} >
                    Users
                </NavLink>
                <NavLink to="profile" className={({ isActive }) => ` ${isActive && 'text-elephant-400 transition'}`} >
                    Profile
                </NavLink>
                <NavLink to="settings" className={({ isActive }) => ` ${isActive && 'text-elephant-400 transition'}`}>
                    Settings
                </NavLink>
            </div>
        </div >
    )
}

export default Sidemenu