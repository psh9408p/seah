"use client";
// BrandSlider.jsx
import React from "react";
import Image from "next/image";
import { brandData } from "../data/brandData";

const BrandGrid = () => {
  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4 max-w-8xl">
        <article className="flex flex-col lg:flex-row gap-12">
          {/* 왼쪽 설명 영역 */}
          <div className="lg:w-1/4 space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Our
              <br />
              Brands
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                아모레퍼시픽이 선보이는
                <br />
                글로벌 뷰티 브랜드
              </p>
              <a
                href="#"
                className="inline-flex items-center text-gray-900 hover:text-gray-600 transition-colors"
              >
                전체보기
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* 오른쪽 브랜드 그리드 */}
          <div className="lg:w-3/4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {brandData.map((brand) => (
                <div
                  key={brand.id}
                  className="group relative aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden hover:-translate-y-1 transition-all duration-300"
                >
                  <a
                    href={brand.brandLink}
                    className="block w-full h-full relative"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={brand.brandImg}
                      alt={brand.brandAlt}
                      fill
                      className="object-fill transform group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* <div className="absolute inset-x-0 bottom-0 bg-black/50 p-3">
                      <span className="block text-center text-sm font-medium text-white">
                        {brand.brandAlt}
                      </span>
                    </div> */}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BrandGrid;
