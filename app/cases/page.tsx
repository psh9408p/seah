"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { caseData } from "../data/caseData";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function CasesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryParam || "전체"
  );

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const categories = [
    "전체",
    ...Array.from(new Set(caseData.map((item) => item.category))),
  ];

  const filteredCases =
    selectedCategory === "전체"
      ? caseData
      : caseData.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      {/* 히어로 섹션 */}
      <section className="relative bg-blue-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                고객의 신뢰로 만든
                <br />
                다양한 시공사례
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                세아산업의 전문적인 시공 노하우를 소개합니다
              </p>
            </div>
            <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full">
              <Image
                src="/images/sigong.jpg"
                alt="세아산업 시공사례"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 필터 섹션 */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            시공사례 목록
          </h2>
          <p className="text-gray-600 text-center mb-8 md:mb-16">
            카테고리별로 다양한 시공사례를 확인하실 수 있습니다
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white hover:bg-gray-100 text-gray-700 shadow-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* 시공 사례 목록 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default function CasesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CasesContent />
    </Suspense>
  );
}
