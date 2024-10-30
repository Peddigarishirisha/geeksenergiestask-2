// SearchFilter.js
import React from "react";
import "./search.css";

function SearchFilter() {
  return (
    <div className="search-filter">
      <div className="filter-option">
        <i className="fa fa-map-marker-alt"></i>
        <div>
          <h4>Munnar</h4>
          <p style={{fontSize:"small"}}>47 Packages</p>
        </div>
      </div>
      <div className="filter-option">
       <img src="./calendar.png"></img>
        <div>
          <h4>11 Aug 2023</h4>
          <p style={{fontSize:"small"}}>Wednesday</p>
        </div>
      </div>
      <div className="filter-option">
       <img src="./profile-2user.png"></img>
        <div>
          <h4>2 Adults, 1 Child</h4>
          <p style={{fontSize:"small"}}>1 Room</p>
        </div>
      </div>
      <button className="update-button">Update Search</button>
    </div>
  );
}

export default SearchFilter;
