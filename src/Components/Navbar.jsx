import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ handleLogout, loggedIn }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  }, [loggedIn]);

  return (
    <div className="navbar-container">
      <h1>Navbar Component</h1>
      <h2>
        <Link style={{ textDecoration: "none" }} to="/">
          Your image or Logo (click here to go to Landing Page)
        </Link>
      </h2>

      {!user || !loggedIn ? (
        <Link to={"/login"}>
          <span>Login</span>
        </Link>
      ) : (
        <div>
          {<span>Hello, {user.username.toUpperCase()}? | </span>}
          <button
            onClick={() => {
              handleLogout();
              setUser(null);
              navigate("/login");
            }}
          >
            <Link to="/login">Logout</Link>
          </button>
        </div>
      )}
      <hr />
    </div>
  );
};

export default NavBar;
