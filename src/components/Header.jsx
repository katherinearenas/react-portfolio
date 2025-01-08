import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Katherine's Porfolio</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? "Close" : "Menu"}
        </button>
        <nav className={`nav ${isOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            <li><Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;