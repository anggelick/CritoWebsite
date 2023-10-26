import './Critosix.css';
import React from 'react'
import CritoBusinessPicture from '../../assets/images/Crito_business_picture.png'
import CritoResponsivePicture from '../../assets/images/Crito_responsive_picture.png'

const CritoSix = () => {
  return (
    <section className="crito-6">
      <div className="container">
        <div className="content">
          <div className="text-area">
            <h5>Project & Case Studies</h5>
            <h2>Let’s Looks Our Global Projects</h2>
          </div>
          <div className="project-and-cases">
            <a className="project" href="#">
              <img src={CritoBusinessPicture} className="CritoBusinessPicture" alt="A mans hand reading a business paper" />
              <h3>Grow your business</h3>
              <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
              <img src={CritoResponsivePicture} className="CritoResponsivePicture" alt="Pink Apple products on a desk" />
              <h3>Why your client needs a responsive website</h3>
              <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
              <img src="Crito_educate_picutre.png" alt="Desk with supplies" />
              <h3>Educate your employees to get better results</h3>
              <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
              <img src="Crito_important_picture.png" alt="Laptop with business intelligence insights" />
              <h3>Business insights is a important piece of your business</h3>
              <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
          </div>
        </div>
        <div className="center-button-group">
          <a className="btn-black" href="projects.html">All Recent Projects <i className="fa-regular fa-arrow-up-right"></i></a>
        </div>
      </div>
    </section>
  )
}

export default CritoSix