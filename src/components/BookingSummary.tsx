import React, { ReactNode } from "react";
import { getPlanPrice, getAddonPrice, COMPLETE_CARE_PRICING } from "@/lib/pricing";

const Row = ({ label, value }: { label: string; value: ReactNode }) => (
  <div className="flex items-start justify-between gap-3">
    <span className="text-sm text-gray-400 shrink-0">{label}</span>
    <span className="text-sm text-white font-medium text-right">{value}</span>
  </div>
);

interface BookingSummaryProps {
  selectedServiceType: string;
  selectedCar: string;
  selectedPlan: string;
  selectedServices: string[];
  customerName: string;
  customerPhone?: string;
  customerLocation?: { lat: number; lng: number } | null;
  customerLocationText?: string;
  onEditStep: (step: number) => void;
}

const serviceTypeLabels: Record<string, string> = {
  "one-time": "One-time Wash",
  "monthly": "Monthly Wash",
  "daily-car-wash": "Daily Car Wash",
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
  customerPhone,
  customerLocation,
  customerLocationText,
  onEditStep,
}: BookingSummaryProps) => {
  const calculateTotal = () => {
    let total = 0;
    let basePrice = 0;
    let addonsTotal = 0;

    const normalizedCar = selectedCar?.trim();
    const normalizedPlan = selectedPlan?.toLowerCase().trim();

    if (normalizedCar && normalizedPlan) {
      basePrice = getPlanPrice(normalizedCar, normalizedPlan);
      total += basePrice;
    }

    selectedServices.forEach(serviceId => {
      const servicePrice = getAddonPrice(serviceId);
      addonsTotal += servicePrice;
      total += servicePrice;
    });

    return { total, basePrice, addonsTotal };
  };

  const { total, basePrice, addonsTotal } = calculateTotal();

  const detailsStep = selectedServiceType === "premium-addons" ? 3 : 3;

  return (
    <div className="max-w-md mx-auto space-y-3 text-white">

      {/* Header */}
      <div className="text-center mb-2">
        <div className="inline-flex items-center gap-2 bg-green-400/10 border border-green-400/30 rounded-full px-4 py-1.5 mb-1">
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          <span className="text-green-400 text-sm font-medium">Review Your Booking</span>
        </div>
        <p className="text-gray-400 text-xs">Confirm everything looks right, then book via WhatsApp</p>
      </div>

      {/* ── Service card ── */}
      <div className="bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden">
        <div className="px-4 py-2.5 bg-gray-700/50 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">🧹 Service Details</span>
          <button onClick={() => onEditStep(1)} className="text-green-400 text-xs hover:underline">Edit</button>
        </div>
        <div className="px-4 py-3 space-y-2.5">
          <Row label="Service" value={serviceTypeLabels[selectedServiceType] || selectedServiceType} />
          {selectedCar && <Row label="Car Type" value={selectedCar} />}
          {selectedPlan && (
            <Row label="Plan" value={
              <span className="text-right">
                {selectedPlan}
                {basePrice > 0 && <span className="text-green-400 font-semibold ml-2">₹{basePrice}</span>}
              </span>
            } />
          )}
        </div>

        {/* Add-ons */}
        {selectedServices.length > 0 && (
          <div className="border-t border-gray-700 px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400 font-medium">Add-on Services</span>
              <button onClick={() => onEditStep(selectedServiceType === "premium-addons" ? 2 : 4)}
                className="text-green-400 text-xs hover:underline">Edit</button>
            </div>
            <div className="space-y-1.5">
              {selectedServices.map((s) => {
                const p = getAddonPrice(s);
                return (
                  <div key={s} className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">{getServiceDisplayName(s)}</span>
                    <span className="text-green-400 text-sm font-semibold">₹{p}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── Customer card ── */}
      <div className="bg-gray-800/60 border border-gray-700 rounded-2xl overflow-hidden">
        <div className="px-4 py-2.5 bg-gray-700/50 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-wide">👤 Your Details</span>
          <button onClick={() => onEditStep(detailsStep)} className="text-green-400 text-xs hover:underline">Edit</button>
        </div>
        <div className="px-4 py-3 space-y-2.5">
          {customerName  && <Row label="Name"   value={customerName} />}
          {customerPhone && <Row label="Mobile" value={`+91 ${customerPhone}`} />}
          {customerLocation ? (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Location</span>
              <a
                href={`https://maps.google.com/?q=${customerLocation.lat},${customerLocation.lng}`}
                target="_blank" rel="noopener noreferrer"
                className="text-green-400 text-sm font-medium hover:underline flex items-center gap-1"
              >
                📍 View on Maps ↗
              </a>
            </div>
          ) : customerLocationText ? (
            <Row label="Address" value={customerLocationText} />
          ) : (
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Location</span>
              <span className="text-amber-400 text-xs">Not provided</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Total ── */}
      {total > 0 && (
        <div className="bg-green-900/30 border border-green-500/40 rounded-2xl px-5 py-4 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-xs">Total Amount</p>
            <p className="text-white font-bold text-2xl mt-0.5">₹{total}</p>
          </div>
          <div className="text-3xl">💰</div>
        </div>
      )}

      <p className="text-center text-gray-600 text-xs pb-1">
        Clicking "Book via WhatsApp" will open WhatsApp with your details pre-filled
      </p>
    </div>
  );
};

export default BookingSummary;
