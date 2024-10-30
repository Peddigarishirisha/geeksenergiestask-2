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
        <p ><img src="./flight.png"></img> Pickup: {location}</p>
        <div className="duration">
          <span> <img src="./timer.jpg"></img>{days} Days | {nights} Nights</span>
        </div>
        <p className="price">
          <span className="original-price">₹{originalPrice}</span> ₹{price}
        </p>
        <button className="view-details">View Details</button>
      </div>
    </div>
  );
}

export default PackageCard;
