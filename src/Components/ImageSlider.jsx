import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div>
          <img src="images/banner0.jpg" alt="Slide 1" className="w-full h-50 md:h-screen object-cover" />
        </div>
        <div>
          <img src="images/banner1.jpg" alt="Slide 2" className="w-full h-50 md:h-screen object-cover" />
        </div>
        <div>
          <img src="images/banner2.jpg" alt="Slide 3" className="w-full h-50 md:h-screen object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
