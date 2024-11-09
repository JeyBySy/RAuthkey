import { Routes, Route } from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import MainLayout from './layout/MainLayout'
import Login from "./pages/Login/Login"
import Dashboard from './pages/Dashboard/Dashboard'
import Application from './pages/Application/Application'
import Users from './pages/Users/Users'
import Profile from './pages/Profile/Profile'
import Settings from './pages/Settings/Settings'
import AppDetails from './pages/Application/[appId]'


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/application" element={<Application />}></Route>
        <Route path="/application/:appId" element={<AppDetails />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />}></Route>
      </Route>
    </Routes>
  )
}

export default App
