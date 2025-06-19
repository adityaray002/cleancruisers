
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarSelectionProps {
  selectedCar: string;
  onCarSelect: (car: string) => void;
}

const CarSelection = ({ selectedCar, onCarSelect }: CarSelectionProps) => {
  const carTypes = ["Hatchback", "Sedan", "SUV", "Luxury"];
  const carImages: Record<string, string> = {
    Sedan: "/sedan.png",
    SUV: "/suv.png",
    "Hatchback": "/hatchback.png",
    "Luxury": "/rangerover.png",
  };

  const [currentIndex, setCurrentIndex] = useState(carTypes.indexOf(selectedCar));

  useEffect(() => {
    onCarSelect(carTypes[currentIndex]);
  }, [currentIndex]);

  const handleLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carTypes.length - 1 : prevIndex - 1));
  };

  const handleRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carTypes.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-6 md:mb-8">
        <Button onClick={handleLeft} variant="ghost" size="icon" className="text-green-400 h-8 w-8 md:h-10 md:w-10 flex-shrink-0">
          <ArrowLeft className="h-4 w-4 md:h-6 md:w-6" />
        </Button>

        <div className="w-64 h-32 md:w-96 md:h-48 flex items-center justify-center">
          <img
            src={carImages[carTypes[currentIndex]]}
            alt={carTypes[currentIndex]}
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <Button onClick={handleRight} variant="ghost" size="icon" className="text-green-400 h-8 w-8 md:h-10 md:w-10 flex-shrink-0">
          <ArrowRight className="h-4 w-4 md:h-6 md:w-6" />
        </Button>
      </div>

      <div className="grid grid-cols-2 md:flex md:justify-center gap-4 md:space-x-8 md:gap-0">
        {carTypes.map((car, index) => (
          <button
            key={car}
            onClick={() => setCurrentIndex(index)}
            className={`px-3 py-2 md:px-4 md:py-2 rounded-lg transition-colors text-sm md:text-base ${
              currentIndex === index
                ? 'text-green-400 border-b-2 border-green-400'
                : 'text-white hover:text-green-400'
            }`}
          >
            {car}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarSelection;
