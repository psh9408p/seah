import Image from "next/image";
import Link from "next/link";
import { caseData, CaseStudy } from "../../data/caseData";

export default function CaseStudies() {
  // 최신 4개의 시공 사례만 표시
  const recentCases = caseData.slice(0, 4);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">시공 사례</h2>
          <p className="text-gray-600">
            전문적인 시공 노하우로 완성도 높은 결과물을 제공합니다
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {recentCases.map((item: CaseStudy) => (
            <Link
              href={`/cases?category=${encodeURIComponent(item.category)}`}
              key={item.id}
              className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
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
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/cases"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            더 많은 시공사례 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
