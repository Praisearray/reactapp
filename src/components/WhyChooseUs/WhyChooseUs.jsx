import React from "react";
import "./WhyChooseUs.scss";

function WhyChooseUs() {
  const whyChooseUs = [
    "Beautiful and easy to understand UI, professional animations",
    "Perfect design & clear code delivered",
    "Find more creative ideas for your projects",
    "Unlimited power and customization possibilities",
    "We maintain transparent communication throughout the project",
    "We provide ongoing support and maintenance services",
    "Our team of experienced developers delivers high-quality website development solutions",
  ];
  return (
    <div className="why-choose-us-container">
      <h1>Why You Choose Us ?</h1>
      <div className="points-container">
        {whyChooseUs.map((line, index) => {
          return (
            <div className="bullet-point" key={`point-${index}`}>
              <div className="circle"></div>
              <p>{line}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChooseUs;
