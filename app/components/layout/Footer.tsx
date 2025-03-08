export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <p className="text-gray-800 font-semibold text-lg mb-2">세아산업</p>
            <p className="text-gray-600 mb-2">인천광역시 부평구 부평대로 153</p>
            <p className="text-gray-600 mb-2">사업자등록번호: 455-40-01317</p>
            <p className="text-gray-600">대표: 세아산업</p>
          </div>

          {/* 연락처 정보 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <p className="text-gray-600 mb-2">Tel: 032-217-6008</p>
            <p className="text-gray-600 mb-2">Tel: 010-2681-5830</p>
            <p className="text-gray-600">Email: pksd24@naver.com</p>
          </div>

          {/* 빠른 링크 */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-blue-600"
                >
                  회사소개
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-600 hover:text-blue-600"
                >
                  제품정보
                </Link>
              </li>
              <li>
                <Link
                  href="/cases"
                  className="text-gray-600 hover:text-blue-600"
                >
                  시공사례
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-blue-600"
                >
                  문의하기
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>© 2025 세아산업. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
