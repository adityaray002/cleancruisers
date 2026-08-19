
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

const CarWashNoida = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Car Wash in Noida | Doorstep Car Cleaning – CleanCruisers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Looking for a car wash in Noida? CleanCruisers offers professional doorstep car cleaning, interior and exterior wash, steam cleaning and snow foam service."
        />
        <meta
          name="keywords"
          content="car wash in Noida, doorstep car wash Noida, car cleaning Noida, car wash at home Noida, steam car wash Noida, snow foam wash Noida, luxury car wash Noida, CleanCruisers"
        />
        <link rel="canonical" href="https://cleancruisers.in/car-wash-in-noida/" />
        <meta property="og:title" content="Car Wash in Noida | Doorstep Car Cleaning – CleanCruisers" />
        <meta property="og:description" content="Looking for a car wash in Noida? CleanCruisers offers professional doorstep car cleaning, interior and exterior wash, steam cleaning and snow foam service." />
        <meta property="og:url" content="https://cleancruisers.in/car-wash-in-noida/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Wash in Noida | Doorstep Car Cleaning – CleanCruisers" />
        <meta name="twitter:description" content="Looking for a car wash in Noida? CleanCruisers offers professional doorstep car cleaning, interior and exterior wash, steam cleaning and snow foam service." />
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
            "areaServed": "Noida, Uttar Pradesh",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh",
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
              <span className="text-green-400 text-sm font-medium">Serving Noida & Greater Noida West</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Car Wash in Noida - Professional Doorstep Cleaning by CleanCruisers
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
              Between the dust kicked up by ongoing Expressway and metro construction, the grime that settles into basement parking, and the daily commute across sectors, cars in Noida go dull faster than most owners realise. CleanCruisers fixes that with doorstep car wash in Noida that comes to your home or office, no driving to a studio required. It's not a rinse. It's a proper clean, done by hands trained to treat your car like the asset it actually is.
            </p>

            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Learn more about{" "}
              <a href="/booking" className="text-green-400 hover:underline">
                CleanCruisers' doorstep car cleaning services
              </a>{" "}
              and the professional approach we use for different vehicle types and cleaning requirements.
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

      {/* Professional Doorstep Car Wash in Noida */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">About the Service</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Professional Doorstep Car Wash in Noida – At Your Home or Office
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              CleanCruisers provides doorstep car wash and car cleaning services in Noida for hatchbacks, sedans, SUVs, premium and luxury vehicles. Services include exterior washing, interior deep cleaning, steam cleaning, snow foam washing and complete doorstep car care, subject to location availability. Our technicians bring the required cleaning equipment and work at suitable home, office or residential parking locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Your Car Deserves More */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why It Matters</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Why Your Car Deserves More Than a Roadside Rinse
            </h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                Here's something most quick washes get wrong: they use one soap and one cloth for everything. Leather isn't the same as vinyl. Piano-black trim isn't the same as painted metal. Alloy wheels carry brake dust that eats away at cheap cleaners meant for glass. Doorstep car wash at home in Noida done right means matching the product to the surface. Dashboard plastic needs UV protection, not a greasy shine spray that just attracts more dust tomorrow. Leather wants conditioning, not soap scrubbed in like it's a kitchen counter. Get this wrong repeatedly, and your car ages faster than it should - paint fades, leather cracks, trims turn cloudy. Get it right, and the payoff shows up later, at resale time, when your three-year-old sedan still looks like it's had one careful owner.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Noida Cars Get Dirty So Fast */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Noida-Specific Problem</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Why Noida Cars Get Dirty So Fast: Dust, Mud, Traffic & More
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Talk to anyone parking near Sector 137, Sector 150, or the stretches around Greater Noida West, and the complaints repeat themselves:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Construction dust from Expressway and metro work settling into every crevice within a day of washing",
                "Basement parking fungus and a musty smell that never quite airs out",
                "Monsoon waterlogging leaving mud stains on carpets that linger for weeks",
                "Swirl marks from roadside washers reusing the same dirty cloth on every panel",
                "Pet hair and food odours building up in family cars faster than anyone expects",
                "General commute grime from sector-to-sector driving on dusty service roads",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm sm:text-base">{point}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              None of this gets solved by a five-minute rinse. It needs a service actually built around cleaning, not just making a car look wet and shiny for an hour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Your Car Picks Up So Much Dust */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10"
          >
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Why Your Car Picks Up So Much Dust in Noida - Even When It's Parked
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Noida's growing residential and commercial zones means lots of vehicles regularly run into road dust, construction residue, and that traffic grime sort of stuff. Even a car that's left outside, like not moved at all, can slowly pick up a layer of dust, kind of without warning. Meanwhile, cars moving through crowded sector roads can add more dirt on the lower areas, like near the doors, bumpers, wheel rims, and inside the wheel arches too. For people living in apartment societies and those high rise buildings, the parking setup is a big deal as well. A vehicle that stays parked in a basement or in an open parking bay can develop dust buildup, moisture related smells, and general grime over time. Cleaning on a regular basis helps prevent these contaminants from turning into a much bigger and harder cleaning job later on.
              </p>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Why Your Car Gets Dirty in Noida Even When You Barely Drive It
              </h2>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                It's a fair question - why does a car parked in Sector 62 look duller in two weeks than one parked somewhere quieter? Part of it is ongoing construction across the city; part of it is basement parking, where cars sit in damp, dust-heavy air without ever seeing direct sun to dry things out properly. Add in heavy traffic on the main sector roads and the Noida-Greater Noida Expressway, and you've got a recipe for grime that builds up whether the car is driven daily or left parked for a week while its owner works from home.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Luxury Car Section */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
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
                Premium vehicles can require more careful handling because they may feature leather interiors, gloss-black trims, sensitive electronic components, large alloy wheels, PPF, ceramic coatings and multiple cameras or sensors. Careless pressure washing, unsuitable chemicals or abrasive cleaning materials can cause avoidable problems. That worry is exactly why we built CleanCruisers around trained hands, not shortcuts. Our technicians know that a Mercedes interior and a hatchback interior don't get the same treatment - premium leather needs gentler conditioning, piano-black trim scratches if you so much as look at it wrong, and modern sensors just don't tolerate careless water pressure. We use paint-safe products, we adjust pressure and technique to the vehicle in front of us, and we don't rush. That's the difference between a wash that leaves you anxious and one that leaves you relieved - the kind where you hand over your keys, walk away, and actually stop worrying. This is luxury car wash in Noida the way it should feel: safe, careful, and honest about what your car actually needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Our Doorstep Car Wash & Cleaning Services
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
                desc: "We vacuum first, then seat and carpet sanitising, dashboard detailing, and a proper clean of door panels and boot corners too, the bit most washes, just kinda skip. It is ideal if you've got kids, pets, or honestly a cabin that's collected more grime than you clocked.",
              },
              {
                icon: Droplets,
                name: "Exterior Wash",
                desc: "This is panel by panel washing, with dedicated microfiber towels, not some one sponge that does the whole car, and calls it a day. Wheels and arches get their own attention as well, because brake dust is pretty much a different animal than road grime on paint.",
              },
              {
                icon: Wind,
                name: "Steam Wash",
                desc: "Steam car wash in Noida tends to work brilliantly on switches, vents, and those tight crevices where dirt hides. Water shouldn't really linger there, so the steam does the job while keeping things cleaner, and more hygienic.",
              },
              {
                icon: Layers,
                name: "Snow Foam Wash",
                desc: "A pre-wash foam layer that loosens road dirt before any cloth even touches your paint. Less scrubbing, less chance of micro scratching that stacks up over months without you really noticing.",
              },
              {
                icon: Shirt,
                name: "Car Dry Cleaning",
                desc: "For stains and odours where a full wet wash isn't the right call - fabric that needs careful handling, not soaking.",
              },
              {
                icon: Sparkles,
                name: "Premium Doorstep Package",
                desc: "The full package, interior and exterior together, tailored to your vehicle and its current condition, done right at your home or office.",
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 text-sm mb-4">
              Ready to get your car cleaned?{" "}
              <button
                onClick={() => navigate("/booking")}
                className="text-green-400 hover:underline"
              >
                Book your doorstep car wash in Noida
              </button>{" "}
              and choose a convenient service time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">The Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              How Our Doorstep Car Wash in Noida Works, Step by Step
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
              { num: "01", title: "Inspection", desc: "We check paint condition, stain severity, and upholstery type before starting anything." },
              { num: "02", title: "Pre-wash", desc: "Snow foam where needed, to cut down friction on the paint." },
              { num: "03", title: "Surface-specific cleaning", desc: "Separate products for glass, alloys, plastic trims, and fabric." },
              { num: "04", title: "Manual detailing", desc: "Vents, door jambs, seat gaps, and badges get cleaned by hand, not skipped." },
              { num: "05", title: "Final check", desc: "A last look before we call the job done." },
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

      {/* Sectors */}
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
                Doorstep Car Wash Across Noida: Check If Your Sector Is Covered
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
              CleanCruisers currently covers Sector 18, Sector 62, Sector 63, Sector 15, Sector 44, Sector 50, Sector 76, Sector 78, Sector 93, and Sector 137, along with Sector 150 and Greater Noida West / Noida Extension. Don't see your sector listed? Mention it when you book - we're expanding coverage regularly based on demand.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              If you're looking for professional doorstep car cleaning outside Noida, CleanCruisers also serves other parts of Delhi NCR. Explore our{" "}
              <a href="/car-wash-in-south-delhi/" className="text-green-400 hover:underline font-medium">
                Car Wash in South Delhi
              </a>{" "}
              service for customers across South Delhi and nearby areas. For customers in central and wider New Delhi areas, you can also explore our{" "}
              <a href="/car-wash-in-new-delhi/" className="text-green-400 hover:underline font-medium">
                Car Wash in New Delhi
              </a>{" "}
              service for doorstep vehicle cleaning.
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
                { label: "Exterior wash", freq: "Every 1–2 weeks", note: "Sooner if parked outdoors near construction zones" },
                { label: "Interior deep clean", freq: "Every 3–6 months", note: "Sooner with kids or pets" },
                { label: "Steam / sanitisation", freq: "Every 3–4 weeks", note: "For families and pet owners" },
                { label: "Snow foam wash", freq: "Alongside every exterior wash", note: "For the best protection" },
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
              Cars in basement parking or driven daily on dusty sector roads tend to need cleaning on the shorter end of these windows.
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
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">Car Wash Pricing in Noida</h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              There's no single fair number here - a hatchback needing a basic wash costs differently than an SUV needing a full interior deep clean with stain treatment. Share your car model, your locality, and what's actually bothering you - dust, odour, pet hair, or a full refresh - and we'll get back to you with the right service and honest pricing.
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
              Got Questions About Our Doorstep Car Wash in Noida?
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {[
              { q: "Do you offer car wash at home in Noida?", a: "Yes, CleanCruisers provides doorstep car wash and cleaning across major Noida sectors and Greater Noida West." },
              { q: "Can you safely clean luxury cars like BMW or Mercedes?", a: "Yes, our technicians use paint-safe products and adjust technique for premium leather, trims, and sensors." },
              { q: "Is leather seat cleaning safe for premium interiors?", a: "Yes, we use conditioning-based products, not harsh soap, so leather stays supple rather than drying out." },
              { q: "Is steam cleaning safe for car interiors?", a: "Yes, when applied correctly on suitable surfaces, avoiding excess moisture near electronics." },
              { q: "Do you clean cars in gated societies or basement parking?", a: "Yes, subject to your society's guest and vendor access rules - we carry our own water and equipment." },
              { q: "How do I get exact pricing for my car?", a: "Share your car model, locality, and the specific concern, and we'll confirm pricing accordingly." },
              { q: "Can stains be fully removed from seats?", a: "Most common stains improve significantly, though results depend on the stain's age, type, and the fabric involved." },
              { q: "Can I book at my office instead of home?", a: "Yes, as long as parking is available at the location." },
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
                Your Car Has Earned a Real Clean
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Every time you drive through Noida's dust and traffic, your car takes a bit of a beating - and it deserves better than a rushed wipe-down between meetings. Whether it's a family SUV covered in dried mud or a Mercedes that needs the kind of careful hands only a trained team can offer, CleanCruisers is built to give it that.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
                >
                  Book Your Noida Car Wash Today
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

export default CarWashNoida;
