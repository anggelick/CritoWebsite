import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import critoTeam1Picture from '../../assets/images/crito_team1_picture.jpg'
import critoTeam2Picture from '../../assets/images/crito_team2_picture.jpg'
import critoTeam3Picture from '../../assets/images/crito_team3_picture.jpg'
import critoTeam4Picture from '../../assets/images/crito_team4_picture.jpg'

import "./FlickityCarousel.css";

const Carousel = props => {
  let flkty;
  let [carouselIndex] = useState(null);

  const handleChange = index => {
    console.log({ carouselIndex, index });
  };

  useEffect(() => {
    if (flkty) {
      console.log("this ran");
      flkty.on("settle", () => {
        console.log(`current index is ${flkty.selectedIndex}`);
      });

      flkty.on("change", index => {
        handleChange(index);
      });
    }
  }, [carouselIndex]);

  return (
    <Flickity
      flickityRef={c => (flkty = c)}
      options={{ initialIndex: props.initialIndex }}
    >
    <div className="gallery-image">
    <img className="img-responsive" src={critoTeam1Picture} /> 
    <div className="text">
    <h3>Kristine Palmer</h3>
    <p>Chef Operation Officer</p>
    </div>
    </div>
    <div className="gallery-image">
    <img className="img-responsive" src={critoTeam2Picture} />
    <div className="text">
    <h3>Mark Aubri</h3>
    <p>Senior Consultant</p>
    </div>
    </div>
    <div className="gallery-image">
    <img className="img-responsive" src={critoTeam3Picture} />
    <div className="text">
    <h3>Kimberly Hansen</h3>
    <p>Senior Consultant</p>
    </div>
    </div>
    <div className="gallery-image">
    <img className="img-responsive" src={critoTeam4Picture} />
    <div className="text">
    <h3>Justin Willoman</h3>
    <p>Senior Tech Consultant</p>
    </div>
    </div>
    <div className="gallery-image">
    <img className="img-responsive" src={critoTeam1Picture} />
    <div className="text">
    <h3>Kristine Palmer</h3>
    <p>Chef Operation Officer</p>
    </div>
    </div>
    <div className="gallery-image">
    <img className="img-responsive" src={critoTeam2Picture} />
    <div className="text">
    <h3>Mark Aubri</h3>
    <p>Senior Consultant</p>
    </div>
    </div>
    <div className="gallery-image">
    <img className="img-responsive" src={critoTeam3Picture} />
    <div className="text">
    <h3>Kimberly Hansen</h3>
    <p>Senior Consultant</p>
    </div>
    </div>
    <div className="gallery-image">
    <img className="img-responsive" src={critoTeam4Picture} />
    <div className="text">
    <h3>Justin Willoman</h3>
    <p>Senior Tech Consultant</p>
    </div>
    </div>
    </Flickity>
  );
};
export default Carousel