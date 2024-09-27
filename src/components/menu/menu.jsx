import { useState } from 'react';
import './menu.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
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
      <div className='navbar-buscar'>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
        </svg>
        <input type="text" placeholder='Buscar receta' />
      </div>
    </header>

  );
};

export default Menu;
