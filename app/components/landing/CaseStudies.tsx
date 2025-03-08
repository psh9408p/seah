"use client";

import Image from "next/image";
import Link from "next/link";
import { caseData, CaseStudy } from "../../data/caseData";

export default function CaseStudies() {
  // 최신 4개의 시공 사례만 표시
  const recentCases = caseData.slice(0, 4);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 text-gray-800">시공 사례</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            전문적인 시공 노하우로 완성도 높은 결과물을 제공합니다
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {recentCases.map((item: CaseStudy) => (
            <div
              key={item.id}
              className="transform hover:scale-[1.02] transition-transform duration-200"
            >
              <Link
                href={`/cases?category=${encodeURIComponent(item.category)}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full mb-3 hover:scale-[1.05] transition-transform">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="inline-block hover:scale-[1.05] active:scale-[0.95] transition-transform">
            <Link
              href="/cases"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg font-medium"
            >
              더 많은 시공사례 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
