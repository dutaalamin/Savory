import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMenuClick = (e) => {
    e.preventDefault();
    
    // Jika di halaman utama, scroll ke menu section
    if (location.pathname === '/') {
      const menuSection = document.querySelector('.menu-section');
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Jika di halaman lain, navigasi ke halaman utama
      navigate('/');
    }
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

  return (
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
    </nav>
  );
}

export default Navbar; 