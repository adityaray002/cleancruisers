
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Package } from "lucide-react";
import { motion } from "framer-motion";
interface CompleteCarePlanProps {
  selectedCar: string;
  onAutoAdvance?: () => void;
}
const CompleteCarePlan = ({ selectedCar, onAutoAdvance }: CompleteCarePlanProps) => {
  const pricing: Record<string, number> = {
    Hatchback: 1399,
    Sedan: 1499,
    SUV: 1599,
    Luxury: 1599,
  };
  const price = pricing[selectedCar] || 1399;
  const inclusions = [
    "Interior Cleaning + Vacuum",
    "Interior Black Part Polish",
    "Exterior Foam Wash",
    "Dicky Cleaning",
    "Tyre Polishing",
    "Exterior Black Part Polish",
    "Footmat Cleaning",
    "Free Dustbin (1 pc)",
    "Free Room Odor / Air Freshener",
  ];
  return (
    <div className="max-w-lg mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="bg-gray-800 border-green-400 ring-2 ring-green-400">
          <div className="h-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-t-lg" />
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl">Complete Care Package</h3>
                <p className="text-gray-400 text-sm">3 Times Premium Washing • {selectedCar}</p>
              </div>
            </div>
            <div className="text-center my-5">
              <span className="text-3xl font-bold text-green-400">₹{price}</span>
              <span className="text-gray-400 text-sm ml-1">for 3 washes</span>
            </div>
            <div className="space-y-2.5 mb-6">
              {inclusions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center text-sm text-gray-300"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400 mr-2.5 flex-shrink-0" />
                  {item}
                </motion.div>
              ))}
            </div>
            <Button
              className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold"
              onClick={() => onAutoAdvance?.()}
            >
              Continue with this Package
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
export default CompleteCarePlan;