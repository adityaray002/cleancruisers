import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Check, Star, Clock, Shield } from "lucide-react";

const PricingPreview = () => {
  const navigate = useNavigate();

  const monthlyPlans = [
    { 
      name: "Hatchback", 
      price: 799, 
      originalPrice: 1040,
      image: "/hatchback.png",
      savings: "Save ₹241",
      popular: false,
      description: "Perfect for small cars"
    },
    { 
      name: "Sedan", 
      price: 799, 
      originalPrice: 1040,
      image: "/sedan.png",
      savings: "Save ₹241",
      popular: true,
      description: "Most popular choice"
    },
    { 
      name: "SUV", 
      price: 999, 
      originalPrice: 1300,
      image: "/suv.png",
      savings: "Save ₹301",
      popular: false,
      description: "For larger vehicles"
    },
    { 
      name: "Luxury", 
      price: 1199, 
      originalPrice: 1560,
      image: "/rangerover.png",
      savings: "Save ₹361",
      popular: false,
      description: "Premium car care"
    }
  ];

  const oneTimePlans = [
    { 
      name: "Exterior + Interior", 
      price: "299-699", 
      car: "All Cars",
      icon: "✨",
      description: "Complete wash inside & out",
      features: ["Foam wash", "Interior vacuum", "Dashboard clean"]
    },
    { 
      name: "Exterior Only", 
      price: "349-499", 
      car: "All Cars",
      icon: "🚗",
      description: "Professional exterior cleaning",
      features: ["Foam wash", "Tire dressing", "Exterior polish"]
    },
    { 
      name: "Interior Only", 
      price: "299-349", 
      car: "All Cars",
      icon: "🧽",
      description: "Deep interior cleaning",
      features: ["Vacuum cleaning", "Dashboard care", "Seat cleaning"]
    },
    { 
      name: "Waterless", 
      price: "349-399", 
      car: "All Cars",
      icon: "🌿",
      description: "Eco-friendly no-water wash",
      features: ["Waterless clean", "Eco products", "Quick service"]
    }
  ];

  // --- New handler for WhatsApp for monthly plans ---
  const handleMonthlyPlanWhatsapp = (plan: any) => {
    const message = `Hi! I'm interested in the Monthly Doorstep Service (${plan.name} - ₹${plan.price}/mo). Please share the details and next steps.`;
    const phoneNumber = "918920230357";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleMonthlyPlanClick = (plan: any) => {
    // Old: navigate(`/booking?service=monthly&car=${plan.name.toLowerCase()}`);
    handleMonthlyPlanWhatsapp(plan);
  };

  const handleOneTimePlanClick = (plan: any) => {
    navigate(`/booking?service=one-time&package=${plan.name.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <section className="py-16 px-4 md:px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            No hidden fees. No surprises. Just clean cars at honest prices.
          </p>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>

        {/* Monthly Plans */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-2">Monthly Doorstep Service</h3>
            <p className="text-gray-300">Daily car wash at your doorstep - Save money with monthly plans</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <Clock className="h-4 w-4 text-green-400" />
              <span className="text-sm text-gray-400">26 cleaning sessions per month</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthlyPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`
                  bg-gray-800 border-gray-700 hover:border-green-400 transition-all cursor-pointer 
                  transform hover:scale-105 hover:shadow-xl hover:shadow-green-400/20 relative group
                  ${plan.popular ? 'ring-2 ring-green-400' : ''}
                `}
                // Removed card-level onClick to avoid accidental WhatsApp open
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      BEST VALUE
                    </span>
                  </div>
                )}
                
                <CardContent className="p-6 text-center">
                  <img src={plan.image} alt={plan.name} className="w-20 h-12 object-contain mx-auto mb-4" />
                  <h4 className="text-white font-semibold text-lg mb-2">{plan.name}</h4>
                  <p className="text-gray-400 text-sm mb-3">{plan.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-400 mb-1">₹{plan.price}</div>
                    <div className="text-gray-400 text-sm line-through">₹{plan.originalPrice}</div>
                    <div className="text-green-400 text-sm font-semibold">{plan.savings}</div>
                    <div className="text-gray-400 text-xs mt-1">per month</div>
                  </div>
                  
                  <div className="text-xs text-gray-300 space-y-1 mb-4">
                    <div className="flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-400 mr-1" />
                      26 Days Cleaning
                    </div>
                    <div className="flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-400 mr-1" />
                      1 Foam Wash
                    </div>
                    <div className="flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-400 mr-1" />
                      Interior Cleaning
                    </div>
                    <div className="flex items-center justify-center">
                      <Check className="h-3 w-3 text-green-400 mr-1" />
                      At Your Doorstep
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold group-hover:bg-green-500"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleMonthlyPlanClick(plan);
                    }}
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
