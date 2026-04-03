import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Phone, MessageCircle, Calendar, Star, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-14 md:py-20 px-4 md:px-6" style={{ backgroundColor: "#0b0f10" }}>
      <div className="max-w-4xl mx-auto">
        
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-green-600/10 to-black" />
          <div className="absolute inset-0 border border-green-500/30 rounded-3xl" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-green-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-500/10 rounded-full blur-3xl" />

          <div className="relative p-8 sm:p-10 md:p-12 text-center">
            {/* Rating badge */}
            <div className="inline-flex items-center gap-2 bg-black/40 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-green-400 fill-green-400" />
                ))}
              </div>
              <span className="text-green-400 text-sm font-medium">4.9/5 from 1000+ customers</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready for a Spotless Car?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Book your doorstep car wash in just 60 seconds. Our professional will arrive at your location with everything needed.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Clock className="w-3.5 h-3.5 text-green-400" />
                <span>Same-day available</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-green-400" />
                <span>West Delhi coverage</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Star className="w-3.5 h-3.5 text-green-400" />
                <span>100% satisfaction guarantee</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25 transition-all hover:scale-105"
                onClick={() => navigate("/booking")}
              >
                <Calendar className="w-5 h-5 mr-2" />
                BOOK A SERVICE
              </Button>
              <a
                href="tel:8920230357"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-gray-700 rounded-xl text-white hover:border-green-500/50 hover:bg-green-500/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Call us directly</p>
                  <p className="text-base font-semibold">8920230357</p>
                </div>
              </a>
              <a
                href="https://wa.me/918920230357?text=Hi%2C%20I%20want%20to%20book%20a%20car%20wash%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span className="font-semibold text-base">WhatsApp Us</span>
              </a>
            </div>

            <p className="text-gray-600 text-xs mt-6">
              Available 7 days a week · 7 AM – 8 PM · No advance payment required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
