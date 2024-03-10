import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {banner1,banner2,banner3,banner4} from "../assets";
 
const Hero = () => {
  const settings = {
    dots : false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <div className="w-64 h-300 overflow-hidden">
        <a href="/">
          <img src={banner1} alt="slide1" className="object-cover w-full h-full" />
        </a>
      </div>
      <div className="w-64 h-300 overflow-hidden">
        <a href="/">
          <img src={banner2} alt="slide2" className="object-cover w-full h-full" />
        </a>
      </div>
      <div className="w-64 h-300 overflow-hidden">
        <a href="/">
          <img src={banner3} alt="slide3" className="object-cover w-full h-full" />
        </a>
      </div>
      <div className="w-64 h-300 overflow-hidden">
        <a href="/">
          <img src={banner4} alt="slide4" className="object-cover w-full h-full" />
        </a>
      </div>
    </Slider>
  );
}

export default Hero;