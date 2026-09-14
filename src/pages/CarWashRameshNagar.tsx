import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  MapPin, Phone, ArrowRight, Car, CheckCircle2,
  Droplets, Wind, Layers, Sparkles, Shield, Users, Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const FaqItem = ({ q, a }: { q: string; a: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/30 transition-all cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between p-5 gap-4">
        <span className="text-gray-200 text-sm sm:text-base font-medium">{q}</span>
        <span
          className={`text-2xl flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          style={{ color: open ? "#4ade80" : "#6b7280" }}
        >
          +
        </span>
      </div>
      {open && (
        <div className="px-5 pb-5 border-t border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
};

const CarWashRameshNagar = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      name: "Exterior Car Wash",
      desc: "Panel-by-panel exterior cleaning with separate attention to wheels, tyres, trims and areas where road dirt collects. The aim is proper pre-cleaning and careful washing — not just making the car look wet and shiny.",
    },
    {
      icon: Layers,
      name: "Snow Foam Wash",
      desc: "Snow foam is used as a pre-wash step to loosen surface dirt before contact cleaning — particularly useful when the car has accumulated dust from regular West Delhi driving.",
    },
    {
      icon: Sparkles,
      name: "Interior Cleaning",
      desc: "Interior cleaned according to its condition: dashboard, seats, floor, mats, door panels, boot area, vents and frequently touched surfaces. We work around the actual state of the cabin, not a fixed checklist.",
    },
    {
      icon: Wind,
      name: "Steam Cleaning",
      desc: "Steam works well for selected interior areas and hard-to-reach locations. We take care around electronics, switches and materials that should not receive excessive moisture.",
    },
    {
      icon: Droplets,
      name: "Car Seat & Carpet Cleaning",
      desc: "Seats and carpets can gather dirt, food particles, stains and odours over time. The cleaning method depends on the fabric, condition and type of stain.",
    },
    {
      icon: Shield,
      name: "Complete Car Care",
      desc: "For a car that needs more than a basic wash, we combine exterior and interior cleaning according to its condition — adjusted for your vehicle type and what it actually needs.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Vehicle Inspection",
      desc: "We first look at the condition of the exterior and interior before deciding how to clean.",
    },
    {
      num: "02",
      title: "Pre-Wash",
      desc: "Loose dirt is removed before contact cleaning. Snow foam can be used where appropriate.",
    },
    {
      num: "03",
      title: "Surface-Specific Cleaning",
      desc: "Different materials need different cleaning methods. Glass, paint, plastic, fabric, leather and wheels should not all be treated the same way.",
    },
    {
      num: "04",
      title: "Detailed Cleaning",
      desc: "Door jambs, seat gaps, vents, badges and corners receive additional attention — the areas most quick washes skip.",
    },
    {
      num: "05",
      title: "Final Check",
      desc: "Before completing the service, we check the vehicle to make sure the main areas have been cleaned properly.",
    },
  ];

  const whyChoose = [
    "Car cleaning at your location — home, office or society parking",
    "Cleaning equipment brought by our team",
    "Interior and exterior cleaning options",
    "Services for hatchbacks, sedans, SUVs and premium vehicles",
    "Suitable cleaning methods for different surfaces",
    "Flexible one-time and recurring cleaning options",
  ];

  const westDelhiAreas = [
    { name: "Rajouri Garden", link: "/car-wash-in-rajouri-garden/" },
    { name: "Tilak Nagar", link: "/car-wash-in-tilak-nagar/" },
    { name: "Janakpuri", link: "/car-wash-services-in-janakpuri" },
    { name: "Punjabi Bagh", link: "/car-wash-in-punjabi-bagh/" },
    { name: "Paschim Vihar", link: "/car-wash-in-paschim-vihar/" },
    { name: "Vikaspuri", link: "/car-wash-in-vikaspuri/" },
    { name: "Hari Nagar", link: "/car-wash-in-hari-nagar/" },
    { name: "Subhash Nagar", link: "/car-wash-in-subhash-nagar/" },
    { name: "Kirti Nagar", link: "/car-wash-in-kirti-nagar/" },
    { name: "Moti Nagar", link: "/car-wash-in-moti-nagar/" },
    { name: "Tagore Garden", link: "/car-wash-in-tagore-garden/" },
    { name: "Mayapuri", link: "/car-wash-in-mayapuri/" },
  ];

  const faqs = [
    {
      q: "Do you provide car wash at home in Ramesh Nagar?",
      a: "Yes. CleanCruisers provides doorstep car cleaning in Ramesh Nagar and other West Delhi locations, subject to service availability.",
    },
    {
      q: "Do I need to take my car somewhere?",
      a: "No. Our doorstep service is designed so the cleaning can be carried out at your home, office or suitable parking location.",
    },
    {
      q: "Do you clean SUVs?",
      a: "Yes. We clean hatchbacks, sedans, SUVs and premium vehicles, with the service adjusted according to vehicle size and condition.",
    },
    {
      q: "Can you clean the interior as well?",
      a: "Yes. Interior cleaning can include vacuuming, seats, carpets, dashboard, door panels, boot area and other accessible areas depending on the selected service.",
    },
    {
      q: "Can you remove scratches during a car wash?",
      a: "No. Normal washing removes dirt and surface contamination but does not repair scratches. Paint correction is a separate service.",
    },
    {
      q: "Do you serve areas outside Ramesh Nagar?",
      a: "CleanCruisers serves several parts of West Delhi. If your locality is not listed, you can share your location while booking and confirm availability.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Car Wash at Home in Ramesh Nagar | CleanCruisers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Car wash at home in Ramesh Nagar with easy doorstep car cleaning by CleanCruisers. Get your car cleaned at home, office or parking location."
        />
        <link rel="canonical" href="https://cleancruisers.in/car-wash-in-ramesh-nagar/" />
        <meta property="og:title" content="Car Wash at Home in Ramesh Nagar | CleanCruisers" />
        <meta
          property="og:description"
          content="Car wash at home in Ramesh Nagar with easy doorstep car cleaning by CleanCruisers. Get your car cleaned at home, office or parking location."
        />
        <meta property="og:url" content="https://cleancruisers.in/car-wash-in-ramesh-nagar/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Wash at Home in Ramesh Nagar | CleanCruisers" />
        <meta name="twitter:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CleanCruisers",
          "image": "https://cleancruisers.in/LOGOFINAL.png",
          "url": "https://cleancruisers.in",
          "telephone": "+918920230357",
          "priceRange": "₹₹",
          "areaServed": "Ramesh Nagar, West Delhi",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Ramesh Nagar",
            "addressRegion": "West Delhi",
            "addressCountry": "India",
          },
        })}</script>
      </Helmet>

      <Header />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="absolute inset-0 pointer-events-none">
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
              <span className="text-green-400 text-sm font-medium">Serving Ramesh Nagar & West Delhi</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Best Car Wash at Home in Ramesh Nagar
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Finding time to take your car to a washing centre is not always easy. Between office travel, traffic, family work and daily driving, car cleaning often gets delayed. CleanCruisers provides{" "}
              <span className="text-green-400 font-medium">doorstep car cleaning in Ramesh Nagar</span> — our team comes to your home, office or parking location with the required cleaning equipment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => navigate("/booking")}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
              >
                BOOK NOW <ArrowRight className="w-5 h-5 ml-2" />
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

      {/* ── Why Regular Cleaning Matters ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why It Matters</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Why Regular Car Cleaning Matters in Ramesh Nagar
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Cars in West Delhi often deal with road dirt, pollutants, traffic grime and outdoor parking. A quick rinse may remove visible dust, but it does not always address:
            </p>
          </motion.div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3 mb-6"
          >
            {[
              "Dust around door edges",
              "Dirt on wheels and wheel arches",
              "Mud around lower panels",
              "Dust inside the dashboard and vents",
              "Stains on seats and carpets",
              "Dirt around boot areas",
              "Grime collected around door jambs",
            ].map((item, i) => (
              <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm sm:text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Regular cleaning prevents this dirt from building up over time. Our method is to observe the actual condition of the vehicle before deciding how it should be cleaned.
          </motion.p>
        </div>
      </section>

      {/* ── Car Wash for Everyday Cars ── */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Who We Serve</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Car Wash in West Delhi for Everyday Cars
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
              CleanCruisers provides car wash in West Delhi for customers who want their vehicle cleaned at their own location. Whether your car is parked at home, inside a residential society or at your office, our team can carry out the required cleaning subject to suitable parking space.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {["Hatchbacks", "Sedans", "SUVs", "Premium cars", "Family cars", "Daily-use vehicles"].map((type, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <Car className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm font-medium">{type}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-6 p-5 bg-green-500/5 border border-green-500/20 rounded-xl"
          >
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="text-green-400 font-semibold">Note: </span>
              A Mercedes or BMW may require different handling from a regular hatchback, especially around sensitive trims, leather interiors and glossy surfaces. The cleaning method should match the vehicle rather than using exactly the same process for every car.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Car Cleaning Services in Ramesh Nagar
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <service.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">How It Works</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
              Our Doorstep Car Cleaning Process
            </h2>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-6 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <span className="text-green-400 font-bold text-2xl tabular-nums flex-shrink-0 leading-none mt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose CleanCruisers ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why Us?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Why Choose CleanCruisers for Car Wash in West Delhi?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Our doorstep model is built around making car cleaning easier for people who don't want to spend their time driving to a washing centre and waiting there. What you get:
            </p>
          </motion.div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {whyChoose.map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-gray-200 text-sm sm:text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── West Delhi Coverage ── */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Doorstep Car Wash Across West Delhi
              </h2>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Our current West Delhi service area includes Ramesh Nagar along with:
            </p>
            <div className="flex flex-wrap gap-2">
              {westDelhiAreas.map((area, i) => (
                <a
                  key={i}
                  href={area.link}
                  className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm hover:bg-green-500/20 transition-all font-medium"
                >
                  Car Wash in {area.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── How Often ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Cleaning Frequency</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
              How Often Should You Wash Your Car?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              There is no single schedule that works for every vehicle.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 mb-6"
          >
            {[
              {
                label: "Exterior wash",
                freq: "Every 1–2 weeks",
                note: "Practical starting point for a car parked outdoors and used regularly in West Delhi",
              },
              {
                label: "Interior deep clean",
                freq: "Every 3–6 months",
                note: "More often for cars carrying children, pets or daily food and drinks",
              },
              {
                label: "Seat & carpet cleaning",
                freq: "As needed",
                note: "Depends on fabric, condition and type of stains or odours",
              },
              {
                label: "Complete car care",
                freq: "Every 2–3 months",
                note: "For a full reset — exterior and interior combined in one session",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} className="p-5 bg-gray-900/60 border border-gray-800 rounded-xl">
                <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                <p className="text-white font-semibold text-base mb-1">{item.freq}</p>
                <p className="text-gray-500 text-sm">{item.note}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm leading-relaxed"
          >
            The important thing is not to wait until dirt, stains and odours have become difficult to deal with.
          </motion.p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Frequently Asked Questions — Car Wash in Ramesh Nagar
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
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
                Book Car Wash at Home in Ramesh Nagar
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Your car does not always need to be taken to a washing centre for proper cleaning. CleanCruisers can come to your home, office or suitable parking location and carry out the required car cleaning.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
                >
                  Book Your Car Wash Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a
                  href="tel:8920230357"
                  className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-gray-700 rounded-xl text-white hover:border-green-500/50 transition-all"
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

export default CarWashRameshNagar;
