
import React from "react";
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
  Wind,
  Layers,
  AlertCircle,
  Search,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
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
        <span className={`text-2xl flex-shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
          style={{ color: open ? "#4ade80" : "#6b7280" }}>+</span>
      </div>
      {open && (
        <div className="px-5 pb-5 border-t border-gray-800">
          <p className="text-gray-400 text-sm leading-relaxed pt-4">{a}</p>
        </div>
      )}
    </div>
  );
};

const CarWashTilakNagar = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Car Wash at Home in Tilak Nagar – Doorstep Car Cleaning Service</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Car wash at home in Tilak Nagar. Get your car ready for daily drives, long weekends and family trips with doorstep car cleaning by CleanCruisers." />
        <meta name="keywords" content="car wash in Tilak Nagar, doorstep car wash Tilak Nagar, car wash at home West Delhi, car cleaning Tilak Nagar, car wash before trip, CleanCruisers" />
        <link rel="canonical" href="https://cleancruisers.in/car-wash-in-tilak-nagar/" />
        <meta property="og:title" content="Car Wash at Home in Tilak Nagar – Doorstep Car Cleaning Service" />
        <meta property="og:description" content="Car wash at home in Tilak Nagar. Get your car ready for daily drives, long weekends and family trips with doorstep car cleaning." />
        <meta property="og:url" content="https://cleancruisers.in/car-wash-in-tilak-nagar/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Wash at Home in Tilak Nagar – Doorstep Car Cleaning Service" />
        <meta name="twitter:description" content="Car wash at home in Tilak Nagar. Doorstep car cleaning for daily-use cars, family vehicles, SUVs and premium cars." />
        <meta name="twitter:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CleanCruisers",
          "image": "https://cleancruisers.in/LOGOFINAL.png",
          "url": "https://cleancruisers.in",
          "telephone": "+918920230357",
          "priceRange": "₹₹",
          "areaServed": "Tilak Nagar, West Delhi",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tilak Nagar",
            "addressRegion": "West Delhi",
            "addressCountry": "India"
          }
        }`}</script>
      </Helmet>

      <Header />

      {/* Hero */}
      <section className="relative py-20 md:py-28 px-4 overflow-hidden" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-green-400/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Serving Tilak Nagar & West Delhi</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Car Wash at Home in Tilak Nagar — Doorstep Car Cleaning Service
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-4">
              Looking for a car wash at home in Tilak Nagar? CleanCruisers provides <a href="https://cleancruisers.in/" className="text-green-400 hover:underline font-medium">doorstep car cleaning</a> for daily-use cars, family vehicles, SUVs and premium cars, subject to location and parking conditions. Instead of driving to a wash centre and waiting for your turn, you can have your car cleaned where it is parked.
            </p>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-8">
              Our approach is simple: inspect the vehicle first, remove loose dirt before contact washing, clean different surfaces appropriately, and perform a final inspection before finishing. Planning a weekend or family trip? Book your car cleaning a day before you leave so you have time to check the tyres, windshield, boot and interior as well.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={() => navigate("/booking")}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25">
                BOOK NOW <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a href="tel:8920230357" className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-gray-700 rounded-xl text-white hover:border-green-500/50 transition-all">
                <Phone className="w-5 h-5 text-green-400" />
                <span className="font-semibold">8920230357</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Car Wash at Home in Tilak Nagar */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">How It Works</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Car Wash at Home in Tilak Nagar</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              CleanCruisers provides car wash at home in Tilak Nagar, subject to location and parking conditions. The basic idea is simple. Your car is already parked at home or in your society. So instead of taking it somewhere, waiting for your turn and bringing it back, the cleaning is done where the car is parked.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              This works particularly well for families. You can be getting the luggage ready, checking travel documents or sorting out things for the children while the car is being cleaned. There is no need to make a separate trip just for the wash.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why We Don't Treat Every Car Wash the Same */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Our Approach</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Why We Don't Treat Every Car Wash the Same</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              A car has many different surfaces. Paint. Glass. Plastic. Rubber. Alloy wheels. Fabric. Leather. Piano-black trim. They don't need the same product or the same amount of pressure. This is one of the first things we look at before cleaning a car.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "A dirty wheel should not be cleaned with the same cloth that is later used on the bonnet.",
                "A dusty dashboard does not need a thick, oily dressing just to make it look shiny.",
                "Leather should not be scrubbed like plastic.",
                "Heavy dust should not simply be rubbed into the paint with a dry cloth.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-6">
              These may look like small things. After many washes, they are not.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Cars Get Dirty */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Local Problem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Why Cars in Tilak Nagar Get Dirty So Quickly</h2>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-3">
              {[
                "Road dust and traffic grime",
                "Dust from residential parking",
                "Mud around lower doors and bumpers",
                "Brake dust on wheels",
                "Food crumbs and spills inside",
                "Dust between seats",
                "Dirt collected in floor mats",
                "Luggage and debris in the boot",
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Family Trip */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Trip Preparation</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Get the Car Ready Before the Family Trip</h2>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-3xl">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                This is something we strongly recommend. Don't wait until the morning of the trip to clean the car. Clean it a day before. Why? Because the day before gives you time to notice other things:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "A tyre that looks low",
                  "A dirty windshield",
                  "A wiper that needs checking",
                  "A messy boot",
                  "An old food packet under a seat",
                  "A child-seat area that needs cleaning",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                When the car is clean, these things become easier to see. For a long weekend or festival trip, the car should be part of the preparation — not an afterthought.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Check Before Cleaning */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Before We Start</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">What We Check Before Cleaning</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Before starting, we look at the condition of the car. We check:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "How much dust and road dirt is on the exterior",
                "Condition of the wheels and tyres",
                "Mud around lower panels",
                "Interior dust and stains",
                "Floor mats",
                "Seats and seat gaps",
                "Dashboard and door panels",
                "Boot area",
                "Glass and mirrors",
                "Special surfaces such as leather, PPF or ceramic-coated paint",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Search className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-6">
              This helps us decide how the car should be cleaned. A car that needs a simple wash should not be treated like a car that needs a full interior cleaning. And a car that has been driven on a muddy road needs more attention around the lower body and wheels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">Our Car Wash Services in Tilak Nagar</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Car,
                name: "Exterior Car Wash",
                desc: "The exterior is cleaned panel by panel. Before touching the paint, loose dirt is removed. Where required, snow foam can be used to loosen surface dirt. The wheels and tyres are cleaned separately. The aim: remove the dirt without unnecessarily rubbing it across the paint.",
              },
              {
                icon: Sparkles,
                name: "Interior Car Cleaning",
                desc: "We clean floor mats, seats, dashboard, door panels, seat gaps, centre area, boot and other reachable areas where dust and dirt collect. If you have children, the rear seat and floor area can collect a surprising amount of dirt over time.",
              },
              {
                icon: Droplets,
                name: "Snow Foam Wash",
                desc: "Snow foam is used as a pre-wash where suitable. It helps loosen dirt before manual washing begins, reducing the amount of rubbing needed on the paint. For heavily dusty cars, this step is especially useful.",
              },
              {
                icon: Wind,
                name: "Steam Cleaning",
                desc: "Steam can be useful for selected interior areas such as vents, switches and small gaps. Modern cars have electronics, screens, sensors and different interior materials — the surface is considered first before steam is applied.",
              },
              {
                icon: Shield,
                name: "Wheel and Tyre Cleaning",
                desc: "Wheels collect brake dust and road dirt that should not simply be spread around the body of the car. We treat wheels separately from painted panels. The same applies to tyres.",
              },
              {
                icon: Layers,
                name: "Interior Deep Cleaning",
                desc: "If the car has been used heavily by a family, or has returned from a long journey, a basic vacuum may not be enough. The seats, carpets, mats, door panels and less visible areas may need more attention.",
              },
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all">
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

      {/* Process - 7 Steps */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">The Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">How Our Car Wash at Home in Tilak Nagar Works</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {[
              { num: "01", title: "Inspection", desc: "We first look at the car and identify the areas that need attention." },
              { num: "02", title: "Pre-Rinse", desc: "Loose dust and dirt are removed before contact washing." },
              { num: "03", title: "Snow Foam", desc: "Where suitable, foam is applied to help loosen road dirt." },
              { num: "04", title: "Surface-Specific Cleaning", desc: "Paint, glass, wheels, tyres, plastic and interior surfaces are cleaned according to their condition." },
              { num: "05", title: "Manual Cleaning", desc: "Areas such as door edges, seat gaps, vents, badges and other small places are checked by hand." },
              { num: "06", title: "Drying", desc: "The car is dried carefully so water does not remain around trims, mirrors and other areas." },
              { num: "07", title: "Final Check", desc: "We look over the car again before finishing. This last step is important. Sometimes the first look misses a small mark. The final check catches it." },
            ].map((step, i) => (
              <motion.div key={i} variants={itemVariants}
                className="flex items-start gap-6 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all">
                <span className="text-green-400 font-bold text-2xl tabular-nums flex-shrink-0 leading-none mt-0.5">{step.num}</span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Makes a Good Car Wash in Delhi */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Quality Standard</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">What Makes a Good Car Wash in Delhi?</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              If someone asks us for the best car wash in Delhi, we would not answer with a name immediately. We would look at five things:
            </p>
            <div className="space-y-3 mb-6">
              {[
                "How is the dirt removed before touching the paint?",
                "Are wheels cleaned separately?",
                "Are different surfaces treated differently?",
                "Does someone actually check the car after cleaning?",
                "Does the person cleaning understand what should not be done?",
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-gray-900/60 border border-gray-800 rounded-xl">
                  <span className="text-green-400 font-bold text-lg flex-shrink-0">{i + 1}.</span>
                  <span className="text-gray-300 text-sm sm:text-base">{q}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              The last point is often ignored. Knowing when not to use a strong chemical or high pressure is just as important as knowing what to use. A good wash is not about using more products. It is about using the right method.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leather, PPF, Ceramic Coating */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Special Finishes</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">For Cars With Leather, PPF or Ceramic Coating</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Many newer cars have some form of protection or special finish. You may have:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
              {["Leather seats", "PPF", "Ceramic coating", "Gloss-black trim", "Large alloy wheels", "Parking cameras and sensors"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-gray-900/60 border border-gray-800 rounded-lg">
                  <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-3">
              Tell us before the cleaning starts. The washing method can then be adjusted according to the car.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              For example, a ceramic-coated car still needs proper washing. The coating does not mean the paint can be scrubbed carelessly. Similarly, leather needs suitable cleaning rather than a harsh general-purpose cleaner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before a Festival Trip */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Festival Travel</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Before a Festival Trip From Tilak Nagar</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Festival travel changes how the car is used. Four or five people may sit inside. There may be luggage in the boot. Children may have food and drinks inside the car. The journey may be several hours long. That is why we recommend cleaning these areas before leaving:
            </p>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-4">
              {[
                { title: "Glass", desc: "A clean windshield and mirrors are useful, especially during early morning or night driving." },
                { title: "Interior", desc: "Clean the floor, seats and areas around the rear passengers." },
                { title: "Boot", desc: "Empty old items before putting fresh luggage inside." },
                { title: "Wheels", desc: "Remove accumulated road dirt and brake dust." },
                { title: "Exterior", desc: "Clean the front bumper, mirrors and lower panels where road dirt collects." },
                { title: "Floor Mats", desc: "These take most of the dirt from shoes and are worth cleaning before a long trip." },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="p-5 bg-gray-900/60 border border-gray-800 rounded-xl">
                  <h3 className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* After a Long Road Trip */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">After the Trip</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">After a Long Road Trip</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              If you have just returned from a trip, don't leave the car dirty for weeks. Highway driving can leave dust, insects, mud and road grime on the front of the vehicle. Food and drink can also remain inside.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              A quick clean soon after returning is easier than waiting until the dirt has built up. This is especially true for the boot. Once the luggage comes out, that is the best time to clean it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Often */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Cleaning Frequency</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">How Often Should You Wash a Car in Tilak Nagar?</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Washing every 1–2 weeks is a sensible starting point for a car used frequently around Delhi. If your vehicle is parked outside or used every day, it needs regular cleaning. A deeper interior clean every 3–6 months works for many families. Families with kids, pets or frequent travellers may want it sooner. Instead of waiting for a fixed date, clean based on the actual situation. The vehicle tells you when it wants your attention.
            </p>

            <div className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl">
              <h3 className="text-white font-semibold text-base mb-4">Is Car Wash at Home Better Than Taking the Car to a Wash Centre?</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">
                For everyone, not necessarily. But for someone who has a busy family schedule, it can be much easier. The biggest advantage is not the washing itself. It is that the car does not have to leave its parking place.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                You can stay at home. You can continue your work. You can prepare for your trip. And the car gets cleaned at the same time. For families preparing for a long weekend, this is often the most practical part.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Small Thing Before Every Long Drive */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-3xl">
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Quick Tip</span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-4">A Small Thing We Recommend Before Every Long Drive</h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                After cleaning the car, open the boot. Take everything out. Then look inside. You may find something you forgot about — old bottles, shopping bags, tools, food packets, things that have been there for months.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Then check the tyre area and look at the windshield. A clean car gives you a better chance of noticing these small things before you leave. We see car cleaning as part of getting the car ready — not just making it look nice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">Frequently Asked Questions</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-3">
            {[
              { q: "Do you provide car wash at home in Tilak Nagar?", a: <>Yes. CleanCruisers provides <a href="https://cleancruisers.in/" className="text-green-400 hover:underline font-medium">doorstep car cleaning</a> in Tilak Nagar, subject to location and parking conditions.</> },
              { q: "Can you clean the car before a family trip?", a: "Yes. We recommend doing the cleaning a day before the trip so you have enough time to check the car properly." },
              { q: "Do you clean the interior also?", a: "Yes. Interior cleaning can include the floor mats, seats, dashboard, door panels, seat gaps and boot area, depending on the service required." },
              { q: "Do you use snow foam?", a: "Snow foam can be used as a pre-wash where suitable. It helps loosen dirt before manual washing." },
              { q: "Can you clean luxury cars?", a: "Yes, but the cleaning method should depend on the car and its surfaces. Leather, PPF, ceramic coating, gloss-black trim and other special surfaces need suitable handling." },
              { q: "How often should I wash my car?", a: "For many cars used regularly in Delhi, every 1–2 weeks is a reasonable starting point for exterior cleaning. Actual frequency depends on parking, driving and weather." },
              { q: "Can you clean cars in residential societies?", a: "Yes, subject to the society's rules, parking space and service conditions." },
              { q: "What if my area is not listed?", a: "Tell us your exact location. We can check whether service is available there." },
            ].map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-green-500/10 to-green-600/20 rounded-3xl" />
            <div className="absolute inset-0 border border-green-500/30 rounded-3xl" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-400/10 rounded-full blur-3xl" />
            <div className="relative p-8 sm:p-12 text-center">
              <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-green-400" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Looking for the Best Car Wash in Delhi?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Start with what your car actually needs. At CleanCruisers, we come to your location in Tilak Nagar, check the car, clean the surfaces according to their condition and inspect the vehicle before finishing. If you have a family trip coming up, don't wait until the morning you leave. Clean the car. Check the car. Then start the journey.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25">
                  Book a Car Wash in Tilak Nagar
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <a href="tel:8920230357" className="flex items-center gap-3 px-6 py-4 bg-white/5 border border-gray-700 rounded-xl text-white hover:border-green-500/50 transition-all">
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

export default CarWashTilakNagar;
