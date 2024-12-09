import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://www.subway.co.id/wp-content/uploads/2024/01/8-680x680.png",
      
    },
    {
      image: "https://www.subway.co.id/wp-content/uploads/2024/01/5-680x680.png",
      
    },
    {
      image: "https://www.subway.co.id/wp-content/uploads/2024/01/2-680x680.png",
      
    },
    {
      image: "https://www.subway.co.id/wp-content/uploads/2024/01/1-680x680.png",
      
    },
    {
      image: "https://www.subway.co.id/wp-content/uploads/2024/01/15-680x680.png",
      
    },
    {
      image: "https://www.subway.co.id/wp-content/uploads/2024/01/13-680x680.png",
      
    }
  ];

  const handleSeeMoreClick = () => {
    navigate('/menu');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              OUR
              <span className="highlight">MENU</span>
            </h1>
            <p className="description-line">Where every bite tells the story of freshness,</p>
            <p className="description-line">quality, and passion for great taste.</p>
            <p className="description-line">We've hit refresh on everything.</p>
            <button className="see-more-btn" onClick={handleSeeMoreClick}>See More</button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img 
            src="https://www.subway.co.id/wp-content/uploads/2021/08/spicy-italian.png"
            alt="Subway Sandwich"
            className="sandwich-image"
          />
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://instagram.com/subway" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://facebook.com/subway" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com/subway" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="/locations" className="social-icon">
            <FaMapMarkerAlt />
          </a>
        </div>
      </section>

      <section className="savory-indonesia">
        <h2 className="section-title">#TasteTheLove</h2>
        
        <div className="slider-container">
          <button className="slider-button prev" onClick={prevSlide}>❮</button>
          <div className="slider">
            {slides.map((slide, index) => (
              <div 
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <img src={slide.image} alt={slide.alt} />
              </div>
            ))}
          </div>
          <button className="slider-button next" onClick={nextSlide}>❯</button>
          
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 