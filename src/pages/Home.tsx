
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      {/* Hero Banner */}
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-tag">BE A HERO</p>

          <h1>
            Donate Blood Today.
            <br />
            Save Lives Tomorrow.
          </h1>

          <p>
            Every drop matters. Join our community of heroes
            and help someone in need.
          </p>

          <Link to="/find-donors" className="home-hero-btn">
            Find Blood Donors
          </Link>
        </div>
      </section>

      {/* Search Section */}
      <section className="home-search">
        <div>
          <h2>Find Blood. Save Lives.</h2>
          <p>Search for blood donors near you.</p>
        </div>

        <Link to="/find-donors" className="home-search-btn">
          Search Donors →
        </Link>
      </section>

      {/* Featured Campaigns */}
      <section className="campaign-section">
        <div className="home-section-heading">
          <div>
            <p>MAKE A DIFFERENCE</p>
            <h2>Featured Campaigns</h2>
          </div>
          <Link to="/find-donors">View All →</Link>
        </div>

        <div className="campaign-grid">

          <div className="campaign-card campaign-one">
            <span>DONATE TODAY</span>
            <h3>Every Drop Counts</h3>
            <p>Be someone's reason to live.</p>
            <Link to="/login">Join Now →</Link>
          </div>

          <div className="campaign-card campaign-two">
            <span>COMMUNITY DRIVE</span>
            <h3>Give Blood, Give Hope</h3>
            <p>Small acts create big changes.</p>
            <Link to="/login">Participate →</Link>
          </div>

          <div className="campaign-card campaign-three">
            <span>BE A LIFESAVER</span>
            <h3>Share the Gift of Life</h3>
            <p>Your kindness can save lives.</p>
            <Link to="/login">Become a Donor →</Link>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="home-stats">
        <div className="home-stat-card">
          <span>❤️</span>
          <h2>3</h2>
          <p>Lives Helped Per Donation</p>
        </div>

        <div className="home-stat-card">
          <span>🩸</span>
          <h2>15K+</h2>
          <p>Registered Donors</p>
        </div>

        <div className="home-stat-card">
          <span>🏥</span>
          <h2>36K+</h2>
          <p>People Reached</p>
        </div>
      </section>

    </div>
  );
}

export default Home;
