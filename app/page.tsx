import Header from "@/components/layout/Header";
import ServicePreview from "@/components/landing/ServicePreview";
import CaseStudies from "@/components/landing/CaseStudies";
import Footer from "@/components/layout/Footer";
import BrandingSlider from "./components/BrandingSlider";

export default function Home() {
    return (
        <main>
            <Header />
            <BrandingSlider />
            <ServicePreview />
            <CaseStudies />
            <Footer />
        </main>
    );
}
