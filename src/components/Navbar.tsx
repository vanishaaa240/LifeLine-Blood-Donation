
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const role = localStorage.getItem("userRole");

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        🩸 LifeLine
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        {role === "recipient" && (
          <Link to="/find-donors">Find Donors</Link>
        )}

        {role === "donor" && (
          <Link to="/dashboard">Dashboard</Link>
        )}

        {role === "recipient" && (
          <Link to="/recipient-dashboard">Dashboard</Link>
        )}

        <Link to="/login" className="login-btn">
          Login / Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
