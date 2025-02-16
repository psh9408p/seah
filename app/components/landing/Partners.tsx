import Image from "next/image";

export default function Partners() {
    const partners = [
        { name: "삼성전자", logo: "/next.svg" },
        { name: "현대자동차", logo: "/next.svg" },
        { name: "LG전자", logo: "/next.svg" },
        { name: "SK하이닉스", logo: "/next.svg" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-12">
                    신뢰할 수 있는 파트너사
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-12">
                    {partners.map((partner, index) => (
                        <div key={index} className="relative w-32 h-16">
                            <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
