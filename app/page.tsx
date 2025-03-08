import Header from "@/components/layout/Header";
import ServicePreview from "@/components/landing/ServicePreview";
import CaseStudies from "./components/landing/CaseStudies";
import Footer from "@/components/layout/Footer";
import BrandGrid from "@/components/BrandGrid";

export default function Home() {
  return (
    <main>
      <Header />
      <ServicePreview />
      <BrandGrid />
      <CaseStudies />
      <Footer />
    </main>
  );
}
