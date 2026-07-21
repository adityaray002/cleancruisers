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
  Leaf,
  Star,
  Wrench,
  Search,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const DoorstepCarWashSouthDelhiNew = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      name: "Interior Deep Cleaning",
      desc: "Deep cleaning, sanitary treatment for seats and carpets, dashboard sanitizing, a cleaning of the door panels and boot area Ideal for families battling on, pet loving-cls managing dogs (and their hair and smell), and everyday commuters who find the inside of their cabins accumulating more dirt than they think.",
    },
    {
      icon: Droplets,
      name: "Exterior Car Wash",
      desc: "Panel-by-panel washing using clean, dedicated microfiber towels - not one sponge doing the whole car. Wheels, arches, and trims get separate treatment since they carry different grime than body paint.",
    },
    {
      icon: Wind,
      name: "Steam Wash",
      desc: "Targeted to interior touchpoints and certain exterior areas where it can safely extract even the toughest grime without moister. Great for the hygiene-based cleanings around switches, vents, and crevices.",
    },
    {
      icon: Snowflake,
      name: "Snow Foam Wash",
      desc: "A pre-wash stage that loosens dirt before any cloth touches the car. This single step is why some washes leave fewer scratches than others - less rubbing means less risk to paint.",
    },
    {
      icon: Sparkles,
      name: "Car Dry Cleaning",
      desc: "For upholstery and carpet situations where a wet wash isn't ideal - stains, odour, or fabric that needs careful handling without soaking.",
    },
    {
      icon: Shield,
      name: "Premium Doorstep Car Care",
      desc: "The complete package - interior and exterior combined, tailored to vehicle type and current condition, done at your home or office parking spot.",
    },
  ];

  const problems = [
    "Dust settling into AC vents within days of a wash",
    "Bird droppings and tree sap left untreated, slowly damaging clear coat",
    "Seats and mats holding onto odours from food, kids, or pets",
    "Roadside washes that leave swirl marks from reused, dirty cloths",
    "No real cleaning of door jambs, boot corners, or under-seat areas",
    "Monsoon mud that stains fabric and leaves a musty smell for weeks",
  ];

  const benefits = [
    "Paint that holds its gloss longer because it isn't scrubbed with the wrong materials",
    "Cabin air that doesn't carry old food or damp-mat smells",
    "Leather that stays supple instead of cracking from dryness",
    "Fewer swirl marks because towels and technique are surface-appropriate",
    "A cabin that's genuinely safe for kids to sit in without breathing in dust",
    "A car that looks presentable before a client meeting or family trip, without last-minute scrambling",
  ];

  const process = [
    {
      icon: Search,
      step: "Step 1",
      title: "Inspection",
      desc: "Before we begin, we inspect the paint condition, stain severity and type of upholstery.",
    },
    {
      icon: Droplets,
      step: "Step 2",
      title: "Pre-wash",
      desc: "Pre-wash / Snow foam where needed to minimise paint friction.",
    },
    {
      icon: Sparkles,
      step: "Step 3",
      title: "Surface Specific Cleaning",
      desc: "Special products for glass, alloys, plastics and fabric.",
    },
    {
      icon: Wrench,
      step: "Step 4",
      title: "Manual Labor",
      desc: "Vents, door jams, seat gaps, and badges are hand cleaned.",
    },
    {
      icon: ClipboardCheck,
      step: "Step 5",
      title: "Quick Inspection",
      desc: "A little examination before we delivered the job.",
    },
  ];

  const areas = [
    "Greater Kailash (GK-1 and GK-2)",
    "Defence Colony",
    "Saket",
    "Malviya Nagar",
    "Hauz Khas",
    "Green Park",
    "Panchsheel Park",
    "Kalkaji",
    "Nehru Place",
    "Lajpat Nagar",
    "Vasant Kunj",
    "Chittaranjan Park",
    "South Extension",
    "New Friends Colony",
  ];


  const frequency = [
    { service: "Exterior wash", freq: "Every 1- 2 weeks" },
    { service: "Interior deep clean", freq: "Every months" },
    { service: "Steam/sanitization", freq: "Every 3 - 4 weeks (families, pet owners)" },
    { service: "Snow foam wash", freq: "With each exterior wash for best results" },
  ];

  const faqs = [
    {
      q: "Do you offer car wash at home in South Delhi?",
      a: "Yes, CleanCruisers provides doorstep car wash and cleaning services across major South Delhi localities.",
    },
    {
      q: "Is this a daily subscription wash service?",
      a: "No. We focus on professional, occasional deep cleaning rather than daily quick washes.",
    },
    {
      q: "Can you safely clean luxury cars like BMW or Mercedes?",
      a: "Yes. Our technicians use paint-safe products and adjust technique for premium interiors and finishes.",
    },
    {
      q: "What's included in interior deep cleaning?",
      a: "Vacuuming, seat and carpet cleaning, dashboard detailing, door panels, and boot area cleaning.",
    },
    {
      q: "How long does a full car cleaning take?",
      a: "It varies by vehicle size and service scope - a full interior-exterior package takes longer than a basic wash.",
    },
    {
      q: "Can stains be fully removed from seats?",
      a: "Most common stains improve significantly, though results depend on stain age, type, and fabric.",
    },
    {
      q: "Is leather seat cleaning safe?",
      a: "Yes, we use conditioning-based products suited to leather rather than harsh soap.",
    },
    {
      q: "What is snow foam wash used for?",
      a: "It loosens surface dirt before contact washing, reducing scratch risk during the wash itself.",
    },
    {
      q: "Is steam cleaning safe for car interiors?",
      a: "Yes, when used correctly on suitable surfaces, avoiding excess moisture near electronics.",
    },
    {
      q: "Do you clean SUVs and larger vehicles?",
      a: "Yes, including SUVs, sedans, and premium vehicles, with pricing adjusted for size.",
    },
    {
      q: "Can I book cleaning at my office instead of home?",
      a: "Yes, subject to parking availability at the location.",
    },
    {
      q: "Do you bring your own water and equipment?",
      a: "Yes, our technicians carry the required tools and materials for each service.",
    },
    {
      q: "How often should I clean my car's interior?",
      a: "Every 3 - 6 months generally, sooner if you have kids, pets, or a daily commute.",
    },
    {
      q: "Will washing remove scratches from my car?",
      a: "No, washing cleans surface dirt but doesn't repair scratches - that needs separate paint correction.",
    },
    {
      q: "Do you use eco-friendly cleaning products?",
      a: "We prioritize products that are effective yet minimise unnecessary chemical exposure.",
    },
    {
      q: "Can you sanitize high-touch areas like steering and gear knob?",
      a: "Yes, sanitization covers frequently touched interior points on request.",
    },
    {
      q: "How do I get exact pricing for my car?",
      a: "Share your car model, locality, and required service - we'll confirm pricing accordingly.",
    },
    {
      q: "Do you serve areas outside the listed South Delhi localities?",
      a: "Often yes - mention your area when booking and we'll confirm availability.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Car Wash in South Delhi | Professional Doorstep Car Cleaning Services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Professional car wash in South Delhi by CleanCruisers. Book doorstep car cleaning, interior deep cleaning, steam wash & snow foam wash for your home or office today."
        />
        <meta
          name="keywords"
          content="car wash in south delhi, doorstep car wash south delhi, car cleaning services south delhi, interior deep cleaning, steam wash, snow foam wash, cleancruisers"
        />
        <meta property="og:title" content="Car Wash in South Delhi | Professional Doorstep Car Cleaning Services" />
        <meta property="og:description" content="Professional car wash in South Delhi by CleanCruisers. Book doorstep car cleaning, interior deep cleaning, steam wash & snow foam wash for your home or office today." />
        <meta property="og:url" content="https://cleancruisers.in/car-wash-in-south-delhi/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Wash in South Delhi | Professional Doorstep Car Cleaning Services" />
        <meta name="twitter:description" content="Professional car wash in South Delhi by CleanCruisers." />
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
              Car Wash in South Delhi
              <span className="block text-green-400 mt-2">Professional Doorstep Cleaning by CleanCruisers</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Ask any car owner in South Delhi how quickly their vehicle collects dust, and you'll get the same answer: faster than they'd like. Between construction dust near Nehru Place, tree cover in Green Park, and daily commutes through Lajpat Nagar and Kalkaji, cars here work hard just sitting parked.
            </p>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-4">
              And this is handled by <span className="text-white font-medium">CleanCruisers</span> with their{" "}
              <a href="https://cleancruisers.in/" className="text-green-400 hover:underline">professional car cleaning at your door</a>
              {" "}- coincidentally not a rinse but an actual offering tailored around the status of your own automobile. Our skills apply to south-extension sedans, Vasant-Kunj SUVs and high-pairs in Defence Colony: paint-safe items, prepared hands and a procedure that never makes do for any of them.
            </p>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              If you want a car wash down the street from you that treats your vehicle as an asset to be cared for, rather than just another job in the lineup waiting to be finished, this is made for it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => navigate("/booking")}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
              >
                Book Your Car Wash
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

      {/* Why Professional Car Cleaning Actually Matters */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why It Matters</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Why Professional Car Cleaning Actually Matters
            </h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                A car isn't just metal and glass - it's leather or fabric seats, sensitive electronics, plastic trims that scratch easily, and paint that reacts differently to different chemicals. Treating all of that with one generic wash routine is how cars end up looking tired faster than they should.
              </p>
              <p>
                Professional cleaning means understanding which surface needs which product. Dashboard plastics need UV protection, not silicone sprays that attract more dust. Leather needs conditioning, not soap-heavy scrubbing. Alloy wheels need pH-balanced cleaners, not whatever's fastest.
              </p>
              <p>
                This is the difference between a wash that looks fine for a day and one that actually protects your car's condition over months.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems South Delhi Car Owners Face */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Real Problems</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Problems South Delhi Car Owners Actually Face
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Talk to enough car owners across GK-1, Malviya Nagar, or Panchsheel Park, and a pattern shows up:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3 mb-8"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-red-500/30 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-2" />
                <span className="text-gray-300 text-sm sm:text-base">{problem}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            None of these are solved by a fast exterior rinse. They need a service designed around actual cleaning, not just visible shine.
          </motion.p>
        </div>
      </section>

      {/* Why Cars Get Dirty Faster Here */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Local Conditions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Why Cars Get Dirty Faster Here
            </h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                The greenery in South Delhi, combined with heavy traffic results in a problem. More trees results in more pollen, sap and bird activity on parked cars - especially in areas such as Hauz Khas and CR Park. The diesel soot and road dust from busy commercial stretches like Nehru Place or South Extension compound matters.
              </p>
              <p>
                Add Delhi's seasonal dust storms and monsoon splash-back, and a car parked outdoors can look noticeably dull within two to three weeks - even without being driven much.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Professional Cleaning Actually Gives You */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">The Results</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              What Professional Cleaning Actually Gives You
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Car Wash & Cleaning Services in South Delhi
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Complete car cleaning services in South Delhi at your doorstep – from quick freshening to detailed deep cleaning.
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

      {/* Cleaning Process */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">How We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Cleaning Process
            </h2>
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
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">{item.step}</span>
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Luxury Car Owners Trust CleanCruisers */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Premium Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Why Luxury Car Owners Trust CleanCruisers
            </h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                A Mercedes-Benz in Defence Colony doesn't get cleaned the same way as a daily-use hatchback, and it shouldn't. Premium interiors often use softer leather, piano-black trims that scratch visibly, and sensors that can't handle high-pressure water carelessly.
              </p>
              <p>
                Whether it's a BMW in Greater Kailash, an Audi in Vasant Kunj, a Range Rover in Panchsheel Park, or a Toyota Fortuner handling school runs and highway trips alike, our technicians adjust technique based on the vehicle - not the other way around. The same care extends to Volvo, Skoda Superb, Hyundai Tucson, Kia Carnival, Jeep Meridian, and MG Gloster owners across South Delhi.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Areas We Serve */}
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
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Areas We Serve in South Delhi</h2>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              CleanCruiser has just started serving these South Delhi localities. If your locality doesn't appear, please state it in a booking - we are regularly expanding our coverage area with demand.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8"
          >
            {areas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-2 p-3 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{area}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed text-center mt-4"
          >
            Ready to give your vehicle the care it deserves?{" "}
            <a href="/booking" onClick={() => navigate("/booking")} className="text-green-400 hover:underline">
              Book Your Car Wash
            </a>
            {" "}today and schedule a convenient doorstep service with CleanCruisers.
          </motion.p>
        </div>
      </section>

      {/* How Often Should You Get Your Car Professionally Cleaned */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Cleaning Schedule</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              How Often Should You Get Your Car Professionally Cleaned?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              As a general guide:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-2xl border border-gray-800 mb-6"
          >
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-500/10 border-b border-gray-800">
                  <th className="text-left text-green-400 font-semibold px-6 py-4">Service Type</th>
                  <th className="text-left text-green-400 font-semibold px-6 py-4">Suggested Frequency</th>
                </tr>
              </thead>
              <tbody>
                {frequency.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-800/50 hover:bg-gray-900/40 transition-colors ${
                      index === frequency.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-300">{row.service}</td>
                    <td className="px-6 py-4 text-gray-400">{row.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            Cars parked outdoors, used for daily office commutes, or carrying kids and pets regularly tend to need cleaning on the shorter end of these windows.
          </motion.p>
        </div>
      </section>

      {/* Car Wash Prices */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Pricing</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Car Wash Prices in South Delhi
            </h2>
            <div className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                Pricing depends on vehicle size, current condition, and the specific service chosen. A hatchback needing a basic exterior wash costs differently than an SUV requiring full interior deep cleaning with stain treatment.
              </p>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Rather than quoting a flat number that doesn't reflect your actual car, we recommend sharing your vehicle model, locality, and specific concern - dust buildup, odour, pet hair, or a complete refresh - so we can suggest the right service and fair pricing for it.
              </p>
              <div className="mt-6">
                <Button
                  onClick={() => navigate("/booking")}
                  className="bg-green-500 hover:bg-green-400 text-black font-bold px-6 py-3 rounded-xl"
                >
                  Get a Price for Your Car
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
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
                className="p-5 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-green-500/30 transition-all"
              >
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2 flex items-start gap-3">
                  <span className="text-green-400 shrink-0">{index + 1}.</span>
                  {faq.q}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed pl-7">{faq.a}</p>
              </motion.div>
            ))}
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
                Book Your Car Wash in South Delhi Today
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Your car spends more time in South Delhi's dust and traffic than most people realise. Give it the kind of cleaning that actually accounts for that - not a rushed wash, but a proper service from CleanCruisers.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
                >
                  Book Now
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

export default DoorstepCarWashSouthDelhiNew;
