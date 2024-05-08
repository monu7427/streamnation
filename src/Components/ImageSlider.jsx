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
          <img src="https://img.freepik.com/free-vector/illustration-movie-watching-home-entertainment-concept-cartoon-illustration_74855-14558.jpg?w=900&t=st=1715188806~exp=1715189406~hmac=df114996d1bc350eb227b60de5a28d27338c217675cb837cebdf4c1afd8c8428" alt="Slide 1" className="w-full h-50 md:h-screen object-cover" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/man-watching-streaming-service-his-tv_23-2149047410.jpg?w=900&t=st=1715188858~exp=1715189458~hmac=7ccfdb5c269cb16139b5b8b182a4d32a964a019ffb7a2c40a08181b05b78257a" alt="Slide 2" className="w-full h-50 md:h-screen object-cover" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-vector/watch-online-movies-web-series-background_1017-38725.jpg?t=st=1715188942~exp=1715192542~hmac=03c9d7fd22069ac775cfcf1547f84a9ed549874e6a7350c0ed640ce2d5ef7cb4&w=1060" alt="Slide 3" className="w-full h-50 md:h-screen object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
