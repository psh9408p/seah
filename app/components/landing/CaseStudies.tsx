import Image from "next/image";
import Link from "next/link";

export default function CaseStudies() {
    const cases = [
        {
            title: "고무블럭 시공",
            location: "서울시 강남구",
            image: "/images/1show12302.jpg",
            description: "안전을 최우선으로 고려한 어린이 놀이터 고무매트 시공",
        },
        {
            title: "고무매트 시공",
            location: "부산시 해운대구",
            image: "/images/3htm61.jpg",
            description: "고탄성 충격흡수 고무매트로 완성한 실내체육관",
        },
        {
            title: "고무칩 시공",
            location: "부산시 해운대구",
            image: "/images/3show009169.jpg",
            description: "고탄성 충격흡수 고무매트로 완성한 실내체육관",
        },
        {
            title: "어린이 놀이터 시공",
            location: "부산시 해운대구",
            image: "/images/show133.jpg",
            description: "고탄성 충격흡수 고무매트로 완성한 실내체육관",
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl     font-bold mb-4">시공 사례</h2>
                    <p className="text-gray-600">
                        전문적인 시공 노하우로 완성도 높은 결과물을 제공합니다
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {cases.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-lg overflow-hidden"
                        >
                            <div className="relative h-64">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 mb-2">
                                    {item.location}
                                </p>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
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
