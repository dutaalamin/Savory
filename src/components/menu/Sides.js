import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuCategory.css';

function Sides() {
  const navigate = useNavigate();
  
  const sidesMenu = [
    {
      name: 'OATMEAL RAISIN COOKIE',
      price: 15000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/png-transparent-oatmeal-raisin-cookies-chocolate-chip-cookie-peanut-butter-cookie-schmackary-s-baking-biscuit-680x680.png'
    },
    {
      name: 'CHOCOLATE CHIP COOKIE',
      price: 15000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/RPLC-chocolatechipcookie_PR_PR-1.png'
    },
    {
      name: 'DOUBLE CHOCOLATE CHIP COOKIE',
      price: 15000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/RPLC-doublechocolatechipcookie-1-680x680.png'
    },
    {
      name: 'WHITE COOKIE',
      price: 15000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/RPLC-whitechipmacadamianutcookie-1-680x680.png'
    }
  ];

  return (
    <div className="menu-category-container">
      <button 
        className="back-button"
        onClick={() => navigate('/menu')}
      >
        ← Back to Menu
      </button>
      <h1 className="category-title">SIDES</h1>
      <div className="menu-items-grid">
        {sidesMenu.map((item) => (
          <div key={item.name} className="menu-item-card">
            <div className="menu-item-image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="menu-item-info">
              <h3>{item.name}</h3>
              <span className="price">Rp{item.price.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sides; 