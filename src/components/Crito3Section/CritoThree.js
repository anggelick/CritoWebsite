import './CritoThree.css';
import React from 'react'
import AboutCompanyPicture from '../../assets/images/crito_aboutcompany_picture.jpg'

const CritoThree = () => {
  return (
    <section className="crito-3">
      <div className="container">
        <div className="content-section-pic">
          <div className="picture">
          <img className="img-responsive AboutCompanyPicture" src={AboutCompanyPicture} />
            <div className="text-area">
              <h3>Samantha Brown, <span className="orange">Founder</span></h3>
              <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit."</p>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="company-box">
            <div className="company-box-left">
              <h5>About Company</h5>
              <h2>We Are Business<br/> Consulting & Credit <br/>Repair Experts</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officiis quas assumenda esse
                obcaecati? Ex esse error voluptates iure vel totam eos.<br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse quasi incidunt adipisci accusantium
                libero provident voluptate amet.</p>
              <div className="button-group">
                <button className="btn-black">
                  Learn More <i className="fa-regular fa-arrow-up-right"></i>
                </button>
                <button className="play-button">
                  <i className="fa-regular fa fa-play-circle"></i> Intro Video
                </button>
              </div>
            </div>
          </div>
          </div>
          </div>
    </section>
  )
}

export default CritoThree