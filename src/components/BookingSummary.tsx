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

// Updated prices
const additionalServicesPricing: Record<string, number> = {
  "rubbing": 1299,
  "3m-wax": 299,
  "dry-cleaning": 999,
  "rubbing-wax": 1499,
  "full-package": 2299,
  "rubbing-dry": 1599,
  "wax-dry": 1299,
  "air-freshener": 149
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

    const normalizedCar = selectedCar?.trim();
    const normalizedPlan = selectedPlan?.toLowerCase().trim();

    if (normalizedCar && normalizedPlan) {
      total += carPricing[normalizedCar]?.[normalizedPlan] || 0;
    }

    selectedServices.forEach(serviceId => {
      total += additionalServicesPricing[serviceId] || 0;
    });

    return total;
  };

  const total = calculateTotal();
  const basePrice = carPricing[selectedCar?.trim()]?.[selectedPlan?.toLowerCase().trim()] || 0;

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

      {selectedServiceType === "one-time" && selectedServices.length > 0 && (
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <span className="font-semibold">Additional Services:</span>
            <div className="flex-1 ml-4">
              <ul className="list-disc pl-4">
                {selectedServices.map((service) => (
                  <li key={service}>
                    {service} — ₹{additionalServicesPricing[service] || 0}
                  </li>
                ))}
              </ul>
            </div>
            <button 
              className="text-green-400 underline ml-2 text-sm"
              onClick={() => onEditStep(4)}
            >
              Edit
            </button>
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
              onClick={() => onEditStep(selectedServiceType === "one-time" ? 5 : 3)}
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {total > 0 && (
        <div className="border-t border-gray-700 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Total Amount:</span>
            <span className="font-bold text-lg text-green-400">₹{total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSummary;
