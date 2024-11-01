import { Link } from 'react-router-dom';
import { useState } from 'react'

function NavBar() {
  const [isActive, setIsActive] = useState(false);
  
  // Toggle the burger menu
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <strong>About Katherine</strong>
          </Link>
  
          {/* Burger menu for mobile */}
          <a
            role="button"
            className={`navbar-burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={handleToggle}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/resume">
              Resume
            </Link>
            <Link className="navbar-item" to="/portfolio">
              Portfolio
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
          </div>
  
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button is-light"
                  href="https://github.com/katherinearenas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
        </nav> 
  )};
export default NavBar
    {/* <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
       
          className={currentPage === '/portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
    </nav>
  );
}

export default Nav; */}
