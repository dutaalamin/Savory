import React from 'react';
import './About.css';

function About() {
  const sections = [
    {
      title: "Our Story",
      content: "Born from a passion for authentic flavors, Fresh Bites represents the perfect blend of culinary artistry and fresh ingredients. Each sandwich tells a story of carefully selected ingredients, masterful preparation, and our unwavering commitment to delivering exceptional taste in every bite.",
      image: "https://www.subway.co.id/wp-content/uploads/2021/08/spicy-italian.png"
    },
    {
      title: "Our Mission",
      content: "We're committed to providing fresh, delicious, made-to-order sandwiches and an exceptional dining experience. Every ingredient is carefully selected, every recipe perfected, and every meal customized to your taste.",
      image: "https://img.buzzfeed.com/buzzfeed-static/static/2021-08/12/5/asset/3bc6841bc2c2/sub-buzz-3367-1628746789-16.jpg"
    },
    {
      title: "Fresh Ingredients",
      content: "Quality is our priority. We partner with trusted suppliers to ensure every ingredient meets our high standards. From farm-fresh vegetables to premium meats, we believe great taste starts with great ingredients.",
      image: "https://www.mashed.com/img/gallery/39-of-americans-agree-on-which-sandwich-chain-is-the-best/intro-1659375176.jpg"
    },
    {
      title: "Our Values",
      content: "Integrity, quality, and customer satisfaction drive everything we do. We believe in sustainable practices, supporting local communities, and making a positive impact wherever we operate.",
      image: "https://www.subway.co.id/wp-content/uploads/2021/08/veggie-1-680x680.png"
    }
  ];

  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p className="header-subtitle">
          Serving Fresh, Made-to-Order Meals Since 1965
        </p>
      </div>

      <div className="about-sections">
        {sections.map((section, index) => (
          <div key={index} className="about-section">
            <div className="section-image">
              <img src={section.image} alt={section.title} />
            </div>
            <div className="section-content">
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About; 