import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* 회사 정보 */}
                    <div>
                        <Image
                            src="/next.svg"
                            alt="우주산업 로고"
                            width={200}
                            height={50}
                            className="mb-4"
                        />
                        <p className="text-gray-600 mb-2">
                            인천광역시 동구 방축로 37번길 30
                        </p>
                        <p className="text-gray-600">
                            사업자등록번호: 874-48-00591
                        </p>
                    </div>

                    {/* 연락처 정보 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">연락처</h3>
                        <p className="text-gray-600 mb-2">Tel: 032-588-3282</p>
                        <p className="text-gray-600 mb-2">Fax: 032-714-3304</p>
                        <p className="text-gray-600">
                            Email: sea217608@daum.net
                        </p>
                    </div>

                    {/* 빠른 링크 */}
                    <div>
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
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
                    <p>© 2024 우주산업. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
