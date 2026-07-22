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
  Snowflake,
  Wind,
  Star,
  Wrench,
  Search,
  ClipboardCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const CarWashNewDelhi = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      name: "Professional Interior Deep Cleaning for a Cleaner, Healthier Cabin",
      desc: "Interior cleaning isn't just vacuuming. It's knowing that leather needs a pH-balanced cleaner, fabric seats need different agitation, and touchscreens need zero moisture near the edges. We use this logic on every vehicle - a Fortuner's captain seats are treated differently from a sedan's bench seat.",
    },
    {
      icon: Droplets,
      name: "Professional Exterior Car Wash for a Spotless, Paint-Safe Finish",
      desc: "Before any sponge touches your paint, loose dust is rinsed off first. Skipping this step is exactly how swirl marks happen. Our exterior wash follows a top-down, low-to-high grime separation - wheels are cleaned last, never with the same towel used on the bonnet.",
    },
    {
      icon: Wind,
      name: "Professional Steam Car Wash in New Delhi",
      desc: "Steam works well on tight spaces - AC vents, seat crevices, door channels - because heat loosens grime without soaking the material. It's not meant for leather or electronics broadly, though; a good technician knows where steam helps and where it can do more harm than good.",
    },
    {
      icon: Snowflake,
      name: "Snow Foam Car Wash for Paint-Safe Cleaning",
      desc: "Snow foam clings to the car, softening dirt before contact. Think of it as a buffer - it means less scrubbing, which means less friction on your clear coat. Ideal after highway trips or monsoon splash-back.",
    },
    {
      icon: Sparkles,
      name: "Professional Car Dry Cleaning for a Fresh & Hygienic Interior",
      desc: "For cars that need a refresh without full wet cleaning - useful for quick turnarounds between full details, or for owners wary of excess moisture near electronics.",
    },
    {
      icon: Shield,
      name: "Premium Doorstep Car Care at Your Home or Office",
      desc: "Booked at your home, office, or society parking - whichever works for your schedule. No driving to a wash centre, no waiting in line.",
    },
  ];

  const benefits = [
    "Preserves paint clarity by avoiding abrasive dry-wiping",
    "Keeps cabin air cleaner for daily commuters and kids",
    "Protects resale value by preventing embedded stains and scratches",
    "Saves you the Sunday spent washing your own car",
    "Gives you a presentable car before meetings, weddings, or festivals",
  ];

  const process = [
    {
      icon: Search,
      step: "Step 1",
      title: "Inspect",
      desc: "Inspect the car and note specific concerns (stains, odour, exterior grime)",
    },
    {
      icon: Droplets,
      step: "Step 2",
      title: "Pre-rinse",
      desc: "Pre-rinse or snow-foam to loosen surface dirt",
    },
    {
      icon: Sparkles,
      step: "Step 3",
      title: "Clean",
      desc: "Clean using surface-specific products and separated towels",
    },
    {
      icon: Wrench,
      step: "Step 4",
      title: "Detail Interior",
      desc: "Detail interior touchpoints - vents, screens, door panels",
    },
    {
      icon: CheckCircle2,
      step: "Step 5",
      title: "Final Wipe-down",
      desc: "Final glass and trim wipe-down",
    },
    {
      icon: ClipboardCheck,
      step: "Step 6",
      title: "Quality Check",
      desc: "Quality check before we call it done",
    },
  ];

  const faqs = [
    {
      q: "Is doorstep car wash safe for my car's paint?",
      a: "Yes, when done with pre-rinse, correct products, and separated towels. The risk isn't location - it's technique. We follow the same surface-first sequence at your doorstep that a careful detailer would follow anywhere.",
    },
    {
      q: "How much does a car wash cost in New Delhi?",
      a: "It depends on your car's size, condition, and chosen service - exterior-only, interior deep clean, or complete cleaning. Share your car model for an accurate quote rather than a generic estimate.",
    },
    {
      q: "Will steam wash damage my leather seats?",
      a: "Not if used correctly. Steam is great for vents and crevices but should be used sparingly near leather, which prefers pH-balanced cleaners over heat and moisture.",
    },
    {
      q: "Does snow foam actually prevent scratches?",
      a: "It reduces the risk by softening dirt before contact, meaning less scrubbing pressure on your paint. It's not a scratch guarantee, but it's a smart preparation step.",
    },
    {
      q: "How often should I book a deep interior clean?",
      a: "Every couple of months works for most families. If you have kids, pets, or frequent food-in-car habits, consider a slightly tighter schedule.",
    },
    {
      q: "Can you clean my car at my office parking?",
      a: "Yes, subject to access and parking permissions at your workplace. Just confirm with your building's facility team beforehand.",
    },
    {
      q: "Do you use the same towel on wheels and paint?",
      a: "Never. Wheel grime is abrasive and gets its own towel - using it on paint would undo the whole point of a careful wash.",
    },
    {
      q: "Is roadside washing really that risky for my car?",
      a: "Not disastrous, but riskier. Skipped pre-rinse steps and shared towels are common causes of swirl marks over time, especially on darker paint.",
    },
    {
      q: "Can dry cleaning replace a full wash?",
      a: "It's a good in-between option when you want a refresh without excess moisture, but a full wash is still needed periodically for thorough cleaning.",
    },
    {
      q: "Will cleaning remove existing scratches?",
      a: "No - that requires paint correction, a separate service. Regular washing prevents new marks; it doesn't undo old ones.",
    },
    {
      q: "Do you clean SUVs and larger vehicles?",
      a: "Yes, sedans, SUVs, and luxury vehicles are all serviced, though larger cars may need slightly more time due to size and interior space.",
    },
    {
      q: "What should I remove before my appointment?",
      a: "Valuables, documents, and loose items from the cabin. Also mention specific stains or concerns beforehand so we can focus on them.",
    },
    {
      q: "Can interior cleaning fix bad odours?",
      a: "Often yes, if it's from spills, food, or dust. Persistent AC-related smells may need separate diagnosis beyond cleaning.",
    },
    {
      q: "Is there a difference between \"car wash\" and \"car detailing\"?",
      a: "Detailing goes deeper - surface-specific products, separated tools, and attention to trims and materials, versus a general wash-and-wipe.",
    },
    {
      q: "How do I book CleanCruisers?",
      a: "Share your location, car model, and preferred service - exterior, interior, steam, snow foam, or complete cleaning and we'll confirm a convenient slot.",
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
        <title>Car Wash in New Delhi | Doorstep Car Cleaning | CleanCruisers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Looking for a professional Car Wash in New Delhi? CleanCruisers offers premium doorstep car cleaning, interior deep cleaning, steam wash & more. Book your car wash today!"
        />
        <link rel="canonical" href="https://cleancruisers.in/car-wash-in-new-delhi/" />
        <meta property="og:title" content="Car Wash in New Delhi | Doorstep Car Cleaning | CleanCruisers" />
        <meta property="og:description" content="Looking for a professional Car Wash in New Delhi? CleanCruisers offers premium doorstep car cleaning, interior deep cleaning, steam wash & more. Book your car wash today!" />
        <meta property="og:url" content="https://cleancruisers.in/car-wash-in-new-delhi/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Car Wash in New Delhi | Doorstep Car Cleaning | CleanCruisers" />
        <meta name="twitter:description" content="Looking for a professional Car Wash in New Delhi? CleanCruisers offers premium doorstep car cleaning, interior deep cleaning, steam wash & more." />
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
            "areaServed": "New Delhi, Delhi",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "New Delhi",
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
              <span className="text-green-400 text-sm font-medium">Serving New Delhi & Nearby Areas</span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Car Wash in New Delhi
              <span className="block text-green-400 mt-2">Professional Doorstep Cleaning by CleanCruisers</span>
            </h1>

            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-4">
              And, if you have ever wiped the car in morning and find dust on your car again in evening, then it is not a surprise that so many vehicle owners try to look for a reliable{" "}
              <a href="/car-wash-in-new-delhi/" className="text-green-400 hover:underline">Car Wash in New Delhi</a>. From construction dust around the Ring Road to pollen in and around the green belts of Lodhi Garden, all that stringed dirt created by the non-stop stream of traffic generated merely by the silver lining that is our city dust will work more than most people want not spend most days parked at what ought to be a strenuous-resting post in itself. Being in one of the busier cities in India, regular professional cleaning isn't just about keeping it looking good; it's also about maintaining its finish and condition.
            </p>
            <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              CleanCruisers offers professional doorstep car cleaning across New Delhi — from Chanakyapuri and Golf Links to Defence Colony and Vasant Vihar. This isn't a quick subscription wash. It's a considered, surface-aware cleaning service for people who book every few weeks and expect it done properly each time.
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
                A wipe-down looks clean. It isn't always clean. Dust particles are abrasive - think of them as tiny bits of grit. Drag them across paint with a dry or dirty cloth, and you get fine scratches called swirl marks. You won't notice them under tube light. You will under sunlight, especially on dark colours.
              </p>
              <p>
                Interior neglect shows differently - musty smells, sticky armrests, dusty vents. None of it is dramatic, but it adds up. Professional cleaning isn't about drama; it's about doing the boring, correct steps in the right order, every time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problems Car Owners Face */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Real Problems</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Problems Car Owners Face in New Delhi
            </h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                Ask any regular driver here and you'll hear the same complaints: dust settling within hours of a wash, bird droppings that etch into paint if left too long, and monsoon splash-back that leaves a dried muddy line along the doors.
              </p>
              <p>
                Then there's the interior side - school bags, spilled juice, pet hair, and the occasional forgotten snack under the seat. Add Delhi's pollution load, and even a car parked in a covered garage isn't safe from fine particulate settling on dashboards and seats.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Cars Get Dirty Faster */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Local Conditions</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Why Cars Get Dirty Faster in New Delhi
            </h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                Delhi's air carries a heavier particulate load than most Indian cities, especially through winter months. The{" "}
                <a href="https://cpcb.gov.in/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">Central Pollution Control Board</a>{" "}
                tracks this data regularly, and it explains why a car parked outdoors here picks up a dust film faster than in, say, a coastal city. That fine dust isn't just cosmetic - it settles into AC vents, wiper blades, and door seals, quietly wearing them down over time.
              </p>
              <p>
                This is exactly why routine, professional care beats occasional deep cleans. You're not fighting dirt once a year; you're managing it consistently.
              </p>
            </div>
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
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">The Results</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
              Benefits of Professional Car Cleaning
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
              Our Professional Car Cleaning Services
            </h2>
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

      {/* Why Choose CleanCruisers */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Why Choose CleanCruisers for Professional Car Wash in New Delhi
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We use dedicated microfiber towels for paint, glass, wheels, and interiors — never one cloth for everything. That single habit prevents most of the accidental scratching that happens at rushed wash points. Products are matched to surfaces: what works on alloy wheels should never touch your dashboard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">How We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Our Professional Car Cleaning Process
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

      {/* Professional vs Roadside */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">The Difference</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Professional Car Wash vs Roadside Car Wash: What's the Difference?
            </h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                A roadside wash is fast and cheap because it skips steps — usually the pre-rinse and towel separation that prevent scratching. That's fine for an old runabout you don't mind about. It's a real risk for a car you plan to keep looking sharp for years.
              </p>
              <p>
                Professional cleaning takes longer because it respects sequence: loosen dirt first, clean by surface, inspect last. That's the difference you're paying for — not speed, but care.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Premium Cars */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-5 h-5 text-green-400" />
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Premium Care</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Why Owners of Premium Cars Trust CleanCruisers
            </h2>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                Whether it's a BMW parked near Connaught Place, CP office parking, India Gate weekend drives, Khan Market, Lodhi Garden mornings, Pragati Maidan exhibitions, a Mercedes-Benz in Chanakyapuri, an Audi around Golf Links, a Range Rover in Jor Bagh, or a Toyota Fortuner doing school runs every day - every car has surfaces that punish careless handling.
              </p>
              <p>
                Soft clear coats scratch easily. Gloss-black trims show swirl marks under any light. Leather dries out with the wrong chemicals. Touchscreens and sensor housings don't like excess moisture. We treat a Camry, a Tucson, a Carnival, or a Gloster with the same surface-first logic — because the risks of doing it wrong don't change with the badge on the bonnet.
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
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Areas We Serve</h2>
            </div>
            <div className="space-y-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              <p>
                Door step car wash service is available all over New Delhi — Connaught Place, Chanakyapuri, Golf Links, Jor Bagh, Defense Colony, Vasant Vihar, Greater Kailash, Hauz Khas and other nearby areas provided the car can be parked.
              </p>
              <p>
                If you need service in any other area please see our{" "}
                <a href="/doorstep-car-wash-services-in-south-delhi/" className="text-green-400 hover:underline">Car Wash in South Delhi</a>,{" "}
                <a href="/doorstep-car-wash-services-in-east-delhi/" className="text-green-400 hover:underline">Car Wash in East Delhi</a>,{" "}
                <a href="/car-wash-in-dwarka" className="text-green-400 hover:underline">Car Wash in Dwarka</a>,{" "}
                <a href="/car-wash-in-new-delhi/" className="text-green-400 hover:underline">Car Wash in New Delhi</a> and{" "}
                <a href="/car-wash-services-in-janakpuri" className="text-green-400 hover:underline">Car Wash in Janakpuri</a> pages.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Frequency */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Cleaning Schedule</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              How Frequently Do You Need To Clean Your Car?
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm sm:text-base">
                  <span className="text-white font-medium">Exterior:</span> Once in 1-2 weeks if car is being driven on daily basis. Otherwise depending upon the situation.
                </p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300 text-sm sm:text-base">
                  <span className="text-white font-medium">Interior:</span> Once every 2-3 weeks.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Pricing</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-6">
              Transparent Pricing for Professional Car Cleaning
            </h2>
            <div className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl">
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                Professional car cleaning services vary in price as per multiple factors, such as the type of vehicle (Hatchback, Sedan SUV, Premium Vehicle), its existing condition, and the service selected. Going for a quick exterior wash, obviously does not take as much time and care as an interior/exterior carpet deep clean. Just provide your make and model, cleaning needs, and we'll find you the best service provider along with a price quote with absolutely no hidden charges; The guesswork is eliminated. Ready to get started?{" "}
                <a
                  href="/booking"
                  onClick={(e) => { e.preventDefault(); navigate("/booking"); }}
                  className="text-green-400 hover:underline font-medium"
                >
                  Book Your Car Wash
                </a>
                {" "}today and let CleanCruisers bring professional car care directly to your doorstep.
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
                Ready for a Cleaner, Safer Wash?
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
                Your car deserves better than a rushed wipe-down.{" "}
                <a href="/booking" onClick={(e) => { e.preventDefault(); navigate("/booking"); }} className="text-green-400 hover:underline font-medium">Book Professional Car Cleaning today</a>, or Request a Free Quote and let us handle it carefully, at your doorstep.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
                >
                  Book Professional Car Cleaning
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

export default CarWashNewDelhi;
