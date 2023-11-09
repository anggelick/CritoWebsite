import './Header.css';
import React from 'react';
import critologo from '../../assets/images/Crito_logo_startpage.png';
import Button from '../Generics/Button/Button';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <div className="container">
        <Link to="/Home"><img src={critologo} alt="crito logotype"/></Link>
        <div className="menu">
          <div className="top-menu">
            <div className="contact-information">
              <div className="content-box">
                <i className="fa-regular fa-phone-volume"></i>
                +46 (8) 121 470 50
              </div>
              <div className="content-box">
                <i className="fa-regular fa-envelope"></i>
                info@crito.com
              </div>
              <div className="content-box last">
                <i className="fa-regular fa-location-dot"></i>
                Sveavägen 31, 111 34 STOCKHOLM
              </div>
            </div>
            <div className="social-media">
              <a href="https://facebook.com" target="_blank"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://twitter.com" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://instagram.com" target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
          <div className="main-menu">
            <nav>
              <NavLink to="/Home">Home</NavLink>
              <NavLink to="/Services">Service</NavLink>
              <NavLink to="/News">News</NavLink>
              <NavLink to="/Contacts">Contact</NavLink>
            </nav>
            <Button text="Log in" url="/login" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header