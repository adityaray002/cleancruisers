import React, { useState, useRef, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  MapPin, Phone, ArrowRight, Car, CheckCircle2,
  Sparkles, Shield, Wind, Layers, Droplets, Star,
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

const BeforeAfterSlider = ({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: string;
  after: string;
  beforeLabel?: string;
  afterLabel?: string;
}) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    };
    const onMouseUp = () => { isDragging.current = false; };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [updatePosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl select-none"
      style={{ aspectRatio: "16/9", cursor: "col-resize", touchAction: "none" }}
      onMouseDown={(e) => { isDragging.current = true; updatePosition(e.clientX); }}
      onTouchStart={(e) => updatePosition(e.touches[0].clientX)}
      onTouchMove={(e) => { e.preventDefault(); updatePosition(e.touches[0].clientX); }}
    >
      {/* Before image — always full width underneath */}
      <img
        src={before}
        alt={beforeLabel}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* After image — clipped from right by clip-path */}
      <img
        src={after}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        draggable={false}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      />

      {/* Drag handle circle */}
      <div
        className="absolute top-1/2 flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-xl z-10"
        style={{ left: `${position}%`, transform: "translate(-50%, -50%)" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6 10L2 10M2 10L5 7M2 10L5 13" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 10L18 10M18 10L15 7M18 10L15 13" stroke="#111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Before label */}
      <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-white text-xs font-semibold uppercase tracking-wider">
        {beforeLabel}
      </div>

      {/* After label */}
      <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-black text-xs font-semibold uppercase tracking-wider">
        {afterLabel}
      </div>
    </div>
  );
};

const CarInteriorCleaning = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Car,
      name: "Car Seat Cleaning",
      desc: "Seats are one of the most frequently used parts of your car. Dust, stains and everyday marks can build up over time. Appropriate cleaning is selected according to the seat material and condition.",
    },
    {
      icon: Layers,
      name: "Carpet Cleaning",
      desc: "Car carpets can collect dust, mud, food particles and other debris. Proper cleaning helps refresh these high-use areas.",
    },
    {
      icon: Droplets,
      name: "Floor Mat Cleaning",
      desc: "Floor mats are exposed to dirt and mud every day. Cleaning them regularly helps keep the interior looking cleaner.",
    },
    {
      icon: Sparkles,
      name: "Dashboard Cleaning",
      desc: "The dashboard and other accessible interior surfaces are cleaned carefully to remove everyday dust and grime.",
    },
    {
      icon: Shield,
      name: "Door Panel Cleaning",
      desc: "Door panels, handles and other frequently touched areas can accumulate dust and marks. These areas receive attention during interior cleaning.",
    },
    {
      icon: Wind,
      name: "Interior Vacuuming",
      desc: "Vacuuming helps remove loose dust, crumbs, hair and debris from appropriate interior areas.",
    },
    {
      icon: Star,
      name: "Detail Cleaning",
      desc: "Accessible corners, gaps and frequently used areas can collect dirt that is easy to overlook during a quick clean.",
    },
  ];

  const problems = [
    { problem: "Dusty interior", focus: "Vacuuming and surface cleaning" },
    { problem: "Dirty seats", focus: "Seat and upholstery cleaning" },
    { problem: "Food or drink stains", focus: "Appropriate stain treatment" },
    { problem: "Dirty carpets", focus: "Carpet cleaning" },
    { problem: "Muddy floor mats", focus: "Mat cleaning" },
    { problem: "Pet hair", focus: "Vacuuming and deeper cleaning" },
    { problem: "Interior odour", focus: "Appropriate interior cleaning" },
    { problem: "Dust around controls", focus: "Detail cleaning of accessible areas" },
  ];

  const steps = [
    { num: "1", title: "Interior Inspection", desc: "We check the condition of the seats, carpets, mats and accessible interior surfaces." },
    { num: "2", title: "Preparation", desc: "The interior is prepared for cleaning and removable mats or loose debris are handled appropriately." },
    { num: "3", title: "Vacuuming", desc: "Loose dust, crumbs, hair and debris are removed from suitable areas." },
    { num: "4", title: "Surface Cleaning", desc: "The dashboard, door panels and other appropriate surfaces are cleaned." },
    { num: "5", title: "Seat & Upholstery Cleaning", desc: "Seats and upholstery are cleaned according to their material and condition." },
    { num: "6", title: "Carpet & Mat Cleaning", desc: "Carpets and floor mats receive appropriate cleaning based on their condition." },
    { num: "7", title: "Detail Cleaning", desc: "Attention is given to accessible corners, gaps and frequently touched areas." },
    { num: "8", title: "Final Inspection", desc: "The interior is checked before the service is completed." },
  ];

  const testimonials = [
    {
      vehicle: "BMW 3 Series",
      location: "South Delhi",
      text: "Booked CleanCruisers for my BMW 3 Series because the seats and carpets had accumulated dust and everyday dirt. The doorstep service was convenient, and I appreciated the careful attention to the interior surfaces. The car felt noticeably fresher and cleaner afterwards. Overall, a smooth and professional experience.",
      name: "Rahul",
      area: "South Delhi",
    },
    {
      vehicle: "Mercedes-Benz C-Class",
      location: "Dwarka, West Delhi",
      text: "I wanted a thorough interior cleaning for my Mercedes-Benz C-Class without taking the car to a detailing centre. CleanCruisers handled the seats, carpets, mats and dashboard at my doorstep in Dwarka. The process was convenient and well organised, and the interior looked much cleaner after the service.",
      name: "Amit",
      area: "Dwarka, Delhi",
    },
    {
      vehicle: "Audi A6",
      location: "Rajouri Garden, Delhi",
      text: "I booked CleanCruisers for my Audi A6 after a long period of regular use. The team focused on the seats, floor mats, carpets and other interior areas that needed attention. I liked the convenience of doorstep service and the professional approach throughout the cleaning process.",
      name: "Vikas",
      area: "Rajouri Garden, Delhi",
    },
  ];

  const whenToClean = [
    "Seats have visible stains",
    "Carpets have accumulated dirt",
    "The interior has developed an unpleasant smell",
    "Children frequently travel in the car",
    "Pets travel in the vehicle",
    "You regularly eat or drink inside the car",
    "The car is exposed to dusty conditions",
    "You have returned from a long road trip",
    "You've purchased a used car",
    "You're preparing to sell the vehicle",
    "Your regular vacuuming is no longer enough",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Helmet>
        <title>Premium Car Interior Cleaning at Home in Delhi | CleanCruisers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Get premium car interior cleaning at your doorstep in Delhi. Expert cleaning for seats, carpets, mats and dashboard, tailored to your vehicle's needs."
        />
        <link rel="canonical" href="https://cleancruisers.in/car-interior-cleaning/" />
        <meta property="og:title" content="Premium Car Interior Cleaning at Home in Delhi | CleanCruisers" />
        <meta property="og:description" content="Get premium car interior cleaning at your doorstep in Delhi. Expert cleaning for seats, carpets, mats and dashboard, tailored to your vehicle's needs." />
        <meta property="og:url" content="https://cleancruisers.in/car-interior-cleaning/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Premium Car Interior Cleaning at Home in Delhi | CleanCruisers" />
        <meta name="twitter:image" content="https://cleancruisers.in/LOGOFINAL.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Car Interior Cleaning",
          "provider": {
            "@type": "LocalBusiness",
            "name": "CleanCruisers",
            "url": "https://cleancruisers.in",
            "telephone": "+918920230357",
          },
          "areaServed": "Delhi NCR",
          "description": "Premium car interior cleaning at your doorstep in Delhi. Expert cleaning for seats, carpets, mats and dashboard.",
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
              <span className="text-green-400 text-sm font-medium">Doorstep Service Across Delhi & NCR</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Car Interior Cleaning at Home in Delhi
            </h1>
            <div className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-4 text-left sm:text-center space-y-4">
              <p>
                While a car can look good from the outside, it should be fresh and comfortable inside.{" "}
                <strong className="text-white">Car interior cleaning</strong> helps remove accumulated dust, food crumbs, stains, dirt, hair and everyday grime from the areas you use most.
              </p>
              <p>
                CleanCruisers is a provider of car interior cleaning services in Delhi. Our team comes to your home, office or applicable society parking location, making it easier to maintain your car without spending time driving to a cleaning centre.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button
                onClick={() => navigate("/booking")}
                className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
              >
                BOOK NOW <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a
                href="https://wa.me/918920230357"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 bg-green-600/20 border border-green-500/40 rounded-xl text-green-400 hover:bg-green-600/30 hover:border-green-400 transition-all font-semibold"
              >
                Book Premium Interior Cleaning on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Why Your Car Interior Needs More ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Why It Matters</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Why Your Car Interior Needs More Than Regular Cleaning?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-2">
              The interior of the vehicle gathers an astounding level of soil through ordinary driving.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              Everyday commuting, some dirty roads, eating in the car, kids and pets wet shoes will slowly impact seats, carpets, floor mats and other surfaces all around.
            </p>
            <p className="text-gray-400 text-sm sm:text-base font-medium mb-4">You may notice:</p>
          </motion.div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8"
          >
            {[
              "Dust and dirt on seats",
              "Food or drink stains",
              "Dirty carpets and floor mats",
              "Pet hair",
              "Crumbs and debris",
              "Dust around the dashboard and controls",
              "Marks on door panels",
              "Unpleasant interior odour",
              "Dirt in corners and difficult-to-reach areas",
            ].map((item, i) => (
              <motion.li key={i} variants={itemVariants} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm sm:text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Regular vacuuming is useful for routine maintenance but accumulated dirt and stains may require a more thorough cleaning approach.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              That's where professional interior cleaning can make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">What We Clean</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
              Professional Car Interior Cleaning, From Seats to Dashboard
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              At CleanCruisers, the service can be tailored according to your vehicle's interior condition and the cleaning package you select.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative p-6 bg-gradient-to-br from-gray-900/80 to-gray-900/40 border border-gray-800 rounded-2xl hover:border-green-500/40 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                    <s.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{s.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Problem / Focus Table ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Find Your Solution</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              What's Making Your Car Interior Look Dirty and Feel Unfresh?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Different customers have different reasons for booking an interior cleaning service.
            </p>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-green-400 text-sm font-semibold uppercase tracking-wider border border-gray-800 bg-gray-900/60 rounded-tl-xl">
                    Your Problem
                  </th>
                  <th className="text-left p-4 text-green-400 text-sm font-semibold uppercase tracking-wider border border-gray-800 bg-gray-900/60 rounded-tr-xl">
                    Cleaning Focus
                  </th>
                </tr>
              </thead>
              <tbody>
                {problems.map((row, i) => (
                  <tr key={i} className="group hover:bg-green-500/5 transition-colors">
                    <td className="p-4 text-gray-300 text-sm border border-gray-800">{row.problem}</td>
                    <td className="p-4 text-gray-400 text-sm border border-gray-800">{row.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed mt-6"
          >
            The result can vary depending on the material, age of the stain and overall condition of the interior. We believe in setting realistic expectations rather than promising that every stain or odour will disappear completely.
          </motion.p>
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
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">How We Work</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
              Our Professional Car Interior Cleaning Process
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
              A good result starts with understanding the condition of the vehicle rather than using the same approach for every car.
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-5 p-5 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <span className="text-green-400 font-bold text-2xl tabular-nums flex-shrink-0 leading-none mt-0.5">
                  0{step.num}
                </span>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed mt-8"
          >
            Need a complete exterior wash as well? You can explore our{" "}
            <a href="/booking" className="text-green-400 hover:underline font-medium">
              doorstep car wash service
            </a>{" "}
            for regular exterior vehicle cleaning.
          </motion.p>
        </div>
      </section>

      {/* ── Before/After + Testimonials ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Real Results</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
              See the Difference: Real Car Interior Cleaning Results
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              Real before-and-after results from a CleanCruisers interior cleaning service in Delhi.
            </p>
          </motion.div>

          {/* Before / After Slider */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <BeforeAfterSlider
              before="/interior-before.webp"
              after="/interior-after.webp"
              beforeLabel="Before"
              afterLabel="After"
            />
            <p className="text-gray-500 text-xs text-center mt-3">
              Drag the slider to reveal the transformation — real results, at your doorstep.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-green-500/30 transition-all flex flex-col gap-4"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-white font-semibold text-sm">— {t.name}, {t.area}</p>
                  <p className="text-green-400 text-xs mt-1">{t.vehicle} · {t.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base text-center"
          >
            See what Delhi car owners say about their CleanCruisers experience.
          </motion.p>
        </div>
      </section>

      {/* ── Doorstep Service Locations ── */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">We Come To You</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Professional Car Interior Cleaning at Your Doorstep in Delhi
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              One of the biggest advantages of choosing CleanCruisers is convenience. Instead of driving to a car wash or detailing centre, you can schedule the service at a convenient location.
            </p>
          </motion.div>

          <h3 className="text-lg font-semibold text-white mb-6">
            Doorstep Car Interior Cleaning Across Delhi & Delhi NCR
          </h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-4 mb-10"
          >
            {[
              {
                icon: "🏠",
                title: "Home",
                desc: "Get your car cleaned while you're at home.",
              },
              {
                icon: "🏢",
                title: "Office",
                desc: "Use your working hours more efficiently by arranging service at an applicable office parking location.",
              },
              {
                icon: "🏙️",
                title: "Society / Apartment Parking",
                desc: "Doorstep cleaning can also be convenient for customers living in residential societies, subject to location and parking/service requirements.",
              },
            ].map((loc, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl hover:border-green-500/30 transition-all text-center"
              >
                <div className="text-4xl mb-4">{loc.icon}</div>
                <h4 className="text-white font-semibold text-base mb-2">{loc.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{loc.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            CleanCruisers serves customers across its active Delhi service areas. Our doorstep service covers customers across{" "}
            <a href="/car-wash-in-rajouri-garden/" className="text-green-400 hover:underline font-medium">West Delhi</a>,{" "}
            <a href="/car-wash-in-south-delhi/" className="text-green-400 hover:underline font-medium">South Delhi</a>,{" "}
            <a href="/doorstep-car-wash-services-in-east-delhi/" className="text-green-400 hover:underline font-medium">East Delhi</a>,{" "}
            <a href="/car-wash-in-new-delhi/" className="text-green-400 hover:underline font-medium">New Delhi</a>, and{" "}
            <a href="/car-wash-in-noida/" className="text-green-400 hover:underline font-medium">car wash in Noida</a> and{" "}
            <a href="/car-wash-in-gurgaon/" className="text-green-400 hover:underline font-medium">car wash in Gurgaon</a> in Delhi NCR, subject to service availability.
          </motion.p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Pricing</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              How Much Does Car Interior Cleaning Cost in Delhi?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              The price depends on several factors, including:
            </p>
          </motion.div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8"
          >
            {["Vehicle size", "Interior condition", "Type of cleaning required", "Selected package", "Additional services"].map((item, i) => (
              <motion.li key={i} variants={itemVariants} className="flex items-center gap-3 p-4 bg-gray-900/60 border border-gray-800 rounded-xl">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Rather than choosing a package based only on price, consider what your car actually needs.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              For an estimate based on your vehicle and service requirements, you can use our{" "}
              <a href="/car-wash-price-calculator" className="text-green-400 hover:underline font-medium">
                car wash price calculator
              </a>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Vehicle Types ── */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Every Vehicle Type</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Professional Car Interior Cleaning for Every Type of Vehicle
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              Interior materials vary from one vehicle to another. Fabric seats, leather surfaces, carpets and other materials may require different cleaning approaches.
            </p>
            <p className="text-gray-400 text-sm sm:text-base font-medium mb-4">
              CleanCruisers can cater to applicable:
            </p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8"
          >
            {["Hatchbacks", "Sedans", "SUVs", "Premium cars", "Luxury vehicles"].map((type, i) => (
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            If you drive a premium vehicle such as BMW, Mercedes-Benz, Audi, Lexus, Volvo, Jaguar Land Rover, Porsche or Tesla and any other model of luxury car or SUV please inform the team when booking so their full service is able to be discussed.
          </motion.p>
        </div>
      </section>

      {/* ── Bought a Used Car ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Used Car?</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Bought a Used Car?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
              A used car might even be beautiful on the outside, but it has years of dust, grime and daily driving wear and tear inside.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              An interior cleaning will be practical if you have recently purchased a second-hand car. You may want to focus on:
            </p>
          </motion.div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3 mb-6"
          >
            {["Seats", "Carpets", "Floor mats", "Dashboard", "Door panels", "Frequently touched surfaces", "Interior odour"].map((item, i) => (
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
            It's especially useful if you don't know how regularly the previous owner maintained the interior.
          </motion.p>
        </div>
      </section>

      {/* ── When to Clean ── */}
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: "#0a0f0f" }}>
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Timing</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              When Should You Get Your Car Interior Cleaned?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
              There isn't one fixed schedule that works for every vehicle. Consider professional cleaning when:
            </p>
          </motion.div>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-3 mb-8"
          >
            {whenToClean.map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-green-500/30 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                </div>
                <span className="text-gray-300 text-sm sm:text-base">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm sm:text-base leading-relaxed"
          >
            For everyday maintenance, regular light cleaning can help reduce the amount of dirt that builds up between professional services.
          </motion.p>
        </div>
      </section>

      {/* ── Car Wash vs Interior Cleaning ── */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">Comparison</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Car Interior Cleaning vs. Car Wash: What Does Your Car Really Need?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              A regular exterior wash and interior cleaning serve different purposes.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="p-6 bg-gray-900/60 border border-gray-800 rounded-2xl">
              <h3 className="text-white font-semibold text-base mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Car className="w-4 h-4 text-blue-400" />
                </span>
                Car Wash
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Primarily focuses on the vehicle's exterior surfaces, including the body, wheels and tyres depending on the package.
              </p>
            </div>
            <div className="p-6 bg-gray-900/60 border border-green-500/30 rounded-2xl">
              <h3 className="text-white font-semibold text-base mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-green-400" />
                </span>
                Car Interior Cleaning
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Focuses on seats, carpets, mats, dashboard, door panels and other interior areas.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2 text-gray-400 text-sm sm:text-base"
          >
            <p>If your car needs both, you can combine the appropriate services.</p>
            <p>
              For regular exterior maintenance, see our{" "}
              <a href="/booking" className="text-green-400 hover:underline font-medium">
                car wash at home service
              </a>.
            </p>
          </motion.div>
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
              Car Interior Cleaning FAQs: Everything You Need to Know
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {[
              {
                q: "Car Interior Cleaning — What does it include?",
                a: "Based on the package selected, service can cover seat sanitization, carpet and floor mat sanitation cleaning, dashboard and door panel cleaning, vacuuming and other accessible portions of the interior.",
              },
              {
                q: "Can I get car interior cleaning at home?",
                a: "Yes. CleanCruisers provides doorstep car cleaning at applicable home, office and society locations across its active Delhi service areas.",
              },
              {
                q: "How much does car interior cleaning cost?",
                a: "The price depends on the vehicle size, interior condition and selected service. Contact CleanCruisers for the applicable price for your vehicle.",
              },
              {
                q: "Can you clean car seats?",
                a: "Yes, applicable seat cleaning can be included depending on the selected service and the material of the seats.",
              },
              {
                q: "Can you clean car carpets and floor mats?",
                a: "Yes. Carpets and floor mats can be cleaned as part of applicable interior cleaning services.",
              },
              {
                q: "Can car interior cleaning remove bad smells?",
                a: "Professional interior cleaning can help address odour caused by accumulated dirt and other interior contamination. Results depend on the source and severity of the odour.",
              },
              {
                q: "How long does car interior cleaning take?",
                a: "Time needed varies by size, condition and service level. When you book, ask: How long will it take?",
              },
              {
                q: "Do you provide car interior cleaning near me?",
                a: "CleanCruisers provides doorstep interior cleaning across its active service areas in Delhi. Share your location with the team to confirm availability.",
              },
              {
                q: "Can you clean a luxury car interior?",
                a: "Applicable interior cleaning services can be provided for premium and luxury vehicles. Because materials differ, the appropriate cleaning method should be selected according to the vehicle's interior.",
              },
            ].map((faq, i) => (
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
                <Sparkles className="w-8 h-8 text-green-400" />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready for a Cleaner Car Interior?
              </h2>
              <div className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto space-y-3">
                <p>Your car doesn't need to be visibly dirty before you give the interior some attention.</p>
                <p>
                  If your seats, carpets, mats or dashboard have accumulated dust, stains or everyday grime, CleanCruisers can bring doorstep car interior cleaning to you in Delhi.
                </p>
                <p className="text-gray-400 text-sm">
                  Not sure which service your car needs? Send your vehicle details and describe the problem when contacting us. Our team can help you choose an appropriate cleaning option.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={() => navigate("/booking")}
                  className="w-full sm:w-auto bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-6 text-base rounded-xl shadow-lg shadow-green-500/25"
                >
                  Book Your Interior Cleaning
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

export default CarInteriorCleaning;
