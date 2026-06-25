import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type WashAddonItem, WASH_ADDON_PRICING, getWashAddonTotal } from "@/lib/pricing";

interface WashAddonsProps {
  washAddons: WashAddonItem[];
  onChange: (addons: WashAddonItem[]) => void;
  onNext: () => void; // both Skip and Continue call this
}

const ADDON_DEFS = [
  {
    id: "seat-cleaning",
    name: "Seat Cleaning",
    price: 100,
    perUnit: "per seat",
    icon: "🪑",
    desc: "Deep clean & shampoo wash for car seats",
    maxQty: 7,
  },
  {
    id: "roof-cleaning",
    name: "Roof Cleaning",
    price: 200,
    perUnit: null,
    icon: "🚘",
    desc: "Interior roof lining shampoo & clean",
    maxQty: null,
  },
  {
    id: "door-dashboard-shampoo",
    name: "Door & Dashboard Shampoo Cleaning",
    price: 250,
    perUnit: null,
    icon: "🧴",
    desc: "Deep shampoo clean for all doors and dashboard",
    maxQty: null,
  },
  {
    id: "ac-vent-cleaning",
    name: "AC Vent & Foam Cleaning",
    price: 250,
    perUnit: null,
    icon: "❄️",
    desc: "AC vent polishing and foam cleaning",
    maxQty: null,
  },
] as const;

const WashAddons = ({ washAddons, onChange, onNext }: WashAddonsProps) => {
  const getItem = (id: string) => washAddons.find((a) => a.id === id);

  const toggle = (id: string) => {
    if (getItem(id)) {
      onChange(washAddons.filter((a) => a.id !== id));
    } else {
      onChange([...washAddons, { id, qty: 1 }]);
    }
  };

  const setQty = (id: string, qty: number) => {
    if (qty <= 0) {
      onChange(washAddons.filter((a) => a.id !== id));
    } else if (washAddons.some((a) => a.id === id)) {
      onChange(washAddons.map((a) => (a.id === id ? { ...a, qty } : a)));
    } else {
      // First tap on + — item not in array yet, add it
      onChange([...washAddons, { id, qty }]);
    }
  };

  const total = getWashAddonTotal(washAddons);
  const hasAddons = washAddons.length > 0;

  return (
    <div className="max-w-2xl mx-auto">

      {/* Skip banner — prominent at the top */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 p-4 bg-gray-800/60 border border-gray-700 rounded-xl"
      >
        <div>
          <p className="text-white text-sm font-medium">Want to add extra services?</p>
          <p className="text-gray-400 text-xs mt-0.5">These are completely optional — add what you need or skip</p>
        </div>
        <Button
          variant="ghost"
          onClick={onNext}
          className="w-full sm:w-auto shrink-0 border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white h-9 px-4 text-sm gap-2"
        >
          <SkipForward className="w-4 h-4" />
          Skip for now
        </Button>
      </motion.div>

      {/* Add-on cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } }, hidden: {} }}
        className="grid sm:grid-cols-2 gap-4"
      >
        {ADDON_DEFS.map((addon) => {
          const item = getItem(addon.id);
          const selected = !!item;

          return (
            <motion.div
              key={addon.id}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ y: -2 }}
              className={`relative p-4 rounded-2xl border-2 transition-all ${
                selected
                  ? "border-green-400 bg-green-400/5"
                  : "border-gray-700 bg-gray-800/60 hover:border-gray-500 cursor-pointer"
              }`}
              onClick={() => !addon.maxQty && toggle(addon.id)}
            >
              {selected && (
                <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-green-400 flex items-center justify-center text-black text-xs font-bold">
                  ✓
                </span>
              )}

              {/* Icon + Name */}
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{addon.icon}</span>
                <div className="flex-1 min-w-0 pr-4">
                  <p className="text-white font-semibold text-sm leading-snug">{addon.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5 leading-snug">{addon.desc}</p>
                </div>
              </div>

              {/* Price row */}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-green-400 font-bold text-lg">₹{addon.price}</span>
                  {addon.perUnit && (
                    <span className="text-gray-500 text-xs">{addon.perUnit}</span>
                  )}
                  {selected && addon.maxQty && item && (
                    <span className="text-gray-400 text-xs ml-1">
                      = ₹{WASH_ADDON_PRICING[addon.id] * item.qty}
                    </span>
                  )}
                </div>

                {/* Qty stepper for seat cleaning, toggle for others */}
                {addon.maxQty ? (
                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    <button
                      onClick={() => setQty(addon.id, (item?.qty ?? 0) - 1)}
                      className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-colors"
                      aria-label="Remove seat"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-white font-semibold w-5 text-center tabular-nums">
                      {item?.qty ?? 0}
                    </span>
                    <button
                      onClick={() => setQty(addon.id, Math.min((item?.qty ?? 0) + 1, addon.maxQty))}
                      className="w-8 h-8 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center text-black transition-colors"
                      aria-label="Add seat"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={(e) => { e.stopPropagation(); toggle(addon.id); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selected
                        ? "bg-green-400 text-black hover:bg-green-500"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    }`}
                  >
                    {selected ? "✓ Added" : "+ Add"}
                  </button>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom bar — summary + Skip / Continue */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 p-4 bg-gray-800/40 border border-gray-700 rounded-xl"
      >
        <div className="text-center sm:text-left">
          {hasAddons ? (
            <p className="text-white font-semibold text-sm">
              Extra services total:{" "}
              <span className="text-green-400 text-base">+₹{total}</span>
            </p>
          ) : (
            <p className="text-gray-400 text-sm">No extra services selected yet</p>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="ghost"
            onClick={onNext}
            className="flex-1 sm:flex-none border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white h-10 text-sm"
          >
            Skip
          </Button>
          <Button
            onClick={onNext}
            className="flex-1 sm:flex-none bg-green-400 hover:bg-green-500 text-black font-semibold h-10 px-6 gap-2"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default WashAddons;
