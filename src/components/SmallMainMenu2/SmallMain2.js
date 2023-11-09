import React from 'react'
import './SmallMain2.css';
import CritoBackground from '../../assets/images/Crito_background_picture.svg';
import { NavLink } from 'react-router-dom';

const SmallMain2 = () => {
  return (
    <section className="crito-contact-1">
      <div className="container">
        <div className="small-main-menu">
          <nav>
              <NavLink to="/Home">Home</NavLink>
              <NavLink to="/News">News</NavLink>
          </nav>
        </div>
        <div className="text-area">
          <h2>News & Articles</h2>
        </div>
        <div className="header-picture">
          <img src={CritoBackground} alt="Crito_background"/>
        </div>
      </div>
    </section>
  )
}

export default SmallMain2