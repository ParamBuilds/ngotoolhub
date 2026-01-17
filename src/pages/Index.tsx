import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ToolsGrid from "@/components/home/ToolsGrid";
import PricingPreview from "@/components/home/PricingPreview";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ToolsGrid />
        <PricingPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
