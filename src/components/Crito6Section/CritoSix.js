import './Critosix.css';
import React from 'react'
import CritoBusinessPicture from '../../assets/images/Crito_business_picture.png'
import CritoResponsivePicture from '../../assets/images/Crito_responsive_picture.png'
import CritoEducatePicutre from '../../assets/images/Crito_educate_picutre.png'
import CritoImportantPicture from '../../assets/images/Crito_important_picture.png'
import ButtonBlack from '../Generics/Button/BlackButton';

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
              <img src={CritoEducatePicutre} className='CritoEducatePicutre' alt="Desk with supplies" />
              <h3>Educate your employees to get better results</h3>
              <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
              <img src={CritoImportantPicture} className="CritoImportantPicture" alt="Laptop with business intelligence insights" />
              <h3>Business insights is a important piece of your business</h3>
              <div className="readmore"> Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
          </div>
        </div>
        <div className="center-button-group">
        <ButtonBlack text="All Recent Projects" url="/projects.html" className="btn-black fa-regular fa-arrow-up-right" />
        </div>
      </div>
    </section>
  )
}

export default CritoSix