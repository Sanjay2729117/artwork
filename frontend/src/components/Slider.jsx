import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";
import './css/Slider.css'
import cover1 from '../assets/cover.jpg'
import cover2 from '../assets/covers.jpg'
function PauseOnHover() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows:false,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <img className="image" src={cover1}/>
        </div>
        <div>
        <img className="image" src={cover2}/>
        </div>
        <div>
        <img className="image" src={cover1}/>
        </div>
       
      </Slider>
    </div>
  );
}

export default PauseOnHover;
