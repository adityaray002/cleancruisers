
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
  Shirt,
  Clock,
  Users,
  Zap,
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

const FaqItem = ({ q, a }: { q: string; a: string }) => {
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

const CarWashGurgaon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Car Wash in Gurgaon | Doorstep Cleaning by CleanCruisers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Need a car wash in Gurgaon? CleanCruisers brings professional doorstep car cleaning to your home or office. Get a tailored service for your car—book today!"
        />
        <meta
          name="keywords"
          content="car wash in Gurgaon, doorstep car wash Gurgaon, car cleaning Gurugram, car wash at home Gurgaon, steam car wash Gurgaon, luxury car wash Gurgaon, CleanCruisers"
        />
        <link rel="canonical" href="https://cleancruisers.in/car-wash-in-gurgaon/" />
        <meta property="og:title" content="Car Wash in Gurgaon | Doorstep Cleaning by CleanCruisers" />
        <meta property="og:description" content="Need a car wash in Gurgaon? CleanCruisers brings professional doorstep car cleaning to your home or office. Get a tailored service for your car—book today!" />
        <meta property="og:url" content="https://cleancruisers.in/car-wash-in-gurgaon/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Wash in Gurgaon | Doorstep Cleaning by CleanCruisers" />
        <meta name="twitter:description" content="Need a car wash in Gurgaon? CleanCruisers brings professional doorstep car cleaning to your home or office." />
        <meta name="twitter:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "CleanCruisers",
            "image": "https://cleancruisers.in/LOGOFINAL.png",
            "url": "https://cleancruisers.in",
            "telephone": "+918920230357",
            "priceRange": "₹₹",
            "areaServed": "Gurgaon, Haryana",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gurgaon",
              "addressRegion": "Haryana",
              "addressCountry": "India"
            }
          }`}
        </script>
      </Helmet>

      <Header />

      {/* Hero */}
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
              <span className="text-green-400 text-sm font-medium">Serving Gurgaon (Gurugram) & NCR</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Car Wash in Gurgaon: Professional Cleaning at Your Doorstep
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Between the dust clouds off the Dwarka Expressway construction, basement parking in high-rises along Golf Course Extension Road, and cars sitting idle for ten-hour office stretches near Cyber City, a vehicle in Gurugram picks up more grime than most owners realise. CleanCruisers brings a proper doorstep car wash in Gurgaon (Gurugram) straight to your home or office across Haryana's busiest city, so you're not the one driving anywhere to fix it.
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

      {/* Professional Doorstep Car Wash in Gurugram */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">About the Service</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Professional Doorstep Car Wash in Gurugram - At Your Home or Office
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Most quick washes treat every surface the same way, and that's exactly the problem. Leather isn't vinyl. Piano-black trim isn't painted metal. Alloy wheels collect brake dust and road grime, so they require products specifically suited to wheel surfaces rather than general-purpose glass cleaners. A professional car wash in Gurgaon in Haryana means choosing the right product for each surface. Dashboard plastic needs UV protection, not a shiny silicone spray that just pulls in more dust the next day. Leather wants conditioning, not soap scrubbed on like it's a bathroom tile. Skip this logic long enough, and your paint dulls faster, your leather cracks, and your trims fog up. Do it properly, and the payoff shows up years later - when your car still commands a fair resale price because it was never neglected in the meantime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Your Car Gets Dirty So Quickly */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Gurgaon-Specific Problem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Why Your Car Gets Dirty So Quickly in Gurgaon in Haryana?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Ask anyone parking along Golf Course Extension Road or in the New Gurgaon sectors, and you'll hear the same list:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Construction dust from Dwarka Expressway and New Gurgaon",
                "Dust and musty odours in damp or poorly ventilated basement parking",
                "Monsoon mud entering carpets and floor mats",
                "Swirl marks caused by improper washing techniques",
                "Pet hair and food odours in family vehicles",
                "Dust accumulation on cars parked near office districts",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              A five-minute rinse doesn't touch any of this. It takes an actual cleaning process, not a wash that just makes the car look wet for an hour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Your Car Gets Dirty Even When Parked */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
              Why Your Car Gets Dirty in Gurugram Even When It's Parked?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Fair question - why does a car in Sector 65 or Sector 108 look duller after two weeks than one parked somewhere quieter? Part of it is the sheer scale of ongoing construction across the Dwarka Expressway belt and New Gurgaon; part of it is basement parking, where cars sit in damp, dusty air without ever getting proper sunlight to dry out. Add heavy traffic on Sohna Road and Golf Course Road, and you've got grime building up whether the car's driven every day or left parked through a long work-from-home week.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Luxury Car Section */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Luxury Car Owners</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              For Luxury Car Owners - Why "Safe Hands" Matters
            </h2>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-3xl">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                High-end and luxury cars are not scarce in places such as DLF Phase 1-5, Golf Course Road and Golf Course Extension Road. If you have a BMW, Mercedes-Benz, Audi, Range Rover, Porsche or Volvo then you know it is important to be passing your car over to someone that you can trust. A single slip of the pressure washer next to a sensor, or an abrasive cloth on soft leather, creates issues that easily cost far more than the wash. That worry is exactly why CleanCruisers cares much more about trained hands than hacks. A Mercedes cabin doesn't need the same attention as a hatchback interior. Premium leather requires lighter application, piano-black trim scratches easily and needs more cautious treatment around water and pressure in modern sensors and electronics. We use paint-safe supplies, and we modify the technique and pressure of our cleaning based on your vehicle. We don't rush the process. And that'll make the difference between a wash that leaves you fretting and one that enables you to roll your way with purpose. This is how luxury car cleaning in Gurugram should be: careful, deliberate and customised to your vehicle.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Our Doorstep Car Cleaning Services
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {[
              {
                icon: Car,
                name: "Interior Deep Cleaning",
                desc: "Vacuuming, seat and carpet sanitising, dashboard detailing, and including door panels and boot corners that are often overlooked during a quick wash. Built for families, pet owners, and anyone whose cabin has quietly collected more dirt than expected.",
              },
              {
                icon: Droplets,
                name: "Exterior Wash",
                desc: "Panel-by-panel washing using dedicated microfiber towels and appropriate cleaning materials for different surfaces. Wheels and arches get separate treatment since brake dust behaves nothing like road grime on paint.",
              },
              {
                icon: Wind,
                name: "Steam Wash",
                desc: "Steam car cleaning in Gurgaon works well on switches, vents, and tight crevices where dirt hides but standing water shouldn't. Genuinely hygienic, without soaking anything that shouldn't get wet.",
              },
              {
                icon: Layers,
                name: "Snow Foam Wash",
                desc: "A pre-wash layer that loosens dirt before a cloth ever touches your paint. Less rubbing means less risk of the tiny scratches that quietly build up over months.",
              },
              {
                icon: Shirt,
                name: "Car Dry Cleaning",
                desc: "For stains and odours where a full wet wash isn't the right call - fabric that needs careful handling, not soaking.",
              },
              {
                icon: Sparkles,
                name: "Premium Doorstep Package",
                desc: "The complete package, interior and exterior together, tailored to your vehicle and its current condition, done at your home or office in Gurugram.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
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

      {/* How It Works */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">The Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              What Happens When You Book a Car Wash at Home in Gurugram?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { num: "01", title: "Inspection", desc: "We inspect the condition of the paint, the severity of the staining and what kind of upholstery we are working with before any work is done." },
              { num: "02", title: "Pre-wash", desc: "Snow foam applied (as required) to help reduce friction on the paint surface." },
              { num: "03", title: "Surface-specific cleaning", desc: "Different products for glass, alloys, plastic trims and fabric." },
              { num: "04", title: "Manual detailing", desc: "Vents, door jambs, seat gaps, and badges cleaned by hand, never skipped." },
              { num: "05", title: "Final check", desc: "Just one last look before we really close up shop." },
            ].map((step, index) => (
              <motion.div
                key={index}
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

      {/* Why Choose CleanCruisers */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why Us?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Why Choose CleanCruisers for Car Cleaning in Gurugram?
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              { icon: MapPin, text: "Doorstep convenience - We come to your home or office parking location." },
              { icon: Shield, text: "Surface-specific cleaning — Different materials receive appropriate cleaning products and techniques." },
              { icon: Users, text: "Trained technicians - Cleaning is performed with attention to the vehicle's condition and surfaces." },
              { icon: Car, text: "Interior & exterior care - Choose individual services or a complete cleaning package." },
              { icon: Sparkles, text: "Premium vehicle care - Techniques can be adjusted for SUVs, premium interiors, PPF and other sensitive finishes." },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
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

      {/* Areas Covered */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Doorstep Car Wash Across Gurugram: Check If Your Area Is Covered
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl"
          >
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              CleanCruisers is currently active in DLF Phase 1–5, Golf Course Road, Golf Course Extension Road, Sohna Road, and Sectors 49, 54, 56, 62, 65, 70 and 77, 78. We are also covering New Gurgaon belt comprising Sectors 81–113 and Dwarka Expressway corridor.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Looking for car cleaning in other parts of Delhi NCR? Explore our{" "}
              <a href="/car-wash-in-south-delhi/" className="text-green-400 hover:underline font-medium">
                car wash services in South Delhi
              </a>{" "}
              for service availability in South Delhi. Customers in central Delhi can also explore our{" "}
              <a href="/car-wash-in-new-delhi/" className="text-green-400 hover:underline font-medium">
                car wash services in New Delhi
              </a>{" "}
              for doorstep vehicle cleaning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How Often */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Cleaning Frequency</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">How Often Should You Clean Your Car?</h2>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4 mb-6"
            >
              {[
                { label: "Exterior wash", freq: "Every 1–2 weeks", note: "Sooner if parked near construction zones" },
                { label: "Interior deep clean", freq: "Every 3–6 months", note: "Sooner with kids or pets in the car" },
                { label: "Steam / sanitisation", freq: "As needed", note: "Particularly for families, pet owners or high-touch areas" },
                { label: "Snow foam wash", freq: "As part of every exterior pre-wash", note: "As part of an appropriate exterior pre-wash process" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="p-5 bg-gray-900/60 border border-gray-800 rounded-xl"
                >
                  <p className="text-green-400 text-xs font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                  <p className="text-white font-semibold text-base mb-1">{item.freq}</p>
                  <p className="text-gray-500 text-sm">{item.note}</p>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Cars in basement parking or driven daily along Sohna Road and Golf Course Road tend to need cleaning on the shorter end of these windows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Pricing</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
              How Much Does a Car Wash Cost in Gurgaon? Get a Quick Estimate
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              There's no honest flat number here - a hatchback needing a basic wash costs differently than an SUV needing a full interior deep clean with stain treatment. Tell us your car model, your locality, and what's actually bothering you - dust, odour, pet hair, or a full refresh - and we'll come back with the right service and fair pricing.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Want to estimate your cleaning cost before booking?{" "}
              <a href="/car-wash-price-calculator" className="text-green-400 hover:underline font-medium">
                Use our car wash price calculator
              </a>{" "}
              to get a quick estimate based on your requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              Car Wash in Gurugram: Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {[
              { q: "Do you offer car cleaning at home in Gurgaon and Delhi NCR?", a: "Yes, CleanCruisers provides car cleaning and cleaning across major Delhi NCR sectors, DLF Phases, and the New Gurgaon belt." },
              { q: "How much does a car wash cost in Delhi NCR?", a: "Pricing depends on the vehicle type, size, condition and selected service. Share your car model, location and required service for an applicable quote." },
              { q: "Can you safely clean luxury cars like BMW or Mercedes?", a: "Yes, our technicians use paint-safe products and adjust technique for premium leather, trims, and onboard sensors." },
              { q: "How long does doorstep car cleaning take?", a: "Cleaning time depends on the vehicle's size, condition and selected service. A complete interior and exterior cleaning will generally require more time than a basic exterior wash." },
              { q: "Do you clean cars in gated societies or basement parking?", a: "Yes, subject to your society's guest and vendor access rules - we carry our own water and equipment." },
              { q: "How do I get exact pricing for my car?", a: "Share your car model, locality, and the specific concern, and we'll confirm pricing accordingly." },
              { q: "Can stains be fully removed from seats?", a: "Most common stains improve significantly, though results depend on the stain's age, type, and the fabric involved." },
              { q: "Can I book at my office instead of home?", a: "Yes, as long as parking is available at the location." },
              { q: "Do you serve areas outside DLF and Golf Course Road?", a: "Often yes - mention your locality when booking and we'll confirm coverage." },
            ].map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4" style={{ backgroundColor: "#0a0f0f" }}>
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
                Your Car Has Earned Better Than a Rushed Wipe-Down
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Every day it sits through Gurugram's dust and traffic, your car takes a hit it doesn't deserve - whether that's a family SUV caked in monsoon mud or a Mercedes that needs the kind of patient, trained hands most roadside washers simply don't have. CleanCruisers is built to give your car exactly that kind of care.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
                >
                  Book Your Gurugram Car Wash Today
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

export default CarWashGurgaon;
