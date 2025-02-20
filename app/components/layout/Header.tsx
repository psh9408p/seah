"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                        <span className="text-xl md:text-2xl font-bold text-blue-800">
                            세아산업
                        </span>
                    </Link>

                    {/* 모바일 메뉴 토글 버튼 */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

                {/* 하단 네비게이션 - 데스크톱 */}
                <nav className="hidden md:flex items-center py-4">
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

                {/* 모바일 메뉴 */}
                <div
                    className={`md:hidden ${
                        isMobileMenuOpen ? "block" : "hidden"
                    }`}
                >
                    <nav className="py-4">
                        <ul className="space-y-4">
                            <li>
                                <button className="flex items-center gap-2 font-medium">
                                    <span>전체 카테고리</span>
                                </button>
                            </li>
                            {categories.map((category) => (
                                <li key={category.name}>
                                    <Link
                                        href={category.href}
                                        className="block font-medium hover:text-blue-600"
                                    >
                                        {category.name}
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
