import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function CarouselMain({children}) {
    const settings = {
        dots: false,
        slidesToShow: 4,
        infinite: true,
        speed: 300,
        centerMode: false,
        adaptiveHeight: true,
        slidesToScroll:4,
        lazyLoad: `ondemand`,
        swipe: false,
      };
    return(
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}