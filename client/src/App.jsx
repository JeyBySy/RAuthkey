import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login/Login"
import Dashboard from './pages/Dashboard/Dashboard'

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="/dashboard/*" element={<Dashboard />}></Route>
    </Routes>
  )
}

export default App
