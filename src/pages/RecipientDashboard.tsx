
import { Link } from "react-router-dom";

function RecipientDashboard() {
  return (
    <div className="donor-dashboard">

      <aside className="donor-sidebar">
        <Link to="/" className="sidebar-logo">🩸 LifeLine</Link>

        <p className="sidebar-label">MAIN MENU</p>

        <Link to="/recipient-dashboard" className="sidebar-link active">
          <span>▦</span> Dashboard
        </Link>

        <Link to="/find-donors" className="sidebar-link">
          <span>♡</span> Find Donors
        </Link>

        <a href="#requests" className="sidebar-link">
          <span>◷</span> My Requests
        </a>

        <p className="sidebar-label">ACCOUNT</p>

        <a href="#profile" className="sidebar-link">
          <span>♙</span> My Profile
        </a>

        <Link to="/" className="sidebar-link">
          <span>⌂</span> Home
        </Link>

        <Link to="/login" className="sidebar-link logout-link">
          <span>↪</span> Logout
        </Link>
      </aside>

      <main className="donor-main">

        <div className="donor-topbar">
          <div>
            <p className="dashboard-tag">RECIPIENT PORTAL</p>
            <h1>My Dashboard</h1>
          </div>

          <div className="donor-user">
            <div className="user-avatar">R</div>
            <div>
              <strong>Demo Recipient</strong>
              <p>Blood Recipient</p>
            </div>
          </div>
        </div>

        <section className="donor-welcome">
          <div>
            <p>WELCOME TO LIFELINE!</p>
            <h2>Hello, Recipient! ❤️</h2>
            <span>We're here to help you connect with blood donors.</span>
          </div>

          <div className="donor-blood-badge">
            <small>YOUR BLOOD GROUP</small>
            <strong>O+</strong>
          </div>
        </section>

        <section className="donor-stat-grid">

          <div className="donor-stat">
            <span>📋</span>
            <h2>02</h2>
            <p>Total Requests</p>
          </div>

          <div className="donor-stat">
            <span>⏳</span>
            <h2>01</h2>
            <p>Pending Requests</p>
          </div>

          <div className="donor-stat">
            <span>✅</span>
            <h2>01</h2>
            <p>Fulfilled Requests</p>
          </div>

        </section>

        <section className="donor-content-grid">

          <div className="donor-panel" id="profile">
            <div className="panel-heading">
              <h2>My Profile</h2>
              <span>PROFILE</span>
            </div>

            <div className="donor-profile-info">
              <div className="profile-avatar">R</div>
              <h3>Demo Recipient</h3>
              <p>LifeLine Member</p>
            </div>

            <div className="donor-detail">
              <span>Email Address</span>
              <strong>recipient@example.com</strong>
            </div>

            <div className="donor-detail">
              <span>Phone Number</span>
              <strong>XXXXXXXXXX</strong>
            </div>

            <div className="donor-detail">
              <span>Blood Group</span>
              <strong>O+</strong>
            </div>

            <div className="donor-detail">
              <span>Account Type</span>
              <strong>Recipient</strong>
            </div>
          </div>

          <div className="donor-panel" id="requests">
            <div className="panel-heading">
              <h2>Recent Blood Requests</h2>
              <span>RECENT</span>
            </div>

            <div className="donation-record">
              <div className="record-icon">🩸</div>
              <div>
                <strong>O+ Blood Request</strong>
                <p>Delhi · Demo request</p>
              </div>
              <span className="record-status">Pending</span>
            </div>

            <div className="donation-record">
              <div className="record-icon">🩸</div>
              <div>
                <strong>A+ Blood Request</strong>
                <p>Noida · Demo request</p>
              </div>
              <span className="record-status">Fulfilled</span>
            </div>

            <div className="next-appointment">
              <h3>Need Blood?</h3>
              <p>Create a new blood request to connect with donors.</p>
              <Link to="/find-donors">
                Explore Donors →
              </Link>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default RecipientDashboard;
