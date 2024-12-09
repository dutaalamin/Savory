import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuCategory.css';

function Wraps() {
  const navigate = useNavigate();
  
  const wrapsMenu = [
    {
      name: 'BBQ CHICKEN',
      price: 56000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Untitled-design-52-680x680.png'
    },
    {
      name: 'CHICKEN SLICE',
      price: 52000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Untitled-design-53-680x680.png'
    },
    {
      name: 'CHICKEN TERIYAKI',
      price: 56000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Untitled-design-55-680x680.png'
    },
    {
      name: 'EGG MAYO',
      price: 49000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Untitled-design-48-680x680.png'
    },
    {
      name: 'ITALIAN B.M.T',
      price: 65000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Untitled-design-56-680x680.png'
    },
    {
      name: 'ROASTED CHICKEN',
      price: 56000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Untitled-design-51-680x680.png'
    },
    {
      name: 'SPICY ITALIAN',
      price: 65000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Untitled-design-50-680x680.png'
    },
    {
      name: 'STEAK & CHEESE',
      price: 75000,
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Untitled-design-49-680x680.png'
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
      <h1 className="category-title">WRAPS</h1>
      <div className="menu-items-grid">
        {wrapsMenu.map((item) => (
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

export default Wraps; 