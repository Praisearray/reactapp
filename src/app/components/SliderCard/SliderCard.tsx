import React from "react";
import "./SliderCard.scss";

function SliderCard(props:any) {
  const { image, title, desc } = props;
  return (
    <div className="slider-card-container">
      <div className="slider-card-front">
        <img src={`./${image}`} alt={title} />
        <p className="image-title">{title}</p>
      </div>
      <div className="slider-card-back">
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default SliderCard;
