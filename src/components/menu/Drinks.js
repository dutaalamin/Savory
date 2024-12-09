import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuCategory.css';

function Drinks() {
  const navigate = useNavigate();
  
  const drinksMenu = [
    {
      name: 'COFFEE',
      price: 20000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/coffee.png'
    },
    {
      name: 'PULPY ORANGE',
      price: 15000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/minutemadepulpyorange-680x680.png'
    },
    {
      name: 'MINERAL WATER',
      price: 10000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Aqua-300ml-680x680.png'
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
      <h1 className="category-title">DRINKS</h1>
      <div className="menu-items-grid">
        {drinksMenu.map((item) => (
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

export default Drinks; 