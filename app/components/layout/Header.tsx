"use client";
import Link from "next/link";
// import { useState } from "react";

export default function Header() {
    // const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        { name: "회사소개", href: "/new" },
        { name: "제품정보", href: "/only" },
        { name: "이벤트", href: "/events" },
        { name: "베스트", href: "/best" },
    ];

    return (
        <header className="border-b">
            <div className="container mx-auto px-4">
                {/* 상단 로고 및 유틸리티 */}
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex-shrink-0">
                        <span className="text-2xl font-bold text-blue-800">
                            세아산업
                        </span>
                    </Link>

                    {/* 검색바
                    <div className="flex-1 max-w-xl mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="라면은 역시 오뚜기 진라면~"
                                className="w-full px-4 py-2 border rounded-full bg-gray-50"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="absolute right-3 top-1/2 -translate-y-1/2">
                                <svg
                                    className="w-5 h-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div> */}

                    {/* 유틸리티 메뉴 */}
                    {/* <div className="flex items-center gap-6">
                        <Link
                            href="/login"
                            className="flex flex-col items-center text-sm"
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
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>
                            <span>로그인</span>
                        </Link>
                        <Link
                            href="/cart"
                            className="flex flex-col items-center text-sm"
                        >
                            <div className="relative">
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
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                    0
                                </span>
                            </div>
                            <span>장바구니</span>
                        </Link>
                    </div> */}
                </div>

                {/* 하단 네비게이션 */}
                <nav className="flex items-center py-4">
                    <button className="flex items-center gap-2 mr-8">
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <span className="font-medium">전체 카테고리</span>
                    </button>
                    <ul className="flex gap-8">
                        {categories.map((category) => (
                            <li key={category.name}>
                                <Link
                                    href={category.href}
                                    className="font-medium hover:text-blue-600"
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
