import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo-clear.png'
import { LayoutDashboard, ChartNoAxesColumnIncreasing, Settings, CircleUser, LogOut, Menu } from 'lucide-react';
import { motion } from 'framer-motion'
import { useAuth } from '../../../context/AuthContext';

const navItems = [
    { to: "/dashboard", label: "Dashboard", Icon: ChartNoAxesColumnIncreasing },
    { to: "/application", label: "Application", Icon: LayoutDashboard },
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


// eslint-disable-next-line react/prop-types
const Sidemenu = ({ isCollapsed, setIsCollapsed }) => {
    const { logout } = useAuth();


    const toggleSidebar = () => setIsCollapsed((prev) => !prev);

    return (
        <div
            className={`h-screen bg-elephant-800 fixed flex flex-col transition-width duration-300 ${isCollapsed ? "w-[75px]" : "w-[250px]"}`}>
            {/* Header */}
            <div className="w-full h-[60px] bg-elephant-950 flex items-center px-4">
                <img src={logo} alt="logo" className={isCollapsed ? "w-[40px] h-[40px] m-auto" : "w-[40px] h-[40px] object-contain"} />
                {!isCollapsed && (
                    <p className="ml-4 text-white font-bold text-lg">RauthKey</p>
                )}
                <button className="ml-auto absolute -right-10 z-30 p-2" onClick={toggleSidebar}>
                    <Menu />
                </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col gap-1 mt-4">
                {navItems.map(({ to, label, Icon }) => (
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) => `relative flex items-center gap-4 p-4 ${isActive ? "text-white font-extrabold" : "text-gray-400 hover:text-white"}`}>
                        {({ isActive }) => (
                            <>
                                {isActive && <AnimatedBackground />}
                                <div className={`${isCollapsed ? "m-auto" : "flex justify-center items-center"}`}>
                                    <Icon
                                        width={25}
                                        height={25}
                                        color="white"
                                    />
                                </div>
                                {!isCollapsed && <span>{label}</span>}
                            </>
                        )}
                    </NavLink>
                ))}
                {/* Logout Button */}
                <button onClick={logout} className="relative flex items-center gap-4 p-4 text-gray-400 hover:text-white">
                    <div className={`${isCollapsed ? "m-auto" : "flex justify-center items-center"}`}>
                        <LogOut color="white" />
                    </div>
                    {!isCollapsed && <span>Logout</span>}
                </button>
            </div>
        </div>
    );
};

export default Sidemenu