import { useState, useEffect } from "react";
import { useNavigate, useOutletContext, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

const Dashboard = ({ handleLogout }) => {
  const { user } = useOutletContext(); // Access user data provided by the Outlet's
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null); // State to hold the fetched user profile

  const fetchUserProfile = async (uid) => {
    const docRef = doc(db, "users", uid); // Adjust 'users' to your collection name

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProfile(docSnap.data()); // Set the fetched profile in state
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if (user) {
      console.log("USER!!!!", user);
      fetchUserProfile(user.uid); // Fetch profile when component mounts and user is available
    }
  }, [user]); // Depend on user

  return (
    <div>
      <h1>Welcome, {profile && profile.username.toUpperCase()}</h1>
      <h2>This is a protected Component called Dashboard</h2>
      {/* Use user data as needed, for example: */}
      <h3>
        If you want to go to the Unsecured User Component now, you will see that
        you are now logged in
      </h3>
      <div>
        {" "}
        <button>
          <Link to="/unsecured/user">Unsecured User Component</Link>
        </button>
      </div>
      <button onClick={handleLogout}>
        <Link to="/login">Logout</Link>
      </button>
    </div>
  );
};

export default Dashboard;
