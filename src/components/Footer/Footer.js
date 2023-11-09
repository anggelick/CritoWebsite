import './Footer.css';
import React from 'react'
import CritoFooterLogo from '../../assets/images/Crito_footer_logo.svg'
import CritoBackgroundPicture3 from '../../assets/images/Crito_background_picture3.svg.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div class="footer-links-container container">
        <div class="footer-maintext footer-content">
          <div class="footer-maintext-logo">
            <Link to="/Home"> <img src={CritoFooterLogo} alt="Logotype in footer section" /></Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            obcaecati voluptas voluptates! Voluptates laborum nam ratione minus
            necessitatibus, iure praesentium.
          </p>
        </div>
        <div class="footer-links-company footer-content">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Works</a>
          <a href="#">Career</a>
        </div>
        <div class="footer-links-help footer-content">
          <h3>Help</h3>
          <a href="#">Customer Support</a>
          <a href="#">Delivery Details</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        <div class="footer-links-resources footer-content">
          <h3>Resources</h3>
          <a href="#">Free eBooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>
        <div class="footer-links-link footer-content">
          <h3>Link</h3>
          <a href="#">Free eBooks</a>
          <a href="#">Development Tutorial</a>
          <a href="#">How to - Blog</a>
          <a href="#">Youtube Playlist</a>
        </div>
        <div class="header-picture3">
          <img src={CritoBackgroundPicture3} alt="background-3"/>
        </div>
      </div>
      <div class="copy-right">
        <div class="container copy-right-items">
          <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
          <div class="footer-social-media">
            <a href="https://facebook.com" target="_blank"> <i class="fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-x-twitter"></i> </a>
            <a href="https://instagram.com" target="_blank"> <i class="fa-brands fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank"> <i class="fa-brands fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer