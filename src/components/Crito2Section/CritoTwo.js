import Button from '../Generics/Button/Button';
import './CritoTwo.css';
import React from 'react'
import CritoLogo1 from '../../assets/images/Crito_logo-1.svg'
import CritoLogo2 from '../../assets/images/Crito_logo_2.svg'
import CritoLogo3 from '../../assets/images/Crito_logo_3.svg'
import CritoLogo4 from '../../assets/images/Crito_logo_4.svg'
import CritoLogo5 from '../../assets/images/Crito_logo_5.svg'


const CritoTwo = () => {
  return (
    <section className="crito-2">
    <div className="container">
      <div className="content">
        <div className="partnership-brands">
          <img src={CritoLogo1} alt="logo" />
          <img src={CritoLogo2} alt="logo" />
          <img src={CritoLogo3} alt="logo" />
          <img src={CritoLogo4} alt="logo" />
          <img src={CritoLogo5} alt="logo" />
        </div>
        <div className="partnership-border">
          <div className="partnership-section">
            <div className="textarea-left">
              <h5>Features</h5>
              <h2>Our Accounting is trusted by thousand of companies</h2>
              <div className="center-button-group">
                <Button text="Learn More" url="/services" 
                className="fa-regular fa-arrow-up-right" />
              </div>
            </div>
            <div className="textarea-right">
              <div className="partnership-section-mobile">
                <div className="partnership-section-box">
                  <i className="fa-regular fa-handshake"></i>
                  <h3>Buisness Advice</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="partnership-section-box">
                  <i className="fa-solid fa-chart-column"></i>
                  <h3>Financial Advice</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
              <div className="partnership-section-mobile">
                <div className="partnership-section-box">
                  <i className="fa-regular fa-lightbulb"> </i>
                  <h3>Startup Business</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div className="partnership-section-box">
                  <i className="fa-solid fa-box-open"></i>
                  <h3>Risk Management</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CritoTwo