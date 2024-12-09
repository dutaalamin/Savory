import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuCategory.css';

function Salads() {
  const navigate = useNavigate();
  
  const saladsMenu = [
    {
      name: 'BBQ CHICKEN',
      price: 56000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/11-680x680.png'
    },
    {
      name: 'CHICKEN SLICE',
      price: 52000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/1-680x680.png'
    },
    {
      name: 'CHICKEN TERIYAKI',
      price: 56000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/10-680x680.png'
    },
    {
      name: 'EGG MAYO',
      price: 49000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/8-680x680.png'
    },
    {
      name: 'ITALIAN B.M.T',
      price: 65000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/9-680x680.png'
    },
    {
      name: 'ROASTED CHICKEN',
      price: 56000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/6-680x680.png'
    },
    {
      name: 'SPICY ITALIAN',
      price: 65000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/4-680x680.png'
    },
    {
      name: 'STEAK & CHEESE',
      price: 75000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/5-680x680.png'
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
        <h1 className="category-title">SALADS</h1>
      </div>
      <div className="menu-items-grid">
        {saladsMenu.map((item) => (
          <div key={item.name} className="menu-item-card">
            <div className="menu-item-image">
              <img 
                src={item.image} 
                alt={item.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Found';
                }}
              />
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

export default Salads; 