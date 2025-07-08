import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>ROUH Studio</h3>
          <p>Wear your soul. Express your true colors.</p>
        </div>
        <div className="footer-socials">
          <a href="https://instagram.com/rouhstudio" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://facebook.com/rouhstudio" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
          <a href="https://twitter.com/rouhstudio" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="mailto:contact@rouhstudio.com" aria-label="Email"><FaEnvelope /></a>
        </div>
        <div className="footer-info">
          <p>© 2025 ROUH Studio. All rights reserved.</p>
          <p>
            <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
