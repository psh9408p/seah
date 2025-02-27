"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useState } from "react";

// 제품 상세 정보 타입 정의
interface ProductSpec {
    name: string;
    sizes: string[];
}

interface ProductDetails {
    description: string;
    specs: ProductSpec[];
    components: string[];
    colors: string[];
    note: string;
    images?: {
        main: string;
        gallery?: string[];
    };
}

interface Product {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: string;
    bgColor: string;
    details?: ProductDetails;
}

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );

    const products: Product[] = [
        {
            id: "rubber-boundary",
            title: "고무경계석",
            description: "내구성이 뛰어나고 친환경적인 고무경계석",
            features: [
                "충격 흡수력 우수",
                "다양한 색상 선택 가능",
                "설치가 용이함",
                "반영구적 수명",
            ],
            icon: "🏗️",
            bgColor: "bg-blue-50",
            details: {
                description: `폐타이어를 분쇄, 가공한 1~2mm의 고무칩으로 생산하며 연결부위를 암수로 만들어 내구성을 갖게하고 좌 우로 밀리는 것을 방지한 안전고무경계석입니다.`,
                specs: [
                    {
                        name: "A형",
                        sizes: [
                            "1,000mm X 150mm X 150mm (길이 X 폭 X 높이)",
                            "1,000mm X 150mm X 180mm (길이 X 폭 X 높이)",
                            "1,000mm X 150mm X 200mm (길이 X 폭 X 높이)",
                        ],
                    },
                    {
                        name: "D형",
                        sizes: [
                            "1,000mm X 150mm X 150mm (길이 X 폭 X 높이)",
                            "1,000mm X 150mm X 200mm (길이 X 폭 X 높이)",
                        ],
                    },
                ],
                components: [
                    "고무경계석 본체",
                    "마개 2개",
                    "철근/타이/앙카 별도",
                ],
                colors: ["적색(적갈색) 기본"],
                note: "본 제품사진과 시공사례의 제품색상은 수작업으로 생산하는 관계로 실제품과 모니터상의 색상이 다르게 나올 수 있습니다.",
                images: {
                    main: "/images/11show509.jpg",
                    gallery: [
                        "/images/gomu_a.jpg",
                        "/images/gomu_d.jpg",
                        // "/images/gomu_c.jpg",
                    ],
                },
            },
        },
        {
            id: "rubber-mat",
            title: "고무매트",
            description: "안전하고 편안한 바닥재 솔루션",
            features: [
                "미끄럼 방지 기능",
                "충격 흡수력 우수",
                "다양한 두께 선택 가능",
                "유지보수 용이",
            ],
            icon: "🟦",
            bgColor: "bg-green-50",
            details: {
                description:
                    "다양한 두께와 규격으로 제공되는 고품질 고무매트입니다. 안전성과 내구성을 모두 갖춘 제품으로, 다양한 환경에서 사용 가능합니다.",
                specs: [
                    {
                        name: "기본",
                        sizes: [
                            "500mm X 500mm X 15T (가로 X 세로 X 두께)",
                            "500mm X 500mm X 25T (가로 X 세로 X 두께)",
                            "500mm X 500mm X 50T (가로 X 세로 X 두께)",
                            "500mm X 500mm X 60T (가로 X 세로 X 두께)",
                            "500mm X 500mm X 65T (가로 X 세로 X 두께)",
                            "500mm X 500mm X 70T (가로 X 세로 X 두께)",
                        ],
                    },
                ],
                components: ["고무매트"],
                colors: ["흑색 기본", "기타 색상 주문 가능"],
                note: "실제 제품의 색상은 모니터에서 보이는 것과 다를 수 있습니다.",
                images: {
                    main: "/images/mat_main.jpg",
                    gallery: ["/images/mat1.jpg", "/images/mat2.jpg"],
                },
            },
        },
        {
            id: "gym-mat",
            title: "헬스장용 고무매트",
            description: "운동 시설에 최적화된 고무매트",
            features: [
                "중량 운동에 적합",
                "소음 감소 효과",
                "내구성 우수",
                "쉬운 청소와 관리",
            ],
            icon: "💪",
            bgColor: "bg-yellow-50",
            details: {
                description:
                    "헬스장 환경에 특화된 고무매트로, 중량 운동 시 발생하는 충격과 소음을 효과적으로 줄여줍니다.",
                specs: [
                    {
                        name: "기본",
                        sizes: [
                            "500mm X 500mm X 15T (가로 X 세로 X 두께)",
                            "500mm X 500mm X 20T (가로 X 세로 X 두께)",
                            "500mm X 500mm X 25T (가로 X 세로 X 두께)",
                            "500mm X 500mm X 30T (가로 X 세로 X 두께)",
                            "500mm X 500mm X 50T (가로 X 세로 X 두께)",
                        ],
                    },
                ],
                components: ["고무매트"],
                colors: ["흑색"],
                note: "무거운 운동기구 사용에도 견딜 수 있는 고강도 제품입니다.",
                images: {
                    main: "/images/h_mat_main.jpg",
                    gallery: ["/images/h_mat1.jpg", "/images/h_mat2.jpg"],
                },
            },
        },
        {
            id: "rubber-block",
            title: "고무블럭",
            description: "다목적으로 활용 가능한 고무블럭",
            features: [
                "다양한 규격",
                "높은 내구성",
                "간편한 시공",
                "우수한 배수성",
            ],
            icon: "🟫",
            bgColor: "bg-orange-50",
            details: {
                description:
                    "내구성이 뛰어난 고무블럭으로, U형과 I형 두 가지 타입으로 제공됩니다.",
                specs: [
                    {
                        name: "U형",
                        sizes: ["110mm X 220mm X 45T (가로 X 세로 X 두께)"],
                    },
                    {
                        name: "I형",
                        sizes: ["110mm X 220mm X 45T (가로 X 세로 X 두께)"],
                    },
                ],
                components: ["고무블럭"],
                colors: ["흑색 기본", "기타 색상 주문 가능"],
                note: "용도에 따라 U형과 I형 중 선택하실 수 있습니다.",
                images: {
                    main: "/images/main_block.jpg",
                    gallery: ["/images/main_block.jpg", "/images/block2.jpg"],
                },
            },
        },
        {
            id: "rubber-chip",
            title: "탄성고무칩",
            description: "놀이터와 운동장에 적합한 탄성고무칩",
            features: [
                "뛰어난 탄성",
                "다양한 색상",
                "환경 친화적",
                "우수한 배수성",
            ],
            icon: "🔹",
            bgColor: "bg-purple-50",
            details: {
                description: `탄성이 우수하고 보행시 충격을 흡수하여 안전사고를 예방하는 탄성고무칩입니다. 이음새가 없고 온도 변화에 따른 뒤틀림 현상이 없어 내구성이 뛰어납니다.`,
                specs: [
                    {
                        name: "제품 특징",
                        sizes: [
                            "편안한 보행: 탄성이 우수하고 보행시 충격을 흡수하고, 인체의 각 부분의 피로를 경감시켜주며, 안전사고를 예방",
                            "우수한 내구성: 이음새가 없고 온도 변화에 따른 뒤틀림 현상이 없음",
                            "다양한 칼라: 주위환경과 어울릴 수 있는 색상으로 선택 가능",
                            "편리한 시공: 시공이 간편하고 시공두께를 자유롭게 시공할 수 있으며 유지보수가 용이",
                        ],
                    },
                    {
                        name: "칩포장 단층",
                        sizes: ["13T", "15T", "20T"],
                    },
                    {
                        name: "칩포장 복층",
                        sizes: ["30T", "50T", "65T", "75T", "100T"],
                    },
                    {
                        name: "칩+액상우레탄포장",
                        sizes: [
                            "육상경기장: 13T, 15T (탄성층 포함)",
                            "다목적구장: 13T, 15T",
                        ],
                    },
                    {
                        name: "액상우레탄포장",
                        sizes: [
                            "테니스장, 배드민턴장, 농구장, 인라인 스케이트장: 5T, 7T",
                        ],
                    },
                    {
                        name: "제품 용도",
                        sizes: [
                            "골프장, 골프연습장",
                            "보행로, 육로, 베란다",
                            "농구장, 롤러스케이트장",
                            "노인복지관, 공원",
                            "자전거용도로, 산책로",
                            "조깅코스, 어린이집",
                        ],
                    },
                ],
                components: ["탄성고무칩"],
                colors: ["다양한 칼라 선택 가능"],
                note: "차별화된 제품으로 고객의 요구조건에 적합하도록 다양한 칼라를 연출합니다.",
                images: {
                    main: "/images/chip1.jpg",
                    gallery: ["/images/chip2.jpg", "/images/chip3.jpg"],
                },
            },
        },
        {
            id: "urethane",
            title: "우레탄포장",
            description: "고품질 우레탄 포장 솔루션",
            features: [
                "내구성과 탄성",
                "미끄럼 방지",
                "다양한 색상",
                "전문 시공",
            ],
            icon: "🎨",
            bgColor: "bg-pink-50",
        },
    ];

    return (
        <main>
            <Header />
            {/* 히어로 섹션 */}
            <section className="relative bg-blue-50 py-12 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                                고품질 고무제품으로
                                <br />
                                안전한 환경을 만듭니다
                            </h1>
                            <p className="text-lg md:text-xl text-gray-600">
                                세아산업의 다양한 제품을 소개합니다
                            </p>
                        </div>
                        <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full">
                            <Image
                                src="/images/playground.jpg"
                                alt="세아산업 제품 전시"
                                fill
                                className="object-cover rounded-lg shadow-lg"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 제품 목록 섹션 */}
            <section className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                            제품 라인업
                        </h2>
                        <p className="text-gray-600 text-center mb-8 md:mb-16">
                            제품을 클릭하시면 상세 정보를 확인하실 수 있습니다
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className={`group ${product.bgColor} rounded-lg p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer relative`}
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-4xl bg-white p-3 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                                            {product.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 transition-colors">
                                                {product.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {product.description}
                                            </p>
                                        </div>
                                    </div>
                                    <ul className="space-y-3">
                                        {product.features.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-2 text-gray-700"
                                                >
                                                    <svg
                                                        className="w-5 h-5 text-blue-600 flex-shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all rounded-lg">
                                        <span className="px-4 py-2 bg-blue-600 text-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                            자세히 보기
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 제품 상세 모달 */}
            {selectedProduct && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                    onClick={(e) => {
                        // 모달 바깥 영역(backdrop) 클릭 시에만 모달 닫기
                        if (e.target === e.currentTarget) {
                            setSelectedProduct(null);
                        }
                    }}
                >
                    <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6 md:p-8">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-2xl font-bold">
                                    {selectedProduct.title} 상세정보
                                </h3>
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-gray-500 hover:text-gray-700"
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
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {selectedProduct.details && (
                                <div className="space-y-6">
                                    <div className="relative h-[300px] md:h-[400px] w-full mb-4">
                                        <Image
                                            src={
                                                selectedProduct.details.images!
                                                    .main
                                            }
                                            alt={`${selectedProduct.title} 메인 이미지`}
                                            fill
                                            className="object-contain rounded-lg"
                                        />
                                    </div>

                                    {/* 갤러리 이미지 */}
                                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto">
                                        {selectedProduct.details.images!.gallery?.map(
                                            (img, index) => (
                                                <div
                                                    key={index}
                                                    className="relative h-[150px] w-full"
                                                >
                                                    <Image
                                                        src={img}
                                                        alt={`${
                                                            selectedProduct.title
                                                        } 이미지 ${index + 1}`}
                                                        fill
                                                        className="object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                                                    />
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <p className="text-gray-700 leading-relaxed">
                                        {selectedProduct.details.description}
                                    </p>

                                    {selectedProduct.details.specs.map(
                                        (spec) => (
                                            <div
                                                key={spec.name}
                                                className="bg-gray-50 p-4 rounded-lg"
                                            >
                                                <h4 className="font-bold mb-3">
                                                    {spec.name} 규격
                                                </h4>
                                                <ul className="space-y-2 text-gray-600">
                                                    {spec.sizes.map((size) => (
                                                        <li key={size}>
                                                            {size}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )
                                    )}

                                    <div>
                                        <h4 className="font-bold mb-3">
                                            구성품
                                        </h4>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            {selectedProduct.details.components.map(
                                                (component) => (
                                                    <li key={component}>
                                                        {component}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-bold mb-3">색상</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                            {selectedProduct.details.colors.map(
                                                (color) => (
                                                    <li key={color}>{color}</li>
                                                )
                                            )}
                                        </ul>
                                    </div>

                                    {selectedProduct.details.note && (
                                        <p className="text-sm text-gray-500 italic">
                                            ※ {selectedProduct.details.note}
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </main>
    );
}
