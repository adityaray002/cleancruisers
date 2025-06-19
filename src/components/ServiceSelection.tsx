
import { Button } from "@/components/ui/button";
import ServiceDetails from "./ServiceDetails";

interface ServiceSelectionProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
  isPremiumAddons?: boolean;
  selectedCar?: string;
}

const getServicesForCarType = (carType: string) => {
  const baseServices = {
    "hatchback": [
      {
        id: "rubbing-foam-hatchback",
        image: "/Rubbing1.jpg",
        title: "Rubbing + Exterior Foam Wash",
        description: "A deep cleaning and polish that removes dullness, scratches, and oxidation from your car's paint. Followed by a thick foam wash that gives a shiny, fresh look.",
        price: "₹1599",
        details: "Paint surface rubbing (polishing), Thick foam exterior wash. Good for cars with light scratches, dull paint, or that need a shine restoration."
      },
      {
        id: "3m-wax-foam-hatchback",
        image: "/3M1.jpg",
        title: "3M Wax + Exterior Foam Wash",
        description: "A high-quality wax polish by 3M for paint protection and shine, combined with a professional foam wash.",
        price: "₹649",
        details: "3M Wax Polish, Exterior foam wash. Perfect for regular maintenance and shine boost."
      },
      {
        id: "rubbing-wax-foam-hatchback",
        image: "/rubbingwax.png",
        title: "Rubbing + 3M Wax + Exterior Foam Wash",
        description: "A complete exterior treatment with rubbing, wax, and foam wash.",
        price: "₹1699",
        details: "Surface rubbing/polish, 3M wax coating, Foam wash. Great for scratch removal and shine."
      },
      {
        id: "full-package-hatchback",
        image: "/RubbingWaxDryclean.png",
        title: "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
        description: "Complete car care – inside and out.",
        price: "₹2499",
        details: "Rubbing polish, 3M wax, Interior dry cleaning (seats, mats, roof, dashboard), Foam wash. Ideal for full car makeover."
      },
      {
        id: "rubbing-dry-foam-hatchback",
        image: "/RubbingDryclean1.png",
        title: "Rubbing + Dry Cleaning + Exterior Foam Wash",
        description: "Exterior polish + full interior dry cleaning.",
        price: "₹2199",
        details: "Rubbing, Interior dry clean, Foam wash. For fresh, clean car experience."
      },
      {
        id: "dry-wax-foam-hatchback",
        image: "/WaxDryClean.png",
        title: "Dry Cleaning + 3M Wax + Exterior Foam Wash",
        description: "Balanced inside-out care.",
        price: "₹1499",
        details: "Interior dry clean, 3M wax, Foam wash. Best for regular upkeep."
      },
      {
        id: "dry-cleaning-hatchback",
        image: "/dryclean2.png",
        title: "Dry Cleaning",
        description: "Deep interior cleaning for seats, mats, roof, and dashboard.",
        price: "₹999",
        details: "Complete interior dry cleaning service for a fresh cabin experience."
      },
      {
        id: "air-freshener-hatchback",
        image: "/airfreshner.png",
        title: "Air Freshener",
        description: "Keeps your car smelling fresh and inviting after every drive.",
        price: "₹149",
        details: "Long-lasting fragrance for a pleasant driving experience."
      }
    ],
    "sedan": [
      {
        id: "rubbing-foam-sedan",
        image: "/Rubbing1.jpg",
        title: "Rubbing + Exterior Foam Wash",
        description: "A deep cleaning and polish that removes dullness, scratches, and oxidation from your car's paint. Followed by a thick foam wash that gives a shiny, fresh look.",
        price: "₹1599",
        details: "Paint surface rubbing (polishing), Thick foam exterior wash. Good for cars with light scratches, dull paint, or that need a shine restoration."
      },
      {
        id: "3m-wax-foam-sedan",
        image: "/3M1.jpg",
        title: "3M Wax + Exterior Foam Wash",
        description: "A high-quality wax polish by 3M for paint protection and shine, combined with a professional foam wash.",
        price: "₹649",
        details: "3M Wax Polish, Exterior foam wash. Perfect for regular maintenance and shine boost."
      },
      {
        id: "rubbing-wax-foam-sedan",
        image: "/rubbingwax.png",
        title: "Rubbing + 3M Wax + Exterior Foam Wash",
        description: "A complete exterior treatment with rubbing, wax, and foam wash.",
        price: "₹1699",
        details: "Surface rubbing/polish, 3M wax coating, Foam wash. Great for scratch removal and shine."
      },
      {
        id: "full-package-sedan",
        image: "/RubbingWaxDryclean.png",
        title: "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
        description: "Complete car care – inside and out.",
        price: "₹2499",
        details: "Rubbing polish, 3M wax, Interior dry cleaning (seats, mats, roof, dashboard), Foam wash. Ideal for full car makeover."
      },
      {
        id: "rubbing-dry-foam-sedan",
        image: "/RubbingDryclean1.png",
        title: "Rubbing + Dry Cleaning + Exterior Foam Wash",
        description: "Exterior polish + full interior dry cleaning.",
        price: "₹2199",
        details: "Rubbing, Interior dry clean, Foam wash. For fresh, clean car experience."
      },
      {
        id: "dry-wax-foam-sedan",
        image: "/WaxDryClean.png",
        title: "Dry Cleaning + 3M Wax + Exterior Foam Wash",
        description: "Balanced inside-out care.",
        price: "₹1499",
        details: "Interior dry clean, 3M wax, Foam wash. Best for regular upkeep."
      },
      {
        id: "dry-cleaning-sedan",
        image: "/dryclean2.png",
        title: "Dry Cleaning",
        description: "Deep interior cleaning for seats, mats, roof, and dashboard.",
        price: "₹999",
        details: "Complete interior dry cleaning service for a fresh cabin experience."
      },
      {
        id: "air-freshener-sedan",
        image: "/airfreshner.png",
        title: "Air Freshener",
        description: "Keeps your car smelling fresh and inviting after every drive.",
        price: "₹149",
        details: "Long-lasting fragrance for a pleasant driving experience."
      }
    ],
    "suv": [
      {
        id: "rubbing-foam-suv",
        image: "/Rubbing1.jpg",
        title: "Rubbing + Exterior Foam Wash",
        description: "A deep cleaning and polish that removes dullness, scratches, and oxidation from your car's paint. Followed by a thick foam wash that gives a shiny, fresh look.",
        price: "₹1799",
        details: "Paint surface rubbing (polishing), Thick foam exterior wash. Good for cars with light scratches, dull paint, or that need a shine restoration."
      },
      {
        id: "3m-wax-foam-suv",
        image: "/3M1.jpg",
        title: "3M Wax + Exterior Foam Wash",
        description: "A high-quality wax polish by 3M for paint protection and shine, combined with a professional foam wash.",
        price: "₹749",
        details: "3M Wax Polish, Exterior foam wash. Perfect for regular maintenance and shine boost."
      },
      {
        id: "rubbing-wax-foam-suv",
        image: "/rubbingwax.png",
        title: "Rubbing + 3M Wax + Exterior Foam Wash",
        description: "A complete exterior treatment with rubbing, wax, and foam wash.",
        price: "₹1899",
        details: "Surface rubbing/polish, 3M wax coating, Foam wash. Great for scratch removal and shine."
      },
      {
        id: "full-package-suv",
        image: "/RubbingWaxDryclean.png",
        title: "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
        description: "Complete car care – inside and out.",
        price: "₹2699",
        details: "Rubbing polish, 3M wax, Interior dry cleaning (seats, mats, roof, dashboard), Foam wash. Ideal for full car makeover."
      },
      {
        id: "rubbing-dry-foam-suv",
        image: "/RubbingDryclean1.png",
        title: "Rubbing + Dry Cleaning + Exterior Foam Wash",
        description: "Exterior polish + full interior dry cleaning.",
        price: "₹2399",
        details: "Rubbing, Interior dry clean, Foam wash. For fresh, clean car experience."
      },
      {
        id: "dry-wax-foam-suv",
        image: "/WaxDryClean.png",
        title: "Dry Cleaning + 3M Wax + Exterior Foam Wash",
        description: "Balanced inside-out care.",
        price: "₹1699",
        details: "Interior dry clean, 3M wax, Foam wash. Best for regular upkeep."
      },
      {
        id: "dry-cleaning-suv",
        image: "/dryclean2.png",
        title: "Dry Cleaning",
        description: "Deep interior cleaning for seats, mats, roof, and dashboard.",
        price: "₹1099",
        details: "Complete interior dry cleaning service for a fresh cabin experience."
      },
      {
        id: "air-freshener-suv",
        image: "/airfreshner.png",
        title: "Air Freshener",
        description: "Keeps your car smelling fresh and inviting after every drive.",
        price: "₹149",
        details: "Long-lasting fragrance for a pleasant driving experience."
      }
    ],
    "luxury": [
      {
        id: "rubbing-foam-luxury",
        image: "/Rubbing1.jpg",
        title: "Rubbing + Exterior Foam Wash",
        description: "A deep cleaning and polish that removes dullness, scratches, and oxidation from your car's paint. Followed by a thick foam wash that gives a shiny, fresh look.",
        price: "₹1899",
        details: "Paint surface rubbing (polishing), Thick foam exterior wash. Good for cars with light scratches, dull paint, or that need a shine restoration."
      },
      {
        id: "3m-wax-foam-luxury",
        image: "/3M1.jpg",
        title: "3M Wax + Exterior Foam Wash",
        description: "A high-quality wax polish by 3M for paint protection and shine, combined with a professional foam wash.",
        price: "₹949",
        details: "3M Wax Polish, Exterior foam wash. Perfect for regular maintenance and shine boost."
      },
      {
        id: "rubbing-wax-foam-luxury",
        image: "/rubbingwax.png",
        title: "Rubbing + 3M Wax + Exterior Foam Wash",
        description: "A complete exterior treatment with rubbing, wax, and foam wash.",
        price: "₹1999",
        details: "Surface rubbing/polish, 3M wax coating, Foam wash. Great for scratch removal and shine."
      },
      {
        id: "full-package-luxury",
        image: "/RubbingWaxDryclean.png",
        title: "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
        description: "Complete car care – inside and out.",
        price: "₹2799",
        details: "Rubbing polish, 3M wax, Interior dry cleaning (seats, mats, roof, dashboard), Foam wash. Ideal for full car makeover."
      },
      {
        id: "rubbing-dry-foam-luxury",
        image: "/RubbingDryclean1.png",
        title: "Rubbing + Dry Cleaning + Exterior Foam Wash",
        description: "Exterior polish + full interior dry cleaning.",
        price: "₹2499",
        details: "Rubbing, Interior dry clean, Foam wash. For fresh, clean car experience."
      },
      {
        id: "dry-wax-foam-luxury",
        image: "/WaxDryClean.png",
        title: "Dry Cleaning + 3M Wax + Exterior Foam Wash",
        description: "Balanced inside-out care.",
        price: "₹1799",
        details: "Interior dry clean, 3M wax, Foam wash. Best for regular upkeep."
      },
      {
        id: "dry-cleaning-luxury",
        image: "/dryclean2.png",
        title: "Dry Cleaning",
        description: "Deep interior cleaning for seats, mats, roof, and dashboard.",
        price: "₹1099",
        details: "Complete interior dry cleaning service for a fresh cabin experience."
      },
      {
        id: "air-freshener-luxury",
        image: "/airfreshner.png",
        title: "Air Freshener",
        description: "Keeps your car smelling fresh and inviting after every drive.",
        price: "₹149",
        details: "Long-lasting fragrance for a pleasant driving experience."
      }
    ]
  };

  return baseServices[carType.toLowerCase() as keyof typeof baseServices] || baseServices.sedan;
};

const ServiceSelection = ({
  selectedServices,
  onServicesChange,
  isPremiumAddons,
  selectedCar = "sedan"
}: ServiceSelectionProps) => {
  const services = getServicesForCarType(selectedCar);

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      onServicesChange(selectedServices.filter(id => id !== serviceId));
    } else {
      onServicesChange([...selectedServices, serviceId]);
    }
  };

  const heading = isPremiumAddons ? "Select Add-on(s)" : null;

  return (
    <div>
      {heading && (
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">{heading}</h2>
          <div className="mt-1 text-green-300 text-sm font-medium">
            Enhance your wash with these curated add-ons. Tap to select.
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6">
        {services.map((service) => (
          <ServiceDetails
            key={service.id}
            title={service.title}
            price={service.price}
            description={service.description}
            details={service.details}
            selected={selectedServices.includes(service.id)}
            image={service.image}
            onSelect={() => toggleService(service.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceSelection;
