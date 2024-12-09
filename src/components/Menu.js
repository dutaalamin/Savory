import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function Menu() {
  const navigate = useNavigate();
  
  const menuCategories = [
    {
      id: 'sandwiches',
      title: 'All Sandwiches',
      image: 'https://www.subway.co.id/wp-content/uploads/2024/01/3-680x680.png'
    },
    {
      id: 'breakfast',
      title: 'Breakfast',
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Chicken-Ham-Egg-680x680.png'
    },
    {
      id: 'wraps',
      title: 'Wraps',
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/Grilled-Chicken-Wrap.png'
    },
    {
      id: 'salads',
      title: 'Salads',
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/11-680x680.png'
    },
    {
      id: 'sides',
      title: 'Sides',
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/RPLC-chocolatechipcookie_PR_PR-1.png'
    },
    {
      id: 'drinks',
      title: 'Drinks',
      image: 'https://www.subway.co.id/wp-content/uploads/2021/08/minutemadepulpyorange-680x680.png'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    navigate(`/menu/${categoryId}`);
  };

  return (
    <div className="menu-section">
      <div className="menu-container">
        <h1 className="menu-title">OUR MENU</h1>
        <div className="menu-grid">
          {menuCategories.map((category) => (
            <div 
              key={category.id} 
              className="menu-card"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="menu-image-container">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="menu-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                />
                <div className="menu-overlay">
                  <h3>{category.title}</h3>
                  <button className="view-menu-btn">View Menu</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu; 