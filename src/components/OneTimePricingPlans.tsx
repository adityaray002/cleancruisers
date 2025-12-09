
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface PricingPlansProps {
  selectedPlan: string;
  onPlanSelect: (plan: string) => void;
  selectedCar: string;
}

const OneTimePricingPlans = ({ selectedPlan, onPlanSelect, selectedCar }: PricingPlansProps) => {
  const [serviceType, setServiceType] = useState("");

  useEffect(() => {
    const type = sessionStorage.getItem('selectedServiceType') || "";
    setServiceType(type);
  }, []);

  const getPlansForCar = (carType: string, serviceType: string) => {
    // Base pricing for different car types (subtract ₹1 from all prices)
    const basePricing = {
      "Sedan": { base: 399, premium: 599 },
      "SUV": { base: 499, premium: 699 },
      "Hatchback": { base: 349, premium: 499 },
      "Luxury": { base: 499, premium: 699 }
    };

    const pricing = basePricing[carType as keyof typeof basePricing] || basePricing["Sedan"];

    // Default one-time packages
    return [
      {
        name: "exterior wash + interior wash",
        label: "Exterior + Interior Wash",
        price: pricing.premium,
        currency: "₹",
        features: [
          "Foam Wash",
          "Tyre Dressing",
          "Interior Cleaning + Vacuum",
          "Exterior Black Part Polish",
          "Microfibre Cloth",
          "Interior Black Part Polishing",
          "Footmat Clean",
          "Air Freshener",
          "Dashboard Polish",
          "Exterior Body Polish",
          "Dicky Cleaning",
        ],
        highlighted: true,
        showNote: true,
      },
      {
        name: "exterior wash only",
        label: "Exterior Wash Only",
        price: pricing.base,
        currency: "₹",
        features: [
          "Foam Wash",
          "Tyre Dressing",
          "Exterior Black Part Polish",
          "Exterior Body Polish",
          "Air Freshener",
        ],
        highlighted: false,
        showNote: true,
      },
      {
        name: "interior wash only",
        label: "Interior Deep Clean",
        price: pricing.base - 100,
        currency: "₹",
        features: [
          "Interior Cleaning + Vacuum",
          "Microfibre Cloth",
          "Interior Black Part Polishing",
          "Footmat Clean",
          "Air Freshener",
          "Dashboard Polish",
          "Seats Cleaning",
          "Dicky Cleaning",
        ],
        highlighted: false,
        showNote: true,
      },
    ];
  };

  const plans = getPlansForCar(selectedCar, serviceType);

  return (
    <div>
      {/* Mobile View */}
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all ${
                selectedPlan === plan.name
                  ? 'bg-gray-700 border-green-400'
                  : plan.highlighted
                  ? 'bg-gray-700 border-green-400'
                  : 'bg-gray-800 border-gray-600 hover:border-gray-500'
              }`}
              onClick={() => onPlanSelect(plan.name)}
            >
              <CardContent className="p-3 flex flex-col h-full">
                <div className="text-center mb-3">
                  <span className="text-sm font-bold text-white">{plan.currency}</span>
                  <span className="text-xl font-bold text-white">{plan.price}</span>
                  <span className="text-xs text-gray-400">/service</span>
                </div>

                <h3 className="text-green-400 font-semibold text-xs text-center mb-3">
                  {plan.label}
                </h3>

                <div className="space-y-1 mb-3 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-xs text-gray-300">
                      <span className="text-green-400 mr-1 text-xs">✓</span>
                      <span className="text-xs leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.showNote && (
                  <div className="text-xs text-yellow-400 mb-2 text-center">
                    Note: Power socket and water required
                  </div>
                )}

                <Button
                  className={`w-full text-xs py-1 h-8 mt-auto ${
                    selectedPlan === plan.name
                      ? 'bg-green-400 hover:bg-green-500 text-black'
                      : 'bg-gray-600 hover:bg-gray-500 text-white'
                  }`}
                >
                  {selectedPlan === plan.name ? 'Selected' : 'Select'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex items-center justify-between">
        <Button variant="ghost" size="icon" className="text-white h-10 w-10 flex-shrink-0">
          <ArrowLeft className="h-6 w-6" />
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 flex-1 mx-6 lg:mx-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`cursor-pointer transition-all ${
                selectedPlan === plan.name
                  ? 'bg-gray-700 border-green-400'
                  : plan.highlighted
                  ? 'bg-gray-700 border-green-400'
                  : 'bg-gray-800 border-gray-600 hover:border-gray-500'
              }`}
              onClick={() => onPlanSelect(plan.name)}
            >
              <CardContent className="p-4 lg:p-6 flex flex-col h-full">
                <div className="text-center mb-4">
                  <span className="text-xl lg:text-2xl font-bold text-white">{plan.currency}</span>
                  <span className="text-3xl lg:text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">/service</span>
                </div>

                <h3 className="text-green-400 font-semibold text-base lg:text-lg text-center mb-4">
                  {plan.label}
                </h3>

                <div className="space-y-2 mb-4 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-xs lg:text-sm text-gray-300">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>

                {plan.showNote && (
                  <div className="text-xs text-yellow-400 mb-4 text-center">
                    Note: Power socket and water required
                  </div>
                )}

                <Button
                  className={`w-full mt-auto ${
                    selectedPlan === plan.name
                      ? 'bg-green-400 hover:bg-green-500 text-black'
                      : 'bg-gray-600 hover:bg-gray-500 text-white'
                  }`}
                >
                  {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="ghost" size="icon" className="text-green-400 h-10 w-10 flex-shrink-0">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default OneTimePricingPlans;
