import { Check, Car, Package, Sparkles, User, ClipboardCheck, PlusCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Step {
  number: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface BookingProgressProps {
  currentStep: number;
  totalSteps: number;
  selectedServiceType: string;
  completedSteps: number[];
}

const BookingProgress = ({ currentStep, totalSteps, selectedServiceType, completedSteps }: BookingProgressProps) => {
  const isPremiumAddons = selectedServiceType === "premium-addons";

  // Simplified 4-step flow for all service types
  const getSteps = (): Step[] => {
    if (isPremiumAddons) {
      return [
        { number: 1, title: "Car Type", icon: <Car className="w-4 h-4" />, description: "Select your vehicle" },
        { number: 2, title: "Add-ons", icon: <Sparkles className="w-4 h-4" />, description: "Choose services" },
        { number: 3, title: "Details", icon: <User className="w-4 h-4" />, description: "Your information" },
        { number: 4, title: "Confirm", icon: <ClipboardCheck className="w-4 h-4" />, description: "Review & book" },
      ];
    } else {
      // One-time / waterless flow — 5 steps with Extras step
      return [
        { number: 1, title: "Car Type", icon: <Car className="w-4 h-4" />, description: "Select your vehicle" },
        { number: 2, title: "Package",  icon: <Package className="w-4 h-4" />, description: "Choose plan" },
        { number: 3, title: "Extras",   icon: <PlusCircle className="w-4 h-4" />, description: "Add-on services" },
        { number: 4, title: "Details",  icon: <User className="w-4 h-4" />, description: "Your information" },
        { number: 5, title: "Confirm",  icon: <ClipboardCheck className="w-4 h-4" />, description: "Review & book" },
      ];
    }
  };

  const steps = getSteps();

  const getStepStatus = (stepNumber: number) => {
    if (completedSteps.includes(stepNumber)) return "completed";
    if (stepNumber === currentStep) return "current";
    return "upcoming";
  };

  return (
    <div className="mb-8">
      {/* Desktop Progress */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          {steps.map((step, index) => {
            const status = getStepStatus(step.number);
            return (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: status === "current" ? 1.1 : 1 }}
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm
                      transition-all duration-300 border-2
                      ${status === "completed" 
                        ? "bg-green-400 border-green-400 text-black" 
                        : status === "current"
                        ? "bg-green-400/20 border-green-400 text-green-400"
                        : "bg-gray-800 border-gray-600 text-gray-400"
                      }
                    `}
                  >
                    {status === "completed" ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.icon
                    )}
                  </motion.div>
                  <div className="mt-2 text-center">
                    <p className={`text-sm font-semibold ${
                      status === "current" ? "text-green-400" : 
                      status === "completed" ? "text-white" : "text-gray-500"
                    }`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 hidden lg:block">{step.description}</p>
                  </div>
                </div>
                
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className={`h-0.5 w-12 lg:w-20 mx-2 transition-colors duration-300 ${
                    completedSteps.includes(step.number) ? "bg-green-400" : "bg-gray-700"
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Progress - Simplified */}
      <div className="md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-400 flex items-center justify-center text-black font-bold">
              {currentStep}
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{steps[currentStep - 1]?.title}</p>
              <p className="text-gray-400 text-xs">{steps[currentStep - 1]?.description}</p>
            </div>
          </div>
          <span className="text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1 rounded-full">
            {currentStep}/{totalSteps}
          </span>
        {/* </div> */}
        
        {/* Progress dots */}
        {/* <div className="flex items-center gap-2 justify-center">
          {steps.map((step) => {
            const status = getStepStatus(step.number);
            return (
              <motion.div
                key={step.number}
                initial={{ scale: 0.8 }}
                animate={{ scale: status === "current" ? 1.2 : 1 }}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${status === "current" ? "w-8 bg-green-400" : 
                    status === "completed" ? "w-2 bg-green-400" : "w-2 bg-gray-600"}
                `}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default BookingProgress;