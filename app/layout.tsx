import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "세아산업 | 산업용 고무제품 전문기업",
  description:
    "세아산업은 고품질 산업용 고무제품을 제조하는 전문기업입니다. 다양한 산업 분야에 맞춤형 고무 솔루션을 제공합니다.",
  keywords:
    "세아산업, 산업용 고무, 고무제품, 고무 솔루션, 산업용 부품, 고무 부품",
  authors: [{ name: "세아산업" }],
  creator: "세아산업",
  publisher: "세아산업",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.seah-industry.com",
  },
  openGraph: {
    type: "website",
    title: "세아산업 | 산업용 고무제품 전문기업",
    description:
      "세아산업은 고품질 산업용 고무제품을 제조하는 전문기업입니다. 다양한 산업 분야에 맞춤형 고무 솔루션을 제공합니다.",
    url: "https://www.seah-industry.com",
    siteName: "세아산업",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "세아산업 | 산업용 고무제품 전문기업",
    description: "세아산업은 고품질 산업용 고무제품을 제조하는 전문기업입니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
