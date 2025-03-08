"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/고무블럭/1show12301.jpg",
      alt: "고무블럭 시공 사례 1",
    },
    {
      image: "/images/고무블럭/1show12302.jpg",
      alt: "고무블럭 시공 사례 2",
    },
    {
      image: "/images/고무블럭/1show12303.jpg",
      alt: "고무블럭 시공 사례 3",
    },
    {
      image: "/images/고무블럭/1show12304.jpg",
      alt: "고무블럭 시공 사례 4",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[400px] w-full flex">
      {/* 메시지 영역 */}
      <div className="w-[30%] bg-gradient-to-r  text-black p-8 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">
          최고의 품질로 신뢰받는
          <br />
          세아산업의 파트너
        </h1>
        <p className="text-lg mb-8">
          30년 이상의 경험과 기술력으로
          <br />
          고품질 고무매트 및 고무블럭 제조 전문기업
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-800 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block w-fit"
        >
          상담 문의하기
        </Link>
      </div>

      {/* 이미지 슬라이더 영역 */}
      <div className="relative w-[70%]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        {/* 이전/다음 버튼 */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="이전 슬라이드"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
          aria-label="다음 슬라이드"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* 슬라이드 인디케이터 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`${index + 1}번 슬라이드로 이동`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
