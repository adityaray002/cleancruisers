
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin, Star, Shield } from "lucide-react";

// --- Add prop type for optional scroll-to-pricing handler ---
interface ServicesSectionProps {
  onScrollToPricing?: () => void;
}

const ServicesSection = ({ onScrollToPricing }: ServicesSectionProps) => {
  const navigate = useNavigate();

  const services = [
    {
      id: "one-time",
      icon: "✨",
      title: "Doorstep Premium Car wash",
      subtitle: "Professional deep cleaning",
      description: "Complete car detailing with premium products and techniques. Choose from multiple packages based on your car's needs.",
      priceRange: "₹299 - ₹699",
      originalPrice: "₹800",
      savings: "Save ₹101+",
      features: [
        "Foam Wash & Rinse",
        "Interior Deep Cleaning",
        "Tire Dressing & Polish",
        "Dashboard & Seats Care",
        "Exterior Black Part Polish"
      ],
      highlights: [
        { icon: Clock, text: "1-2 hours service" },
        { icon: MapPin, text: "At your location" },
        { icon: Star, text: "Professional team" }
      ],
      popular: true
    },
    {
      id: "premium-addons",
      icon: "💎",
      title: "Premium Add-ons",
      subtitle: "Enhance your car's beauty",
      description: "Professional detailing services including paint rubbing, waxing, and interior dry cleaning for the ultimate car care experience.",
      priceRange: "₹149 - ₹2799",
      originalPrice: "₹3000",
      savings: "Save ₹201+",
      features: [
        "Paint Rubbing & Polishing",
        "3M Premium Wax",
        "Interior Dry Cleaning",
        "Combo Packages Available",
        "Long-lasting Results"
      ],
      highlights: [
        { icon: Star, text: "Premium quality" },
        { icon: Shield, text: "Long-lasting protection" },
        { icon: Clock, text: "2-3 hours" }
      ],
      popular: false
    },
    {
      id: "monthly",
      icon: "🏠",
      title: "Monthly Doorstep Service",
      subtitle: "Daily car wash convenience",
      description: "Professional car wash at your doorstep every day with flexible monthly plans. Perfect for busy professionals who want their car always clean.",
      priceRange: "₹799 - ₹1199",
      originalPrice: "₹1500",
      savings: "Save ₹301+",
      features: [
        "26 Days Exterior Cleaning",
        "1 Foam Wash + Interior Cleaning",
        "Tire Cleaning & Dressing",
        "At Your Doorstep Daily",
        "Eco-friendly Products"
      ],
      highlights: [
        { icon: Clock, text: "Same time daily" },
        { icon: MapPin, text: "Available in Dwarka Mor, Nawada, Uttam Nagar" },
        { icon: Shield, text: "100% Safe & Insured" }
      ],
      popular: false
    }
  ];

  const handleServiceClick = (service: any) => {
    if (service.id === 'monthly') {
      navigate('/monthly-pricing');
      return;
    } else {
      sessionStorage.setItem('selectedServiceType', service.id);
      navigate('/booking');
    }
  };

  return (
    <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Car Washing Services
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
            Professional car care services delivered right to your doorstep. Choose from our range of services designed to keep your car spotless and protected.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`
                bg-gray-800/80 border-gray-700 backdrop-blur-sm hover:border-green-400 
                transition-all duration-300 cursor-pointer transform hover:scale-105 
                hover:shadow-xl hover:shadow-green-400/20 relative group
                ${service.popular ? 'ring-2 ring-green-400' : ''}
              `}
              onClick={() => handleServiceClick(service)}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div className="text-4xl mb-4">{service.icon}</div>
                
                <h3 className="text-green-400 font-bold text-lg mb-1">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{service.subtitle}</p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-2xl font-bold text-white">{service.priceRange}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
                    <span className="text-sm text-green-400 font-semibold">{service.savings}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-center text-xs text-gray-300 justify-center">
                      <span className="text-green-400 mr-2">✓</span>
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-green-400">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-6">
                  {service.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-xs text-gray-400 justify-center">
                      <highlight.icon className="h-3 w-3 mr-2 text-green-400" />
                      {highlight.text}
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold group-hover:bg-green-500 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(service);
                  }}
                >
                  Check Prices
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
