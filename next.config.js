/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true, // 개발 환경에서만 사용하세요
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
};

module.exports = nextConfig;
