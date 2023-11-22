import React from "react";
import "./Card.scss";

function Card(props:any) {
  const { cardIcon, cardTitle, cardDesc } = props;
  return (
    <div className="card-container">
      <div className="card-icon">{cardIcon}</div>
      <h3 className="card-title">{cardTitle}</h3>
      <p className="card-desc">{cardDesc}</p>
    </div>
  );
}

export default Card;
