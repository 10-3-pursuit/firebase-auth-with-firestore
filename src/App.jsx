import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

import ProtectedRoute from "./Components/ProtectedRoute";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import UnprotectedUser from "./Components/UnprotectedUser";
import NavBar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      //Sign out of firebase
      await signOut(auth);
      // We use the .clear method to clear the localStorage in case you stored more varibles than just the user
      localStorage.clear();
      setLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  }

  return (
    <>
      <NavBar
        handleLogout={handleLogout}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/register"
          element={<Register setLoggedIn={setLoggedIn} />}
        />

        <Route
          path="/unsecured/user"
          element={<UnprotectedUser handleLogout={handleLogout} />}
        />

        {/* The routes below require a user. Nest the routes inside the ProtectedRoute component */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/dashboard"
            element={<Dashboard handleLogout={handleLogout} />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
