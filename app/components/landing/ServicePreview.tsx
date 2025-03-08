"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicePreview() {
  const services = [
    {
      title: "놀이시설 철거",
      description: "안전하고 전문적인 놀이시설 철거 서비스",
      details: [
        "전문 인력 투입",
        "안전한 철거 진행",
        "폐기물 적법 처리",
        "신속한 작업 진행",
      ],
      icon: "🏗️",
      link: "/products",
      color: "from-blue-500/10 to-blue-600/10",
    },
    {
      title: "놀이시설 보수",
      description: "기존 시설물의 완벽한 보수 작업",
      details: [
        "정밀 안전 진단",
        "부분/전체 보수",
        "품질 자재 사용",
        "보수 후 안전검사",
      ],
      icon: "🔧",
      link: "/products",
      color: "from-green-500/10 to-green-600/10",
    },
    {
      title: "놀이시설 시공",
      description: "새로운 놀이시설의 전문 시공",
      details: ["맞춤형 설계", "고품질 자재", "전문 시공팀", "안전인증 획득"],
      icon: "🎡",
      link: "/products",
      color: "from-purple-500/10 to-purple-600/10",
    },
    {
      title: "상담 및 문의",
      description: "전문가의 맞춤 상담 서비스",
      details: ["무료 현장 실측", "견적 상담", "자재 컨설팅", "A/S 관리"],
      icon: "📞",
      link: "/products",
      contact: "010-2681-5830",
      color: "from-orange-500/10 to-orange-600/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          주요 제품 및 서비스
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          20년 이상의 경험과 노하우를 바탕으로 안전하고 전문적인 놀이시설
          서비스를 제공합니다
        </motion.p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block">
              <motion.div
                variants={cardVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className={`bg-gradient-to-br ${service.color} backdrop-blur-sm bg-white/80 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/20`}
              >
                <motion.div
                  className="text-5xl mb-6"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="mr-2 text-blue-500">•</span>
                      {detail}
                    </motion.li>
                  ))}
                </ul>
                {service.contact && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 pt-4 border-t border-gray-200"
                  >
                    <p className="text-blue-600 font-semibold flex items-center justify-center">
                      <span className="animate-pulse mr-2">📞</span>
                      {service.contact}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
