import React from 'react';
import './HowToOrder.css';

function HowToOrder() {
  const steps = [
    {
      id: 1,
      title: "Choose Your Bread",
      description: "Select from our freshly baked breads",
      image: "https://www.busbysbakery.com/wp-content/uploads/2021/09/Subway-bread.jpeg"
    },
    {
      id: 2,
      title: "Pick Your Protein",
      description: "Choose your favorite meats or plant-based options",
      image: "https://preview.redd.it/my-subway-started-using-these-for-the-meats-v0-byqsx64bjmic1.jpeg?auto=webp&s=a1bd26f244c3a091cc32e9fda4ac89940c609b5e"
    },
    {
      id: 3,
      title: "Add Your Veggies",
      description: "Select fresh vegetables of your choice",
      image: "https://www.mashed.com/img/gallery/39-of-americans-agree-on-which-sandwich-chain-is-the-best/intro-1659375176.jpg"
    },
    {
      id: 4,
      title: "Choose Your Sauce",
      description: "Add your favorite sauces and dressings",
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2021-08/12/5/asset/3bc6841bc2c2/sub-buzz-3367-1628746789-16.jpg"
    },
    {
      id: 5,
      title: "Add Extras",
      description: "Add cheese, avocado, or other extras",
      image: "https://bakehouseqtr.com.au/wp-content/uploads/2019/03/Subway-Food_2-1067x800.jpg"
    },
    {
      id: 6,
      title: "Make it a Meal",
      description: "Add drinks and sides to complete your meal",
      image: "https://www.subway.co.id/wp-content/uploads/2021/08/spicy-italian.png"
    }
  ];

  return (
    <div className="how-to-order">
      <h1 className="section-title">How to Order</h1>
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-image">
              <img src={step.image} alt={step.title} />
              <div className="step-number">{step.id}</div>
            </div>
            <div className="step-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToOrder; 