import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout