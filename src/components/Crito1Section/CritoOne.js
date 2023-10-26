import './CritoOne.css';
import React from 'react'
import CritoBackgroundPicture from '../../assets/images/Crito_background_picture.svg'
import CritoHeader from '../../assets/images/Crito_header_image.svg'

const CritoOne = () => {
  return (
    <section className="crito-1">
    <div className="container">
      <div className="content">
        <div className="text-area">
          <h1>We Provide The<br/> Best Business <br/> Solutions</h1>
          <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
          <div className="button-group">
            <a className="btn-yellow" url="/consulting.html">Get Consulting <i
                className="fa-regular fa-arrow-up-right"></i></a>
            <a className="btn-transperant" url="/services.html">Learn More <i
                className="fa-regular fa-arrow-up-right"></i></a>
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