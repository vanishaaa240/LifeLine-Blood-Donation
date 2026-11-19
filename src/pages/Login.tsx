
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isLogin) {
      const savedRole = localStorage.getItem("userRole");

      if (!savedRole) {
        alert("Please sign up first to select your account type.");
        return;
      }

      navigate(
        savedRole === "donor"
          ? "/dashboard"
          : "/recipient-dashboard"
      );
    } else {
      if (!role) {
        alert("Please select your account type.");
        return;
      }

      localStorage.setItem("userRole", role);

      navigate(
        role === "donor"
          ? "/dashboard"
          : "/recipient-dashboard"
      );
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <Link to="/" className="auth-logo">
          🩸 LifeLine
        </Link>

        <div className="auth-heading">
          <h1>{isLogin ? "Welcome Back!" : "Join LifeLine"}</h1>
          <p>
            {isLogin
              ? "Login to your account"
              : "Create your LifeLine account"}
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>

          {!isLogin && (
            <>
              <label>Full Name</label>
              <input type="text" placeholder="Enter your full name" required />

              <label>Phone Number</label>
              <input type="tel" placeholder="Enter your phone number" required />

              <label>Register As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="">Select your role</option>
                <option value="donor">Blood Donor</option>
                <option value="recipient">Blood Recipient</option>
              </select>

              <label>Blood Group</label>
              <select defaultValue="" required>
                <option value="" disabled>Select blood group</option>
                {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(group => (
                  <option key={group}>{group}</option>
                ))}
              </select>
            </>
          )}

          <label>Email Address</label>
          <input type="email" placeholder="Enter your email" required />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" required />

          {isLogin && (
            <button type="button" className="forgot-password">
              Forgot Password?
            </button>
          )}

          <button type="submit" className="auth-submit">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>

        <p className="auth-switch">
          {isLogin ? "Don't have an account?" : "Already registered?"}
          <button type="button" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
}

export default Login;
