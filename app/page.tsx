import Header from "@/components/layout/Header";
import ServicePreview from "@/components/landing/ServicePreview";
import CaseStudies from "@/components/landing/CaseStudies";
import Footer from "@/components/layout/Footer";
import HeroSection from "./components/landing/HeroSection";

export default function Home() {
    return (
        <main>
            <Header />
            <HeroSection />
            <ServicePreview />
            <CaseStudies />
            <Footer />
        </main>
    );
}
