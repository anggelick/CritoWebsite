import './CritoEight.css';
import React from 'react'
import critoArticlePictureOne from '../../assets/images/Crito_article_picture1.jpg'
import critoArticlePictureTwo from '../../assets/images/Crito_article_picture2.jpg'
import critoArticlePictureThree from '../../assets/images/Crito_article_picture3.jpg'
import ButtonTrans from '../Generics/Button/TransperantButton';

const CritoEight = () => {
  return (
    <section className="crito-8">
      <div className="container">
        <div className="content">
          <div className="textarea">
            <h5>Article & News</h5>
            <h2>Get Every Single Articles & News</h2>
            <div className="center-button-group">
            <ButtonTrans text="Browse Articles" url="/news/newsdetails" 
                className="btn-transperant2 fa-regular fa-arrow-up-right" />
            </div>
          </div>
          <div className="carousel visible-xs visible-sm slideshowElement"
            data-flickity="{ &quot;fullscreen&quot;: true,&quot;wrapAround&quot;: true }">
            <div className="gallery-cell">
              <div className="gallery-image">
                <div className="gallery-date"><b>25 </b><br/> Mar</div>
                <img className="img-responsive" src={critoArticlePictureOne} alt="Woman with a smile"/>
                <p>Business</p>
                <h3>How to Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
            </div>
            <div className="gallery-cell">
              <div className="gallery-image">
                <div className="gallery-date"><b>17 </b><br/> Mar</div>
                <img className="img-responsive critoArticlePictureTwo" src={critoArticlePictureTwo} alt="Picture with random text"/>
                <p>Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
            </div>
            <div className="gallery-cell">
              <div className="gallery-image">
                <div className="gallery-date"><b>13 </b><br/> Mar</div>
                <img className="img-responsive critoArticlePictureThree" src={critoArticlePictureThree} alt="Picture with books and mobile"/>
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
            </div>
          </div>
          <div className="carousel hidden-xs hidden-sm slideshowElement"
            data-flickity="{ &quot;fullscreen&quot;: true,&quot;wrapAround&quot;: true }">
            <div className="gallery-cell-dt">
              <div className="gallery-image">
                <div className="gallery-date"><b>25 </b><br/> Mar</div>
                <img className="img-responsive" src={critoArticlePictureOne} alt="Woman with a smile"/>
                <p>Business</p>
                <h3>How to Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
              <div className="gallery-image">
                <div className="gallery-date"><b>17 </b><br/> Mar</div>
                <img className="img-responsive critoArticlePictureTwo" src={critoArticlePictureTwo} alt="Picture with random text"/>
                <p>Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
              <div className="gallery-image">
                <div className="gallery-date"><b>13 </b><br/> Mar</div>
                <img className="img-responsive critoArticlePictureThree" src={critoArticlePictureThree} alt="Picture with books and mobile"/>
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
            </div>
            <div className="gallery-cell-dt">
              <div className="gallery-image">
                <div className="gallery-date"><b>25 </b><br/> Mar</div>
                <img className="img-responsive" src={critoArticlePictureOne} alt="Woman with a smile"/>
                <p>Business</p>
                <h3>How to Use Digitalization In The Classroom</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
              <div className="gallery-image">
                <div className="gallery-date"><b>17 </b><br/> Mar</div>
                <img className="img-responsive critoArticlePictureTwo" src={critoArticlePictureTwo} alt="Picture with random text"/>
                <p>Business</p>
                <h3>How To Implement Chat GPT In Your Projects</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
              <div className="gallery-image">
                <div className="gallery-date"><b>13 </b><br/> Mar</div>
                <img className="img-responsive critoArticlePictureThree" src={critoArticlePictureThree} alt="Picture with books and mobile"/>
                <p>Business</p>
                <h3>The Guide To Support Modern CSS Design</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CritoEight