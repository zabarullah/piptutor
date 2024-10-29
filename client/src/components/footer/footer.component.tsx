import React from 'react';
import './footer.styles.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content section-lg">
        <div className="footer-section about">
          <h2>PipTutor</h2>
          <p>
            Empowering traders with education and transparency in forex and
            commodities trading.
          </p>
        </div>
        <div className="footer-section links text-center">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>

          <i className="fa-brands fa-square-instagram" />
          <i className="fa-brands fa-square-facebook" />
          <i className="fa-brands fa-square-twitter" />
          <i className="fa-brands fa-square-youtube" />
          <i className="fa-solid fa-envelope" />
          <p>
            Email: <a href="info@piptutor.com">info@piptutor.com</a>
          </p>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>&copy; 2024 PipTutor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
