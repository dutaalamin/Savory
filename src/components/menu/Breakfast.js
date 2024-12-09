import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuCategory.css';

function Breakfast() {
  const navigate = useNavigate();
  
  const breakfastMenu = [
    {
      name: 'BBQ CHICKEN',
      price: 56000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Breakfast-Strip-Egg-680x680.png'
    },
    {
      name: 'CHICKEN SLICE',
      price: 52000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Chicken-Ham-Egg-680x680.png'
    },
    {
      name: 'EGG & CHEESE',
      price: 49000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Cheese-Egg-680x680.png'
    },
    {
      name: 'TUNA & EGG',
      price: 37000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Tuna-Egg-680x680.png'
    }
  ];

  return (
    <div className="menu-category-container">
      <div className="category-header">
        <button 
          className="back-button"
          onClick={() => navigate('/menu')}
        >
          ← Back to Menu
        </button>
        <h1 className="category-title">BREAKFAST</h1>
      </div>
      <div className="menu-items-grid">
        {breakfastMenu.map((item) => (
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

export default Breakfast; 