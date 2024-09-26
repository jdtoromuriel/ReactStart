import { useState } from 'react';
import './header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <h1>Mi Sitio</h1>
      </div>
      <nav className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__toggle-icon">&#9776;</span>
      </div>
    </header>
  );
};

export default Header;
