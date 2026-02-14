import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Awareness from "@/components/landing/Awareness";
import Footer from "@/components/layout/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <Features />
    <DashboardPreview />
    <Awareness />
    <Footer />
  </div>
);

export default Index;
