import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='navbar'>
      <div className='navTitle'>Jesús Ramírez</div>
      <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <Link to='introContainer' className='menuItem' smooth={true} duration={500} offset={-80} onClick={closeMenu}>
          Home
        </Link>
        <Link to='projects' className='menuItem' smooth={true} duration={500} offset={-80} onClick={closeMenu}>
          Projects
        </Link>

        <Link to='skillsContainer' className='menuItem' smooth={true} duration={500} offset={-80} onClick={closeMenu}>
          Skills
        </Link>
        <Link to='contactContainer' className='menuItem' smooth={true} duration={500} offset={-80} onClick={closeMenu}>
          Contact
        </Link>
      </div>
      <div className='menuToggle' onClick={handleToggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
    </nav>
  );
};

export default Navbar;
