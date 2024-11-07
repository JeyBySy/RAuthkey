import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login"
import Dashboard from './pages/Main/Dashboard'
import AuthLayout from './layout/AuthLayout'
import MainLayout from './layout/MainLayout'
import Application from './pages/Main/Application'
import Users from './pages/Main/Users'
import Profile from './pages/Main/Profile'
import Settings from './pages/Main/Settings'


function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/application" element={<Application />}></Route>
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
