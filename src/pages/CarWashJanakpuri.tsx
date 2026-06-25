import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  ArrowRight, 
  Car, 
  Droplets, 
  Sparkles, 
  Shield,
  CheckCircle2,
  Clock,
  Users,
  Star,
  Sofa,
  Cog
} from "lucide-react";
import { motion } from "framer-motion";

const CarWashJanakpuri = () => {
  const navigate = useNavigate();

  const services = [
    { icon: Droplets, name: "Exterior Car Wash", desc: "Remove dust, mud, and pollution marks" },
    { icon: Car, name: "Interior Cleaning", desc: "Vacuuming, dashboard wiping, and mat cleaning" },
    { icon: Sparkles, name: "Complete Car Cleaning", desc: "Inside and outside care for your car" },
    { icon: MapPin, name: "Doorstep Car Wash", desc: "No driving anywhere or waiting in line" },
    { icon: Sofa, name: "Seat & Upholstery Cleaning", desc: "Deep cleaning for fabric and leather seats" },
    { icon: Cog, name: "Car Detailing", desc: "Paint protection, dashboard polishing & more" },
  ];

  const whyChooseUs = [
    { icon: Users, text: "Experienced and trained professionals" },
    { icon: Shield, text: "Eco-friendly cleaning solutions" },
    { icon: Clock, text: "On-time doorstep service" },
    { icon: Sparkles, text: "Affordable pricing with no hidden charges" },
    { icon: Star, text: "Easy online booking" },
  ];

  const areas = [
    "Janakpuri Block A", "Block B", "Block C", "Block D",
    "District Centre", "Janakpuri Metro Station Area"
  ];

  const monthlyBenefits = [
    "Scheduled regular cleaning",
    "Priority booking",
    "Cost savings",
    "Dedicated service support",
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
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Car Wash Services in Janakpuri | CleanCruisers Delhi</title>
        <meta name="description" content="Get reliable car wash services in Janakpuri by CleanCruisers. Affordable doorstep cleaning in West Delhi. Book your car wash today!" />
        <meta name="keywords" content="car wash in Janakpuri, car wash services Janakpuri, doorstep car wash Janakpuri, car cleaning Janakpuri West Delhi, monthly car wash Janakpuri, car detailing Janakpuri, CleanCruisers" />
        {/* <link rel="canonical" href="https://cleancruisers.in/car-wash-services-in-janakpuri" /> */}
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-green-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6"
            >
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Serving Janakpuri & West Delhi</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Doorstep Car Wash Services
              <span className="block text-green-400 mt-2">in Janakpuri, West Delhi</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Looking for reliable <span className="text-white font-medium">car wash services in Janakpuri</span> that save your time and deliver professional results? 
              <span className="text-white font-medium"> CleanCruisers</span> brings premium doorstep car wash right to your home or office. 
              No waiting. No queues. Just spotless shine at your convenience.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => navigate("/booking")}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
              >
                BOOK NOW
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a 
                href="tel:8920230357"
                className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-gray-700 rounded-xl text-white hover:border-green-500/50 transition-all"
              >
                <Phone className="w-5 h-5 text-green-400" />
                <span className="font-semibold">8920230357</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About / Intro Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Professional Service</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Professional Car Wash at Your Doorstep
              </h2>
              <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <p>
                  The CleanCruisers doorstep car wash company in West Delhi offers mobile car washing services 
                  throughout Janakpuri. Our team uses environmentally safe cleaning solutions together with 
                  innovative methods to protect surfaces from scratches while using minimum water.
                </p>
                <p>
                  Our <span className="text-green-400">home car wash service in Janakpuri</span> provides 
                  exterior washing and interior sanitization services which customers can use according to 
                  their specific requirements.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-3xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Star className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Happy Customers</p>
                    <p className="text-gray-500 text-sm">Across Janakpuri & West Delhi</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm italic border-l-2 border-green-500/50 pl-4">
                  "If you live in West Delhi Janakpuri and struggle to manage regular car cleaning, 
                  our expert team ensures your vehicle stays clean, protected, and road-ready — 
                  without you stepping out."
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Car Wash & Cleaning Services in Janakpuri
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer car cleaning services that cover regular and deep cleaning needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                    <service.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">{service.name}</h3>
                    <p className="text-gray-500 text-sm">{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm mt-8 p-4 bg-gray-900/50 border border-gray-800 rounded-xl max-w-2xl mx-auto"
          >
            Searching for a <span className="text-green-400 font-medium">car wash near Janakpuri metro station</span>? 
            CleanCruisers reaches you wherever your vehicle is parked.
          </motion.p>
        </div>
      </section>

      {/* Affordable Pricing Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            <div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Affordable Pricing</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Affordable Car Wash Janakpuri – Quality Within Budget
              </h2>
              <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <p>
                  We believe car care shouldn't be expensive. That's why CleanCruisers offers 
                  <span className="text-green-400"> affordable car wash Janakpuri</span> packages that suit every budget. 
                  From single washes to regular cleaning, you get professional service without paying premium showroom prices.
                </p>
                <p>
                  Our transparent pricing ensures no hidden charges — just honest, reliable service.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-3xl"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-400/10 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-xl font-bold text-white mb-4">Monthly Car Wash Plans Janakpuri</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Want a consistently clean car without repeated bookings? Our monthly plans are perfect for you.
                </p>
                <div className="space-y-3">
                  {monthlyBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-xs mt-6 italic">
                  Your car receives professional attention multiple times a month, keeping dust and pollution away.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Car Detailing Section */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Premium Service</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Premium Car Detailing in Janakpuri
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              CleanCruisers provides professional <span className="text-green-400">car detailing services</span> to car owners 
              in Janakpuri West Delhi who need more than basic cleaning solutions. Our services include deep interior vacuuming, 
              dashboard polishing, seat cleaning, and paint protection.
            </p>
            <p className="text-gray-500 text-sm">
              Detailing not only enhances appearance but also increases your car's long-term value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why Us?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Why Choose CleanCruisers in Janakpuri?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              When it comes to car wash services in Janakpuri, CleanCruisers stands out for reliability, 
              professionalism, and customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 mb-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <span className="text-gray-200 text-sm sm:text-base">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                We Proudly Serve
              </h2>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {areas.map((area, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 bg-gray-900/60 border border-gray-800 rounded-full text-gray-300 text-sm hover:border-green-500/40 hover:text-green-400 transition-all"
              >
                {area}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-3xl text-center"
          >
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Searching for a <span className="text-green-400 font-medium">car wash near Janakpuri metro station</span>? 
              CleanCruisers reaches you wherever your vehicle is parked across Janakpuri and nearby areas.
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium text-sm">
                Check our Google listing for real customer feedback
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-green-500/10 to-green-600/20 rounded-3xl" />
            <div className="absolute inset-0 border border-green-500/30 rounded-3xl" />
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

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Book Doorstep Car Wash Janakpuri Today
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Stop wasting weekends at local washing centers. Experience hassle-free cleaning, 
                affordable pricing, and professional results — all at your doorstep.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
                >
                  BOOK NOW
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a 
                  href="tel:8920230357"
                  className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-gray-700 rounded-xl text-white hover:border-green-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Call us now</p>
                    <p className="text-base font-semibold">8920230357</p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CarWashJanakpuri;
