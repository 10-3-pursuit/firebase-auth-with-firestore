import { Routes, Route, Link } from 'react-router-dom'

import ProtectedRoute from './Components/ProtectedRoute'
import Register from './Components/Register'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import UnprotectedUser from './Components/UnprotectedUser'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Welcome to the Auth Starter</h1>
            <Link to="/login">Login</Link>
            <h2>If you are not logged in you cannot reach this route. Try!</h2>
            <Link to="/dashboard">Dashboard Component</Link>
            <h2>
              You can reach this route even if you aren't logged in BUT...if you
              are...you can user the user information to make choices about your
              component
            </h2>
            <Link to="/unsecured/user">UnsecuredUser Component</Link>
          </div>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unsecured/user" element={<UnprotectedUser />} />
      <Route element={<ProtectedRoute />}>
        {/* Place protected routes here */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App
