import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuCategory.css';

function Sandwiches() {
  const navigate = useNavigate();
  
  const sandwichesMenu = [
    {
      name: 'ROAST CHICKEN',
      price: 39500,
      image: 'https://www.subway.co.id/wp-content/uploads/2024/01/7-680x680.png'
    },
    {
      name: 'TUNA MAYO',
      price: 39500,
      image: 'https://www.subway.co.id/wp-content/uploads/2024/01/3-680x680.png'
    },
    {
      name: 'BBQ CHICKEN',
      price: 39500,
      image: 'https://www.subway.co.id/wp-content/uploads/2024/01/12-680x680.png'
    },
    {
      name: 'CHICKEN TERIYAKI',
      price: 39500,
      image: 'https://www.subway.co.id/wp-content/uploads/2024/01/10-680x680.png'
    },
    {
      name: 'SUBWAY PIZZA MELT',
      price: 52000,
      image: 'https://www.subway.co.id/wp-content/uploads/2024/01/PizzaMelt-WEB-680x680.png'
    },
    {
      name: 'SUBWAY DOUBLE BLT',
      price: 52000,
      image: 'https://www.subway.co.id/wp-content/uploads/2024/01/9-680x680.png'
    },
    {
      name: 'ROAST BEEF',
      price: 59000,
      image: 'https://www.subway.co.id/wp-content/uploads/2024/01/6-680x680.png'
    },
    {
      name: 'SPICY ITALIAN',
      price: 49000,
      image: 'https://www.subway.co.id/wp-content/uploads/2024/01/4-680x680.png'
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
      <h1 className="category-title">SANDWICHES</h1>
      <div className="menu-items-grid">
        {sandwichesMenu.map((item) => (
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

export default Sandwiches; 