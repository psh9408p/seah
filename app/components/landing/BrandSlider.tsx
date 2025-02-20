"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BrandSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return <Slider {...settings}>{/* 슬라이더 내용 */}</Slider>;
};

export default BrandSlider;
