import './CritoFour.css';
import React from 'react'
import Critobackgroundpicture2 from '../../assets/images/Crito_background_picture2.svg'

const CritoFour = () => {
  return (
    <section className="crito-4">
      <div className="container">
        <div className="content">
          <div className="text-area">
            <h5>Our Services</h5>
            <h2>We Provide The Best<br/> Service For Consulting</h2>
          </div>
          <div className="our-services-boxes visible-xs visible-sm">
            <div className = "slideshowElement carousel"
              data-flickity="{ &quot;fullscreen&quot;: true,&quot;wrapAround&quot;: true }">
              <div className="gallery-cell">
                <div className="box1">
                  <h3>Business Advice</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                  <div className="round-arrow"><i className="fa-solid fa-circle-arrow-right"></i></div>
                </div>
              </div>
              <div className="gallery-cell">
                <div className="box2">
                  <h3>Startup Business</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                  <div className="round-arrow"><i className="fa-solid fa-circle-arrow-right"></i></div>
                </div>
              </div>
              <div className="gallery-cell">
                <div className="box3">
                  <h3>Financial Advice</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                  <div className="round-arrow"><i className="fa-solid fa-circle-arrow-right"></i></div>
                </div>
              </div>
              <div className="gallery-cell">
                <div className="box4">
                  <h3>Risk Management</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                  <div className="round-arrow"><i className="fa-solid fa-circle-arrow-right"></i></div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-services-boxes hidden-xs hidden-sm">
            <div className="box1">
              <p>____</p>
              <h3>Business Advice</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
              <div className="round-arrow"><i className="fa-solid fa-circle-arrow-right"></i></div>
            </div>
            <div className="box2">
              <p>____</p>
              <h3>Startup Business</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
              <div className="round-arrow white"><i className="fa-solid fa-circle-arrow-right"></i></div>
            </div>
            <div className="box3">
              <p>____</p>
              <h3>Financial Advice</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
              <div className="round-arrow"><i className="fa-solid fa-circle-arrow-right"></i></div>
            </div>
            <div className="box4">
              <p>____</p>
              <h3>Risk Management</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
              <div className="round-arrow"><i className="fa-solid fa-circle-arrow-right"></i></div>
            </div>
          </div>
          <div className="center-button-group">
            <a className="btn-transperant" href="projects.html">Browse Services <i
                className="fa-regular fa-arrow-up-right"></i></a>
          </div>
        </div>
        <div className="header-background">
          <img src={Critobackgroundpicture2} className='Critobackgroundpicture2' />
        </div>
      </div>
    </section>
  )
}

export default CritoFour