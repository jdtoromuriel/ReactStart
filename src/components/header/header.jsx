import { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

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
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/About'}>About</Link>
        </li>
        <li>
            <Link to={'/Services'}>Services</Link>
        </li>
        <li>
            <Link to={'/Contact'}>Contact</Link>
        </li> 
        </ul>
      </nav>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <span className="navbar__toggle-icon">&#9776;</span>
      </div>
    </header>
  );
};

export default Header;
