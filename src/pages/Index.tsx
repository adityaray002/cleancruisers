
import { useState } from "react";
import Header from "@/components/Header";
import Cart from "@/components/Cart";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WhoWeAre from "@/components/WhoWeAre";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialIcons from "@/components/SocialIcons";
import { PhoneCall } from "lucide-react";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative h-[755px]" style={{ backgroundColor: "#1E1E1E" }}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 w-full "
        style={{
          backgroundImage: "url('/MainViewWashing.png')"
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Content */}
      <div className="relative z-10">
        <Header onCartOpen={() => setCartOpen(true)} />
        
        <main>
          <HeroSection />
          <ServicesSection />
          <div id="about">
            <AboutSection />
            <WhoWeAre/>
          </div>
          <TestimonialsSection />
          <ContactSection />
        </main>
        
        <Footer />
        <SocialIcons />
        
        {/* Cart Overlay */}
        <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
      {/* Floating phone call button */}
      <a
        href="tel:8920230357"
        className="fixed bottom-20 right-6 z-50 bg-green-400 hover:bg-green-500 shadow-lg rounded-full p-4 flex items-center transition-transform active:scale-95"
        style={{ boxShadow: '0 2px 16px rgba(0,255,100,0.20)' }}
        aria-label="Call us"
      >
        <PhoneCall className="w-6 h-6 text-black" />
      </a>
    </div>
  );
};

export default Index;
