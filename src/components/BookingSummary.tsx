
import React from "react";

interface BookingSummaryProps {
  selectedServiceType: string;
  selectedCar: string;
  selectedPlan: string;
  selectedServices: string[];
  customerName: string;
  onEditStep: (step: number) => void;
}

const serviceTypeLabels: Record<string, string> = {
  "one-time": "One-time Wash",
  "monthly": "Monthly Wash",
  "daily-car-wash": "Daily Car Wash",
};

const carPricing: Record<string, Record<string, number>> = {
  "Sedan": {
    "exterior wash + interior wash": 599,
    "exterior wash only": 399,
    "interior wash only": 299,
    "waterless": 349
  },
  "SUV": {
    "exterior wash + interior wash": 699,
    "exterior wash only": 499,
    "interior wash only": 349,
    "waterless": 399
  },
  "Hatchback": {
    "exterior wash + interior wash": 499,
    "exterior wash only": 349,
    "interior wash only": 299,
    "waterless": 349
  },
  "Luxury": {
    "exterior wash + interior wash": 699,
    "exterior wash only": 499,
    "interior wash only": 349,
    "waterless": 399
  }
};

// Car-specific pricing for add-ons
const getAddonPricing = (carType: string) => {
  const baseCarType = carType.toLowerCase();
  
  if (baseCarType === "hatchback" || baseCarType === "sedan") {
    return {
      "rubbing-foam-hatchback": 1599,
      "rubbing-foam-sedan": 1599,
      "3m-wax-foam-hatchback": 649,
      "3m-wax-foam-sedan": 649,
      "rubbing-wax-foam-hatchback": 1699,
      "rubbing-wax-foam-sedan": 1699,
      "full-package-hatchback": 2499,
      "full-package-sedan": 2499,
      "rubbing-dry-foam-hatchback": 2199,
      "rubbing-dry-foam-sedan": 2199,
      "dry-wax-foam-hatchback": 1499,
      "dry-wax-foam-sedan": 1499,
      "dry-cleaning-hatchback": 999,
      "dry-cleaning-sedan": 999,
      "air-freshener-hatchback": 149,
      "air-freshener-sedan": 149
    };
  } else if (baseCarType === "suv") {
    return {
      "rubbing-foam-suv": 1799,
      "3m-wax-foam-suv": 749,
      "rubbing-wax-foam-suv": 1899,
      "full-package-suv": 2699,
      "rubbing-dry-foam-suv": 2399,
      "dry-wax-foam-suv": 1699,
      "dry-cleaning-suv": 1099,
      "air-freshener-suv": 149
    };
  } else if (baseCarType === "luxury") {
    return {
      "rubbing-foam-luxury": 1899,
      "3m-wax-foam-luxury": 949,
      "rubbing-wax-foam-luxury": 1999,
      "full-package-luxury": 2799,
      "rubbing-dry-foam-luxury": 2499,
      "dry-wax-foam-luxury": 1799,
      "dry-cleaning-luxury": 1099,
      "air-freshener-luxury": 149
    };
  }
  
  // Fallback to sedan pricing
  return {
    "rubbing-foam-sedan": 1599,
    "3m-wax-foam-sedan": 649,
    "rubbing-wax-foam-sedan": 1699,
    "full-package-sedan": 2499,
    "rubbing-dry-foam-sedan": 2199,
    "dry-wax-foam-sedan": 1499,
    "dry-cleaning-sedan": 999,
    "air-freshener-sedan": 149
  };
};

const getServiceDisplayName = (serviceId: string) => {
  const serviceNames: Record<string, string> = {
    "rubbing-foam-hatchback": "Rubbing + Exterior Foam Wash",
    "rubbing-foam-sedan": "Rubbing + Exterior Foam Wash",
    "rubbing-foam-suv": "Rubbing + Exterior Foam Wash",
    "rubbing-foam-luxury": "Rubbing + Exterior Foam Wash",
    "3m-wax-foam-hatchback": "3M Wax + Exterior Foam Wash",
    "3m-wax-foam-sedan": "3M Wax + Exterior Foam Wash",
    "3m-wax-foam-suv": "3M Wax + Exterior Foam Wash",
    "3m-wax-foam-luxury": "3M Wax + Exterior Foam Wash",
    "rubbing-wax-foam-hatchback": "Rubbing + 3M Wax + Exterior Foam Wash",
    "rubbing-wax-foam-sedan": "Rubbing + 3M Wax + Exterior Foam Wash",
    "rubbing-wax-foam-suv": "Rubbing + 3M Wax + Exterior Foam Wash",
    "rubbing-wax-foam-luxury": "Rubbing + 3M Wax + Exterior Foam Wash",
    "full-package-hatchback": "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
    "full-package-sedan": "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
    "full-package-suv": "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
    "full-package-luxury": "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
    "rubbing-dry-foam-hatchback": "Rubbing + Dry Cleaning + Exterior Foam Wash",
    "rubbing-dry-foam-sedan": "Rubbing + Dry Cleaning + Exterior Foam Wash",
    "rubbing-dry-foam-suv": "Rubbing + Dry Cleaning + Exterior Foam Wash",
    "rubbing-dry-foam-luxury": "Rubbing + Dry Cleaning + Exterior Foam Wash",
    "dry-wax-foam-hatchback": "Dry Cleaning + 3M Wax + Exterior Foam Wash",
    "dry-wax-foam-sedan": "Dry Cleaning + 3M Wax + Exterior Foam Wash",
    "dry-wax-foam-suv": "Dry Cleaning + 3M Wax + Exterior Foam Wash",
    "dry-wax-foam-luxury": "Dry Cleaning + 3M Wax + Exterior Foam Wash",
    "dry-cleaning-hatchback": "Dry Cleaning",
    "dry-cleaning-sedan": "Dry Cleaning",
    "dry-cleaning-suv": "Dry Cleaning",
    "dry-cleaning-luxury": "Dry Cleaning",
    "air-freshener-hatchback": "Air Freshener",
    "air-freshener-sedan": "Air Freshener",
    "air-freshener-suv": "Air Freshener",
    "air-freshener-luxury": "Air Freshener"
  };
  
  return serviceNames[serviceId] || serviceId;
};

const BookingSummary = ({
  selectedServiceType,
  selectedCar,
  selectedPlan,
  selectedServices,
  customerName,
  onEditStep,
}: BookingSummaryProps) => {
  const calculateTotal = () => {
    let total = 0;
    let basePrice = 0;
    let addonsTotal = 0;

    const normalizedCar = selectedCar?.trim();
    const normalizedPlan = selectedPlan?.toLowerCase().trim();

    if (normalizedCar && normalizedPlan) {
      basePrice = carPricing[normalizedCar]?.[normalizedPlan] || 0;
      total += basePrice;
    }

    const addonPricing = getAddonPricing(selectedCar);
    selectedServices.forEach(serviceId => {
      const servicePrice = addonPricing[serviceId] || 0;
      addonsTotal += servicePrice;
      total += servicePrice;
    });

    return { total, basePrice, addonsTotal };
  };

  const { total, basePrice, addonsTotal } = calculateTotal();

  return (
    <div className="p-6 bg-gray-900 rounded-lg text-white max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-green-400">Review and book now</h2>

      {selectedServiceType && (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Service Type:</span>
            <span>{serviceTypeLabels[selectedServiceType] || selectedServiceType}</span>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(1)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {(selectedServiceType === "one-time" || selectedServiceType === "daily-car-wash") && selectedCar && (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Car Type:</span>
            <span>{selectedCar}</span>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(2)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {selectedPlan && (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Washing Plan:</span>
            <span>{selectedPlan} — ₹{basePrice}</span>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(selectedServiceType === "one-time" ? 3 : 2)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {selectedServices.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <span className="font-semibold">Add-on Services:</span>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(selectedServiceType === "premium-addons" ? 2 : 4)}
            >
              Edit
            </button>
          </div>
          <div className="bg-gray-800 rounded p-3 mb-2">
            {selectedServices.map((service) => {
              const addonPricing = getAddonPricing(selectedCar);
              const servicePrice = addonPricing[service] || 0;
              return (
                <div key={service} className="flex justify-between items-center py-1">
                  <span className="text-sm">{getServiceDisplayName(service)}</span>
                  <span className="text-green-400 font-medium">₹{servicePrice}</span>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between items-center font-semibold">
            <span>Add-ons Subtotal:</span>
            <span className="text-green-400 text-lg">₹{addonsTotal}</span>
          </div>
        </div>
      )}

      {customerName && (
        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="font-semibold">Customer Name:</span>
            <span>{customerName}</span>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(selectedServiceType === "premium-addons" ? 3 : selectedServiceType === "one-time" ? 5 : 4)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {total > 0 && (
        <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-xl">Total Amount:</span>
            <span className="font-bold text-xl text-green-400">₹{total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
