// Navbar.js
import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FLYDEN <span style={{ color: "red" }}>HOLIDAYS</span></div>
      <ul className="nav-links">
        <li><span style={{ color: "red" }}>Home</span></li>
        <li>International Packages</li>
        <li>India Packages</li>
        <li>Talk to Us</li>
      </ul>
      <div className="profile-icon">
      <i className="fa fa-bell"></i>
      <img src="./pic7.jpeg"></img>
      </div>
    </nav>
  );
}

export default Navbar;
