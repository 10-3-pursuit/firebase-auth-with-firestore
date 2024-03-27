import { useAuth } from '../Components/ProtectedRoute'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseConfig'

const UnprotectedUser = () => {
  const { user, profile } = useAuth()

  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await signOut(auth)
      navigate('/login')
    } catch (error) {
      console.error('Logout Error:', error)
    }
  }

  return (
    <div>
      <h1>UnprotectedUser</h1>
      {profile && (
        <div>
          <h2>
            Hello {profile.username.toUpperCase()}. You are logged in and we can
            show you something worthwhile based on that
          </h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      {!user && (
        <h2>
          No user is logged in but I will let you see this component anyway.
          <div>
            <button>
              {' '}
              <Link to="/login">Login</Link>
            </button>
          </div>
        </h2>
      )}
    </div>
  )
}

export default UnprotectedUser
