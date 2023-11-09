import './CritoOne.css';
import React from 'react'
import CritoBackgroundPicture from '../../assets/images/Crito_background_picture.svg'
import CritoHeader from '../../assets/images/Crito_header_image.svg'
import Button from '../Generics/Button/Button';
import ScrollToTop from "react-scroll-to-top";

const CritoOne = () => {
  return (
    <section className="crito-1">
    <div className="container">
      <div className="content">
        <div className="text-area">
        <ScrollToTop smooth color="#F9D783" />
          <h1>We Provide The<br/> Best Business <br/> Solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
          <div className="button-group">
            <Button text="Get Consulting" url="/services/get-consulting"/>
            <Button text="Learn More" url="/services/consulting" />
          </div>
        </div>
      </div>
      <a url="/index.html"><img className="CritoHeader" src={CritoHeader} /></a>
      <div className="header-picture2">
        <img className="CritoBackgroundPicture" src={CritoBackgroundPicture} />
      </div>
    </div>
  </section>
  )
}

export default CritoOne