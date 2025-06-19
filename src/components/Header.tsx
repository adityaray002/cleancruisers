
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  showNav?: boolean;
  onCartOpen?: () => void;
}

const Header = ({ showNav = true, onCartOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <img src="LOGOFINAL.png" alt="CleanCruisers Logo" className="h-14 w-14 md:h-13 md:w-13 object-contain rounded-full" />
          <span className="text-xl md:text-2xl font-bold text-white">CleanCruisers</span>
        </div>

        {/* Desktop Navigation */}
        {showNav && (
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">HOME</button>
          <button onClick={() => scrollToSection('services')} className="text-white hover:text-green-400 transition-colors cursor-pointer text-sm xl:text-base">BOOKING</button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">ABOUT US</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">CONTACT</button>
        </nav>
        )}

        {/* Call Now Button */}
        <div className="flex items-center">
          <a href="tel:8920230357">
            <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
