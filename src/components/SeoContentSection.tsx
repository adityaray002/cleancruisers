import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Droplets, 
  Wind, 
  Sofa, 
  Car, 
  Cog, 
  Sparkles, 
  Shield, 
  MapPin,
  CheckCircle2,
  Phone,
  ArrowRight,
  ThermometerSun,
  Clock,
  Users,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

const SeoContentSection = () => {
  const navigate = useNavigate();

  const services = [
    { icon: Droplets, name: "Foam Wash & Paint Care", color: "from-blue-500/20 to-blue-600/10" },
    { icon: ThermometerSun, name: "Steam Car Wash & Sanitization", color: "from-orange-500/20 to-orange-600/10" },
    { icon: Sofa, name: "Interior Deep Dry Cleaning", color: "from-purple-500/20 to-purple-600/10" },
    { icon: Car, name: "Car Seat Dry Cleaning", color: "from-cyan-500/20 to-cyan-600/10" },
    { icon: Cog, name: "Engine Bay Cleaning", color: "from-gray-500/20 to-gray-600/10" },
    { icon: Sparkles, name: "Rubbing & Polishing", color: "from-yellow-500/20 to-yellow-600/10" },
    { icon: Shield, name: "Teflon Coating Application", color: "from-green-500/20 to-green-600/10" },
    { icon: Sofa, name: "Leather Seat Conditioning", color: "from-amber-500/20 to-amber-600/10" },
    { icon: Wind, name: "AC Vent Cleaning", color: "from-teal-500/20 to-teal-600/10" },
  ];

  const whyChooseUs = [
    { icon: Zap, text: "Doorstep car wash at home with zero water mess" },
    { icon: Users, text: "Skilled professionals, not untrained helpers" },
    { icon: Shield, text: "Safe for new, luxury, and regularly used cars" },
    { icon: Clock, text: "Affordable monthly car wash at home plans" },
    { icon: Sparkles, text: "Flexible monthly car cleaning service options" },
  ];

  const areas = [
    // "Punjabi Bagh", "Rajouri Garden", "Paschim Vihar", "Janakpuri", 
    // "Vikaspuri", "Tilak Nagar", "Hari Nagar", "Subhash Nagar", 
    // "Kirti Nagar", "Moti Nagar", "Shivaji Enclave", "Tagore Garden", 
    // "Ramesh Nagar", "Mayapuri Phase", "Uttam Nagar", "Dwarka", 
    // "Najafgarh", "Nangloi"
    { name: "Punjabi Bagh", link: null },
    { name: "South Delhi", link: "/doorstep-car-wash-services-in-south-delhi" },
    { name: "North Delhi", link: null },
    { name: "New Delhi", link: "/car-wash-in-new-delhi/" },
    { name: "East Delhi", link: "/doorstep-car-wash-services-in-east-delhi" },
    { name: "West Delhi", link: null },
    { name: "Rajouri Garden", link: null },
    { name: "Paschim Vihar", link: null },
    { name: "Janakpuri", link: "/car-wash-services-in-janakpuri" },
    { name: "Vikaspuri", link: null },
    { name: "Tilak Nagar", link: null },
    { name: "Hari Nagar", link: null },
    { name: "Subhash Nagar", link: null },
    { name: "Kirti Nagar", link: null },
    { name: "Moti Nagar", link: null },
    { name: "Shivaji Enclave", link: null },
    { name: "Tagore Garden", link: null },
    { name: "Ramesh Nagar", link: null },
    { name: "Mayapuri Phase", link: null },
    { name: "Uttam Nagar", link: null },
    { name: "Dwarka", link: "/car-wash-in-dwarka" },
    { name: "Najafgarh", link: null },
    { name: "Nangloi", link: null }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 md:py-24 px-4 relative overflow-hidden" style={{ backgroundColor: "#0a0f0f" }}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-green-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-green-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium tracking-wide">
              Trusted by 1000+ Customers in West Delhi
            </span>
          </motion.div> */}
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            CleanCruisers – Your Trusted
            <span className="block text-green-400">Car Wash at Home In West Delhi</span>
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Let's be honest – between traffic, work, and family time, taking your car out for cleaning is a hassle. 
            That's where <span className="text-white font-medium">CleanCruisers</span> steps in with 
            <span className="text-green-400 font-medium"> professional doorstep car care</span> in West Delhi.
            Bringing professional tools, trained staff, and premium care right to your parking spot. No waiting, no water wastage, no compromises.
            If you’re looking for dependable car cleaning at home in west Delhi, CleanCruisers keeps things simple. From compact hatchbacks to premium sedans and SUVs, we treat every car with the same level of care and attention.
            Parked outside all day? One proper wash can make a real difference.<span className="text-green-400 font-medium">  Book your slot today.  </span>  
          </p>
        </motion.div>

        {/* Value Props Cards */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20"
        >
          {[
            { icon: Clock, title: "Save Time", desc: "No waiting in queues" },
            { icon: Droplets, title: "Zero Water Mess", desc: "Eco-friendly cleaning" },
            { icon: Shield, title: "Premium Care", desc: "Professional grade tools" }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
             <span className="block text-green-400">Complete Car Cleaning</span>Services At Your Doorstep
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mb-4" />
            <p className="text-gray-400 max-w-2xl mx-auto">
             Our services are designed for real Delhi driving conditions dust, pollution, and daily wear. Every car wash in Delhi by CleanCruisers focuses on hygiene, shine, and long-term protection.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 5 }}
                className={`flex items-center gap-4 p-4 bg-gradient-to-r ${service.color} backdrop-blur-sm border border-gray-800/50 rounded-xl hover:border-green-500/30 transition-all duration-300 cursor-default`}
              >
                <div className="w-11 h-11 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <service.icon className="w-5 h-5 text-green-400" />
                </div>
                <span className="text-gray-200 text-sm font-medium">{service.name}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-500 text-sm mt-8 max-w-2xl mx-auto"
          >
            We use advanced <span className="text-green-400">steam car wash</span> methods that sanitize surfaces 
            without damaging paint, electronics, or interiors – perfect for families and daily commuters.
          </motion.p>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="relative p-8 sm:p-10 rounded-3xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-600/5 to-transparent" />
            <div className="absolute inset-0 border border-green-500/20 rounded-3xl" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-green-400/10 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="lg:max-w-md">
                  <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why Us?</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                    Why Choose CleanCruisers?
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Choosing a <span className="text-green-400">premium car wash in West Delhi</span> shouldn't feel complicated. 
                    Customers stay with us because we keep things simple and reliable.
                  </p>
                  <p className="text-gray-500 text-sm mt-4 italic border-l-2 border-green-500/50 pl-4">
                    "Once you try us, you'll notice the difference—not just in how your car looks, 
                    but in how easy the process feels."
                  </p>
                </div>
                
                <div className="space-y-3 flex-1 lg:max-w-lg">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-green-500/30 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-green-400" />
                      </div>
                      <span className="text-gray-200 text-sm sm:text-base">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Areas We Serve */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-6 h-6 text-green-400" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Areas We Serve
            </h3>
          </div>
          
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-8">
            CleanCruisers provides service across residential and high-traffic areas in western Delhi
          </p>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
          >
            {areas.map((area, index) => (
              // <motion.span 
              //   key={index}
              //   variants={itemVariants}
              //   whileHover={{ scale: 1.05, y: -2 }}
              //   className="px-4 py-2 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-full text-gray-300 text-xs sm:text-sm hover:border-green-500/40 hover:text-green-400 transition-all cursor-default"
              // >
              //   {area}
              // </motion.span>
                area.link ? (
                <motion.a 
                  key={index}
                  href={area.link}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-green-500/10 backdrop-blur-sm border border-green-500/30 rounded-full text-green-400 text-xs sm:text-sm hover:border-green-400 hover:bg-green-500/20 transition-all cursor-pointer font-medium"
                >
                  {area.name}
                </motion.a>
              ) : (
                <motion.span 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-4 py-2 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-full text-gray-300 text-xs sm:text-sm hover:border-green-500/40 hover:text-green-400 transition-all cursor-default"
                >
                  {area.name}
                </motion.span>
              )
            ))}
          </motion.div>
          
         <p className="text-center text-gray-500 text-sm">
            Also serving <a href="/car-wash-in-dwarka" className="text-green-400 font-medium hover:underline">Dwarka</a>, 
            <span className="text-green-400 font-medium"> Najafgarh</span>, and 
            <span className="text-green-400 font-medium"> Nangloi</span> – 
            making us a dependable choice across West Delhi.
          </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-green-500/10 to-green-600/20 rounded-3xl" />
          <div className="absolute inset-0 border border-green-500/30 rounded-3xl" />
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl" />
          
          <div className="relative p-8 sm:p-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Car className="w-8 h-8 text-green-400" />
            </motion.div>
            
            <p className="text-green-400 font-semibold text-sm mb-3 uppercase tracking-wider">
              No time to visit a car wash?
            </p>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Book Your Car Wash Today
            </h3>
            
            <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Whether you need a one-time deep clean or a dependable 
              <span className="text-green-400 font-medium"> monthly car wash at home</span>, 
              Clean Cruisers is ready. Skip the queues, save time, and enjoy a cleaner, healthier car—right where you park it.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => navigate("/booking")}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25 hover:shadow-green-400/30 transition-all"
              >
                BOOK NOW
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a 
                href="tel:8920230357"
                className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm border border-gray-700 rounded-xl text-white hover:border-green-500/50 hover:bg-green-500/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500">Call us now</p>
                  <p className="text-base font-semibold">8920230357</p>
                </div>
              </a>
            </div>
            
            <p className="text-gray-600 text-xs mt-8 max-w-md mx-auto">
              CleanCruisers isn't just about cleaning cars. It's about making car care easy in West Delhi.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default SeoContentSection;
