import Image from "next/image";
import Link from "next/link";

export default function ServicePreview() {
    const services = [
        {
            title: "고무매트",
            description: "충격흡수와 내구성이 뛰어난 프리미엄 고무매트",
            image: "/images/고무블럭/1show12301.jpg", // 올바른 경로
            link: "/products/rubber-mat",
        },
        {
            title: "고무블럭",
            description: "안전하고 견고한 고품질 고무블럭",
            image: "/next.svg",
            link: "/products/rubber-block",
        },
        {
            title: "시공 서비스",
            description: "전문가의 완벽한 시공 서비스",
            image: "/next.svg",
            link: "/services/installation",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    주요 제품 및 서비스
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Link href={service.link} key={index}>
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <div className="relative h-48">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
