import { Routes, Route } from 'react-router-dom';
import Application from './Application';
import Profile from './Profile';
import Settings from './Settings';
import Authentication from './Authentication';
import GettingStarted from './GettingStarted';

const Main = () => {
    return (
        <div className="w-full px-10 py-8">
            <Routes>
                <Route path="/" element={<GettingStarted />} />
                <Route path="application" element={<Application />} />
                <Route path="profile" element={<Profile />} />
                <Route path="authentication" element={<Authentication />} />
                <Route path="settings" element={<Settings />} />
            </Routes>

        </div>
    )
}

export default Main