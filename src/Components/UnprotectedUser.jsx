import { useState } from "react";
import { Link } from "react-router-dom";

const UnprotectedUser = ({ handleLogout }) => {
  const [user] = useState(JSON.parse(localStorage.getItem("user") || null));

  return (
    <div>
      <h1>UnprotectedUser</h1>
      {user && (
        <div>
          <h2>
            Hello {user.username.toUpperCase()}. You are logged in and we can
            show you something worthwhile based on that
          </h2>
          <button
            onClick={() => {
              handleLogout();
              navigate("/login");
              setUser(null);
            }}
          >
            <Link to="/login">Logout</Link>
          </button>
        </div>
      )}
      {!user && (
        <h2>
          No user is logged in but I will let you see this component anyway.
          <div>
            <button>
              {" "}
              <Link to="/login">Login</Link>
            </button>
          </div>
        </h2>
      )}
    </div>
  );
};

export default UnprotectedUser;
