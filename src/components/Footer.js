import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Menu</h3>
          <Link to="/menu/sandwiches">Sandwiches</Link>
          <Link to="/menu/wraps">Wraps</Link>
          <Link to="/menu/salads">Salads</Link>
          <Link to="/menu/sides">Sides</Link>
          <Link to="/menu/drinks">Drinks</Link>
        </div>

        <div className="footer-section">
          <h3>About</h3>
          <Link to="/about" className="footer-about-link">About Us</Link>
          <Link to="/how-to-order">How to Order</Link>
          <Link to="/news">What's New</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Customer Service</p>
          <p>Email: info@savory.co.id</p>
          <p>Phone: (021) 1234-5678</p>
        </div>

        <div className="footer-section">
          <h3>Sign Up to Newsletter</h3>
          <p className="newsletter-text">Get the latest updates and special offers</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Duta Alamin. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
