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
  Snowflake,
  Wind,
  Waves,
  Wrench,
  Leaf,
  Headphones,
  Calendar,
  Search,
  ClipboardCheck,
  ThumbsUp,
} from "lucide-react";
import { motion } from "framer-motion";

console.log("DoorstepCarWashSouthDelhi rendered");

const DoorstepCarWashSouthDelhi = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      name: "Internal Car Cleaning",
      desc: "Makes your cabin feel fresh, clean, and comfortable again.",
      points: [
        "Full vacuuming of seats, carpets, boot, and hard‑to‑reach corners",
        "Dashboard cleaning for a clean, non‑sticky finish",
        "Seat cleaning for fabric or leather, as per your car's upholstery",
        "Floor mat washing and drying to remove mud, dust, and odours",
        "Interior sanitization of high‑touch areas like steering, gear, door handles, and switches",
      ],
    },
    {
      icon: Droplets,
      name: "External Car Cleaning",
      desc: "Designed to be gentle on paint and tough on dirt.",
      points: [
        "Body wash using paint‑safe shampoo and soft microfiber cloths",
        "Glass cleaning inside and out for clear, streak‑free visibility",
        "Tyre cleaning to remove road grime and restore a deep black look",
        "Alloy wheel cleaning to get rid of brake dust and tough deposits",
        "Use of paint‑safe products to reduce swirl marks and micro‑scratches",
      ],
    },
    {
      icon: Snowflake,
      name: "Snow Foam Wash",
      desc: "A thick foam blankets your car, soaks in, and gently lifts dust and road film before rinse.",
      points: [
        "Softer, safer contact with the paint",
        "Reduced swirl marks and micro‑scratches",
        "A smoother, glossier finish compared to basic washing",
      ],
    },
    {
      icon: Wind,
      name: "Steam Wash",
      desc: "High‑temperature steam cleans and sanitizes while using very little water.",
      points: [
        "Deep cleaning tight gaps and trims",
        "Reducing germs and odours inside the car",
        "Removing stubborn dirt without harsh chemicals",
      ],
    },
    {
      icon: Waves,
      name: "Underbody Cleaning",
      desc: "Protects the underbody from mud, water, and road contaminants that cause rust.",
      points: [
        "Washes away stuck mud and deposits",
        "Helps prevent corrosion and rust",
        "Protects critical metal parts and joints",
      ],
    },
  ];

  const whyChooseUs = [
    { icon: MapPin, title: "Doorstep convenience", text: "We come to your home, office, or society parking with the required tools and products." },
    { icon: Users, title: "Trained professionals", text: "Experienced staff that handle different car types with care and follow a proper cleaning process." },
    { icon: Leaf, title: "Eco‑friendly approach", text: "Modern methods like controlled water usage, foam wash, and steam wash to reduce waste." },
    { icon: Wrench, title: "Modern equipment", text: "Professional pressure washers, vacuums, and cleaning tools for consistent results." },
    { icon: Clock, title: "Flexible scheduling", text: "Book slots that suit your routine, including busy weekdays and weekends." },
    { icon: Headphones, title: "Responsive support", text: "Need help choosing services or rescheduling? We're easy to reach and quick to assist." },
    { icon: CheckCircle2, title: "Quality‑first mindset", text: "Every job ends with a final check so your car leaves your parking spot looking fresh and clean." },
  ];

  const areas = [
    "Greater Kailash and Greater Kailash 2",
    "Saket and Malviya Nagar",
    "Hauz Khas and Green Park",
    "Vasant Kunj and nearby colonies",
    "Defence Colony and Lajpat Nagar",
    "Chittaranjan Park (CR Park) and Kalkaji",
    "Nehru Place and surrounding business hubs",
    "Panchsheel Park and nearby premium societies",
  ];

  const process = [
    { icon: Calendar, step: "Step 1", title: "Book Appointment", desc: "You contact us, share your car details, choose the service, and confirm your South Delhi location and time slot." },
    { icon: Car, step: "Step 2", title: "Technician Arrives", desc: "Our technician reaches your home, office, or society parking with all required cleaning equipment and products." },
    { icon: Search, step: "Step 3", title: "Vehicle Inspection", desc: "We quickly inspect your car's exterior and interior condition to note specific spots that need attention." },
    { icon: Sparkles, step: "Step 4", title: "Professional Cleaning", desc: "We carry out the booked services – exterior wash, interior cleaning, snow foam wash, steam wash, or underbody cleaning – following our standard process." },
    { icon: ClipboardCheck, step: "Step 5", title: "Final Quality Check", desc: "The technician verifies overall cleanliness, shine, glass clarity, wheels, and interiors to ensure nothing is missed." },
    { icon: ThumbsUp, step: "Step 6", title: "Customer Satisfaction Confirmation", desc: "We show you the results, take your feedback, and close the job only when you are satisfied." },
  ];

  const benefits = [
    { icon: Clock, title: "Time saved", text: "No need to drive to a washing centre or stand in long queues; your car is cleaned where it is parked." },
    { icon: Users, title: "No waiting lines", text: "Your slot is dedicated, so the technician works only on your vehicle during that time." },
    { icon: Sparkles, title: "Professional finish", text: "Trained staff, systematic cleaning, and proper tools usually deliver better results than quick local washes." },
    { icon: Shield, title: "Comfort and convenience", text: "Get a clean car at home or office, while you continue your work, relax, or spend time with family." },
  ];

  const faqs = [
    {
      q: "Do you provide doorstep car wash services in South Delhi?",
      a: "Yes, CleanCruisers offers doorstep car wash services across South Delhi, including Greater Kailash, Saket, Malviya Nagar, Hauz Khas, Green Park, Vasant Kunj, Defence Colony, CR Park, Kalkaji, Nehru Place, Panchsheel Park, and Lajpat Nagar.",
    },
    {
      q: "What is a doorstep car wash?",
      a: "A doorstep car wash is a service where car cleaning professionals visit your home, office, or society parking with equipment and products to wash and clean your car on‑site, so you don't have to drive anywhere.",
    },
    {
      q: "How does home car washing work with CleanCruisers?",
      a: "You book a time, and then our technician comes to your South Delhi place, checks the vehicle, does the selected services like interior, exterior foam, steam, or underbody, and after that runs a final quality check before closing everything out.",
    },
    {
      q: "Is steam car washing safe?",
      a: "Yes, when handled by trained technicians, steam car washing is safe and effective. It uses minimal water, helps sanitize surfaces, and is suitable for many interior and exterior areas when applied correctly.",
    },
    {
      q: "What is included in interior car cleaning?",
      a: "Interior car cleaning includes full vacuuming, dashboard cleaning, seat and floor mat cleaning, and sanitization of high‑touch surfaces like steering, gear knob, and door handles.",
    },
    {
      q: "Why choose CleanCruisers over traditional car washes?",
      a: "CleanCruisers saves you time, cuts out travel and waiting, brings trained staff plus modern equipment right to your location, and keeps it eco friendly, quality driven car care, at your doorstep.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Doorstep Car Wash Services in South Delhi | CleanCruisers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Book professional doorstep car wash services in South Delhi. Interior cleaning, exterior wash, steam wash, snow foam wash, and home car cleaning by CleanCruisers."
        />
        <meta
          name="keywords"
          content="car wash services in south delhi, doorstep car wash south delhi, doorstep car wash near me, car washing near me, home car wash south delhi, car cleaning services south delhi, steam car wash, snow foam wash, cleancruisers"
        />
        <link rel="canonical" href="https://cleancruisers.in/doorstep-car-wash-services-in-south-delhi/" />
        <meta property="og:title" content="Doorstep Car Wash Services in South Delhi | CleanCruisers" />
        <meta property="og:description" content="Professional doorstep car wash service in South Delhi, Delhi. Book CleanCruisers today." />
        <meta property="og:url" content="https://cleancruisers.in/doorstep-car-wash-services-in-south-delhi/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doorstep Car Wash Services in South Delhi | CleanCruisers" />
        <meta name="twitter:description" content="Professional doorstep car wash service in South Delhi." />
        <meta name="twitter:image" content="https://cleancruisers.in/LOGOFINAL.png" />

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "CleanCruisers",
            "image": "https://cleancruisers.in/LOGOFINAL.png",
            "url": "https://cleancruisers.in",
            "telephone": "+918920230357",
            "priceRange": "₹399 - ₹2999",
            "areaServed": "South Delhi, Delhi",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "South Delhi",
              "addressRegion": "Delhi",
              "addressCountry": "India"
            }
          }
          `}
        </script>
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
              <span className="text-green-400 text-sm font-medium">Serving South Delhi & Nearby Areas</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Doorstep Car Wash in South Delhi
              <span className="block text-green-400 mt-2">Professional Car Cleaning by CleanCruisers</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Life in South Delhi moves fast – between office runs, school drops, client meetings, and family time,
              taking your car to a service station often slips to "later". A doorstep car wash fixes that by sending
              trained professionals, equipment, and eco friendly products straight to your parking spot –{" "}
              <span className="text-white font-medium">CleanCruisers</span> cleans your car while you keep going with your day.
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

      {/* Why Regular Car Washing is Important */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why It Matters</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Why Regular Car Washing is Important in South Delhi
              </h2>
              <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <p>
                  If you live in South Delhi, you've probably noticed how fast dust, pollution, bird droppings,
                  and everyday traffic mess up your car's looks. CleanCruisers gives trusted doorstep car wash
                  services in Delhi – foam wash, interior vacuuming, all handled with modern equipment right at
                  the customers' homes.
                </p>
                <p>
                  Now we bring the same professional, hassle‑free home car wash experience to South Delhi,
                  designed for people searching for reliable{" "}
                  <span className="text-green-400">car wash services in South Delhi</span> without wasting a single
                  extra minute in traffic.
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
                    <Sparkles className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Showroom‑Fresh Car</p>
                    <p className="text-gray-500 text-sm">Without leaving home</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm italic border-l-2 border-green-500/50 pl-4">
                  Ready for a showroom‑fresh car without leaving home? Book your doorstep car wash in South Delhi
                  with CleanCruisers today.
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
              Our Car Cleaning Services in South Delhi
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Complete car cleaning services in South Delhi at your doorstep – from quick freshening to detailed
              deep cleaning, all done in your society, home, or office parking.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <service.icon className="w-7 h-7 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">{service.name}</h3>
                      <p className="text-gray-500 text-sm">{service.desc}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
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
            Love that "just detailed" look? Snow foam and steam washing give you the{" "}
            <a href="https://cleancruisers.in/" className="text-green-400 font-medium underline">
              best car wash in Delhi
            </a>{" "}
            experience right at your doorstep.
          </motion.p>
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
              Why Choose CleanCruisers?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here's why CleanCruisers is the right choice for professional car wash in South Delhi.
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
                className="flex items-start gap-4 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm max-w-2xl mx-auto"
          >
            Don't let dust and pollution steal your car's shine. Book your CleanCruisers{" "}
            <span className="text-green-400 font-medium">doorstep car wash in South Delhi</span> now.
          </motion.p>
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Areas We Serve Across South Delhi</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We cover major residential and commercial pockets so that when you search "doorstep car wash near me"
              or "car washing near me", CleanCruisers is ready to serve you.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3 mb-8"
          >
            {areas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 p-4 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">{area}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-400 text-sm max-w-2xl mx-auto"
          >
            Whether your car is parked in a basement, stilt parking, or open society parking, our team adapts to
            your location and delivers a clean, ready‑to‑drive vehicle.
          </motion.p>
        </div>
      </section>

      {/* How It Works / Process */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Simple Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              How Our Doorstep Car Wash Process Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Simple, transparent and hassle‑free – here's how a doorstep car wash with CleanCruisers typically works.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {process.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">{item.step}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">The Advantages</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Benefits of Choosing a Doorstep Car Wash Near You
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Opting for a doorstep car wash near you offers clear advantages.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Got Questions?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-green-500/30 transition-all"
              >
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2 flex items-start gap-3">
                  <span className="text-green-400">{index + 1}.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed pl-7">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-900/50 to-black">
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
                Book Your Doorstep Car Wash in South Delhi
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Your car carries you through South Delhi's traffic, heat, markets, and meetings every day. It deserves
                more than a rushed bucket wash. With CleanCruisers, you get professional car wash services in South
                Delhi, done right at your home or office, by people who treat your car with the same care you do.
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

export default DoorstepCarWashSouthDelhi;
