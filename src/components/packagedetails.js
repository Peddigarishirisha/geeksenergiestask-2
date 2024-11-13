import React from "react";
import { useParams } from "react-router-dom";
import "./packegedetail.css"

function PackageDetails({ packages }) {
  const { id } = useParams();
  const packageDetails = packages.find(pkg => pkg.id === parseInt(id));

  if (!packageDetails) {
    return <div>Package not found  </div>;
  }

  return (
    <div className="package-details">
  <img src={packageDetails.image} alt={packageDetails.title} />
  <div className="package-details-content">
    <h2>{packageDetails.title}</h2>
    <p className="sub-info"> <strong>Location:</strong> {packageDetails.location}</p>
    <div className="days-info">
      <span>{packageDetails.days} Days</span> | <span>{packageDetails.nights} Nights</span>
    </div>
    <div className="price-info">
      <span className="price">₹Price{packageDetails.price}</span>
      <span className="original-price">₹Original Price{packageDetails.originalPrice}</span>
    </div>
  </div>
</div>

  );
}

export default PackageDetails;
