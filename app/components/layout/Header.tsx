"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { name: "회사소개", href: "/introduction" },
    { name: "제품정보", href: "/products" },
    { name: "시공사례", href: "/cases" },
    { name: "보수/시공/구매/문의", href: "/inquiry" },
    // { name: "고객지원", href: "/support" },
    // { name: "문의하기", href: "/contact" },
  ];

  return (
    <header className="border-b shadow-sm bg-white sticky top-0 z-50">
      {/* 최상단 유틸리티 바 추가 */}
      <div className="bg-gray-50 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-end items-center h-10 text-sm text-gray-600">
            <a
              href="tel:010-1234-5678"
              className="hover:text-blue-600 flex items-center mr-4"
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              010-2681-5830
            </a>
            <a
              href="mailto:info@seaindustry.com"
              className="hover:text-blue-600"
            >
              pksd24@naver.com
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* 메인 헤더 영역 */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0 flex items-center">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              세아산업
            </span>
          </Link>

          {/* 모바일 메뉴 토글 버튼 */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden md:flex items-center py-4">
          {/* <button className="flex items-center gap-2 mr-8 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="font-medium">전체 카테고리</span>
          </button> */}
          <ul className="flex gap-8">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="font-medium relative group"
                >
                  {category.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 모바일 메뉴 */}
        <div
          className={`md:hidden bg-white border-t ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <nav className="py-4">
            <ul className="space-y-4 px-4">
              {/* <li>
                <button className="flex items-center gap-2 font-medium w-full p-2 rounded-lg hover:bg-gray-100 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <span>전체 카테고리</span>
                </button>
              </li> */}
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="block font-medium relative group p-2"
                  >
                    {category.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
