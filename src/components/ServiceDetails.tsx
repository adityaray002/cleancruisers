
import { Check } from "lucide-react";

interface ServiceDetailsProps {
  title: string;
  price: string;
  description: string;
  details: string;
  selected: boolean;
  image: string;
  onSelect: () => void;
}

const ServiceDetails = ({
  title,
  price,
  description,
  details,
  selected,
  image,
  onSelect,
}: ServiceDetailsProps) => {
  return (
    <div
      onClick={onSelect}
      className={`group relative flex flex-col rounded-2xl border-2 shadow-lg h-full transition-all cursor-pointer bg-gradient-to-br from-gray-900 via-gray-950 to-black hover:shadow-2xl overflow-hidden ${selected ? "border-green-400" : "border-gray-800 hover:border-gray-400"}`}
      tabIndex={0}
    >
      {/* Service Image */}
      <div className="w-full h-36 md:h-40 bg-gray-900 flex items-center justify-center px-2">
        <img
          src={image}
          alt={title}
          className="object-cover object-center rounded-t-2xl w-full h-full"
          loading="lazy"
        />
        {selected && (
          <span className="absolute top-2 right-2 bg-green-400 text-black rounded-full px-2 py-0.5 text-xs font-bold shadow z-20">
            Selected
          </span>
        )}
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 gap-2 px-4 pt-5 pb-4">
        <div className="flex items-center gap-1">
          <h3 className="text-lg font-extrabold text-green-400 tracking-tight">
            {title}
          </h3>
          <span className="ml-auto px-3 py-1 rounded-full bg-white text-black text-lg font-bold tracking-wide shadow-sm border-2 border-green-400">
            {price}
          </span>
        </div>

        <div className="mb-1">
          <label className="block text-xs font-bold text-gray-400 mb-0.5">
            What is it?
          </label>
          <p className="text-gray-200 text-sm leading-snug">{description}</p>
        </div>

        <div className="mb-2">
          <label className="block text-xs font-bold text-gray-400 mb-0.5">
            What's included / Good for whom?
          </label>
          <p className="text-gray-300 text-xs leading-tight">{details}</p>
        </div>

        <div className="flex flex-1 items-end justify-end">
          {/* Select/Check Button at card bottom right */}
          <button
            type="button"
            aria-label={selected ? "Remove addon" : "Add service"}
            className={`h-9 w-9 rounded-full border-2 flex items-center justify-center transition-all ${selected ? "bg-green-400 border-green-400 text-black" : "bg-gray-700 border-gray-400 text-white hover:bg-gray-600"}`}
            tabIndex={-1}
          >
            {selected ? <Check className="h-4 w-4" /> : <span className="text-2xl">+</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
