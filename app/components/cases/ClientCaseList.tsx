"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CaseStudy } from "../../data/caseData";
import CaseFilter from "./CaseFilter";

interface ClientCaseListProps {
  categories: string[];
  cases: CaseStudy[];
}

const ClientCaseList = ({ categories, cases }: ClientCaseListProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("전체");

  // 선택된 카테고리에 따른 필터링
  const filteredCases =
    selectedCategory === "전체"
      ? cases
      : cases.filter((item) => item.category === selectedCategory);

  return (
    <>
      <CaseFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* 시공사례 그리드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCases.map((caseItem) => (
          <article
            key={caseItem.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={caseItem.imageUrl}
                alt={caseItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-blue-600">
                  {caseItem.category}
                </span>
                <span className="text-sm text-gray-500">
                  {caseItem.completionDate}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{caseItem.title}</h3>
              <p className="text-gray-600 mb-4">{caseItem.description}</p>
              <div className="flex items-center text-gray-500">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-sm">{caseItem.location}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default ClientCaseList;
