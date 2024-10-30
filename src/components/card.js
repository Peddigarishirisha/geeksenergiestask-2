import React, { useState } from "react";
import "./card.css";

function PackageCard({ image, title, location, days, nights, price, originalPrice }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="package-card">
      <div className="heart-icon" onClick={toggleFavorite}>
        <i className="fa fa-heart" style={{ color: isFavorite ? "red" : "gray" }}></i>
      </div>
      <img src={image} alt={title} className="package-image" />
      <div className="package-info">
        <h3>{title}</h3>
        <p><img src="./flight.png" alt="Flight icon" /> Pickup: {location}</p>
        <div className="duration">
          <span><img src="./timer.jpg" alt="Timer icon" /> {days} Days | {nights} Nights</span>
        </div>
        <p className="price-section">
          <span className="original-price">₹{originalPrice}</span>
          <span className="discounted-price">₹{price}</span>
        </p>
        <button className="view-details">View Details</button>
      </div>
    </div>
  );
}

export default PackageCard;
