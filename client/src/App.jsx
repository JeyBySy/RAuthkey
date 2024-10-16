import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login"
import Dashboard from './pages/Dashboard/Dashboard'
import AuthLayout from './layout/AuthLayout'
import MainLayout from './layout/MainLayout'


function App() {
  return (
    <Routes>

      <Route element={<MainLayout />}>
        <Route path="/dashboard/*" element={<Dashboard />}></Route>
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />}></Route>
      </Route>
    </Routes>
  )
}

export default App
