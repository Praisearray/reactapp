import React from "react";
import "./ServiceCard.scss";

function ServiceCard(props) {
  const { serviceCardIcon, serviceCardTitle, serviceCardDesc } = props;

  return (
    <div className="service-card-container">
      <div className="service-card-icon">{serviceCardIcon}</div>
      <h2 className="service-card-title">{serviceCardTitle}</h2>
      <p className="service-card-desc">{serviceCardDesc}</p>
    </div>
  );
}

export default ServiceCard;
