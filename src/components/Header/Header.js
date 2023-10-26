import React from 'react'
import critologo from '../../assets/images/Crito_logo_startpage.png'
import CritoOne from '../Crito1Section/CritoOne'

const Header = () => {
  return (
    <header>

<div className="container">
        <a href="index.html">
        <img className="critologo" src={critologo} /></a>
        <button className="menu-bars"><i className="menu-bars fa-solid fa-bars-staggered"></i></button>
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
              <a className="active" href="home.html">Home</a>
              <a href="services.html">Service</a>
              <a href="news.html">News</a>
              <a href="contact.html">Contact</a>
            </nav>
            <a className="btn-yellow btn-login" href="login.html">Log in <i className="fa-regular fa-arrow-up-right"></i></a>
          </div>
        </div>
      </div>



    </header>
  )
}

export default Header