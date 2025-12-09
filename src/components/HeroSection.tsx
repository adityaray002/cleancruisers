
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { useState } from "react";

// 🎬 CHANGE THIS YOUTUBE VIDEO ID TO UPDATE THE VIDEO
// Extract the ID from YouTube URL: https://www.youtube.com/watch?v=VIDEO_ID
const YOUTUBE_VIDEO_ID = "dQw4w9WgXcQ";

const HeroSection = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-black min-h-screen flex items-center px-4 py-12 md:px-6 md:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
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
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="relative flex justify-center items-center"
        >
          {/* Glowing background effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 via-green-400/10 to-green-600/20 rounded-3xl blur-2xl animate-pulse" />
          
          {/* Video Container */}
          <div className="relative w-full max-w-lg">
            {/* Decorative corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-green-400 rounded-tl-lg" />
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-green-400 rounded-tr-lg" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-green-400 rounded-bl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-green-400 rounded-br-lg" />

            {/* Main Video Card */}
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-green-500/30 shadow-2xl shadow-green-500/10">
              {/* Header Badge */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-500/30">
                <Sparkles className="w-4 h-4 text-green-400" />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-wide">Watch Now</span>
              </div>

              {/* Video Aspect Ratio Container */}
              <div className="relative aspect-[9/16] sm:aspect-video">
                {!isPlaying ? (
                  // Thumbnail with Play Button
                  <div 
                    className="absolute inset-0 cursor-pointer group"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* YouTube Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                      alt="Video Thumbnail"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        // Fallback to hqdefault if maxresdefault doesn't exist
                        (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
                      }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                      >
                        {/* Ripple Effect */}
                        <div className="absolute inset-0 bg-green-400/30 rounded-full animate-ping" />
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 group-hover:shadow-green-500/60 transition-shadow duration-300">
                          <Play className="w-7 h-7 sm:w-8 sm:h-8 text-black fill-black ml-1" />
                        </div>
                      </motion.div>
                    </div>

                    {/* Bottom Text */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-semibold text-sm sm:text-base">See How We Transform Your Car</p>
                      <p className="text-gray-300 text-xs sm:text-sm mt-1">Professional detailing in action</p>
                    </div>
                  </div>
                ) : (
                  // YouTube Embed
                  <iframe
                    src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="CleanCruisers Video"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 rounded-full shadow-lg"
            >
              <span className="text-black font-bold text-xs sm:text-sm whitespace-nowrap">✨ 1000+ Happy Customers</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
