
import { useState } from "react";

const donors = [
  { name: "Aarav Sharma", blood: "O+", city: "Delhi", availability: "Available" },
  { name: "Priya Verma", blood: "A+", city: "Noida", availability: "Available" },
  { name: "Rahul Singh", blood: "B+", city: "Delhi", availability: "Available" },
  { name: "Ananya Gupta", blood: "AB+", city: "Gurugram", availability: "Available" },
  { name: "Rohan Mehta", blood: "O-", city: "Delhi", availability: "Available" },
  { name: "Sneha Kapoor", blood: "B-", city: "Noida", availability: "Available" },
];

function FindDonors() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [city, setCity] = useState("");
  const [availability, setAvailability] = useState("All");

  const filteredDonors = donors.filter((donor) => {
    return (
      (bloodGroup === "" || donor.blood === bloodGroup) &&
      (city === "" || donor.city.toLowerCase().includes(city.toLowerCase())) &&
      (availability === "All" || donor.availability === availability)
    );
  });

  return (
    <div className="find-page">

      {/* Page Heading */}
      <section className="find-hero">
        <p>🩸 LIFELINE DONOR NETWORK</p>
        <h1>Find Blood Donors</h1>
        <span>Connect with generous donors and help save lives.</span>
      </section>

      {/* Search Filters */}
      <section className="find-search-panel">
        <div className="find-search-heading">
          <div>
            <h2>Search Donors</h2>
            <p>Find the right donor for your blood requirement.</p>
          </div>
          <span className="search-icon">⌕</span>
        </div>

        <div className="find-filter-grid">

          <div className="find-field">
            <label>Blood Group</label>
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">All Blood Groups</option>
              {["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"].map(group => (
                <option key={group} value={group}>{group}</option>
              ))}
            </select>
          </div>

          <div className="find-field">
            <label>City / Location</label>
            <input
              type="text"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="find-field">
            <label>Availability</label>
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
            >
              <option value="All">All Donors</option>
              <option value="Available">Available</option>
            </select>
          </div>

          <button
            className="find-search-button"
            onClick={() => {}}
          >
            Search Donors →
          </button>

        </div>
      </section>

      {/* Results */}
      <section className="find-results-section">

        <div className="find-results-heading">
          <div>
            <p>DONOR DIRECTORY</p>
            <h2>Available Donors</h2>
          </div>
          <span>{filteredDonors.length} donors found</span>
        </div>

        <div className="find-main-grid">

          {/* Donor Cards */}
          <div className="find-donor-grid">
            {filteredDonors.length > 0 ? (
              filteredDonors.map((donor, index) => (
                <div className="find-donor-card" key={index}>

                  <div className="find-donor-card-top">
                    <div className="find-donor-avatar">
                      {donor.name.charAt(0)}
                    </div>

                    <span className="find-blood-badge">
                      {donor.blood}
                    </span>
                  </div>

                  <h3>{donor.name}</h3>
                  <p className="find-donor-location">📍 {donor.city}</p>

                  <span className="find-availability">
                    <span></span> {donor.availability}
                  </span>

                  <button className="find-contact-button" disabled>
                    Contact Donor
                  </button>

                </div>
              ))
            ) : (
              <p className="find-empty">
                No matching donors found. Try changing your filters.
              </p>
            )}
          </div>

          {/* Location Panel */}
          <div className="find-location-panel">
            <h3>Donor Locations</h3>
            <p>Location overview of our donor network</p>

            <div className="find-map-placeholder">
              <div className="map-pin">📍</div>
              <strong>Donor Network Map</strong>
              <span>Location map will be connected during integration.</span>
            </div>

            <div className="map-note">
              <span>●</span>
              Donor locations are sample data
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default FindDonors;
