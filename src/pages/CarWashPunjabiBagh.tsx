
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
  Search,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CarWashPunjabiBagh = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Doorstep Car Wash in Punjabi Bagh, West Delhi | Book Now</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Book a professional car wash at home in Punjabi Bagh, West Delhi. Paint-safe cleaning for everyday, premium and luxury cars, including PPF and ceramic-coated vehicles."
        />
        <meta
          name="keywords"
          content="car wash in Punjabi Bagh, doorstep car wash Punjabi Bagh, car wash at home West Delhi, car cleaning Punjabi Bagh, luxury car wash Punjabi Bagh, car detailing West Delhi, CleanCruisers"
        />
        <link rel="canonical" href="https://cleancruisers.in/car-wash-in-punjabi-bagh/" />
        <meta property="og:title" content="Doorstep Car Wash in Punjabi Bagh, West Delhi | Book Now" />
        <meta property="og:description" content="Book a professional car wash at home in Punjabi Bagh, West Delhi. Paint-safe cleaning for everyday, premium and luxury cars." />
        <meta property="og:url" content="https://cleancruisers.in/car-wash-in-punjabi-bagh/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Doorstep Car Wash in Punjabi Bagh, West Delhi | Book Now" />
        <meta name="twitter:description" content="Book a professional car wash at home in Punjabi Bagh, West Delhi. Paint-safe cleaning for everyday, premium and luxury cars." />
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
            "areaServed": "Punjabi Bagh, West Delhi",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Punjabi Bagh",
              "addressRegion": "West Delhi",
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
              <span className="text-green-400 text-sm font-medium">Serving Punjabi Bagh & West Delhi</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Car Wash at Home in Punjabi Bagh, West Delhi
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Keeping a vehicle accessible in Punjabi Bagh West Delhi is not always so easy because it looks like it. Delhi dirt settles quickly, pollution leaves a dull layer near the paint, and bird droppings and water marks can be a common nuisance if the vehicle is parked outside. A proper car wash at home in Punjabi Bagh means you don't have to drive anywhere, anticipate your ride, or leave your car with someone for hours. The car should be wiped clean where it is parked. However, a car wash should not rub the same dirty cloth over and over again over the paint. A proper wash starts by laying down unbound dirt, cleaning the wheels one at a time, using the appropriate car shampoo, and wiping the panels without dragging dirt across them.
            </p>

            <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-8">
              If the car just wants a simple cleaning, a thorough wash will suffice. If the paint has misleading marks, water spots, stains, or the wrong finish, washing it yourself won't solve the problem. That's when the details come in handy.
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

      {/* Professional Car Wash at Doorstep */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">What We Cover</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Professional Car Wash at Your Doorstep in Punjabi Bagh
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              A regular car wash service in Punjabi Bagh should take care of both the outside and the areas that are commonly missed. The basic cleaning process should include:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                "Removing loose dust before touching the paint",
                "Cleaning the exterior panels",
                "Cleaning wheels and tyres",
                "Washing glass and mirrors",
                "Cleaning door edges",
                "Vacuuming the interior",
                "Wiping the dashboard and other interior surfaces",
                "Cleaning floor mats",
                "Drying the car properly",
                "Checking the car once again before finishing",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              These small steps matter. A car can look clean from a distance while still having dirt around the wheel arches, door jambs, number plate area and lower panels. We prefer to look at the car before starting the wash. A white car with road film needs different attention from a black car covered in fine dust. Similarly, a vehicle with ceramic coating or PPF should not simply be treated like an unprotected car.
            </p>
          </motion.div>
        </div>
      </section>

      {/* When Does Doorstep Car Wash Make Sense */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Who It's For</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              When Does a Doorstep Car Wash Make Sense in Punjabi Bagh?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              <a href="https://cleancruisers.in/" className="text-green-400 hover:underline font-medium">Doorstep car cleaning</a> is useful when your car is parked at your home, office, society parking or another suitable location. It is especially practical for:
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6"
            >
              {[
                "Daily-use cars",
                "Family cars",
                "SUVs",
                "Sedans",
                "Hatchbacks",
                "Luxury cars",
                "Cars parked outdoors",
                "Cars used in Delhi traffic",
              ].map((type, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-2 p-3 bg-gray-900/60 border border-gray-800 rounded-xl"
                >
                  <Car className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{type}</span>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Punjabi Bagh and nearby West Delhi roads can put a fair amount of dust and grime on a car. You may wash the car today and find another layer of dust on it within a few days. For this reason, regular light cleaning is usually better than allowing dirt to build up for weeks and then trying to remove everything in one session.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Assess Your Car */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Before We Begin</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              How We Assess Your Car Before the First Wash
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We do not recommend starting a wash blindly. Before cleaning, we check these things:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              {
                num: "1",
                title: "Paint Condition",
                desc: "Look for mud, bird droppings, water marks, tar spots and visible scratches. Bird droppings should not be scraped off when dry. They should first be softened and removed carefully.",
                icon: Search,
              },
              {
                num: "2",
                title: "Wheels & Tyres",
                desc: "Wheels often hold more dirt than the body. Brake dust can collect around the spokes and inner areas, especially on cars driven daily. Wheel cleaning should be done with suitable products and separate tools.",
                icon: Shield,
              },
              {
                num: "3",
                title: "Interior Condition",
                desc: "Check the seats, carpets, mats, dashboard and door panels. A simple vacuum and wipe may be enough for normal dirt. If there are food stains, bad smell, heavy dust or marks on the seats, a deeper interior cleaning is a better option.",
                icon: Car,
              },
              {
                num: "4",
                title: "Paint Protection",
                desc: "If the car has ceramic coating, PPF or another paint protection treatment, the washing method should take that into account. A coated car still needs regular washing. Ceramic coating does not mean the car can be left dirty for months.",
                icon: Layers,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-green-500/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-2">{item.num}. {item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Paint-Safe Process - Step by Step */}
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
              Our Paint-Safe Car Washing Process, Step by Step
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              A proper wash is more about the process than making the car wet and shiny.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              { num: "01", title: "Inspection", desc: "The car is checked for visible dirt, stains, scratches, sensitive areas and existing paint issues." },
              { num: "02", title: "Pre-rinse", desc: "Loose dust and dirt are removed before washing the surface. This is important because rubbing loose sand and dust against paint can create fine marks." },
              { num: "03", title: "Foam and shampoo wash", desc: "The vehicle is cleaned using suitable car-cleaning products. The wash should be done panel by panel instead of repeatedly using one dirty cloth over the entire car. The process involves pre-inspection, pre-rinse, snow foam, two-bucket washing, wheel cleaning, drying and final inspection." },
              { num: "04", title: "Wheel and tyre cleaning", desc: "Wheels and tyres are cleaned separately because they collect different types of dirt from the road." },
              { num: "05", title: "Interior cleaning", desc: "The cabin is vacuumed and wiped. Mats and commonly touched areas are given attention." },
              { num: "06", title: "Drying", desc: "Drying is not just the last step. It prevents water droplets from sitting on the paint and leaving marks." },
              { num: "07", title: "Final inspection", desc: "The car is checked again for missed dirt, water marks and areas that need another pass. This final check is something many quick washes skip. We don't think it should be skipped." },
            ].map((step, i) => (
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

      {/* When Car Needs Detailing */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Know the Difference</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              When Your Car Needs Detailing Instead of a Regular Wash
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              This is where we prefer to be straightforward. If your car has any of the following, another ordinary wash will not fix the problem:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                "Swirl marks",
                "Fine scratches",
                "Heavy water spots",
                "Oxidised or dull paint",
                "Tar marks",
                "Stubborn stains",
                "Very dirty interiors",
                "Stained seats",
                "Leather that has become dry",
                "A paint finish that has lost its smooth feel",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              In such cases, car detailing in Punjabi Bagh is the more sensible choice. Detailing is not simply a more expensive car wash in West Delhi. It involves spending more time on particular parts of the vehicle and correcting problems that normal washing cannot correct.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Detailing */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Detailing Services</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Professional Car Detailing for Paint, Interior & Finish
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Depending on the condition of the car, detailing may include:
            </p>
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
                title: "Interior Detailing",
                desc: "Useful when the cabin has accumulated dust, stains, food marks, hair or unpleasant smell. A proper interior job can include vacuuming, detailed cleaning of seats, carpets, mats, dashboard, door panels and other areas.",
              },
              {
                icon: Sparkles,
                title: "Exterior Detailing",
                desc: "This goes beyond removing everyday dust. The paint is inspected and cleaned more carefully, including areas that are normally missed.",
              },
              {
                icon: Droplets,
                title: "Paint Correction & Polishing",
                desc: "If the paint has fine scratches or swirl marks, polishing may help improve its appearance. Polishing should not be treated as a routine wash step — it removes a small amount of the clear layer, so it should only be done when there is a genuine reason.",
              },
              {
                icon: Shield,
                title: "Leather Care",
                desc: "Leather seats need cleaning and suitable conditioning rather than repeated use of strong household cleaners.",
              },
              {
                icon: Wind,
                title: "Engine Bay Cleaning",
                desc: "The engine bay can be cleaned, but it needs care around electrical components and sensitive areas. It should not be treated like the exterior of the car.",
              },
              {
                icon: Layers,
                title: "Ceramic Coating",
                desc: "Ceramic coating is a separate paint-protection treatment, not a replacement for washing. It covers coating types, benefits, lifespan, maintenance and common myths as separate topics.",
              },
            ].map((service, i) => (
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
                  <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">
              How Often Should You Wash Your Car in Punjabi Bagh West Delhi?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              There isn't a one-size-fits-all variation. A car that is driven and parked outside every day will require more general cleaning than one that remains covered in the basement. As a practical rule:
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-3 mb-6"
            >
              {[
                { label: "Lightly used car", rec: "Wash when visible dust and dirt build up" },
                { label: "Daily-use car", rec: "Regular weekly or fortnightly cleaning can be sensible" },
                { label: "Outdoor parking", rec: "Pay extra attention to bird droppings and water marks" },
                { label: "Monsoon", rec: "Clean mud and dirty water sooner rather than later" },
                { label: "After long highway trips", rec: "Inspect the front bumper, bonnet, mirrors and wheels" },
                { label: "After bird droppings", rec: "Clean the affected area as soon as practical" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 bg-gray-900/60 border border-gray-800 rounded-xl"
                >
                  <span className="text-green-400 font-semibold text-sm min-w-[160px]">{item.label}:</span>
                  <span className="text-gray-400 text-sm">{item.rec}</span>
                </motion.div>
              ))}
            </motion.div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              The aim is not to wash the car every few days without reason. The aim is to prevent dirt and contaminants from sitting on the paint for too long.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Check */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Self-Check</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">
              Does Your Car Need a Wash or Detailing? Use This Quick Check
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Before booking any car cleaning, check:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                { text: "Is the body covered with loose dust?", type: "wash" },
                { text: "Are there mud deposits around the wheels?", type: "wash" },
                { text: "Are the wheels covered with brake dust?", type: "wash" },
                { text: "Are there bird-dropping marks?", type: "wash" },
                { text: "Are water spots visible on the glass?", type: "wash" },
                { text: "Are the door edges dirty?", type: "wash" },
                { text: "Do the carpets need vacuuming?", type: "wash" },
                { text: "Are the seats stained?", type: "detail" },
                { text: "Is there a bad smell inside?", type: "detail" },
                { text: "Does the paint feel rough after washing?", type: "detail" },
                { text: "Are there swirl marks or fine scratches?", type: "detail" },
                { text: "Does the car have PPF or ceramic coating?", type: "detail" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-gray-900/60 border border-gray-800 rounded-lg">
                  <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${item.type === "wash" ? "bg-green-400" : "bg-yellow-400"}`} />
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">First few points → regular wash may be enough</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Last few points → discuss detailing instead</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Method Matters */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Common Mistakes</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">
              Why the Washing Method Matters More Than the Shine
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              A car can look very shiny immediately after a wash and still have been washed badly. This happens when:
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                "Dust is wiped without proper rinsing",
                "One dirty cloth is used everywhere",
                "Wheels and paint are cleaned with the same tools",
                "The car is allowed to dry in strong sunlight",
                "Household detergent is used instead of a suitable car shampoo",
                "The same towel is used for dirty lower panels and clean paint",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              These shortcuts may save a few minutes, but repeated poor washing can leave fine marks on the paint.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wash vs Detailing Table */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Quick Reference</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">
              Car Wash or Detailing — Which One Do You Need?
            </h2>

            <div className="overflow-x-auto rounded-xl border border-gray-800">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-800" style={{ backgroundColor: "#111" }}>
                    <th className="text-left px-5 py-3 text-green-400 font-semibold">Your car condition</th>
                    <th className="text-left px-5 py-3 text-green-400 font-semibold">Better option</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Normal dust", "Regular car wash"],
                    ["Road dirt and mud", "Thorough exterior wash"],
                    ["Dusty interior", "Interior cleaning"],
                    ["Dirty seats and carpets", "Interior deep cleaning"],
                    ["Water spots", "Spot treatment / detailing"],
                    ["Swirl marks", "Paint correction"],
                    ["Dull paint", "Polishing / detailing"],
                    ["Dry leather", "Leather cleaning and care"],
                    ["Paint protection required", "Ceramic coating or PPF consultation"],
                  ].map(([condition, option], i) => (
                    <tr key={i} className={`border-b border-gray-800/50 ${i % 2 === 0 ? "bg-gray-900/30" : "bg-gray-900/60"}`}>
                      <td className="px-5 py-3 text-gray-300">{condition}</td>
                      <td className="px-5 py-3 text-gray-400">{option}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-6">
              This is why we do not suggest detailing for every car. If your vehicle only needs a good wash, a good wash is enough. But when the problem is with the paint, seats or interior condition, spending time on the right treatment makes more sense.
            </p>
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
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Our Approach</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">
              Why Choose a Careful Car Wash Service in Punjabi Bagh?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              A car is not just another item to clean. The paint, glass, wheels, plastics, leather, fabric and electronic areas all need different handling. This becomes even more important with newer cars and luxury vehicles. Our approach is based on a few simple habits:
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {[
                "Inspect before cleaning",
                "Remove loose dirt before contact washing",
                "Keep wheel-cleaning tools separate",
                "Use suitable cleaning products",
                "Do not dry-wipe dusty paint",
                "Give extra attention to difficult areas",
                "Check the vehicle after cleaning",
                "Recommend detailing only when the car actually needs it",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Luxury Cars */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Luxury & Premium Cars</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">
              Luxury & Premium Cars: Our Paint-Safe Washing Approach
            </h2>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-3xl">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Luxury cars such as BMW, Mercedes-Benz, Audi, Porsche, Lexus, Range Rover, Tesla, Jaguar, Bentley, Ferrari and Lamborghini deserve a careful, paint-safe washing process. We inspect the vehicle first, remove loose dirt before contact washing, use suitable products and separate tools for wheels and paint. Cars with PPF or ceramic coating are handled with appropriate care.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Our focus is simple: use the right washing method for the car's actual condition — not unnecessary treatments.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Car Wash Across Delhi NCR
              </h2>
            </div>
            <div className="p-6 sm:p-8 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Looking for doorstep car cleaning in other parts of Delhi NCR? Explore our{" "}
                <a href="/car-wash-in-south-delhi/" className="text-green-400 hover:underline font-medium">
                  car wash services in South Delhi
                </a>
                {" "}for professional cleaning across South Delhi. Customers in central Delhi can explore our{" "}
                <a href="/car-wash-in-new-delhi/" className="text-green-400 hover:underline font-medium">
                  car wash services in New Delhi
                </a>
                . We also serve{" "}
                <a href="/car-wash-in-noida/" className="text-green-400 hover:underline font-medium">
                  Noida
                </a>
                {" "}and{" "}
                <a href="/car-wash-in-gurgaon/" className="text-green-400 hover:underline font-medium">
                  Gurgaon
                </a>
                {" "}with the same doorstep car wash service.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
                Car Wash at Home in Punjabi Bagh — The Practical Choice
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                A good car wash does not need complicated promises. It needs the right order of work, suitable products, clean tools and enough attention to the areas people normally miss. For regular dust and road dirt, start with a proper car wash. If the car has paint defects, stains, tired interiors or needs more than basic cleaning, move to detailing instead. That simple difference can save you from paying for a treatment your car does not need — and also from expecting a basic wash to fix a problem it cannot fix.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
                >
                  Book a Car Wash in Punjabi Bagh
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

export default CarWashPunjabiBagh;
