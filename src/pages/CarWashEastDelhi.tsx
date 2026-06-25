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
  Users,
  Leaf,
  ThumbsUp,
  MessageCircle,
  Package,
  CreditCard,
  Star,
  Repeat,
  BadgeCheck,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

console.log("DoorstepCarWashEastDelhi rendered");

const DoorstepCarWashEastDelhi = () => {
  const navigate = useNavigate();

  const serviceGroups = [
    {
      icon: Droplets,
      name: "Exterior + Interior Car Wash Service in East Delhi",
      desc: "Complete car cleaning at your doorstep covering inside and out.",
      points: [
        "Foam Wash (deep cleaning)",
        "Interior Vacuum Cleaning",
        "Tyre Dressing & Shine",
        "Dashboard Polish",
        "Footmat Cleaning",
        "Dicky Cleaning",
        "Exterior Black Parts Polishing",
        "Interior Black Trim Care",
        "Microfiber Cloth Cleaning",
      ],
    },
    {
      icon: Sparkles,
      name: "Premium Car Detailing Service at Home East Delhi",
      desc: "Full detailing for a showroom-like finish right at your parking spot.",
      points: [
        "Rubbing + Waxing Treatment",
        "3M Wax Protection",
        "Dry Cleaning Interior Deep Cleaning",
        "Full Car Exterior Polish",
        "Light Scratch Removal Treatment",
      ],
    },
  ];

  const safetyPoints = [
    "Scratch-free microfiber cleaning for all cars",
    "Foam wash technique for safe exterior cleaning",
    "Safe for luxury and new cars",
    "Trained professionals for every service",
    "Eco-friendly cleaning materials",
    "Zero-damage approach for complete peace of mind",
  ];

  const packages = [
    {
      icon: Car,
      name: "Basic Car Wash Package at Home",
      tag: "Best for regular cleaning",
      points: ["Foam wash", "Interior vacuum", "Tyre cleaning"],
    },
    {
      icon: Droplets,
      name: "Standard Car Cleaning Package East Delhi",
      tag: "Best value for weekly care",
      points: [
        "Foam wash",
        "Interior + exterior cleaning",
        "Dashboard polish",
        "Footmat cleaning",
      ],
    },
    {
      icon: Sparkles,
      name: "Premium Car Detailing Package Delhi",
      tag: "For showroom-like finish",
      points: [
        "Rubbing + waxing",
        "Deep interior cleaning",
        "Full body polishing",
        "Complete detailing service",
      ],
    },
    {
      icon: Repeat,
      name: "Monthly Car Wash Service East Delhi Plan",
      tag: "Perfect for busy car owners",
      points: [
        "Regular doorstep visits",
        "Priority booking",
        "Cost-effective pricing",
      ],
    },
  ];

  const pricingPoints = [
    { icon: BadgeCheck, text: "Clear pricing before service" },
    { icon: Shield, text: "No hidden charges" },
    { icon: MapPin, text: "Doorstep service included" },
    { icon: CreditCard, text: "Affordable packages for all car types" },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Professional trained car cleaning experts",
      text: "Experienced staff with proper training to handle all types of vehicles with care.",
    },
    {
      icon: MapPin,
      title: "Doorstep convenience anywhere in East Delhi",
      text: "We come to your home, office, or society parking with all required tools and products.",
    },
    {
      icon: Leaf,
      title: "Eco-friendly and safe cleaning system",
      text: "Modern methods using minimal water and eco-friendly products to reduce waste.",
    },
    {
      icon: Sparkles,
      title: "Premium quality detailing products",
      text: "We use professional-grade, paint-safe products for consistent and lasting results.",
    },
    {
      icon: Zap,
      title: "Fast service response time",
      text: "Our team usually reaches your location within 30–60 minutes based on booking availability.",
    },
    {
      icon: Shield,
      title: "Safe for all types of vehicles",
      text: "Our cleaning methods are safe for hatchbacks, sedans, SUVs, luxury cars, and new vehicles.",
    },
  ];

  const areas = [
    "Mayur Vihar Phase 1",
    "Mayur Vihar Extension",
    "IP Extension",
    "Patparganj",
    "Vasundhara Enclave",
    "Anand Vihar",
    "Surajmal Vihar",
    "Yojana Vihar",
    "Ram Vihar",
    "Vivek Vihar",
    "Karkardooma",
    "Preet Vihar",
    "Chander Nagar",
    "Jagriti Enclave",
    "Priyadarshini Vihar",
    "Swasthya Vihar",
    "Dayanand Vihar",
    "Pushpanjali Enclave",
    "Kaushambi Border Area",
    "Indraprastha Extension",
    "Laxmi Nagar",
    "Krishna Nagar",
    "Shahdara",
    "Dilshad Garden",
    "Mandawali",
    "New Ashok Nagar",
    "Geeta Colony",
    "Gandhi Nagar",
    "Jagatpuri",
    "Pandav Nagar",
  ];

  const process = [
    {
      icon: MessageCircle,
      step: "Step 1",
      title: "Book Online or via WhatsApp",
      desc: "Contact us online or on WhatsApp, select your car wash package, and confirm your East Delhi location and time slot.",
    },
    {
      icon: Package,
      step: "Step 2",
      title: "Select Your Car Wash Package",
      desc: "Choose from our Basic, Standard, Premium, or Monthly plans based on your car's needs and your budget.",
    },
    {
      icon: Car,
      step: "Step 3",
      title: "Technician Arrives at Your Home",
      desc: "Our technician reaches your home, office, or society parking with all required cleaning equipment and products.",
    },
    {
      icon: Sparkles,
      step: "Step 4",
      title: "Complete Professional Car Cleaning Service",
      desc: "We carry out the selected services — exterior wash, interior cleaning, detailing, and more — following our standard process.",
    },
    {
      icon: ThumbsUp,
      step: "Step 5",
      title: "Pay After Satisfaction",
      desc: "We show you the results and close the job only when you are satisfied. No travel, no waiting, no hassle.",
    },
  ];

  const faqs = [
    {
      q: "Is doorstep car wash safe for my car?",
      a: "Yes, we use microfiber cloth and foam wash techniques that ensure scratch-free and safe cleaning.",
    },
    {
      q: "Do you bring water and equipment for car cleaning at home?",
      a: "Yes, our team brings all required tools, water, and cleaning products.",
    },
    {
      q: "How long does a car wash take?",
      a: "A normal wash takes 30–60 minutes depending on the package.",
    },
    {
      q: "Which areas do you cover for car wash in East Delhi?",
      a: "We serve Preet Vihar, Laxmi Nagar, Mayur Vihar, Anand Vihar, IP Extension, and nearby premium areas.",
    },
    {
      q: "Do you offer monthly car wash packages?",
      a: "Yes, we provide affordable monthly maintenance plans for regular car care.",
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
        <title>Doorstep Car Wash Service in East Delhi | Car Wash at Home Delhi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Get premium doorstep car wash service in East Delhi. Car wash at home, car cleaning, dry cleaning, detailing & affordable packages across East Delhi locations."
        />
        <meta
          name="keywords"
          content="car wash in east delhi, doorstep car wash service east delhi, car wash at home east delhi, car cleaning service at home, car wash home service near me, car dry cleaning near me, car detailing service at home, car wash prices in delhi, car wash charges in delhi, mobile car wash delhi, gaadi wash at home, car cleaning near me, doorstep car wash near me"
        />
        {/* <link rel="canonical" href="https://cleancruisers.in/doorstep-car-wash-service-in-east-delhi/" /> */}
        <meta property="og:title" content="Doorstep Car Wash Service in East Delhi | Car Wash at Home Delhi" />
        <meta property="og:description" content="Get premium doorstep car wash service in East Delhi. Professional car cleaning at home by CleanCruisers." />
        <meta property="og:url" content="https://cleancruisers.in/doorstep-car-wash-service-in-east-delhi/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doorstep Car Wash Service in East Delhi | Car Wash at Home Delhi" />
        <meta name="twitter:description" content="Professional doorstep car wash service in East Delhi." />
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
            "areaServed": "East Delhi, Delhi",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "East Delhi",
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
              <span className="text-green-400 text-sm font-medium">Serving East Delhi & Nearby Areas</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Doorstep Car Wash Service in East Delhi
              <span className="block text-green-400 mt-2">Car Wash at Home East Delhi</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-4">
              Get a showroom-like shine with{" "}
              <span className="text-white font-medium">CleanCruisers</span>, your trusted <span className="text-white font-medium">doorstep car wash service
              in East Delhi</span>. We provide premium <span className="text-white font-medium">car wash at home East Delhi</span>, car detailing, and complete <span className="text-white font-medium">car cleaning
              service at home</span> so you don't need to visit any service center.
            </p>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              If you are searching for{" "}
              <span className="text-green-400">car wash home service near me</span>, <span className="text-white font-medium">car cleaning near me</span>, or <span className="text-white font-medium">car dry cleaning near me</span>, CleanCruisers brings everything to your doorstep with professional tools,
              dry cleaning near me, CleanCruisers brings everything to your doorstep with professional tools,
              trained staff, and safe cleaning methods.
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

      {/* Quick Summary */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Quick Summary</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Car Wash in East Delhi – Quick Summary
              </h2>
              <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
                <p>
                  CleanCruisers provides professional car wash service in East Delhi across premium locations like
                  Preet Vihar, Laxmi Nagar, Mayur Vihar, Anand Vihar, IP Extension, and Karkardooma. Our services
                  include foam wash, interior cleaning, vacuuming, tyre dressing, dashboard polishing, rubbing,
                  waxing, and full car detailing at home.
                </p>
                <p>
                  We are a{" "}
                  <span className="text-green-400">mobile car wash service Delhi</span> offering safe,
                  scratch-free cleaning using microfiber cloth and eco-friendly products. It is a convenient
                  solution for anyone searching{" "}
                  <a href="https://cleancruisers.in/" className="text-green-400 underline hover:text-green-300 transition-colors">
                    doorstep car wash near me
                </a> or gaadi wash at home.
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
                  Ready for a showroom-fresh car without leaving home? Book your doorstep car wash in East Delhi
                  with CleanCruisers today.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Car Safety First */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Safety First</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Car Safety First – Safe & Scratch-Free Car Wash at Home East Delhi
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your car is valuable, and we treat it with full care. Every <a href="https://cleancruisers.in/" className="text-green-400 underline hover:text-green-300 transition-colors">
  car cleaning service at home
</a> is done with
              safety-first methods. Your vehicle is not just cleaned – it is carefully protected and maintained with
              professional care.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {safetyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 p-5 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">{point}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Doorstep Car Wash Service in East Delhi – Complete Car Cleaning at Home
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer full range of car wash in East Delhi services at your doorstep – from basic cleaning to
              premium detailing, all done at your society, home, or office parking.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {serviceGroups.map((service, index) => (
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
            Whether you need a basic car wash at doorstep or full detailing, we provide professional mobile service
            at your location.
          </motion.p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Packages</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Car Wash Packages in Delhi – Affordable Doorstep Car Cleaning Plans
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the best car wash service in East Delhi based on your needs.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                      <pkg.icon className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-base mb-1">{pkg.name}</h3>
                      <span className="text-xs text-green-400 font-medium bg-green-500/10 px-2 py-0.5 rounded-full">
                        {pkg.tag}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {pkg.points.map((point, i) => (
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
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Pricing</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
                Transparent Car Wash Prices in Delhi – No Hidden Charges
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                We believe in honesty and transparency for every car wash charges in Delhi. Whether you choose
                basic or premium service, you always get value for money.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {pricingPoints.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl"
                  >
                    <item.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{item.text}</span>
                  </motion.div>
                ))}
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
                    <p className="text-2xl font-bold text-white">Value for Money</p>
                    <p className="text-gray-500 text-sm">Always, every service</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm italic border-l-2 border-green-500/50 pl-4">
                  Book your CleanCruisers doorstep car wash in East Delhi now and experience premium care at
                  transparent, honest prices.
                </p>
                <Button
                  onClick={() => navigate("/booking")}
                  className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-5 text-sm rounded-xl"
                >
                  BOOK NOW
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why Us?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Why Choose CleanCruisers for Car Wash at Home East Delhi?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              CleanCruisers is a trusted name for car wash at home East Delhi because we focus on quality and
              customer satisfaction. We believe in delivering long-lasting shine and complete customer satisfaction.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
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
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
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
                Car Wash Near Me – Service Areas in East Delhi
              </h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide fast doorstep car wash service East Delhi in premium areas. Our team usually reaches within
              30–60 minutes based on booking availability. When you search "doorstep car wash near me" or "car
              washing near me", CleanCruisers is ready to serve you.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
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
        </div>
      </section>

      {/* How It Works / Process */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Simple Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              How Car Wash at Doorstep Works – Easy Booking Process
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Booking your car wash home service near me is simple. No travel, no waiting, no hassle.
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

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
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
            <p className="text-gray-400 max-w-2xl mx-auto">
              FAQ – Car Wash Service in East Delhi
            </p>
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
                Book Best Doorstep Car Wash Service in East Delhi Now
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Get premium car wash at home East Delhi with professional care, safety, and convenience. Book your
                doorstep car wash service near me today and give your car a showroom-like shine without leaving your
                home. CleanCruisers – Trusted car wash service in East Delhi for safe, premium, and professional car
                care at your doorstep.
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

export default DoorstepCarWashEastDelhi;
