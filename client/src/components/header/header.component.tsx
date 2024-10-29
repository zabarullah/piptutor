import React, {useState } from 'react';
import useAOS from '../../hooks/useAOS';
import './header.styles.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the hamburger menu

  useAOS(); // use the custom hook to use AOS

  // Function to toggle the menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="container padding">
      {/* Header with Hamburger */}
      <header className="header">
        <h1 className="shadow">PipTutor</h1>
        <nav className="nav">
          <ul>
            <li className="p-1" data-aos="fade-down" data-aos-delay="300">
              <a href="#home" className="link">
                Home
              </a>
            </li>
            <li  data-aos="fade-down" data-aos-delay="450">
              <a href="#about" className="link">
                About
              </a>
            </li>
            <li  data-aos="fade-down" data-aos-delay="650">
              <a href="#services" className="link">
                Services
              </a>
            </li>
            <li  data-aos="fade-down" data-aos-delay="800">
              <a href="#contact" className="link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div
          className="hamburger"
          onClick={toggleMenu}
          data-testid="hamburger-menu"
        >
          <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
      </header>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <nav
          className="hamburger-nav"
          data-testid="hamburger-menu-nav"
        >
          <ul>
            <li data-aos="fade-left" data-aos-delay="300">
              <a href="#home" className="link">
                Home
              </a>
            </li>
            <li data-aos="fade-left" data-aos-delay="600">
              <a href="#about" className="link">
                About
              </a>
            </li>
            <li data-aos="fade-left" data-aos-delay="900">
              <a href="#services" className="link">
                Services
              </a>
            </li>
            <li data-aos="fade-left" data-aos-delay="1200">
              <a href="#contact" className="link">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
