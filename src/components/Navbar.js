import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Menu', path: '/menu' },
    { title: 'About', path: '/about' },
    { title: "What's New", path: '/news' },
    { title: 'How to Order', path: '/how-to-order' },
    { title: 'Find Us', path: '/find-us' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="nav-left" style={{ marginLeft: '-85px' }}>
            <Link to="/how-to-order">HOW TO ORDER</Link>
            <Link to="/menu">OUR MENU</Link>
          </div>
          
          <div className="nav-center">
            <Link to="/" className="logo-container">
              <img 
                src="https://cdn-icons-png.flaticon.com/128/1507/1507115.png" 
                alt="Logo" 
                className="logo" 
              />
            </Link>
          </div>
          
          <div className="nav-right">
            <Link to="/news">WHAT'S NEW</Link>
            <Link to="/about">ABOUT US</Link>
          </div>
        </div>
        <button className="menu-toggle" onClick={handleMenuClick}>
          ☰
        </button>
      </nav>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <div className="mobile-menu-header">
            <div className="close-btn" onClick={handleMenuClick}>✕</div>
          </div>
          
          <div className="mobile-menu-items">
            <a href="/how-to-order" className="menu-item" onClick={handleLinkClick}>How to Order</a>
            <a href="/menu" className="menu-item" onClick={handleLinkClick}>Our Menu</a>
            <a href="/whats-new" className="menu-item" onClick={handleLinkClick}>What's New</a>
            <a href="/about" className="menu-item" onClick={handleLinkClick}>About Us</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar; 
