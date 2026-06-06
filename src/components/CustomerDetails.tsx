import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, MapPin, Loader2, X, Phone, User,
  CheckCircle2, Info, Shield, Globe, Ban,
} from "lucide-react";

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

type PermissionState = "unknown" | "granted" | "prompt" | "denied" | "user_declined";

/* ─────────────────────────────────────────────
   Custom Location Permission Modal
───────────────────────────────────────────── */
interface PermissionModalProps {
  onAllow: () => void;
  onAllowOnce: () => void;
  onNever: () => void;
  isLoading: boolean;
}

const LocationPermissionModal = ({ onAllow, onAllowOnce, onNever, isLoading }: PermissionModalProps) => (
  <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
    <div className="w-full max-w-sm bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-2xl">

      {/* Header */}
      <div className="px-5 pt-5 pb-4 border-b border-gray-800">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-green-400/15 rounded-full flex items-center justify-center shrink-0">
            {isLoading
              ? <Loader2 className="w-5 h-5 text-green-400 animate-spin" />
              : <MapPin className="w-5 h-5 text-green-400" />
            }
          </div>
          <div>
            <p className="text-white text-sm font-semibold leading-tight">cleancruisers.in</p>
            <p className="text-gray-500 text-xs">
              {isLoading ? "Waiting for location…" : "wants to access your location"}
            </p>
          </div>
        </div>
        {!isLoading && (
          <p className="text-gray-400 text-xs leading-relaxed">
            We use your location so our team can navigate directly to your car — no need to type a long address.
          </p>
        )}
        {isLoading && (
          <p className="text-gray-400 text-xs leading-relaxed">
            If your browser asked for permission, please tap <strong className="text-white">Allow</strong> to share your location.
          </p>
        )}
      </div>

      {/* Options — hidden while loading */}
      {!isLoading && (
        <div className="p-2">
          <button
            onClick={onAllow}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-green-400/10 transition-colors group text-left"
          >
            <Globe className="w-4 h-4 text-green-400 shrink-0" />
            <div>
              <p className="text-white text-sm font-medium group-hover:text-green-400 transition-colors">
                Allow while visiting the site
              </p>
              <p className="text-gray-500 text-xs mt-0.5">Location access during this session</p>
            </div>
          </button>

          <button
            onClick={onAllowOnce}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-400/10 transition-colors group text-left"
          >
            <Shield className="w-4 h-4 text-blue-400 shrink-0" />
            <div>
              <p className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors">
                Allow this time only
              </p>
              <p className="text-gray-500 text-xs mt-0.5">One-time access for this booking</p>
            </div>
          </button>

          <button
            onClick={onNever}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-400/10 transition-colors group text-left"
          >
            <Ban className="w-4 h-4 text-gray-500 shrink-0" />
            <div>
              <p className="text-gray-400 text-sm font-medium group-hover:text-red-400 transition-colors">
                Never allow
              </p>
              <p className="text-gray-600 text-xs mt-0.5">I'll type my address manually</p>
            </div>
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="px-5 pb-4 pt-1">
        <p className="text-gray-600 text-xs text-center flex items-center justify-center gap-1">
          <Shield className="w-3 h-3" /> Your location is only used for this booking
        </p>
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */
const CustomerDetails = ({ customerDetails, onDetailsChange, onAutoAdvance }: CustomerDetailsProps) => {
  const [locationLoading, setLocationLoading]   = useState(false);
  const [locationError, setLocationError]       = useState("");
  const [permState, setPermState]               = useState<PermissionState>("unknown");
  const [showModal, setShowModal]               = useState(false);
  const [modalLoading, setModalLoading]         = useState(false);
  const [hasClickedButton, setHasClickedButton] = useState(false);

  const update = (field: keyof CustomerDetailsData, value: unknown) =>
    onDetailsChange({ ...customerDetails, [field]: value });

  /* ── Silent auto-capture (used only when permission is already granted) ── */
  const silentCapture = () => {
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        update("location", { lat: pos.coords.latitude, lng: pos.coords.longitude });
        setPermState("granted");
        setLocationLoading(false);
      },
      () => setLocationLoading(false),
      { enableHighAccuracy: false, timeout: 10000 }
    );
  };

  /* ── Capture triggered from modal — keeps modal open until result arrives ── */
  const captureFromModal = () => {
    setModalLoading(true); // show loading state inside modal
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        // Success: close modal, pin the location
        setShowModal(false);
        setModalLoading(false);
        update("location", { lat: pos.coords.latitude, lng: pos.coords.longitude });
        setPermState("granted");
      },
      (err) => {
        // Failure: close modal, show appropriate UI
        setShowModal(false);
        setModalLoading(false);
        if (err.code === err.PERMISSION_DENIED) {
          setPermState("denied");
          setHasClickedButton(true); // ensure amber card renders
        } else {
          setLocationError("Couldn't get your location — please try again or type your address below");
        }
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  };

  /* On mount: read permission state silently, auto-capture if already granted */
  useEffect(() => {
    if (!navigator.geolocation) return;
    if (navigator.permissions) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        setPermState(result.state as PermissionState);
        if (result.state === "granted" && !customerDetails.location) {
          silentCapture();
        }
        result.onchange = () => setPermState(result.state as PermissionState);
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* GPS button clicked */
  const handleLocationButtonClick = () => {
    setHasClickedButton(true);
    if (!navigator.geolocation) {
      setLocationError("Your browser doesn't support location — type your address below");
      return;
    }
    if (permState === "granted") {
      silentCapture();
      return;
    }
    if (permState === "denied") {
      // Amber card is now visible because hasClickedButton is true
      return;
    }
    // "prompt" or "unknown" → open modal
    setShowModal(true);
  };

  /* Modal: user picks "Allow while visiting" or "Allow this time" */
  const handleAllow = () => {
    // captureFromModal keeps modal open while browser prompt shows
    captureFromModal();
  };

  const handleAllowOnce = () => {
    captureFromModal();
  };

  /* Modal: user picks "Never allow" */
  const handleNever = () => {
    setShowModal(false);
    setPermState("user_declined");
  };

  const loc = customerDetails.location;
  const canContinue = !!customerDetails.name.trim() && /^[6-9]\d{9}$/.test(customerDetails.phone);
  const showDeniedCard = permState === "denied" && hasClickedButton;

  return (
    <>
      {showModal && (
        <LocationPermissionModal
          onAllow={handleAllow}
          onAllowOnce={handleAllowOnce}
          onNever={handleNever}
          isLoading={modalLoading}
        />
      )}

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
            /* ── GPS pinned ── */
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
                <button
                  type="button"
                  onClick={() => {
                    update("location", null);
                    setLocationError("");
                    setHasClickedButton(false);
                  }}
                  className="text-gray-600 hover:text-red-400 transition-colors"
                  title="Remove pin"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

          ) : showDeniedCard ? (
            /* ── Browser blocked — show only after user taps button ── */
            <div className="bg-amber-950/40 border border-amber-500/40 rounded-xl px-4 py-3 space-y-2">
              <p className="text-amber-400 text-sm font-semibold flex items-center gap-1.5">
                <Info className="w-4 h-4 shrink-0" /> Location is blocked in your browser
              </p>
              <p className="text-gray-400 text-xs leading-relaxed">
                To fix: tap the <strong className="text-gray-200">lock icon</strong> in your browser address bar →{" "}
                <strong className="text-gray-200">Site settings</strong> → set Location to{" "}
                <strong className="text-gray-200">Allow</strong> → refresh the page.
              </p>
              <p className="text-gray-500 text-xs">Or simply type your address below.</p>
            </div>

          ) : permState === "user_declined" ? (
            /* ── User said Never in our popup ── */
            <div className="bg-gray-800/60 border border-gray-700 rounded-xl px-4 py-3 flex items-center gap-3">
              <Ban className="w-4 h-4 text-gray-500 shrink-0" />
              <div className="flex-1">
                <p className="text-gray-400 text-sm">Location sharing declined</p>
                <p className="text-gray-600 text-xs mt-0.5">Please type your address below</p>
              </div>
              <button
                type="button"
                onClick={() => { setPermState("unknown"); setHasClickedButton(false); }}
                className="text-xs text-green-400 hover:text-green-300 underline font-medium shrink-0"
              >
                Undo
              </button>
            </div>

          ) : (
            /* ── Default: GPS button ── */
            <>
              <button
                type="button"
                onClick={handleLocationButtonClick}
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

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-700" />
                <span className="text-gray-500 text-xs tracking-widest uppercase">or type it</span>
                <div className="flex-1 h-px bg-gray-700" />
              </div>
            </>
          )}

          {/* Manual address — always visible when no GPS pin */}
          {!loc && (
            <Input
              placeholder="e.g. Near Metro Gate, Sector 15, Dwarka, New Delhi"
              value={customerDetails.locationText || ""}
              onChange={(e) => update("locationText", e.target.value)}
              autoComplete="street-address"
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-500 focus:border-green-400 h-11 rounded-xl"
            />
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
    </>
  );
};

export default CustomerDetails;
