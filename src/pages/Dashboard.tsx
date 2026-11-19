
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="donor-dashboard">

      {/* Sidebar */}
      <aside className="donor-sidebar">
        <Link to="/" className="sidebar-logo">🩸 LifeLine</Link>

        <p className="sidebar-label">MAIN MENU</p>

        <Link to="/dashboard" className="sidebar-link active">
          <span>▦</span> Dashboard
        </Link>

        <a href="#requests" className="sidebar-link">
          <span>♡</span> Incoming Requests
        </a>

        <a href="#history" className="sidebar-link">
          <span>◷</span> Donation History
        </a>

        <a href="#appointments" className="sidebar-link">
          <span>▣</span> Appointments
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

      {/* Main Content */}
      <main className="donor-main">

        <div className="donor-topbar">
          <div>
            <p className="dashboard-tag">DONOR PORTAL</p>
            <h1>Dashboard</h1>
          </div>

          <div className="donor-user">
            <div className="user-avatar">D</div>
            <div>
              <strong>Demo Donor</strong>
              <p>Blood Donor</p>
            </div>
          </div>
        </div>

        {/* Welcome */}
        <section className="donor-welcome">
          <div>
            <p>WELCOME BACK!</p>
            <h2>Hello, Donor! ❤️</h2>
            <span>Thank you for being someone's hope.</span>
          </div>

          <div className="donor-blood-badge">
            <small>YOUR BLOOD GROUP</small>
            <strong>O+</strong>
          </div>
        </section>

        {/* Statistics */}
        <section className="donor-stat-grid">
          <div className="donor-stat">
            <span>❤️</span>
            <h2>03</h2>
            <p>Lives Potentially Helped</p>
          </div>

          <div className="donor-stat">
            <span>🩸</span>
            <h2>02</h2>
            <p>Total Donations</p>
          </div>

          <div className="donor-stat">
            <span>📩</span>
            <h2>02</h2>
            <p>Incoming Requests</p>
          </div>
        </section>

        {/* Incoming Requests */}
        <section className="donor-panel" id="requests">
          <div className="panel-heading">
            <h2>Incoming Blood Requests</h2>
            <span>NEW REQUESTS</span>
          </div>

          <div className="donation-record">
            <div className="record-icon">🩸</div>
            <div>
              <strong>Demo Patient 1</strong>
              <p>O+ · Delhi · Urgent</p>
            </div>
            <span className="record-status">Pending</span>
          </div>

          <div className="donation-record">
            <div className="record-icon">🩸</div>
            <div>
              <strong>Demo Patient 2</strong>
              <p>O+ · Noida · Normal</p>
            </div>
            <span className="record-status">Pending</span>
          </div>

          <p style={{ color: "#777", fontSize: "13px", marginTop: "15px" }}>
            These are sample requests. Accept and decline actions will be
            connected with the backend later.
          </p>
        </section>

        {/* Profile and History */}
        <section className="donor-content-grid">

          <div className="donor-panel" id="profile">
            <div className="panel-heading">
              <h2>My Donor Profile</h2>
              <span>PROFILE</span>
            </div>

            <div className="donor-profile-info">
              <div className="profile-avatar">D</div>
              <h3>Demo Donor</h3>
              <p>LifeLine Member</p>
            </div>

            <div className="donor-detail">
              <span>Email Address</span>
              <strong>donor@example.com</strong>
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
              <span>Availability</span>
              <strong className="available-text">● Available</strong>
            </div>
          </div>

          <div className="donor-panel" id="history">
            <div className="panel-heading">
              <h2>Donation History</h2>
              <span>RECENT</span>
            </div>

            <div className="donation-record">
              <div className="record-icon">🩸</div>
              <div>
                <strong>Blood Donation</strong>
                <p>January 2026</p>
              </div>
              <span className="record-status">Completed</span>
            </div>

            <div className="donation-record">
              <div className="record-icon">🩸</div>
              <div>
                <strong>Blood Donation</strong>
                <p>August 2025</p>
              </div>
              <span className="record-status">Completed</span>
            </div>

            <div className="next-appointment" id="appointments">
              <h3>Upcoming Appointment</h3>
              <p>No upcoming appointments scheduled.</p>
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}

export default Dashboard;
