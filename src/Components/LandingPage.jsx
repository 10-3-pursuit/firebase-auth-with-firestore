import { Link } from "react-router-dom";

function LandingPage() {
  return (
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
  );
}

export default LandingPage;
