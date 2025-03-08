"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function InquiryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              구매문의
            </h1>
            <p className="text-lg text-gray-600 text-center mb-12">
              세아산업의 제품에 관심을 가져주셔서 감사합니다.
              <br />
              아래 연락처로 문의해 주시면 친절하게 상담해 드리겠습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 전화 문의 섹션 */}
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                  전화 문의
                </h2>
                <div className="text-center">
                  <a
                    // href="tel:010-2681-5830"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-800"
                  >
                    010-2681-5830
                  </a>
                  <p className="text-gray-600 mt-2">
                    평일 09:00 - 18:00
                    <br />
                    점심시간 12:00 - 13:00
                  </p>
                </div>
              </div>

              {/* 이메일 문의 섹션 */}
              <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">
                  이메일 문의
                </h2>
                <div className="text-center">
                  <a
                    // href="mailto:pksd24@naver.com"
                    className="text-2xl font-bold text-blue-600 hover:text-blue-800"
                  >
                    pksd24@naver.com
                  </a>
                  <p className="text-gray-600 mt-2">
                    24시간 접수 가능
                    <br />
                    빠른 시일 내 답변드리겠습니다
                  </p>
                </div>
              </div>
            </div>

            {/* 추가 안내사항 */}
            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">📢 안내사항</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  견적 문의 시 제품명, 수량, 납품 장소를 함께 알려주시면 더욱
                  상세한 상담이 가능합니다.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  대량 구매 시 별도의 할인가가 적용될 수 있습니다.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  문의하신 내용은 영업일 기준 24시간 이내에 답변드리도록
                  하겠습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
