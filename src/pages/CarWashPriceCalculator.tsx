import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import {
  Calculator,
  Sparkles,
  ChevronDown,
  Plus,
  Minus,
  ShieldCheck,
  Timer,
  MapPin,
  Wallet,
} from "lucide-react";
import {
  getPlanPrice,
  getAddonPrice,
  COMPLETE_CARE_PRICING,
  MONTHLY_PRICING,
  WASH_ADDON_PRICING,
  WASH_ADDON_NAMES,
} from "@/lib/pricing";

// ── Static data ──────────────────────────────────────────────────────────

const LOCATIONS = [
  "East Delhi",
  "West Delhi",
  "North Delhi",
  "South Delhi",
  "New Delhi",
  "Central Delhi",
  "Noida",
  "Gurgaon",
];

const CAR_TYPES = ["Hatchback", "Sedan", "SUV", "Luxury"] as const;

type ServiceOption = {
  id: string;
  label: string;
  group: "onetime" | "completecare" | "monthly" | "addon";
  bookingParam: string | null;
  time: string;
  note: string;
};

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "exterior",
    label: "Exterior Wash Only",
    group: "onetime",
    bookingParam: "one-time",
    time: "40–50 minutes",
    note: "Perfect for daily commuters — keeps your car dust-free without a weekend wash session.",
  },
  {
    id: "interior",
    label: "Interior Deep Clean",
    group: "onetime",
    bookingParam: "one-time",
    time: "45–60 minutes",
    note: "Great for families and pet owners who need regular deep interior care.",
  },
  {
    id: "combo",
    label: "Exterior + Interior Wash (Combo)",
    group: "onetime",
    bookingParam: "one-time",
    time: "90–120 minutes",
    note: "Our most popular one-time option — full inside-out clean in a single visit.",
  },
  {
    id: "complete-care",
    label: "Complete Care Package (3 Washes)",
    group: "completecare",
    bookingParam: "complete-care",
    time: "90–120 minutes per visit, 3 visits",
    note: "Best value if you want 3 premium washes a month without booking each one separately.",
  },
  {
    id: "monthly",
    label: "Monthly Doorstep Plan (26 Sessions/Month)",
    group: "monthly",
    bookingParam: null,
    time: "~45 minutes per visit, 26 visits/month",
    note: "Ideal if your car sits in office or society parking daily — the lowest cost per wash.",
  },
  {
    id: "rubbing-foam",
    label: "Rubbing + Exterior Foam Wash",
    group: "addon",
    bookingParam: "premium-addons",
    time: "2–3 hours",
    note: "Recommended for cars that need paint correction before a deep shine.",
  },
  {
    id: "3m-wax-foam",
    label: "3M Wax + Exterior Foam Wash",
    group: "addon",
    bookingParam: "premium-addons",
    time: "60–90 minutes",
    note: "A good middle ground — added shine and protection without a full detailing session.",
  },
  {
    id: "rubbing-wax-foam",
    label: "Rubbing + 3M Wax + Foam Wash",
    group: "addon",
    bookingParam: "premium-addons",
    time: "2–3 hours",
    note: "Great for SUVs and luxury cars that need deeper correction plus a protective wax coat.",
  },
  {
    id: "rubbing-dry-foam",
    label: "Rubbing + Dry Cleaning + Foam Wash",
    group: "addon",
    bookingParam: "premium-addons",
    time: "2–3 hours",
    note: "Combines paint correction with a full interior refresh.",
  },
  {
    id: "dry-wax-foam",
    label: "Dry Cleaning + 3M Wax + Foam Wash",
    group: "addon",
    bookingParam: "premium-addons",
    time: "90–120 minutes",
    note: "Interior refresh plus exterior shine — a solid all-rounder.",
  },
  {
    id: "full-package",
    label: "Full Package (Rubbing + 3M Wax + Dry Cleaning + Foam Wash)",
    group: "addon",
    bookingParam: "premium-addons",
    time: "2–3 hours",
    note: "Our most complete detailing option — for special occasions or luxury cars.",
  },
  {
    id: "dry-cleaning",
    label: "Dry Cleaning",
    group: "addon",
    bookingParam: "premium-addons",
    time: "60–90 minutes",
    note: "Best for a quick interior refresh between full washes.",
  },
  {
    id: "air-freshener",
    label: "Air Freshener",
    group: "addon",
    bookingParam: "premium-addons",
    time: "10–15 minutes",
    note: "A simple add-on — pair it with any wash for a fresher cabin.",
  },
];

const EXTRA_ADDONS = [
  { id: "seat-cleaning", name: WASH_ADDON_NAMES["seat-cleaning"], price: WASH_ADDON_PRICING["seat-cleaning"], perSeat: true, maxQty: 7 },
  { id: "roof-cleaning", name: WASH_ADDON_NAMES["roof-cleaning"], price: WASH_ADDON_PRICING["roof-cleaning"], perSeat: false, maxQty: 1 },
  { id: "door-dashboard-shampoo", name: WASH_ADDON_NAMES["door-dashboard-shampoo"], price: WASH_ADDON_PRICING["door-dashboard-shampoo"], perSeat: false, maxQty: 1 },
  { id: "ac-vent-cleaning", name: WASH_ADDON_NAMES["ac-vent-cleaning"], price: WASH_ADDON_PRICING["ac-vent-cleaning"], perSeat: false, maxQty: 1 },
];

const getBasePrice = (car: string, opt: ServiceOption): number => {
  switch (opt.id) {
    case "exterior":
      return getPlanPrice(car, "exterior wash only");
    case "interior":
      return getPlanPrice(car, "interior wash only");
    case "combo":
      return getPlanPrice(car, "exterior wash + interior wash");
    case "complete-care":
      return COMPLETE_CARE_PRICING[car] ?? 0;
    case "monthly":
      return MONTHLY_PRICING[car] ?? 0;
    default:
      return getAddonPrice(`${opt.id}-${car.toLowerCase()}`);
  }
};

const WHY_CHECK_PRICE = [
  { title: "Instant estimate", desc: "Get your estimated car wash price in under 30 seconds, without waiting for a callback." },
  { title: "No hidden charges", desc: "The price you see is based on real factors, not a lowball number to grab your contact details." },
  { title: "Transparent pricing", desc: "Our pricing starts at ₹349 for hatchbacks, and the calculator shows exactly why your quote is what it is." },
  { title: "Prices based on vehicle type", desc: "A hatchback never pays an SUV car wash price. Fair pricing by car size." },
  { title: "Doorstep service", desc: "We come to your home, office, or apartment parking — you don't drive anywhere." },
  { title: "Delhi, Noida & Gurgaon coverage", desc: "One calculator covering all of Delhi NCR." },
  { title: "Professional cleaners", desc: "Trained staff with steam machines, quality chemicals, and proper equipment." },
  { title: "Flexible booking", desc: "Same-day slots, 7 days a week. Morning or evening, your choice." },
];

const SERVICE_GUIDE = [
  { name: "Exterior Wash Only", desc: "Daily dust aur light dirt ke liye. Delhi ki pollution se regular protection." },
  { name: "Interior Deep Clean", desc: "Seats, mats, dashboard, AC vents. Families aur pet owners ke liye must." },
  { name: "Exterior + Interior Combo", desc: "Body, wheels, glass ka deep clean plus a full interior refresh in one visit." },
  { name: "Complete Care Package", desc: "3 premium washes a month. Monthly refresh ke liye ideal." },
  { name: "Rubbing, Wax & Detailing", desc: "Paint correction, polishing, waxing. Special occasions ya luxury cars ke liye." },
];

const STEPS = [
  { title: "Select your location", desc: "East, West, North, South, New Delhi, Central Delhi, Noida, or Gurgaon." },
  { title: "Choose your car type", desc: "Hatchback, sedan, SUV, or luxury." },
  { title: "Select your service", desc: "Exterior wash, interior clean, combo, complete care, monthly, or detailing." },
  { title: "View your instant estimate", desc: "Transparent car wash charges in seconds." },
];

const WHY_PRICE_CHANGES = [
  { title: "Car size", desc: "A hatchback takes 40 minutes; a large SUV takes up to 90. Time and product dono ka difference price mein reflect hota hai." },
  { title: "Vehicle condition", desc: "Weekly washed car vs 3-month-old dirt — effort alag lagta hai." },
  { title: "Interior dirt level", desc: "Pet hair, food stains, ya heavy dust extra detailing maangta hai." },
  { title: "Car type", desc: "Sedans and SUVs can cost a little more than hatchbacks for combo and premium services, due to larger surface area and longer cleaning time." },
  { title: "Selected service", desc: "Basic exterior wash starts around ₹349; premium detailing can go up to ₹2,799." },
  { title: "Add-on services", desc: "Seat cleaning, roof cleaning, AC vent cleaning, ya dashboard shampooing adds to the total." },
  { title: "Water availability", desc: "Hum apna water aur power laate hain, par some society restrictions service options ko affect kar sakte hain." },
];

const PACKAGE_RECOMMENDATIONS = [
  { audience: "Daily Commuters", pkg: "Exterior Wash Only", desc: "Delhi NCR ki dust roz accumulate hoti hai. Regular exterior wash se car consistently fresh rehti hai, bina weekend waste kiye." },
  { audience: "Families", pkg: "Interior Deep Clean", desc: "Kids, snacks, spills — family cars ka interior sabse zyada attention maangta hai." },
  { audience: "SUV Owners", pkg: "Exterior + Interior Combo", desc: "Creta, Fortuner, XUV — bade surface area ko deeper clean chahiye jo har panel aur wheel arch cover kare." },
  { audience: "Luxury Cars", pkg: "Premium Detailing", desc: "Mercedes, BMW, Audi — high-end paint ko pH-neutral products aur careful hands chahiye. Roadside wash risk nahi le sakte." },
  { audience: "Office Users", pkg: "Monthly Doorstep Plan", desc: "Office parking mein car khadi rehti hai? Monthly plan se per-wash cost significantly kam hota hai — aur aapko kuch yaad nahi rakhna." },
];

const CHALLENGES = [
  { q: "No time to visit a car wash?", a: "We come to you — home, office, ya apartment basement." },
  { q: "Weekends always busy?", a: "Early morning ya late evening slots available. Your schedule, your rules." },
  { q: "Car gets dusty every day?", a: "Delhi NCR ki reality hai. Regular doorstep exterior wash se solution milta hai." },
  { q: "Apartment parking makes washing difficult?", a: "Our team handles equipment, water, aur society coordination." },
  { q: "Waiting in long queues?", a: "Your slot is reserved. We arrive, we clean, we leave. No waiting." },
];

const FAQS = [
  { q: "How accurate is the car wash price calculator?", a: "Our calculator gives a realistic estimate based on car type and service. Most customers find their final price matches the estimate." },
  { q: "Is the estimate the final price?", a: "Almost always, yes. Agar vehicle unusually dirty hai (mud, pet accidents, etc.), hum starting se pehle confirm karte hain — kabhi baad mein surprise nahi." },
  { q: "Do SUVs cost more to wash?", a: "Generally yes, SUVs cost a little more than hatchbacks because of larger surface area and cleaning time." },
  { q: "Do you provide doorstep car wash service?", a: "That's all we do. Doorstep car wash across Delhi, Noida, and Gurgaon — 7 days a week." },
  { q: "Do I need to arrange water or electricity?", a: "Nahi. Our team brings everything needed for the wash. You just provide the car." },
  { q: "How long does a car wash take?", a: "Standard exterior: 40–50 minutes. Complete interior + exterior: 90–120 minutes. Premium detailing: 2–3 hours." },
  { q: "Can I book same-day car wash?", a: "Yes, subject to slot availability. Morning booking = best same-day chances." },
  { q: "Do you offer monthly car wash packages?", a: "Yes. Our Monthly Doorstep Plan starts at ₹799 for hatchbacks — better value, zero hassle." },
  { q: "Which areas do you cover?", a: "Delhi (all zones), Noida, and Gurgaon. Calculator mein apna location select karke check karein." },
  { q: "What if I'm not happy with the service?", a: "Call us at 8920230357. We re-do it. No arguments." },
];

// ── Component ────────────────────────────────────────────────────────────

const CarWashPriceCalculator: React.FC = () => {
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [car, setCar] = useState<string>(CAR_TYPES[0]);
  const [serviceId, setServiceId] = useState(SERVICE_OPTIONS[2].id);
  const [extraQty, setExtraQty] = useState<Record<string, number>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedOption = useMemo(
    () => SERVICE_OPTIONS.find((o) => o.id === serviceId) ?? SERVICE_OPTIONS[2],
    [serviceId]
  );

  const basePrice = useMemo(() => getBasePrice(car, selectedOption), [car, selectedOption]);

  const extrasTotal = useMemo(() => {
    if (selectedOption.group === "monthly") return 0;
    return EXTRA_ADDONS.reduce((sum, a) => sum + a.price * (extraQty[a.id] ?? 0), 0);
  }, [extraQty, selectedOption]);

  const total = basePrice + extrasTotal;

  const setQty = (id: string, delta: number, max: number) => {
    setExtraQty((prev) => {
      const next = Math.max(0, Math.min(max, (prev[id] ?? 0) + delta));
      return { ...prev, [id]: next };
    });
  };

  const bookNowHref =
    selectedOption.group === "monthly"
      ? "/monthly-pricing"
      : `/booking?service=${selectedOption.bookingParam}`;

  return (
    <>
      <Helmet>
        <title>Car Wash Price Calculator – Check Doorstep Car Wash Cost Online | CleanCruisers</title>
        <meta
          name="description"
          content="Get an instant car wash price calculator for Delhi, Noida & Gurgaon. Estimate doorstep car wash cost by car type and service. Book your car wash at home today."
        />
      </Helmet>

      <div className="min-h-screen bg-neutral-950">
        <Header />

        {/* Hero */}
        <section className="relative pt-24 pb-10 md:pt-32 md:pb-14 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20 mb-6">
                <Calculator className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Price Calculator</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Get an Instant Estimate for Doorstep Car Wash in Delhi NCR
              </h1>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Select your car type and preferred service to see an estimated price in less than 30 seconds. No phone call required.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Widget */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-to-br from-neutral-900 to-neutral-800/80 border border-neutral-700/50 rounded-2xl p-6 md:p-10">
              <div className="grid sm:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="text-sm text-neutral-400 mb-2 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> Location
                  </label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {LOCATIONS.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-neutral-400 mb-2 block">Car Type</label>
                  <Select value={car} onValueChange={setCar}>
                    <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white h-11">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {CAR_TYPES.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm text-neutral-400 mb-2 block">Service Type</label>
                <Select value={serviceId} onValueChange={setServiceId}>
                  <SelectTrigger className="bg-neutral-800 border-neutral-700 text-white h-11">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICE_OPTIONS.map((opt) => (
                      <SelectItem key={opt.id} value={opt.id}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedOption.group !== "monthly" && (
                <div className="mb-6">
                  <label className="text-sm text-neutral-400 mb-3 block">
                    Add-ons <span className="text-neutral-600">(optional)</span>
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {EXTRA_ADDONS.map((addon) => {
                      const qty = extraQty[addon.id] ?? 0;
                      return (
                        <div
                          key={addon.id}
                          className="flex items-center justify-between gap-3 bg-neutral-800/60 border border-neutral-700 rounded-lg px-3 py-2.5"
                        >
                          <div className="min-w-0">
                            <p className="text-white text-sm font-medium truncate">{addon.name}</p>
                            <p className="text-neutral-500 text-xs">
                              ₹{addon.price}
                              {addon.perSeat ? " / seat" : ""}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <button
                              type="button"
                              onClick={() => setQty(addon.id, -1, addon.maxQty)}
                              className="w-7 h-7 rounded-full bg-neutral-700 hover:bg-neutral-600 flex items-center justify-center text-white transition-colors"
                              aria-label={`Remove ${addon.name}`}
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-white text-sm font-semibold w-4 text-center tabular-nums">{qty}</span>
                            <button
                              type="button"
                              onClick={() => setQty(addon.id, 1, addon.maxQty)}
                              className="w-7 h-7 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-black transition-colors"
                              aria-label={`Add ${addon.name}`}
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Output */}
              <motion.div
                key={`${car}-${serviceId}-${total}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 p-6"
              >
                <div className="grid sm:grid-cols-3 gap-4 mb-5">
                  <div>
                    <p className="text-neutral-500 text-xs mb-1 flex items-center gap-1.5">
                      <Wallet className="w-3.5 h-3.5" /> Estimated Price
                    </p>
                    <p className="text-2xl md:text-3xl font-bold text-green-400">
                      ₹{total}
                      {selectedOption.group === "monthly" && <span className="text-sm text-neutral-400">/mo</span>}
                    </p>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs mb-1 flex items-center gap-1.5">
                      <Timer className="w-3.5 h-3.5" /> Time Required
                    </p>
                    <p className="text-white font-semibold">{selectedOption.time}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs mb-1 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> For {car} in {location}
                    </p>
                    <p className="text-white font-semibold">{selectedOption.label}</p>
                  </div>
                </div>

                <p className="text-neutral-300 text-sm mb-5 leading-relaxed">{selectedOption.note}</p>

                <Button asChild className="w-full sm:w-auto bg-green-400 hover:bg-green-500 text-black font-semibold h-12 px-8">
                  <Link to={bookNowHref}>Book Now</Link>
                </Button>

                <p className="text-neutral-500 text-xs mt-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                  This is an estimate — final price may vary slightly based on vehicle condition and add-ons confirmed at time of service.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why check price before booking */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
                Why Knowing Your Car Wash Cost Before Booking Saves You Money
              </h2>
              <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-10">
                Delhi NCR mein car dhoondna easy hai, par honest price milna mushkil. Local wash wala ₹200 bolta hai,
                phir "sir, interior extra" — aur bill ₹800 ho jaata hai. That's exactly why we built this calculator —
                no surprises, no awkward negotiations.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {WHY_CHECK_PRICE.map((item) => (
                  <div key={item.title} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                    <p className="text-green-400 font-semibold mb-1.5 text-sm">{item.title}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Which service is right */}
        <section className="pb-16 md:pb-20 bg-neutral-900/30">
          <div className="container mx-auto px-4 pt-12 md:pt-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
                Not Sure Which Car Wash Service Is Right for You?
              </h2>
              <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-10">
                Honestly, most customers aren't — yeh confusion normal hai. Here's a simple way to think about it:
              </p>
              <div className="space-y-3">
                {SERVICE_GUIDE.map((item) => (
                  <div key={item.name} className="flex flex-col sm:flex-row sm:items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                    <p className="text-white font-semibold sm:w-64 shrink-0">{item.name}</p>
                    <p className="text-neutral-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4 steps */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 pt-12 md:pt-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                Get Your Instant Car Wash Price in 4 Simple Steps
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {STEPS.map((step, i) => (
                  <div key={step.title} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-green-400 text-black font-bold flex items-center justify-center mx-auto mb-3">
                      {i + 1}
                    </div>
                    <p className="text-white font-semibold mb-1.5">{step.title}</p>
                    <p className="text-neutral-400 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-neutral-500 text-sm mt-8">Bas. No sign-up. No OTP. No spam calls.</p>
            </div>
          </div>
        </section>

        {/* Why price changes */}
        <section className="pb-16 md:pb-20 bg-neutral-900/30">
          <div className="container mx-auto px-4 pt-12 md:pt-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
                Why Does the Car Wash Price Change from One Car to Another?
              </h2>
              <p className="text-neutral-400 text-center max-w-2xl mx-auto mb-10">
                Car wash price ek fixed number nahi hota — aur kisi bhi honest service ka nahi hona chahiye. Here's what
                genuinely affects your quote:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {WHY_PRICE_CHANGES.map((item) => (
                  <div key={item.title} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                    <p className="text-green-400 font-semibold mb-1.5 text-sm">{item.title}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Package recommendations */}
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 pt-12 md:pt-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                Choose the Right Car Wash Package for Your Needs
              </h2>
              <div className="space-y-3">
                {PACKAGE_RECOMMENDATIONS.map((item) => (
                  <div key={item.audience} className="flex flex-col sm:flex-row sm:items-start gap-2 bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                    <div className="sm:w-48 shrink-0">
                      <p className="text-white font-semibold">{item.audience}</p>
                      <p className="text-green-400 text-sm">{item.pkg}</p>
                    </div>
                    <p className="text-neutral-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="pb-16 md:pb-20 bg-neutral-900/30">
          <div className="container mx-auto px-4 pt-12 md:pt-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-10 text-center">
                Facing These Everyday Car Cleaning Challenges?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {CHALLENGES.map((item) => (
                  <div key={item.q} className="bg-neutral-900 border border-neutral-800 rounded-xl p-5">
                    <p className="text-white font-semibold mb-1.5 text-sm">{item.q}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Trust / testimonials (reuses real homepage reviews) */}
        <TestimonialsSection />

        {/* FAQ */}
        <section className="py-16 md:py-24 px-4 md:px-6" style={{ backgroundColor: "#0a0f0f" }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                ❓ FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, index) => (
                <div
                  key={faq.q}
                  className={`bg-gray-800/60 border rounded-xl overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "border-green-400/50" : "border-gray-700/50 hover:border-gray-600"
                  }`}
                >
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span className="text-white font-semibold text-sm md:text-base pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-green-400 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="pb-20 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500/20 via-green-500/10 to-transparent border border-green-500/20 p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Your Car Professionally Cleaned?</h3>
              <p className="text-neutral-400 mb-6">
                Your car fights Delhi NCR's dust, pollution, and traffic daily. Get your instant quote above, pick a
                time that suits you, and let our professional team bring the shine back — right at your doorstep.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a href="/booking" className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-lg transition-colors">
                  Book Doorstep Car Wash
                </a>
                <a href="tel:8920230357" className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg transition-colors">
                  Call Now: 8920230357
                </a>
                <a
                  href="https://wa.me/918920230357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg transition-colors"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CarWashPriceCalculator;
