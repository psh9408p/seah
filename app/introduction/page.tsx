import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function IntroductionPage() {
  return (
    <main>
      <Header />
      {/* 히어로 섹션 */}
      <section className="relative bg-blue-50 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* 텍스트 영역 */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-6">
                안전한 환경을 만드는
                <br />
                세아산업의 발자취
              </h1>
              <p className="text-lg md:text-xl text-black mb-6 md:mb-8">
                1999년부터 시작된 고무 제품 전문 기업
              </p>
            </div>

            {/* 이미지 영역 */}
            <div className="md:w-1/2 relative h-[300px] md:h-[400px] w-full">
              <Image
                src="/images/메인사진.jpeg"
                alt="세아산업 시공 현장"
                fill
                className="object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 미션 섹션 */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-8 md:mb-12">
              <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg font-medium text-center mb-4 md:mb-8">
                  본사는 고무로 만든 고무블럭 / 고무매트 / 고무경계석을
                  <br className="hidden md:block" />
                  직접생산하는 판매 및 시공 전문업체입니다.
                </p>

                <div className="space-y-4">
                  <p>
                    고무칩 또는 EPDM칩을 사용하여 만든 고무제품 및 놀이시설은
                    다음과 같은 곳에서 널리 사용되고 있습니다:
                  </p>
                </div>
              </div>
            </div>

            {/* 제품 적용 분야 */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-black">
              제품 적용 분야
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
              {[
                {
                  title: "어린이 안전 시설",
                  description: "아이들의 안전을 최우선으로 생각합니다",
                  items: ["어린이놀이터", "유치원", "학교"],
                  icon: "👶",
                  bgColor: "bg-blue-50",
                },
                {
                  title: "스포츠 시설",
                  description: "편안하고 안전한 운동 환경을 제공합니다",
                  items: ["족구장", "배드민턴장", "테니스장"],
                  icon: "🏃",
                  bgColor: "bg-green-50",
                },
                {
                  title: "도시 기반 시설",
                  description: "도시 환경의 안전성을 높입니다",
                  items: ["자전거길", "보도블럭", "화단"],
                  icon: "🌆",
                  bgColor: "bg-yellow-50",
                },
                {
                  title: "특수 시설",
                  description: "다양한 환경에 맞춤형 솔루션을 제공합니다",
                  items: ["게이트볼장", "고무매트둘레", "세멘트경계석 대용"],
                  icon: "🏗️",
                  bgColor: "bg-purple-50",
                },
              ].map((category) => (
                <div
                  key={category.title}
                  className={`${category.bgColor} rounded-lg p-6 md:p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100`}
                >
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="text-4xl md:text-5xl bg-white p-3 md:p-4 rounded-full shadow-sm">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">
                        {category.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2 md:space-y-4 text-base md:text-lg text-gray-700">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <svg
                          className="w-6 h-6 text-blue-600"
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
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* 회사 비전 */}
            <div className="bg-blue-50 rounded-lg p-6 md:p-8 mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
                우리의 약속
              </h2>
              <p className="text-center text-base md:text-lg text-gray-700 leading-relaxed">
                많은 학교 및 유치원에서 시공을 하였고, 본사에서도 어린이들이
                사용하는 안전 시설에 많은 연구와 판매 및 시공에 최선을 다 할것을
                약속드립니다.
              </p>
              <div className="text-right mt-6 md:mt-8 pt-4 border-t border-blue-100">
                <p className="text-lg md:text-xl font-semibold text-blue-800">
                  - 세아산업
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
