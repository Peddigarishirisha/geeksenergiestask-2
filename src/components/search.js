// SearchFilter.js
import React, { useState } from "react";
import "./search.css";

function SearchFilter({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass search term to parent
  };

  return (
    <div className="search-filter">
      <div className="filter-option">
        <i className="fa fa-map-marker-alt"></i>
        <div>
          <h4>Munnar</h4>
          <p style={{ fontSize: "small" }}>47 Packages</p>
        </div>
      </div>
      <div className="filter-option">
        <img src="./calendar.png" alt="Calendar icon" />
        <div>
          <h4>11 Aug 2023</h4>
          <p style={{ fontSize: "small" }}>Wednesday</p>
        </div>
      </div>
      <div className="filter-option">
        <img src="./profile-2user.png" alt="Profile icon" />
        <div>
          <h4>2 Adults, 1 Child</h4>
          <p style={{ fontSize: "small" }}>1 Room</p>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search packages..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      
    </div>
  );
}

export default SearchFilter;
