import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import FounderSection from "@/components/FounderSection";
import HelpSection from "@/components/HelpSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <FounderSection />
        <HelpSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
