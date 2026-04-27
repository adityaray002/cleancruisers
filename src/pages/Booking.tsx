import { ArrowLeft, Phone, MessageCircle, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import CarSelection from "@/components/CarSelection";
import OneTimePricingPlans from "@/components/OneTimePricingPlans";
import ServiceSelection from "@/components/ServiceSelection";
import CustomerDetails from "@/components/CustomerDetails";
import CompleteCarePlan from "@/components/CompleteCarePlan";
import BookingProgress from "@/components/BookingProgress";
import ServiceTypeSelection from "@/components/ServiceTypeSelection";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingSummary from "@/components/BookingSummary";
import { getPlanPrice, getAddonPrice, COMPLETE_CARE_PRICING } from "@/lib/pricing";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0); // Start at 0 for service type selection
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const carTypes = ["Hatchback", "Sedan", "SUV", "Luxury"];
  const [selectedCar, setSelectedCar] = useState(carTypes[0]);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customerDetails, setCustomerDetails] = useState<{
    name: string;
    phone: string;
    location?: { lat: number; lng: number } | null;
    locationText?: string;
  }>({
    name: "",
    phone: "",
    location: null,
    locationText: "",
  });

  const navigate = useNavigate();

  // Check if service type was pre-selected from homepage
//  useEffect(() => {
//   const params = new URLSearchParams(window.location.search);
//   const fromHome = params.get("from");

//   if (fromHome) {
//     sessionStorage.removeItem("selectedServiceType");
//     setCurrentStep(1);
//     setSelectedServiceType("");
//     setCompletedSteps([]);
//   }
// }, []);
// Auto select service from Services page
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const serviceFromUrl = params.get("service");

  if (serviceFromUrl) {
    setSelectedServiceType(serviceFromUrl);
    sessionStorage.setItem("selectedServiceType", serviceFromUrl);

    // skip service selection step → go to car selection
    setCurrentStep(1);
  }
}, []);


  useEffect(() => {
    if (!selectedCar) setSelectedCar(carTypes[0]);
  }, [selectedCar]);

  // Determine flow based on service type
  const isPremiumAddons = selectedServiceType === "premium-addons";
  const isOneTime = selectedServiceType === "one-time" || selectedServiceType === "waterless";
    const isCompleteCare = selectedServiceType === "complete-care";
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
    }else if (isCompleteCare) {
      return ["Service Type", "Car Type", "Package Details", "Your Details", "Confirm Booking"];
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
    
    const detailsValid = !!customerDetails.name.trim() && /^[6-9]\d{9}$/.test(customerDetails.phone);
    if (isPremiumAddons) {
      switch (currentStep) {
        case 1: return selectedCar !== "";
        case 2: return selectedServices.length > 0;
        case 3: return detailsValid;
        case 4: return true;
        default: return false;
      }
    } else if (isCompleteCare) {
      switch (currentStep) {
        case 1: return selectedCar !== "";
        case 2: return true;
        case 3: return detailsValid;
        case 4: return true;
        default: return false;
      }
    } else {
      switch (currentStep) {
        case 1: return selectedCar !== "";
        case 2: return selectedPlan !== "";
        case 3: return detailsValid;
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
           onAutoAdvance={nextStep}
        />
      );
    }

    if (isPremiumAddons) {
     
      switch (currentStep) {
        case 1:
           return <CarSelection selectedCar={selectedCar} onCarSelect={setSelectedCar} onAutoAdvance={nextStep} />;
        case 2:
         return <ServiceSelection selectedServices={selectedServices} onServicesChange={setSelectedServices} isPremiumAddons={true} selectedCar={selectedCar} onAutoAdvance={nextStep} />;
        case 3:
          return <CustomerDetails customerDetails={customerDetails} onDetailsChange={setCustomerDetails} onAutoAdvance={nextStep} />;
        case 4:
          return <BookingSummary selectedServiceType={selectedServiceType} selectedCar={selectedCar} selectedPlan={selectedPlan} selectedServices={selectedServices} customerName={customerDetails.name} customerPhone={customerDetails.phone} customerLocation={customerDetails.location} customerLocationText={customerDetails.locationText} onEditStep={(step) => setCurrentStep(step)} />;
        default: return null;
      }
    } else if (isCompleteCare) {
      switch (currentStep) {
        case 1:
          return <CarSelection selectedCar={selectedCar} onCarSelect={setSelectedCar} onAutoAdvance={nextStep} />;
        case 2:
          return <CompleteCarePlan selectedCar={selectedCar} onAutoAdvance={nextStep} />;
        case 3:
          return <CustomerDetails customerDetails={customerDetails} onDetailsChange={setCustomerDetails} onAutoAdvance={nextStep} />;
        case 4:
          return <BookingSummary selectedServiceType={selectedServiceType} selectedCar={selectedCar} selectedPlan="Complete Care Package" selectedServices={[]} customerName={customerDetails.name} customerPhone={customerDetails.phone} customerLocation={customerDetails.location} customerLocationText={customerDetails.locationText} onEditStep={(step) => setCurrentStep(step)} />;
        default: return null;
      }
    } else {
      // One-time / Waterless flow: Car -> Package -> Details -> Confirm
      switch (currentStep) {
        case 1:
         return <CarSelection selectedCar={selectedCar} onCarSelect={setSelectedCar} onAutoAdvance={nextStep} />;
        case 2:
         return <OneTimePricingPlans selectedPlan={selectedPlan} onPlanSelect={setSelectedPlan} selectedCar={selectedCar} onAutoAdvance={nextStep} />;
        case 3:
         return <CustomerDetails customerDetails={customerDetails} onDetailsChange={setCustomerDetails} onAutoAdvance={nextStep} />;
        case 4:
          return <BookingSummary selectedServiceType={selectedServiceType} selectedCar={selectedCar} selectedPlan={selectedPlan} selectedServices={selectedServices} customerName={customerDetails.name} customerPhone={customerDetails.phone} customerLocation={customerDetails.location} customerLocationText={customerDetails.locationText} onEditStep={(step) => setCurrentStep(step)} />;
        default: return null;
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
    }else if (isCompleteCare) {
      switch (currentStep) {
        case 1:
          return { title: "Select Your Car Type", subtitle: "Choose your vehicle category for accurate pricing", tip: "Tip: Pricing varies based on car size" };
        case 2:
          return { title: "Complete Care Package", subtitle: "3 times premium washing with full detailing", tip: "Tip: This package includes everything your car needs" };
        case 3:
          return { title: "Your Details", subtitle: "We need your name to complete the booking", tip: "Tip: Enter the name for booking confirmation" };
        case 4:
          return { title: "Review Your Booking", subtitle: "Please confirm your selections before booking", tip: "Tip: You can edit any selection below" };
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

  const calculateBookingPrice = (): number => {
    if (isCompleteCare) return COMPLETE_CARE_PRICING[selectedCar] || 1399;
    const base = getPlanPrice(selectedCar, selectedPlan?.toLowerCase().trim() || "");
    const addons = selectedServices.reduce((sum, id) => sum + getAddonPrice(id), 0);
    return base + addons;
  };

  const handleBookNow = () => {
    const businessPhone = "918920230357";
    const price = calculateBookingPrice();

    let message = `🚗 *New Car Wash Booking Request*%0A`;
    message += `━━━━━━━━━━━━━━━━━━%0A`;
    message += `👤 *Name:* ${customerDetails.name}%0A`;
    message += `📞 *Phone:* +91${customerDetails.phone}%0A`;
    message += `━━━━━━━━━━━━━━━━━━%0A`;
    message += `🧹 *Service:* ${getServiceTypeName(selectedServiceType)}%0A`;
    message += `🚙 *Car Type:* ${selectedCar || "-"}%0A`;
    if (isCompleteCare) {
      message += `📦 *Package:* Complete Care (3× Premium Wash)%0A`;
    } else if (selectedPlan) {
      message += `📦 *Plan:* ${selectedPlan}%0A`;
    }
    if (selectedServices.length > 0) {
      message += `➕ *Add-ons:* ${selectedServices.join(", ")}%0A`;
    }
    if (price > 0) {
      message += `━━━━━━━━━━━━━━━━━━%0A`;
      message += `💰 *Total: ₹${price}*%0A`;
    }
    if (customerDetails.location?.lat && customerDetails.location?.lng) {
      message += `━━━━━━━━━━━━━━━━━━%0A`;
      message += `📍 *Location:* https://maps.google.com/?q=${customerDetails.location.lat},${customerDetails.location.lng}%0A`;
    } else if (customerDetails.locationText?.trim()) {
      message += `━━━━━━━━━━━━━━━━━━%0A`;
      message += `📍 *Address:* ${customerDetails.locationText.trim()}%0A`;
    }

    window.open(`https://wa.me/${businessPhone}?text=${message}`, "_blank");
  };

  const getServiceTypeName = (type: string) => {
    switch (type) {
      case 'one-time': return 'One-Time Premium Wash';
      case 'waterless': return 'Waterless Eco Clean';
      case 'premium-addons': return 'Premium Add-ons';
     case 'complete-care': return 'Complete Care Package';
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
            customerName={customerDetails.name} customerPhone={customerDetails.phone} customerLocation={customerDetails.location} customerLocationText={customerDetails.locationText}
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

        {/* Navigation - Only show on final step or for going back */}
        <div className="flex justify-between items-center gap-4 pt-4 border-t border-gray-800">
          <Button
            variant="ghost"
            onClick={prevStep}
            className="text-gray-400 hover:text-white hover:bg-gray-800"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {currentStep === 0 ? "Home" : "Back"}
          </Button>

          {/* <div className="flex gap-2">
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
          </div> */}
        </div>

          {isLastStep && (
            <div className="flex gap-2">
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
            </div>
          )}
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