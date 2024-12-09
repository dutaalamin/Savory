import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Sandwiches from './components/menu/Sandwiches';
import Breakfast from './components/menu/Breakfast';
import Wraps from './components/menu/Wraps';
import Salads from './components/menu/Salads';
import Sides from './components/menu/Sides';
import Drinks from './components/menu/Drinks';
import News from './components/News';
import About from './components/About';
import HowToOrder from './components/HowToOrder';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/sandwiches" element={<Sandwiches />} />
          <Route path="/menu/breakfast" element={<Breakfast />} />
          <Route path="/menu/wraps" element={<Wraps />} />
          <Route path="/menu/salads" element={<Salads />} />
          <Route path="/menu/sides" element={<Sides />} />
          <Route path="/menu/drinks" element={<Drinks />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
