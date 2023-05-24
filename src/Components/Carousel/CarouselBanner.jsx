import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function CarouselBanner({children}) {
    const settings = {
        fade: true,
        lazyLoad: true,
        // dots: true,
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        centerMode: true,
        // variableWidth: true,
        adaptiveHeight: true,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        // arrows: true,
      };
    return(
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}