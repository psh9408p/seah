"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { caseData } from "../data/caseData";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function CasesPage() {
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
      {/* 헤더 섹션 */}

      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <h1 className="text-4xl font-bold mb-4">시공사례</h1>
          <p className="text-gray-600 text-lg">
            최고의 품질과 기술력으로 완성한 다양한 시공사례를 만나보세요
          </p>
        </div>
      </section>

      {/* 필터 섹션 */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
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
              className="bg-white rounded-lg overflow-hidden shadow-lg"
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
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-500 mb-2">{item.location}</p>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    {item.completionDate}
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
