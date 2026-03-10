
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Phone } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// interface HeaderProps {
//   showNav?: boolean;
//   onCartOpen?: () => void;
// }

// const Header = ({ showNav = true, onCartOpen }: HeaderProps) => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };
  
//   return (
//     <header className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
//       <div className="flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
//           <img src="LOGOFINAL.png" alt="CleanCruisers Logo" className="h-14 w-14 md:h-13 md:w-13 object-contain rounded-full" />
//           <span className="text-xl md:text-2xl font-bold text-white">CleanCruisers</span>
//         </div>

//         {/* Desktop Navigation */}
//         {showNav && (
//         <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
//           <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">HOME</button>
//           <button onClick={() => scrollToSection('services')} className="text-white hover:text-green-400 transition-colors cursor-pointer text-sm xl:text-base">BOOKING</button>
//           <button onClick={() => scrollToSection('about')} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">ABOUT US</button>
//           <button onClick={() => navigate('/blog')} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">BLOG</button>
//           <button onClick={() => scrollToSection('contact')} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">CONTACT</button>
//         </nav>
//         )}

//         {/* Call Now Button */}
//         <div className="flex items-center">
//           <a href="tel:8920230357">
//             <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold flex items-center gap-2">
//               <Phone className="h-4 w-4" />
//               Call Now
//             </Button>
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  showNav?: boolean;
  onCartOpen?: () => void;
}

const Header = ({ showNav = true, onCartOpen }: HeaderProps) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }else {
      // Navigate to home page and scroll to section after load
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleHomeClick = () => {
    setMobileMenuOpen(false);
     if (window.location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-3 sm:p-4 md:p-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
          <img 
            src="/LOGOFINAL.png" 
            alt="CleanCruisers Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 object-contain rounded-full" 
          />
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">CleanCruisers</span>
        </div>

        {/* Desktop Navigation */}
        {showNav && (
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button onClick={handleHomeClick} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">HOME</button>
            <button onClick={() => scrollToSection('services')} className="text-white hover:text-green-400 transition-colors cursor-pointer text-sm xl:text-base">BOOKING</button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">ABOUT US</button>
            <button onClick={() => navigate('/blog')} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">BLOG</button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-green-400 transition-colors text-sm xl:text-base">CONTACT</button>
          </nav>
        )}

        {/* Right Side - Call Button + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Call Now Button */}
          <a href="tel:8920230357">
            <Button className="bg-green-400 hover:bg-green-500 text-black font-semibold flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm px-3 py-2 sm:px-4 sm:py-2 h-auto">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Call Now</span>
              <span className="sm:hidden">Call</span>
            </Button>
          </a>

          {/* Mobile Menu Toggle */}
          {showNav && (
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-green-400 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && showNav && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-4 overflow-hidden"
          >
            <div className="bg-black/90 backdrop-blur-md rounded-xl border border-green-500/20 p-4 space-y-1">
              <button 
                onClick={handleHomeClick} 
                className="w-full text-left text-white hover:text-green-400 hover:bg-green-500/10 transition-colors py-3 px-4 rounded-lg text-base font-medium"
              >
                HOME
              </button>
              <button 
                onClick={() => scrollToSection('services')} 
                className="w-full text-left text-white hover:text-green-400 hover:bg-green-500/10 transition-colors py-3 px-4 rounded-lg text-base font-medium"
              >
                BOOKING
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="w-full text-left text-white hover:text-green-400 hover:bg-green-500/10 transition-colors py-3 px-4 rounded-lg text-base font-medium"
              >
                ABOUT US
              </button>
              <button 
                onClick={() => { setMobileMenuOpen(false); navigate('/blog'); }} 
                className="w-full text-left text-white hover:text-green-400 hover:bg-green-500/10 transition-colors py-3 px-4 rounded-lg text-base font-medium"
              >
                BLOG
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="w-full text-left text-white hover:text-green-400 hover:bg-green-500/10 transition-colors py-3 px-4 rounded-lg text-base font-medium"
              >
                CONTACT
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;