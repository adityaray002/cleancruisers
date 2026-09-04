
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  MapPin, Phone, ArrowRight, Car, Droplets, Sparkles, Shield,
  CheckCircle2, Wind, Layers, AlertCircle,
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
    <div className="border border-gray-800 rounded-xl overflow-hidden hover:border-green-500/30 transition-all cursor-pointer"
      onClick={() => setOpen(!open)}>
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

const CarWashRajouriGarden = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Car Wash in Rajouri Garden | Doorstep Car Wash at Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Car wash in Rajouri Garden at your doorstep. Proper exterior washing, interior cleaning, snow foam and careful car care at home or office. CleanCruisers." />
        <meta name="keywords" content="car wash in Rajouri Garden, doorstep car wash Rajouri Garden, car wash at home West Delhi, car cleaning Rajouri Garden, CleanCruisers" />
        <link rel="canonical" href="https://cleancruisers.in/car-wash-in-rajouri-garden/" />
        <meta property="og:title" content="Car Wash in Rajouri Garden | Doorstep Car Wash at Home" />
        <meta property="og:description" content="Car wash in Rajouri Garden at your doorstep. Proper exterior washing, interior cleaning, snow foam and careful car care at home or office." />
        <meta property="og:url" content="https://cleancruisers.in/car-wash-in-rajouri-garden/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <script type="application/ld+json">{`{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "CleanCruisers",
          "image": "https://cleancruisers.in/LOGOFINAL.png",
          "url": "https://cleancruisers.in",
          "telephone": "+918920230357",
          "priceRange": "₹₹",
          "areaServed": "Rajouri Garden, West Delhi",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Rajouri Garden",
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
              <span className="text-green-400 text-sm font-medium">Serving Rajouri Garden & West Delhi</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Car Wash in Rajouri Garden — Doorstep Car Cleaning at Your Location
            </h1>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-4">
              Living in Rajouri Garden means your car deals with a lot in a normal week — traffic dust, roadside dirt, pollution, rain marks and the fine dust that settles even when the car is parked. That is why a car wash in Rajouri Garden should not mean simply putting water on the car and wiping it with one cloth.
            </p>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-8">
              At CleanCruisers, we believe a proper car wash starts with removing loose dirt before touching the paint. The wheels need separate attention, interiors need different products, and the final drying should be done carefully. The simple idea is this: clean the car properly rather than cleaning it quickly.
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

      {/* Doorstep Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">At Home or Office</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Doorstep Car Wash in Rajouri Garden</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              You don't always need to drive somewhere for a car wash. With <a href="https://cleancruisers.in/" className="text-green-400 hover:underline font-medium">doorstep car cleaning</a>, the car can be cleaned where it is already parked — at home, office or a suitable residential parking area. Our cleaning approach can be used for:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {["Hatchbacks", "Sedans", "SUVs", "Premium cars", "Luxury cars", "Cars with PPF", "Cars with ceramic coating", "Family cars"].map((t, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-gray-900/60 border border-gray-800 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{t}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The exact cleaning method depends on the condition of the vehicle. A lightly dusty car does not need the same treatment as a car covered with mud, stains or accumulated brake dust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Cars Get Dirty */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Local Problem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Why Cars in Rajouri Garden Get Dirty So Quickly</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Rajouri Garden has busy roads, markets, residential lanes and regular traffic movement. Your car can pick up dust even during a short drive. Some common problems we see are:
            </p>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                "Fine dust settling on the bonnet and roof",
                "Road dirt collecting around doors and bumpers",
                "Mud marks during the rainy season",
                "Brake dust sticking to alloy wheels",
                "Dust entering the cabin through regular use",
                "Food marks and stains inside family cars",
                "Dirt collecting around seat gaps and door pockets",
                "Water marks after washing in direct sunlight",
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm sm:text-base">{item}</span>
                </motion.div>
              ))}
            </motion.div>
            <div className="p-5 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-yellow-400 font-semibold">Important:</span> There is one habit that causes more paint damage than people realise — wiping a dusty car with a dry cloth. Dust contains small particles. When you drag them across the paint, they can create fine marks over time. If your car is dusty, don't start by rubbing it. Start with rinsing.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Quick Rinse Not Enough */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">The Right Method</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Why a Quick Rinse Is Not Enough</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              A car can look clean from a distance and still have dirt around the wheels, badges, door handles, number plate area and lower panels. This is where the washing process matters. Before contact washing, loose dirt should be removed. Where required, snow foam can help loosen road grime before the wash mitt or cloth touches the paint. For the exterior, we prefer separate attention for:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {["Painted panels", "Glass", "Alloy wheels", "Tyres", "Wheel arches", "Plastic trims", "Door jambs"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-900/60 border border-gray-800 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              The same cloth should not be moving from a dirty wheel to your bonnet. That is a small thing, but it makes a big difference over repeated washes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">The Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">Our Approach to Car Wash in Rajouri Garden</h2>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
            {[
              { num: "01", title: "Inspection", desc: "We first look at the vehicle. Paint condition, dirt level, stains, wheels, interior condition and upholstery type are checked before cleaning begins." },
              { num: "02", title: "Pre-Rinse", desc: "Loose dust and dirt are removed before contact with the paint. This is one of the most important steps for reducing unnecessary rubbing." },
              { num: "03", title: "Snow Foam", desc: "Where needed, snow foam is used as a pre-wash stage to loosen dirt before manual washing." },
              { num: "04", title: "Surface-Specific Cleaning", desc: "Glass, paint, wheels, plastic and interior surfaces don't all need the same product. The cleaning method is adjusted according to the surface." },
              { num: "05", title: "Manual Cleaning", desc: "Areas such as badges, door gaps, vents, seat gaps and corners are cleaned by hand. These are the places that often get missed during a quick wash." },
              { num: "06", title: "Drying and Final Check", desc: "The car is dried carefully and checked once again before the work is finished." },
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

      {/* Exterior + Interior */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
              <Car className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Exterior Car Wash in Rajouri Garden</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The outside of the car takes most of the abuse from Delhi roads. A proper exterior wash should not be about making the car look wet and shiny for a few hours. The aim should be to remove dirt without unnecessarily rubbing the paint. We pay attention to the areas that are normally ignored:
            </p>
            <div className="space-y-2">
              {["Lower doors", "Front bumper", "Rear bumper", "Number plate area", "Door handles", "ORVMs", "Wheels", "Wheel arches", "Window edges", "Badges"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              <a href="https://cleancruisers.in/car-wash-in-new-delhi/" className="hover:text-green-400 transition-colors">Interior Car Cleaning</a> in Rajouri Garden
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The inside of a car needs a different kind of care. Dust collects on the dashboard, AC vents and door panels. Food crumbs can get under the seats. Fabric seats can hold stains and smells. Leather needs suitable cleaning rather than harsh scrubbing. For <a href="https://cleancruisers.in/car-wash-in-new-delhi/" className="text-green-400 hover:underline font-medium">interior car cleaning in Delhi</a>, we can focus on:
            </p>
            <div className="space-y-2">
              {["Vacuum cleaning", "Dashboard", "Door panels", "Floor mats", "Seats", "Carpets", "AC vents", "Seat gaps", "Boot area", "Interior glass"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4 leading-relaxed">
              More product does not mean better cleaning. Putting too much cleaner on an interior can leave residue and make the surface attract more dust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Snow Foam + Luxury */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
              <Droplets className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Snow Foam Car Wash — Why We Use It</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Snow foam is not there just to make a car look impressive during washing. Its useful job is to loosen surface dirt before manual contact. That matters because rubbing loose dust against paint creates unnecessary friction. A simple sequence works better:
            </p>
            <div className="flex items-center gap-2 p-4 bg-gray-900/60 border border-gray-800 rounded-xl mb-3">
              <span className="text-green-400 font-semibold text-sm">Foam → Rinse → Contact Wash → Rinse → Dry</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Snow foam cannot replace a thorough wash. But when applied correctly, it makes the washing method gentler on the paint.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Car Wash for Luxury Cars</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Luxury vehicles usually have extra surfaces that need to be handled carefully. A BMW, Mercedes-Benz, Audi, Porsche or Range Rover needs special attention for:
            </p>
            <div className="space-y-2">
              {["Paint condition & PPF/ceramic coating", "Wheel finish", "Leather condition", "Gloss-black trim", "Sensors and cameras", "Interior materials"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs mt-4 leading-relaxed">
              Careless pressure, unsuitable chemicals and dirty towels can create problems that were not there before the wash.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Often */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Frequency</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">How Often Should You Wash Your Car in Rajouri Garden?</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              There is no single number that works for every car. A practical starting point:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left text-gray-400 text-sm font-semibold py-3 pr-6">Car Condition</th>
                    <th className="text-left text-green-400 text-sm font-semibold py-3">Suggested Cleaning</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Light daily dust", "Every 1–2 weeks"],
                    ["Heavy road dust", "More frequently"],
                    ["Outdoor parking", "Check the car regularly"],
                    ["Family car with heavy interior use", "Deep interior cleaning every 3–6 months"],
                    ["Car with pets", "Interior cleaning as needed"],
                    ["Monsoon season", "Clean sooner when mud builds up"],
                  ].map(([cond, freq], i) => (
                    <tr key={i} className="border-b border-gray-900 hover:bg-gray-900/30 transition-colors">
                      <td className="text-gray-300 text-sm py-3 pr-6">{cond}</td>
                      <td className="text-gray-400 text-sm py-3">{freq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mt-4">
              The condition of the car matters more than following a fixed calendar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Car Wash at Home + What We Do Differently */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Convenience</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-4">Car Wash at Home in Rajouri Garden</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              One of the practical benefits of a doorstep wash is simple — you don't have to take the car anywhere. The car is already parked at your home or office. This is especially useful for:
            </p>
            <div className="space-y-2">
              {["Apartment residents", "Working professionals", "Families with multiple cars", "People with busy weekdays", "Owners of premium vehicles who prefer careful handling"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Our Difference</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 mb-4">What We Do Differently</h2>
            <div className="p-5 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-xl">
              <p className="text-gray-300 text-sm leading-relaxed mb-3 font-medium">A clean car is not necessarily a well-washed car.</p>
              <ul className="space-y-2">
                {[
                  "If the wrong material is used, the paint can accumulate misleading marks",
                  "If wheels and paint are cleaned with the same gear, dirt moves between surfaces",
                  "If a leather interior is treated like plastic, it can become dry or greasy",
                  "If the car is dried carelessly, water marks remain",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Wind className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-sm leading-relaxed mt-3">
                Our focus is on the process: inspection, pre-rinse, suitable products, separate tools, manual attention and final checking.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Everyday Cars */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">For Every Car</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">Car Wash in Rajouri Garden for Everyday Cars</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              You don't have to own a luxury car to deserve a proper wash. Even a Maruti, Hyundai, Tata, Honda, Toyota or Mahindra deserves the same basic discipline. A good wash is about:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {["Clean tools", "Correct products", "Proper rinsing", "Less unnecessary rubbing", "Separate wheel and paint cleaning", "Careful drying"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl">
                  <Layers className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              These basics are what keep a frequently used car looking better for longer.
            </p>
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
              { q: "Do you provide car wash at home in Rajouri Garden?", a: <><a href="https://cleancruisers.in/" className="text-green-400 hover:underline font-medium">Doorstep car cleaning</a> can be done at a suitable home, office or residential parking location, subject to location and access.</> },
              { q: "Is doorstep car washing safe for luxury cars?", a: "Yes, the cleaning method should be adjusted to the vehicle and its surface. Cars with PPF, ceramic coating, leather interiors or gloss-black trims require appropriate products and careful handling." },
              { q: "Can you clean cars in apartment societies?", a: "Yes, where the society and parking arrangement allow the required cleaning work." },
              { q: "Is snow foam necessary for every wash?", a: "Not always. It is particularly useful when there is more surface dirt and you want to reduce rubbing during the contact wash." },
              { q: "How often should I wash my car?", a: "For normal Delhi driving, every 1–2 weeks is a practical starting point. Cars parked outdoors or driven on dusty roads may need cleaning sooner." },
              { q: "Can a car wash remove scratches?", a: "A normal wash cannot remove paint scratches. Light surface defects may require polishing or paint correction, depending on their depth." },
              { q: "Do you clean the interior also?", a: "Interior cleaning can include vacuuming and cleaning of seats, carpets, dashboard, door panels, vents and other interior areas depending on the selected service." },
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
                Car Wash in Rajouri Garden — Done Where Your Car Is Parked
              </h2>
              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Your car does not need a rushed wash. It needs the right steps, clean tools and someone who understands that paint, wheels, glass, plastic and interior materials all need different care. Whether your car has simple road dust or needs a more thorough interior and exterior cleaning — the first step is always the same: look at the car first. Then decide how it should be cleaned.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25">
                  Book a Car Wash in Rajouri Garden
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

export default CarWashRajouriGarden;
