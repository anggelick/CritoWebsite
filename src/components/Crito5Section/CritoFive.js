import './CritoFive.css';
import React from 'react'
import Critowhychooseuspricture from '../../assets/images/Crito_whychooseus_pricture.png'

const CritoFive = () => {
  return (
    <section className="crito-5">
      <div className="container">
        <div className="content">
          <div className="text-area">
            <h5>Why Choose Us</h5>
            <h2>Why We Are The<br/> Best Business<br/> Consulting Agency</h2>
          </div>
          <div className="flex-section">
            <div className="four-things-group">
              <div className="one-thing">
                <h3><i className="fa-regular fa-thumbs-up"></i> Process Excellence</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="one-thing">
                <h3> <i className="fa-regular fa-star"></i> Strategic Planning</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="one-thing">
                <h3> <i className="fa-solid fa-gear"></i> Experience Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
              </div>
              <div className="one-thing">
                <h3><i className="fa-regular fa-face-grin-hearts"></i> Artificial Inteligence</h3>
                <p>Lorem, ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="picture">
              <img className="img-responsive Critowhychooseuspricture" src={Critowhychooseuspricture}
                alt="Two Women communicate with laptop in hand" />
              <div className="picture-background">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CritoFive