import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "./hooks/useLogout";

function NavBar() {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout()
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            &nbsp;
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
