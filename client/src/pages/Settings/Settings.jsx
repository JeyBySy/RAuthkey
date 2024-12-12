import { Routes, Route, NavLink } from 'react-router-dom'
import Security from './security'


const subPages = [
    { to: "account", label: "Account" },
    { to: "security", label: "Security" },
];
const Settings = () => {
    return (
        <div className='lg:w-full container mx-auto'>
            <div className="flex mb-5">
                <div className='w-full leading-8'>
                    <h1 className="title_page">Settings</h1>
                    {/* <span className='text-gray-400'>Create new application for authentication</span> */}
                </div>
            </div>
            <div className='w-full grid grid-cols-[150px_1fr]  gap-2'>
                <section className='flex flex-col capitalize gap-1 text-sm'>
                    {subPages.map(({ to, label }) => (
                        <>
                            <NavLink to={to} className={({ isActive }) => `border-[0.3px] border-gray-700 shadow-md flex justify-start p-3 rounded ${isActive ? "bg-elephant-950 shadow-lg border-elephant-800" : "text-gray-400 hover:text-white hover:bg-elephant-950"}`}>
                                {label}
                            </NavLink >
                        </>
                    ))}
                </section>
                <section className='px-2 bg-elephant-800 min-h-[70vh] shadow-md'>
                    <Routes>
                        <Route path="security" element={<Security />} />
                    </Routes>
                </section>
            </div>

        </div >
    )
}

export default Settings