import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import CarSelection from "@/components/CarSelection";
import OneTimePricingPlans from "@/components/OneTimePricingPlans";
import ServiceSelection from "@/components/ServiceSelection";
import TimeSelection from "@/components/TimeSelection";
import CustomerDetails from "@/components/CustomerDetails";
import BookingSummary from "@/components/BookingSummary";

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const carTypes = ["Hatchback", "Sedan", "SUV", "Luxury"];
  const [selectedCar, setSelectedCar] = useState(carTypes[0]);
  const [selectedServiceType, setSelectedServiceType] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const serviceType = sessionStorage.getItem('selectedServiceType');
    if (serviceType) {
      setSelectedServiceType(serviceType);
    }
  }, []);

  useEffect(() => {
    if (!selectedCar) setSelectedCar(carTypes[0]);
  }, [selectedCar]);

  const isPremiumAddons = selectedServiceType === "premium-addons";
  const shouldSkipAddons = selectedServiceType === "one-time" || selectedServiceType === "waterless";
  const totalSteps = isPremiumAddons || shouldSkipAddons ? 4 : 5;

  const getActualStep = (step: number) => {
    if (isPremiumAddons) {
      // Steps: 1-Car, 2-Services, 3-Details, 4-Review
      if (step === 1) return 1; // CarSelection
      if (step === 2) return 3; // ServiceSelection
      if (step === 3) return 4; // CustomerDetails
      if (step === 4) return 5; // BookingSummary
    } else if (shouldSkipAddons) {
      // Steps: 1-Car, 2-Package, 3-Details, 4-Review
      if (step === 1) return 1; // CarSelection
      if (step === 2) return 2; // OneTimePricingPlans
      if (step === 3) return 4; // CustomerDetails
      if (step === 4) return 5; // BookingSummary
    } else {
      // Default: 1-Car, 2-Package, 3-Services, 4-Details, 5-Review
      return step;
    }
    return step;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep === 1) {
      navigate("/");
    } else if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    const actualStep = getActualStep(currentStep);

    // ---- CHANGED: Premium Add-ons requires at least ONE add-on selected. ---
    if (isPremiumAddons && actualStep === 3) {
      return selectedServices.length > 0;
    }
    switch (actualStep) {
      case 1:
        return selectedCar !== "";
      case 2:
        // Step 2 is only used in non-premium-addons flow
        return selectedPlan !== "";
      case 3:
        // In non-premium-addons flow, services are optional
        return true;
      case 4:
        return !!customerDetails.name;
      case 5: // On summary page
        return true;
      default:
        return false;
    }
  };

  const renderStep = () => {
    const actualStep = getActualStep(currentStep);
    switch (actualStep) {
      case 1:
        return (
          <CarSelection
            selectedCar={selectedCar}
            onCarSelect={setSelectedCar}
          />
        );
      case 2:
        // Only render for NON-premium-addons flows (step 2 is skipped in premium-addons)
        return (
          <OneTimePricingPlans
            selectedPlan={selectedPlan}
            onPlanSelect={setSelectedPlan}
            selectedCar={selectedCar}
          />
        );
      case 3:
        // ===== Pass selectedCar to ServiceSelection =====
        return (
          <ServiceSelection
            selectedServices={selectedServices}
            onServicesChange={setSelectedServices}
            isPremiumAddons={isPremiumAddons}
            selectedCar={selectedCar}
          />
        );
      case 4:
        return (
          <CustomerDetails
            customerDetails={customerDetails}
            onDetailsChange={setCustomerDetails}
          />
        );
      case 5:
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
  };

  const getStepTitle = () => {
    const actualStep = getActualStep(currentStep);
    switch (actualStep) {
      case 1:
        return "Select Your Car Type";
      case 2:
        const serviceName =
          selectedServiceType === "waterless"
            ? "Waterless"
            : selectedServiceType === "one-time"
            ? "Doorstep Premium Car wash"
            : "Premium Add-on";
        return `Choose Your ${serviceName} Package`;
      case 3:
        return "Additional Services (Optional)";
      case 4:
        return "Your Details";
      case 5:
        return "Review and Book Now";
      default:
        return "";
    }
  };

  const handleBookNow = () => {
    console.log("Book Now button clicked");

    const phone = "918920230357";
    let message = `Hello! I would like to book a car wash service.%0A`;
    message += `Name: ${customerDetails.name}%0A`;
    message += `Service Type: ${selectedServiceType || "-"}%0A`;
    message += `Car Type: ${selectedCar || "-"}%0A`;
    message += `Plan: ${selectedPlan || "-"}%0A`;
    if (selectedServices.length > 0) {
      message += `Add-ons: ${selectedServices.join(", ")}%0A`;
    }
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    console.log("Opening WhatsApp URL:", whatsappUrl);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header onCartOpen={() => {}} />

      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Service Type Indicator */}
        {selectedServiceType && (
          <div className="text-center mb-6">
            <div className="inline-block bg-green-400/10 border border-green-400 rounded-lg px-4 py-2">
              <span className="text-green-400 font-semibold">
                {selectedServiceType === 'one-time' && '✨ Doorstep Premium Car wash'}
                {selectedServiceType === 'waterless' && '🌿 Waterless Eco Cleaning'}
                {selectedServiceType === 'premium-addons' && '💎 Premium Add-ons'}
                {selectedServiceType === 'monthly' && '🏠 Monthly Doorstep Service'}
              </span>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl md:text-3xl font-bold">Book Your Service</h1>
            <span className="text-gray-400">Step {currentStep} of {totalSteps}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-green-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-center mb-8">
            {getStepTitle()}
          </h2>
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Button
            variant="black"
            onClick={prevStep}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          {currentStep === totalSteps ? (
            <Button
              onClick={handleBookNow}
              className="bg-green-400 hover:bg-green-500 text-black"
              disabled={!canProceed()}
            >
              Book Now
            </Button>
          ) : (
            <Button
              onClick={nextStep}
              disabled={!canProceed() || currentStep === totalSteps}
              className="bg-green-400 hover:bg-green-500 text-black"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Booking;
