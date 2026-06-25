
import { Button } from "@/components/ui/button";
import ServiceDetails from "./ServiceDetails";
import { ArrowRight } from "lucide-react";
interface ServiceSelectionProps {
  selectedServices: string[];
  onServicesChange: (services: string[]) => void;
  isPremiumAddons?: boolean;
  selectedCar?: string;
  onAutoAdvance?: () => void;
}

const getServicesForCarType = (carType: string) => {
  const baseServices = {
    "hatchback": [
      {
        id: "rubbing-foam-hatchback",
        image: "/Rubbing1.jpg",
        title: "Rubbing + Exterior Foam Wash",
        description:
          "A deep paint restoration service that removes oxidation, light scratches, and dullness, followed by a premium foam wash for a glossy finish.",
        price: "₹1299",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "3m-wax-foam-hatchback",
        image: "/3M1.jpg",
        title: "3M Wax + Exterior Foam Wash",
        description: "A high-quality wax polish by 3M for paint protection and shine, combined with a professional foam wash.",
        price: "₹649",
        details: [
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "rubbing-wax-foam-hatchback",
        image: "/rubbingwax.png",
        title: "Rubbing + 3M Wax + Exterior Foam Wash",
        description: "A complete exterior treatment with rubbing, wax, and foam wash.",
        price: "₹1449",
        details: [
         "Full Body Rubbing & Buffing (Rotary Machine)",
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "full-package-hatchback",
        image: "/RubbingWaxDryclean.png",
        title: "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
        description: "Complete car care – inside and out.",
        price: "₹1999",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats(Upholstery) Floor Mats , Seat Belts Cleaning , Roof Cleaning , Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "rubbing-dry-foam-hatchback",
        image: "/RubbingDryclean1.png",
        title: "Rubbing + Dry Cleaning + Exterior Foam Wash",
        description: "Exterior polish + full interior dry cleaning.",
        price: "₹1799",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats(Upholstery) Floor Mats , Seat Belts Cleaning , Roof Cleaning , Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "dry-wax-foam-hatchback",
        image: "/WaxDryClean.png",
        title: "Dry Cleaning + 3M Wax + Exterior Foam Wash",
        description: "Balanced inside-out care.",
        price: "₹1199",
       details: [
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats(Upholstery) Floor Mats , Seat Belts Cleaning , Roof Cleaning , Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "dry-cleaning-hatchback",
        image: "/dryclean2.png",
        title: "Dry Cleaning",
        description: "Deep interior cleaning for seats, mats, roof, and dashboard.",
        price: "₹799",
        details: [
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats(Upholstery) Floor Mats , Seat Belts Cleaning , Roof Cleaning , Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "air-freshener-hatchback",
        image: "/airfreshner.png",
        title: "Air Freshener",
        description: "Keeps your car smelling fresh and inviting after every drive.",
        price: "₹149",
        details: [
          "Premium Long-Lasting Fragrance",
          "Keeps Cabin Fresh & Pleasant"
        ]
      }
    ],
    "sedan": [
      {
        id: "rubbing-foam-sedan",
        image: "/Rubbing1.jpg",
        title: "Rubbing + Exterior Foam Wash",
        description: "A deep cleaning and polish that removes dullness, scratches, and oxidation from your car's paint. Followed by a thick foam wash that gives a shiny, fresh look.",
        price: "₹1299",
       details: [
        "Full Body Rubbing & Buffing (Rotary Machine)",
        "Exterior Foam Shampoo Wash",
        "High-Pressure Water Wash",
        "Alloy Wheel & Tyre Cleaning",
        "Tyre Polishing",
        "Exterior Black Part Polishing"
      ]
      },
      {
        id: "3m-wax-foam-sedan",
        image: "/3M1.jpg",
        title: "3M Wax + Exterior Foam Wash",
        description: "A high-quality wax polish by 3M for paint protection and shine, combined with a professional foam wash.",
        price: "₹649",
        details: [
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "rubbing-wax-foam-sedan",
        image: "/rubbingwax.png",
        title: "Rubbing + 3M Wax + Exterior Foam Wash",
        description: "A complete exterior treatment with rubbing, wax, and foam wash.",
        price: "₹1449",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "full-package-sedan",
        image: "/RubbingWaxDryclean.png",
        title: "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
        description: "Complete car care – inside and out.",
        price: "₹1999",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "rubbing-dry-foam-sedan",
        image: "/RubbingDryclean1.png",
        title: "Rubbing + Dry Cleaning + Exterior Foam Wash",
        description: "Exterior polish + full interior dry cleaning.",
        price: "₹1799",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "dry-wax-foam-sedan",
        image: "/WaxDryClean.png",
        title: "Dry Cleaning + 3M Wax + Exterior Foam Wash",
        description: "Balanced inside-out care.",
        price: "₹1199",
        details: [
          "3M Wax Polish",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "dry-cleaning-sedan",
        image: "/dryclean2.png",
        title: "Dry Cleaning",
        description: "Deep interior cleaning for seats, mats, roof, and dashboard.",
        price: "₹799",
        details: [
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "air-freshener-sedan",
        image: "/airfreshner.png",
        title: "Air Freshener",
        description: "Keeps your car smelling fresh and inviting after every drive.",
        price: "₹149",
        details: [
          "Premium Long-Lasting Fragrance",
          "Keeps Cabin Fresh & Pleasant"
        ]
      }
    ],
    "suv": [
      {
        id: "rubbing-foam-suv",
        image: "/Rubbing1.jpg",
        title: "Rubbing + Exterior Foam Wash",
        description: "A deep cleaning and polish that removes dullness, scratches, and oxidation from your car's paint. Followed by a thick foam wash that gives a shiny, fresh look.",
        price: "₹1499",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "3m-wax-foam-suv",
        image: "/3M1.jpg",
        title: "3M Wax + Exterior Foam Wash",
        description: "A high-quality wax polish by 3M for paint protection and shine, combined with a professional foam wash.",
        price: "₹699",
        details: [
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "rubbing-wax-foam-suv",
        image: "/rubbingwax.png",
        title: "Rubbing + 3M Wax + Exterior Foam Wash",
        description: "A complete exterior treatment with rubbing, wax, and foam wash.",
        price: "₹1599",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "full-package-suv",
        image: "/RubbingWaxDryclean.png",
        title: "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
        description: "Complete car care – inside and out.",
        price: "₹2199",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "rubbing-dry-foam-suv",
        image: "/RubbingDryclean1.png",
        title: "Rubbing + Dry Cleaning + Exterior Foam Wash",
        description: "Exterior polish + full interior dry cleaning.",
        price: "₹1899",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "dry-wax-foam-suv",
        image: "/WaxDryClean.png",
        title: "Dry Cleaning + 3M Wax + Exterior Foam Wash",
        description: "Balanced inside-out care.",
        price: "₹1499",
        details: [
          "3M Wax Polish",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "dry-cleaning-suv",
        image: "/dryclean2.png",
        title: "Dry Cleaning",
        description: "Deep interior cleaning for seats, mats, roof, and dashboard.",
        price: "₹899",
        details: [
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "air-freshener-suv",
        image: "/airfreshner.png",
        title: "Air Freshener",
        description: "Keeps your car smelling fresh and inviting after every drive.",
        price: "₹149",
        details: [
          "Premium Long-Lasting Fragrance",
          "Keeps Cabin Fresh & Pleasant"
        ]
      }
    ],
    "luxury": [
      {
        id: "rubbing-foam-luxury",
        image: "/Rubbing1.jpg",
        title: "Rubbing + Exterior Foam Wash",
        description: "A deep cleaning and polish that removes dullness, scratches, and oxidation from your car's paint. Followed by a thick foam wash that gives a shiny, fresh look.",
        price: "₹1499",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "3m-wax-foam-luxury",
        image: "/3M1.jpg",
        title: "3M Wax + Exterior Foam Wash",
        description: "A high-quality wax polish by 3M for paint protection and shine, combined with a professional foam wash.",
        price: "₹699",
        details: [
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "rubbing-wax-foam-luxury",
        image: "/rubbingwax.png",
        title: "Rubbing + 3M Wax + Exterior Foam Wash",
        description: "A complete exterior treatment with rubbing, wax, and foam wash.",
        price: "₹1599",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing"
        ]
      },
      {
        id: "full-package-luxury",
        image: "/RubbingWaxDryclean.png",
        title: "Rubbing + 3M Wax + Dry Cleaning + Exterior Foam Wash",
        description: "Complete car care – inside and out.",
        price: "₹2199",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "3M Wax Polish",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "rubbing-dry-foam-luxury",
        image: "/RubbingDryclean1.png",
        title: "Rubbing + Dry Cleaning + Exterior Foam Wash",
        description: "Exterior polish + full interior dry cleaning.",
        price: "₹1899",
        details: [
          "Full Body Rubbing & Buffing (Rotary Machine)",
          "Exterior Foam Shampoo Wash",
          "High-Pressure Water Wash",
          "Alloy Wheel & Tyre Cleaning",
          "Tyre Polishing",
          "Exterior Black Part Polishing",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "dry-wax-foam-luxury",
        image: "/WaxDryClean.png",
        title: "Dry Cleaning + 3M Wax + Exterior Foam Wash",
        description: "Balanced inside-out care.",
        price: "₹1499",
        details: [
          "3M Wax Polish",
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "dry-cleaning-luxury",
        image: "/dryclean2.png",
        title: "Dry Cleaning",
        description: "Deep interior cleaning for seats, mats, roof, and dashboard.",
        price: "₹899",
        details: [
          "Car Interior Dashboard Cleaning & Polishing",
          "Deep Clean & Shampoo Of Car Seats (Upholstery)",
          "Floor Mats Cleaning",
          "Seat Belts Cleaning",
          "Roof Cleaning",
          "Door Cleaning & Polishing",
          "Car Interior Vacuum Cleaning & Floor Deep Cleaning",
          "Boot (Diggi) Cleaning & Polishing",
          "Polishing All Plastic Parts",
          "AC Vents Dry Dusting"
        ]
      },
      {
        id: "air-freshener-luxury",
        image: "/airfreshner.png",
        title: "Air Freshener",
        description: "Keeps your car smelling fresh and inviting after every drive.",
        price: "₹149",
        details: [
          "Premium Long-Lasting Fragrance",
          "Keeps Cabin Fresh & Pleasant"
        ]
      }
    ]
  };

  return baseServices[carType.toLowerCase() as keyof typeof baseServices] || baseServices.sedan;
};

const ServiceSelection = ({
  selectedServices,
  onServicesChange,
  isPremiumAddons,
  selectedCar = "sedan",
  onAutoAdvance
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
      {selectedServices.length > 0 && (
        <div className="flex justify-center mt-6">
          <Button 
            onClick={() => onAutoAdvance?.()}
            className="bg-green-400 hover:bg-green-500 text-black font-semibold px-8 py-3"
          >
            Continue with {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ServiceSelection;
