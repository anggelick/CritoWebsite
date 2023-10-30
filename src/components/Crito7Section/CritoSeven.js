import './CritoSeven.css';
import React from 'react'
import critoTeam1Picture from '../../assets/images/crito_team1_picture.jpg'
import critoTeam2Picture from '../../assets/images/crito_team2_picture.jpg'
import critoTeam3Picture from '../../assets/images/crito_team3_picture.jpg'
import critoTeam4Picture from '../../assets/images/crito_team4_picture.jpg'
import critoStarReview from '../../assets/images/crito_star_review.svg'
import critoCassandraPicture from '../../assets/images/Crito_Cassandra_picture.svg'
import critoAmandaPicture from '../../assets/images/Crito_Amanda_picture.svg'
import critoJackPicture from '../../assets/images/Crito_Jack_picture.svg'
import ButtonBlack from '../Generics/Button/BlackButton';

const CritoSeven = () => {
  return (
    <section className="crito-7">
      <div className="container">
        <div className="content">
          <div className="textarea">
            <h5>Meet Our Team</h5>
            <h2>Experience Team Members</h2>
            <div className="center-button-group">
              <a className="btn-transperant2" href="projects.html">Browse Team <i
                  className="fa-regular fa-arrow-up-right"></i></a>
            </div>
          </div>
          <div className="carousel visible-xs visible-sm slideshowElement" 
            data-flickity="{ &quot;fullscreen&quot;: true,&quot;wrapAround&quot;: true }" />
            <div className="gallery-cell">
              <div className="gallery-image">
                <img className="img-responsive critoTeam1Picture" src={critoTeam1Picture} alt="Chania" />
                <h3>Kristine Palmer</h3>
                <p>Chef Operation Officer</p>
              </div>
            </div>
            <div className="gallery-cell">
              <div className="gallery-image">
                <img className="img-responsive critoTeam2Picture" src={critoTeam2Picture} alt="Chania" />
                <h3>Mark Aubri</h3>
                <p>Senior Consultant</p>
              </div>
            </div>
            <div className="gallery-cell">
              <div className="gallery-image">
                <img className="img-responsive critoTeam3Picture" src={critoTeam3Picture} alt="Chania" />
                <h3>Kimberly Hansen</h3>
                <p>Senior Consultant</p>
              </div>
            </div>
            <div className="gallery-cell">
              <div className="gallery-image">
                <img className="img-responsive critoTeam4Picture" src={critoTeam4Picture} alt="Chania" />
                <h3>Justin Willoman</h3>
                <p>Senior Tech Consultant</p>
              </div>
            </div>
          </div>
          <div className="carousel hidden-xs hidden-sm slideshowElement"
            data-flickity="{ &quot;fullscreen&quot;: true,&quot;wrapAround&quot;: true }"/>
            <div className="gallery-cell-dt">
              <div className="gallery-image">
                <img className="img-responsive critoTeam1Picture" src={critoTeam1Picture} alt="Chania"/>
                <h3>Kristine Palmer</h3>
                <p>Chef Operation Officer</p>
              </div>
              <div className="gallery-image">
                <img className="img-responsive critoTeam2Picture" src={critoTeam2Picture} alt="Chania"/>
                <h3>Mark Aubri</h3>
                <p>Senior Consultant</p>
              </div>
              <div className="gallery-image">
                <img className="img-responsive critoTeam3Picture" src={critoTeam3Picture} alt="Chania"/>
                <h3>Kimberly Hansen</h3>
                <p>Senior Consultant</p>
              </div>
              <div className="gallery-image">
                <img className="img-responsive critoTeam4Picture" src={critoTeam4Picture} alt="Chania"/>
                <h3>Justin Willoman</h3>
                <p>Senior Tech Consultant</p>
              </div>
            </div>
            <div className="gallery-cell-dt">
              <div className="gallery-image">
                <img className="img-responsive critoTeam1Picture" src={critoTeam1Picture} alt="Chania"/>
                <h3>Kristine Palmer</h3>
                <p>Chef Operation Officer</p>
              </div>
              <div className="gallery-image">
                <img className="img-responsive critoTeam2Picture" src={critoTeam2Picture} alt="Chania"/>
                <h3>Mark Aubri</h3>
                <p>Senior Consultant</p>
              </div>
              <div className="gallery-image">
                <img className="img-responsive critoTeam3Picture" src={critoTeam3Picture} alt="Chania"/>
                <h3>Kimberly Hansen</h3>
                <p>Senior Consultant</p>
              </div>
              <div className="gallery-image">
                <img className="img-responsive critoTeam4Picture" src={critoTeam4Picture} alt="Chania"/>
                <h3>Justin Willoman</h3>
                <p>Senior Tech Consultant</p>
              </div>
            </div>
          </div>
          <div className="testimonial-box">
            <div className="text-area">
              <h5>Testimonial</h5>
              <h2>What Our Client Says</h2>
            </div>
            <div className="our-services-boxes">
              <div className="box1">
                <div className="star-image">
                  <img className="img-responsive critoStarReview" src={critoStarReview} alt="Picture with stars"/>
                </div>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit
                  qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="flex-section">
                  <div className="client-picture">
                    <img className="img-responsive critoCassandraPicture" src={critoCassandraPicture} alt="Round picture with woman"/>
                  </div>
                  <div className="client">
                    <h3>Cassandra Warren</h3>
                    <p className="orange">Business Manager, Dorfus</p>
                  </div>
                </div>
              </div>
              <div className="box2">
                <div className="star-image">
                  <img className="img-responsive critoStarReview" src={critoStarReview} alt="Picture with stars"/>
                </div>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit
                  qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="flex-section">
                  <div className="client-picture">
                    <img className="img-responsive critoAmandaPicture" src={critoAmandaPicture} alt="Round picture with woman"/>
                  </div>
                  <div className="client">
                    <h3>Amanda Tulling</h3>
                    <p className="orange">Senior Developer, Square</p>
                  </div>
                </div>
              </div>
              <div className="box3">
                <div className="star-image">
                  <img className="img-responsive critoStarReview" src={critoStarReview} alt="Picture with stars"/>
                </div>
                <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit
                  qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                <div className="flex-section">
                  <div className="client-picture">
                    <img className="img-responsive critoJackPicture" src={critoJackPicture} alt="Round picture with man"/>
                  </div>
                  <div className="client">
                    <h3>Jack McDogglas</h3>
                    <p className="orange">Key Account Manager, Gobona</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-group">
            <ButtonBlack text="All Reviews" url="/services/reviews.html" 
                className="btn-black fa-regular fa-arrow-up-right" />
            </div>
          </div>
    </section>
  )
}

export default CritoSeven