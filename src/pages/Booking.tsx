import { ArrowRight, ArrowLeft, Phone, MessageCircle, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import CarSelection from "@/components/CarSelection";
import OneTimePricingPlans from "@/components/OneTimePricingPlans";
import ServiceSelection from "@/components/ServiceSelection";
import CustomerDetails from "@/components/CustomerDetails";

import BookingProgress from "@/components/BookingProgress";
import ServiceTypeSelection from "@/components/ServiceTypeSelection";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingSummary from "@/components/BookingSummary";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0); // Start at 0 for service type selection
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const carTypes = ["Hatchback", "Sedan", "SUV", "Luxury"];
  const [selectedCar, setSelectedCar] = useState(carTypes[0]);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
  });

  const navigate = useNavigate();

  // Check if service type was pre-selected from homepage
 useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const fromHome = params.get("from");

  if (fromHome) {
    sessionStorage.removeItem("selectedServiceType");
    setCurrentStep(0);
    setSelectedServiceType("");
    setCompletedSteps([]);
  }
}, []);


  useEffect(() => {
    if (!selectedCar) setSelectedCar(carTypes[0]);
  }, [selectedCar]);

  // Determine flow based on service type
  const isPremiumAddons = selectedServiceType === "premium-addons";
  const isOneTime = selectedServiceType === "one-time" || selectedServiceType === "waterless";
  
  // Total steps (excluding step 0 which is service type):
  // Premium addons: Car -> Add-ons -> Details -> Confirm (4 steps)
  // One-time: Car -> Package -> Details -> Confirm (4 steps)
  // No service type yet: 1 step (just show service type selection)
  const getTotalSteps = () => {
    if (!selectedServiceType) return 1;
    return 4;
  };

  const totalSteps = getTotalSteps();

  const getStepLabels = () => {
    if (isPremiumAddons) {
      return ["Service Type", "Car Type", "Select Add-ons", "Your Details", "Confirm Booking"];
    } else if (isOneTime) {
      return ["Service Type", "Car Type", "Choose Package", "Your Details", "Confirm Booking"];
    }
    return ["Service Type", "Car Type", "Choose Package", "Your Details", "Confirm Booking"];
  };

  const nextStep = () => {
    // Mark current step as completed
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep === 0) {
      navigate("/");
    } else if (currentStep === 1 && completedSteps.includes(0)) {
      // Going back to service type selection
      setCurrentStep(0);
      // Reset selections when changing service type
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleServiceTypeChange = (type: string) => {
    setSelectedServiceType(type);
    sessionStorage.setItem('selectedServiceType', type);
    // Reset dependent selections when service type changes
    setSelectedPlan("");
    setSelectedServices([]);
  };

  const resetServiceType = () => {
    setSelectedServiceType("");
    setSelectedPlan("");
    setSelectedServices([]);
    sessionStorage.removeItem('selectedServiceType');
    setCurrentStep(0);
    setCompletedSteps([]);
  };

  const canProceed = () => {
    if (currentStep === 0) {
      return selectedServiceType !== "";
    }
    
    if (isPremiumAddons) {
      switch (currentStep) {
        case 1: return selectedCar !== "";
        case 2: return selectedServices.length > 0;
        case 3: return !!customerDetails.name;
        case 4: return true;
        default: return false;
      }
    } else {
      switch (currentStep) {
        case 1: return selectedCar !== "";
        case 2: return selectedPlan !== "";
        case 3: return !!customerDetails.name;
        case 4: return true;
        default: return false;
      }
    }
  };

  const renderStep = () => {
    // Step 0: Service Type Selection
    if (currentStep === 0) {
      return (
        <ServiceTypeSelection
          selectedServiceType={selectedServiceType}
          onServiceTypeSelect={handleServiceTypeChange}
        />
      );
    }

    if (isPremiumAddons) {
      // Premium Add-ons flow: Car -> Add-ons -> Details -> Confirm
      switch (currentStep) {
        case 1:
          return (
            <CarSelection
              selectedCar={selectedCar}
              onCarSelect={setSelectedCar}
            />
          );
        case 2:
          return (
            <ServiceSelection
              selectedServices={selectedServices}
              onServicesChange={setSelectedServices}
              isPremiumAddons={true}
              selectedCar={selectedCar}
            />
          );
        case 3:
          return (
            <CustomerDetails
              customerDetails={customerDetails}
              onDetailsChange={setCustomerDetails}
            />
          );
        case 4:
          return (
            <BookingSummary
              selectedServiceType={selectedServiceType}
              selectedCar={selectedCar}
              selectedPlan={selectedPlan}
              selectedServices={selectedServices}
              customerName={customerDetails.name}
              onEditStep={(step) => setCurrentStep(step)}
            />
          );
        default:
          return null;
      }
    } else {
      // One-time / Waterless flow: Car -> Package -> Details -> Confirm
      switch (currentStep) {
        case 1:
          return (
            <CarSelection
              selectedCar={selectedCar}
              onCarSelect={setSelectedCar}
            />
          );
        case 2:
          return (
            <OneTimePricingPlans
              selectedPlan={selectedPlan}
              onPlanSelect={setSelectedPlan}
              selectedCar={selectedCar}
            />
          );
        case 3:
          return (
            <CustomerDetails
              customerDetails={customerDetails}
              onDetailsChange={setCustomerDetails}
            />
          );
        case 4:
          return (
            <BookingSummary
              selectedServiceType={selectedServiceType}
              selectedCar={selectedCar}
              selectedPlan={selectedPlan}
              selectedServices={selectedServices}
              customerName={customerDetails.name}
              onEditStep={(step) => setCurrentStep(step)}
            />
          );
        default:
          return null;
      }
    }
  };

  const getStepInfo = () => {
    if (currentStep === 0) {
      return {
        title: "What Would You Like Today?",
        subtitle: "Choose the type of service you need",
        tip: "Tip: Select one service type to see relevant options"
      };
    }

    if (isPremiumAddons) {
      switch (currentStep) {
        case 1:
          return {
            title: "Select Your Car Type",
            subtitle: "Choose your vehicle category for accurate pricing",
            tip: "Tip: Pricing varies based on car size"
          };
        case 2:
          return {
            title: "Select Your Premium Add-ons",
            subtitle: "Choose the services you want",
            tip: "Tip: Select at least one add-on service"
          };
        case 3:
          return {
            title: "Your Details",
            subtitle: "We need your name to complete the booking",
            tip: "Tip: Enter the name for booking confirmation"
          };
        case 4:
          return {
            title: "Review Your Booking",
            subtitle: "Please confirm your selections before booking",
            tip: "Tip: You can edit any selection below"
          };
        default:
          return { title: "", subtitle: "", tip: "" };
      }
    } else {
      switch (currentStep) {
        case 1:
          return {
            title: "Select Your Car Type",
            subtitle: "Choose your vehicle category for accurate pricing",
            tip: "Tip: Pricing varies based on car size"
          };
        case 2:
          return {
            title: "Choose Your Wash Package",
            subtitle: "Select the best package for your needs",
            tip: "Tip: Our most popular choice is highlighted"
          };
        case 3:
          return {
            title: "Your Details",
            subtitle: "We need your name to complete the booking",
            tip: "Tip: Enter the name for booking confirmation"
          };
        case 4:
          return {
            title: "Review Your Booking",
            subtitle: "Please confirm your selections before booking",
            tip: "Tip: You can edit any selection below"
          };
        default:
          return { title: "", subtitle: "", tip: "" };
      }
    }
  };

  const stepInfo = getStepInfo();
  const isLastStep = currentStep === 4;

  const handleBookNow = () => {
    const phone = "918920230357";
    let message = `Hello! I would like to book a car wash service.%0A`;
    message += `Name: ${customerDetails.name}%0A`;
    message += `Service Type: ${selectedServiceType || "-"}%0A`;
    message += `Car Type: ${selectedCar || "-"}%0A`;
    if (selectedPlan) {
      message += `Plan: ${selectedPlan}%0A`;
    }
    if (selectedServices.length > 0) {
      message += `Add-ons: ${selectedServices.join(", ")}%0A`;
    }
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  const getServiceTypeName = (type: string) => {
    switch (type) {
      case 'one-time': return 'One-Time Premium Wash';
      case 'waterless': return 'Waterless Eco Clean';
      case 'premium-addons': return 'Premium Add-ons';
      case 'monthly': return 'Monthly Subscription';
      default: return type;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header onCartOpen={() => {}} />

      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Service Type Badge - Only show after selection */}
        {selectedServiceType && currentStep > 0 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400/10 to-emerald-400/10 border border-green-400/30 rounded-full px-5 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 font-medium text-sm">
                {getServiceTypeName(selectedServiceType)}
              </span>
              <button 
                onClick={resetServiceType}
                className="ml-2 text-gray-400 hover:text-white transition-colors"
                title="Change service type"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Progress Indicator - Only show after service type is selected */}
        {selectedServiceType && currentStep > 0 && (
          <BookingProgress
            currentStep={currentStep}
            totalSteps={totalSteps}
            selectedServiceType={selectedServiceType}
            completedSteps={completedSteps}
          />
        )}

        {/* Mini Summary - Shows current selections (only after service type) */}
        {/* {selectedServiceType && currentStep > 1 && (
          <BookingSummary
            selectedCar={selectedCar}
            selectedPlan={selectedPlan}
            selectedServices={selectedServices}
            customerName={customerDetails.name}
            selectedServiceType={selectedServiceType}
          />
        )} */}

        {/* Step Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            {/* Step Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stepInfo.title}
              </h2>
              <p className="text-gray-400 mb-2">{stepInfo.subtitle}</p>
              <p className="text-xs text-green-400/70 bg-green-400/5 inline-block px-3 py-1 rounded-full">
                💡 {stepInfo.tip}
              </p>
            </div>

            {renderStep()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center gap-4 pt-4 border-t border-gray-800">
          <Button
            variant="ghost"
            onClick={prevStep}
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {currentStep === 0 ? "Home" : "Back"}
          </Button>

          <div className="flex gap-2">
            {isLastStep ? (
              <>
                <Button
                  onClick={handleBookNow}
                  className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6"
                  disabled={!canProceed()}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Book via WhatsApp
                </Button>
                {/* <Button
                  onClick={() => window.open("tel:+918920230357", "_blank")}
                  variant="outline"
                  className="border-green-400 text-green-400 hover:bg-green-400/10"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </Button> */}
              </>
            ) : (
              <Button
                onClick={nextStep}
                disabled={!canProceed()}
                className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Help Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 pt-6 border-t border-gray-800"
        >
          <p className="text-gray-500 text-sm">
            Need help? <a href="tel:+918920230357" className="text-green-400 hover:underline">Call us</a> or{" "}
            <a href="https://wa.me/918920230357" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
              WhatsApp us
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Booking;