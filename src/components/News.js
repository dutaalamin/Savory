import React from 'react';
import './News.css';

const News = () => {
  return (
    <div className="news-container">
      <h1 className="news-title">What's New</h1>
      <div className="news-grid">
        {/* Card 1 */}
        <div className="news-card">
          <div className="news-image">
            <img src="https://images.unsplash.com/photo-1509722747041-616f39b57569" alt="Italian Sub Sandwich" />
            <span className="news-category">New Menu</span>
          </div>
          <div className="news-content">
            <span className="news-date">March 15, 2024</span>
            <h3>Italian Supreme Sub Launch</h3>
            <p>Introducing our new Italian Supreme Sub with premium cold cuts, fresh mozzarella, and Mediterranean herbs.</p>
            <button className="read-more">Read More</button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card">
          <div className="news-image">
            <img src="https://images.unsplash.com/photo-1540713434306-58505cf1b6fc" alt="Breakfast Menu" />
            <span className="news-category">Special Offer</span>
          </div>
          <div className="news-content">
            <span className="news-date">March 10, 2024</span>
            <h3>Breakfast Menu Launch</h3>
            <p>Start your day right with our new breakfast menu featuring egg & cheese subs and fresh coffee.</p>
            <button className="read-more">Read More</button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="news-card">
          <div className="news-image">
            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c" alt="Healthy Options" />
            <span className="news-category">Healthy Menu</span>
          </div>
          <div className="news-content">
            <span className="news-date">March 5, 2024</span>
            <h3>New Healthy Options Available</h3>
            <p>Discover our new range of salad bowls and low-carb wraps perfect for health-conscious customers.</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News; 