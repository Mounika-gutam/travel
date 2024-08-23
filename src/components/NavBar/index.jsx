import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/"><div className="brand-title"><img src="https://i.pinimg.com/564x/f7/12/d5/f712d5ee2baa6415260d2d105f727a84.jpg" alt="logo" className="logo" /></div></Link>
      <button className="toggle-button" onClick={handleToggle}>
          <FaBars className="toggle-icon" />
      </button>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/view-page" onClick={closeMenu}>About</Link></li>
          <li><Link to="/tours" onClick={closeMenu}>Tours</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>
      <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </nav>
  );
};

export default Navbar;