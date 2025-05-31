import { Routes, Route } from "react-router-dom"
import Login from './pages/login'
import Landing from './pages/landing'
import Register from './pages/register'
import Dashboard from "./pages/dashboard"
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
      </Routes>
    </>
  
  )
}

export default App