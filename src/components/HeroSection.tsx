
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black min-h-screen flex items-center px-4 py-12 md:px-6 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">
        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[2.25rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] font-extrabold leading-tight tracking-tight"
          >
            <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Premium
            </span>
            Car Wash at Your {" "}
            <span className="text-green-400">Doorstep</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-md"
          >
            We deliver expert car detailing services at your location — fast, eco-friendly, and convenient.
          </motion.p>

          {/* Book Now button removed */}
        </div>

        {/* Image Section with glowing background & animation */}
        <div className="relative flex justify-center items-center">
          {/* Glowing background */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full bg-green-400 opacity-30 blur-3xl animate-pulse"></div>

          {/* Animated illustration */}
          <motion.img
            src="/sedan.png" // Replace with your illustration path
            alt="Car Wash Illustration"
            className="relative w-64 md:w-96 h-auto drop-shadow-lg"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
