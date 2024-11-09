import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-clear.png'
import { LayoutDashboard, ChartNoAxesColumnIncreasing, Settings, CircleUser, ChartBar, LogOut } from 'lucide-react';
import { motion } from 'framer-motion'
import { useAuth } from '../../../context/authContext';

const navItems = [
    { to: "/dashboard", label: "Dashboard", Icon: ChartNoAxesColumnIncreasing },
    { to: "/application", label: "Application", Icon: LayoutDashboard },
    { to: "/users", label: "Users", Icon: ChartBar },
    { to: "/profile", label: "Profile", Icon: CircleUser },
    { to: "/settings", label: "Settings", Icon: Settings },
];

const AnimatedBackground = () => (
    <motion.div
        initial={{ width: "0%", left: "100%", opacity: 0.6 }}
        animate={{ width: "100%", left: "0%", opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute top-0 left-0 h-full border-l-4 border-elephant-300 bg-elephant-900 rounded-l-md"
        style={{ zIndex: -1 }}
    >
        <div className="absolute -right-[45px] top-1/2 transform -translate-y-1/2 w-[70px] h-[70px] bg-elephant-900 rounded-full "></div>
    </motion.div>
);


const Sidemenu = () => {
    const { logout } = useAuth();
    return (
        <div className="sideNav h-screen flex bg-elephant-800 fixed flex-col">
            <div className='w-full h-[60px] bg-elephant-950 flex items-center'>
                <img src={logo} alt="logo" className='w-[50px] h-[50px] object-contain' />
                <p className='hidden lg:flex'>
                    RauthKey
                </p>
            </div>
            <div className="hidden sm:w-[250px] flex-col gap-1 capitalize lg:flex font-medium text-white">
                {navItems.map(({ to, label, Icon }) => (
                    <NavLink key={to} to={to} className={({ isActive }) => `relative p-4 flex gap-2 items-center ${isActive ? 'text-white font-extrabold' : 'text-gray-400 hover:text-white'}`}>
                        {({ isActive }) => (
                            <>
                                {isActive && <AnimatedBackground />}
                                <Icon color="white" />
                                <span>{label}</span>
                            </>
                        )}
                    </NavLink>
                ))}
                <button onClick={logout} className={'relative p-4 flex gap-2 items-center text-gray-400 hover:text-white'}>
                    <LogOut color="white" />
                    Logout
                </button>
            </div>
        </div >
    )
}

export default Sidemenu