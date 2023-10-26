import './CritoTwo.css';
import React from 'react'

const CritoTwo = () => {
  return (
    <section className="crito-2">
    <div className="container">
      <div className="content">
        <div className="partnership-brands">
          <img src="Crito_logo-1.svg" alt="" />
          <img src="Crito_logo_2.svg" alt="" />
          <img src="Crito_logo_3.svg" alt="" />
          <img src="Crito_logo_4.svg" alt="" />
          <img src="Crito_logo_5.svg" alt="" />
        </div>
        <div className="partnership-border">
          <div className="partnership-section">
            <div className="textarea-left">
              <h5>Features</h5>
              <h2>Our Accounting is trusted by thousand of companies</h2>
              <div className="center-button-group">
                <a className="btn-yellow" href="consulting.html">Learn More <i
                    className="fa-regular fa-arrow-up-right"></i></a>
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