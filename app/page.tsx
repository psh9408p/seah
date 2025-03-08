import Header from "@/components/layout/Header";
import ServicePreview from "@/components/landing/ServicePreview";
import CaseStudies from "./components/landing/CaseStudies";
import Footer from "@/components/layout/Footer";
import BrandGrid from "@/components/BrandGrid";
import Script from "next/script";

export default function Home() {
  return (
    <main>
      <Script
        id="schema-org-graph"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "세아산업",
            url: "https://www.seah-industry.com",
            logo: "https://www.seah-industry.com/images/logo.png",
            description:
              "세아산업은 고품질 산업용 고무제품을 제조하는 전문기업입니다. 다양한 산업 분야에 맞춤형 고무 솔루션을 제공합니다.",
            address: {
              "@type": "PostalAddress",
              addressCountry: "KR",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+82-00-0000-0000",
              contactType: "customer service",
            },
          }),
        }}
      />
      <Header />
      <ServicePreview />
      <BrandGrid />
      <CaseStudies />
      <Footer />
    </main>
  );
}
