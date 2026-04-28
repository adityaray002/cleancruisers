import { CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StickyBookNow = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-black/95 to-transparent">
      <button
        onClick={() => navigate("/booking")}
        className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-green-500 to-green-600 active:from-green-600 active:to-green-700 text-black font-bold text-base rounded-2xl py-4 shadow-lg shadow-green-500/30 active:scale-[0.98] transition-transform"
      >
        <CalendarCheck className="w-5 h-5" />
        Book Now — It's Easy!
      </button>
    </div>
  );
};

export default StickyBookNow;
