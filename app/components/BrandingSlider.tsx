"use client";
// BrandSlider.jsx
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// brandData.js (예시)
export const brandData = [
    {
        id: 1,
        brandName: "Sulwhasoo",
        brandImg: "images/main_image111.jpg",
        brandAlt: "설화수",
        brandDesc: "예술과 헤리티지로 빚어내는 아름다움의 세계",
        brandLink: "/int/ko/brands/sulwhasoo.html",
        brandLogo: "/int/ko/brands/__icsFiles/afieldfile/2023/01/19/main_3.png",
        brandSNS: [
            {
                type: "facebook",
                link: "https://www.facebook.com/sulwhasoo.official",
                icon: "/int/ko/resource/images/a/facebook.png",
                iconOver: "/int/ko/resource/images/a/facebook_over.png",
                alt: "facebook",
            },
            {
                type: "insta",
                link: "https://www.instagram.com/sulwhasoo.official/",
                icon: "/int/ko/resource/images/a/insta.png",
                iconOver: "/int/ko/resource/images/a/insta_over.png",
                alt: "instagram",
            },
            // 필요한 만큼 추가
        ],
    },
    {
        id: 2,
        brandName: "Laneige",
        brandImg: "images/main_image111.jpg",
        brandAlt: "라네즈",
        brandDesc: "OPEN TO WONDER.",
        brandLink: "/int/ko/brands/laneige.html",
        brandLogo:
            "/int/ko/brands/__icsFiles/afieldfile/2020/05/26/logo_brand_03_min.png",
        brandSNS: [
            {
                type: "facebook",
                link: "http://www.facebook.com/laneige.kr",
                icon: "/int/ko/resource/images/a/facebook.png",
                iconOver: "/int/ko/resource/images/a/facebook_over.png",
                alt: "facebook",
            },
            {
                type: "insta",
                link: "https://instagram.com/laneige_kr/",
                icon: "/int/ko/resource/images/a/insta.png",
                iconOver: "/int/ko/resource/images/a/insta_over.png",
                alt: "instagram",
            },
            // ...
        ],
    },
    {
        id: 3,
        brandName: "Innisfree",
        brandImg: "images/main_image111.jpg",
        brandAlt: "이니스프리",
        brandDesc:
            "Effective, Nature-Powered Skincare Discovered from the Island",
        brandLink: "/int/ko/brands/innisfree.html",
        brandLogo:
            "/int/ko/brands/__icsFiles/afieldfile/2023/03/08/main_170x22.png",
        brandSNS: [
            {
                type: "insta",
                link: "https://www.instagram.com/innisfreeofficial",
                icon: "/int/ko/resource/images/a/insta.png",
                iconOver: "/int/ko/resource/images/a/insta_over.png",
                alt: "instagram",
            },
            {
                type: "youtube",
                link: "https://www.youtube.com/@innisfreeofficial",
                icon: "/int/ko/resource/images/a/youtube.png",
                iconOver: "/int/ko/resource/images/a/youtube_over.png",
                alt: "youtube",
            },
            // ...
        ],
    },
    // 필요한 만큼 추가
];

const BrandSlider = () => {
    // react-slick 설정 (원하시는 대로 커스터마이징)
    const settings = {
        dots: true, // 하단에 점(인디케이터) 표시
        infinite: true, // 무한 반복
        speed: 500,
        slidesToShow: 3, // 한 화면에 보여줄 슬라이드 개수
        slidesToScroll: 1, // 한 번에 스크롤되는 슬라이드 개수
        centerMode: true, // 가운데 정렬 모드
        centerPadding: "0px", // 가운데 정렬 모드일 때 양 옆 패딩
        autoplay: true, // 자동 재생
        autoplaySpeed: 3000, // 자동 재생 속도(ms)
        responsive: [
            {
                breakpoint: 1024, // 1024px 이하일 때
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                },
            },
            {
                breakpoint: 768, // 768px 이하일 때
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    return (
        <div className="w-4/5 mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
                Follow Our Brands
            </h2>
            <Slider {...settings}>
                {brandData.map((brand) => (
                    <div
                        className="slide px-2.5"
                        key={brand.id}
                        role="option"
                        aria-describedby={`slick-slide${brand.id}`}
                    >
                        <div className="thum relative">
                            <img
                                src={brand.brandImg}
                                alt={brand.brandAlt}
                                className="w-full block"
                            />
                            <div className="over_area absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-6">
                                <p className="slide-desc text-center mb-4">
                                    {brand.brandDesc}
                                </p>
                                <p className="slide-more mb-6">
                                    <a
                                        href={brand.brandLink}
                                        className="btn inline-flex items-center border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors duration-300"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        자세히 보기
                                        <i className="icon icon-arrow-right ml-2">
                                            →
                                        </i>
                                    </a>
                                </p>
                                <div className="slide-sns sns flex justify-center gap-4">
                                    {brand.brandSNS.map((sns, index) => (
                                        <a
                                            key={index}
                                            href={sns.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="sns_icon_wrap group"
                                        >
                                            <div
                                                className={`sns_icon ${sns.type} relative w-8 h-8`}
                                            >
                                                <img
                                                    src={sns.icon}
                                                    alt={sns.alt}
                                                    className="w-full h-full absolute transition-opacity duration-300 group-hover:opacity-0"
                                                />
                                                <img
                                                    src={sns.iconOver}
                                                    alt={sns.alt}
                                                    className="over_img w-full h-full absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                />
                                            </div>
                                            <span className="blind sr-only">
                                                {sns.alt}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="logo mt-4 flex justify-center">
                            <span>
                                <img
                                    src={brand.brandLogo}
                                    alt={brand.brandName}
                                    className="h-8 object-contain"
                                />
                            </span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BrandSlider;
