import { Routes, Route } from 'react-router-dom';
import Application from './Application';
import Profile from './Profile';
import Settings from './Settings';
import Authentication from './Authentication';
import GettingStarted from './GettingStarted';
import Users from './Users';

const Main = () => {
    return (
        <div className="w-full lg:px-10 py-8 ">
            <div className='flex w-full sm:w-full lg:w-[950px] m-auto flex-col px-2 '>
                <Routes>
                    <Route path="/" element={<GettingStarted />} />
                    <Route path="application" element={<Application />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="authentication" element={<Authentication />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="users" element={<Users />} />
                </Routes>
            </div>
        </div>
    )
}

export default Main