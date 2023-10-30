import React from 'react'
import './CritoContactSection2.css';

const CritoContactSection2 = () => {
  return (
    <section className="crito-contact-2">
      <div className="container">
        <div className="content">
          <div className="our-services-boxes">
            <div className="box1">
              <div className="round-arrow">
                <i className="fa-sharp fa-solid fa-circle-location-arrow"></i>
              </div>
              <div className="text-area">
                <h3>Visit us</h3>
                <p>Sveavägen 31 <br/> 111 34 STOCKHOLM</p>
              </div>
            </div>
            <div className="box2">
              <div className="round-arrow">
                <i className="fa-solid fa-circle-phone"></i>
              </div>
              <div className="text-area">
                <h3>Call us</h3>
                <p>+46 (8) 121 470 50 <br/>
                  +46 (8) 121 470 51
                </p>
              </div>
            </div>
            <div className="box3">
              <div className="round-arrow">
                <i className="fa-solid fa-circle-envelope"></i>
              </div>
              <div className="text-area">
                <h3>Email us</h3>
                <p>info@crito.com<br/>
                  support@crito.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CritoContactSection2