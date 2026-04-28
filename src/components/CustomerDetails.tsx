import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Loader2, X, Phone, User, CheckCircle2 } from "lucide-react";

interface Location { lat: number; lng: number; }

export interface CustomerDetailsData {
  name: string;
  phone: string;
  location?: Location | null;
  locationText?: string;
}

interface CustomerDetailsProps {
  customerDetails: CustomerDetailsData;
  onDetailsChange: (details: CustomerDetailsData) => void;
  onAutoAdvance?: () => void;
}

const CustomerDetails = ({ customerDetails, onDetailsChange, onAutoAdvance }: CustomerDetailsProps) => {
  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError]     = useState("");

  const update = (field: keyof CustomerDetailsData, value: unknown) =>
    onDetailsChange({ ...customerDetails, [field]: value });

  const captureLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Browser doesn't support GPS — type your address below");
      return;
    }
    setLocationLoading(true);
    setLocationError("");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        update("location", { lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocationLoading(false);
      },
      (err) => {
        setLocationError(
          err.code === err.PERMISSION_DENIED
            ? "Location access denied — please type your address below"
            : "Couldn't get GPS — please type your address below"
        );
        setLocationLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const loc = customerDetails.location;
  const canContinue = !!customerDetails.name.trim() && /^[6-9]\d{9}$/.test(customerDetails.phone);

  return (
    <div className="max-w-md mx-auto space-y-5">

      {/* ── Name ── */}
      <div>
        <Label className="text-white mb-1.5 flex items-center gap-1.5 text-sm font-medium">
          <User className="w-3.5 h-3.5 text-green-400" /> Full Name *
        </Label>
        <Input
          placeholder="Enter your full name"
          value={customerDetails.name}
          onChange={(e) => update("name", e.target.value)}
          autoComplete="name"
          className="bg-gray-800 border-gray-600 text-white placeholder-gray-500 focus:border-green-400 h-11 rounded-xl"
        />
      </div>

      {/* ── Phone ── */}
      <div>
        <Label className="text-white mb-1.5 flex items-center gap-1.5 text-sm font-medium">
          <Phone className="w-3.5 h-3.5 text-green-400" /> Mobile Number *
        </Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm select-none">+91</span>
          <Input
            type="tel"
            placeholder="9876543210"
            value={customerDetails.phone}
            onChange={(e) => update("phone", e.target.value.replace(/\D/g, "").slice(0, 10))}
            autoComplete="tel"
            className={`bg-gray-800 text-white placeholder-gray-500 h-11 rounded-xl pl-11 pr-10 transition-colors ${
              /^[6-9]\d{9}$/.test(customerDetails.phone)
                ? "border-green-400 focus:border-green-400"
                : "border-gray-600 focus:border-green-400"
            }`}
            maxLength={10}
            inputMode="numeric"
          />
          {/^[6-9]\d{9}$/.test(customerDetails.phone) && (
            <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-green-400" />
          )}
        </div>
        {customerDetails.phone && !/^[6-9]\d{9}$/.test(customerDetails.phone) && (
          <p className="text-amber-400 text-xs mt-1">Enter a valid 10-digit Indian mobile number</p>
        )}
      </div>

      {/* ── Location ── */}
      <div className="space-y-3">
        <Label className="text-white flex items-center gap-1.5 text-sm font-medium">
          <MapPin className="w-3.5 h-3.5 text-green-400" />
          Where should we come?
          <span className="text-gray-500 font-normal text-xs ml-1">(Helps us find you faster)</span>
        </Label>

        {loc ? (
          /* GPS captured — success state */
          <div className="flex items-center gap-3 bg-green-950/60 border border-green-500/50 rounded-xl px-4 py-3">
            <div className="w-9 h-9 bg-green-400/15 rounded-full flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-green-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-green-400 text-sm font-semibold">Location pinned ✅</p>
              <p className="text-gray-400 text-xs mt-0.5 truncate">
                {loc.lat.toFixed(5)}, {loc.lng.toFixed(5)}
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://maps.google.com/?q=${loc.lat},${loc.lng}`}
                target="_blank" rel="noopener noreferrer"
                className="text-xs text-green-400 hover:text-green-300 underline font-medium"
              >
                View ↗
              </a>
              <button type="button" onClick={() => { update("location", null); setLocationError(""); }}
                className="text-gray-600 hover:text-red-400 transition-colors" title="Remove pin">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* GPS button */}
            <button
              type="button"
              onClick={captureLocation}
              disabled={locationLoading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-400 hover:bg-green-400/5 transition-all text-sm font-medium disabled:opacity-60"
            >
              {locationLoading
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Getting your location…</>
                : <><MapPin className="w-4 h-4" /> Use My Current Location</>
              }
            </button>

            {locationError && (
              <p className="text-amber-400 text-xs flex items-start gap-1">
                <span className="mt-0.5">⚠️</span> {locationError}
              </p>
            )}

            {/* OR divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-700" />
              <span className="text-gray-500 text-xs tracking-widest uppercase">or type it</span>
              <div className="flex-1 h-px bg-gray-700" />
            </div>

            {/* Manual address */}
            <Input
              placeholder="e.g. Near Metro Gate, Sector 15, Dwarka, New Delhi"
              value={customerDetails.locationText || ""}
              onChange={(e) => update("locationText", e.target.value)}
              autoComplete="street-address"
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-500 focus:border-green-400 h-11 rounded-xl"
            />
          </>
        )}

        <p className="text-gray-600 text-xs">
          Our team will use this to navigate directly to you 🗺️
        </p>
      </div>

      {/* ── Continue ── */}
      <Button
        onClick={() => onAutoAdvance?.()}
        disabled={!canContinue}
        className="w-full bg-green-400 hover:bg-green-500 text-black font-bold py-6 text-base rounded-xl mt-2 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Continue to Review
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      {!canContinue && (
        <p className="text-center text-gray-600 text-xs -mt-2">
          {!customerDetails.name.trim()
            ? "Enter your name to continue"
            : "Enter a valid mobile number to continue"}
        </p>
      )}
    </div>
  );
};

export default CustomerDetails;
