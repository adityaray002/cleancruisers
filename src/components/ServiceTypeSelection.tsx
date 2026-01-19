import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Star, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ServiceTypeSelectionProps {
  selectedServiceType: string;
  onServiceTypeSelect: (type: string) => void;
}

const ServiceTypeSelection = ({ selectedServiceType, onServiceTypeSelect }: ServiceTypeSelectionProps) => {
  // const serviceTypes = [
  //   {
  //     type: "monthly",
  //     title: "Daily Doorstep Car Wash",
  //     description: "Enjoy hassle-free daily car washing at your doorstep with flexible monthly subscription plans",
  //     icon: "📅"
  //   },
  //   {
  //     type: "one-time",
  //     title: "Premium Doorstep Car Wash (One-Time)", 
  //     description: "One-time professional car wash service at your doorstep. Optional interior and exterior upgrades available",
  //     icon: "🚗"
  //   }
  // ];

  // return (
  //   <div>
  //     <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
  //       {serviceTypes.map((service) => (
  //         <Card 
  //           key={service.type}
  //           className={`cursor-pointer transition-all ${
  //             selectedServiceType === service.type
  //               ? 'bg-gray-700 border-green-400' 
  //               : 'bg-gray-800 border-gray-600 hover:border-gray-500'
  //           }`}
  //           onClick={() => onServiceTypeSelect(service.type)}
  //         >
  //           <CardContent className="p-4 md:p-6 text-center">
  //             <div className="text-2xl md:text-4xl mb-2 md:mb-4">{service.icon}</div>
  //             <h3 className="text-green-400 font-semibold text-sm md:text-lg mb-2 md:mb-3">{service.title}</h3>
  //             <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">{service.description}</p>
              
  //             {service.type === "monthly" && (
  //               <div className="text-xs text-yellow-400 mb-2 text-center">
  //                 Note: This service is available in Dwarka Mor, Nawada, and Uttam Nagar, New Delhi.
  //               </div>
  //             )}

  //             <Button 
  //               className={`w-full text-xs md:text-sm ${
  //                 service.type === "one-time" ? "mt-12" : ""
  //               } ${
  //                 selectedServiceType === service.type
  //                   ? 'bg-green-400 hover:bg-green-500 text-black' 
  //                   : 'bg-gray-600 hover:bg-gray-500 text-white'
  //               }`}
  //             >
  //               {selectedServiceType === service.type ? 'Selected' : 'Select'}
  //             </Button>
  //           </CardContent>
  //         </Card>
  //       ))}
  //     </div>

  const navigate = useNavigate();

  const serviceTypes = [
    {
      type: "one-time",
      title: "One-Time Premium Wash",
      description: "Complete doorstep car wash with interior & exterior cleaning",
      icon: Sparkles,
      color: "from-green-500 to-emerald-600",
      features: [
        "Foam wash & rinse",
        "Interior vacuum & wipe", 
        "Dashboard polish",
        "1-2 hours service"
      ],
      priceRange: "₹299 - ₹699"
    },
    {
      type: "premium-addons",
      title: "Premium Add-ons",
      description: "Deep cleaning, paint rubbing, waxing & protection services",
      icon: Star,
      color: "from-blue-500 to-indigo-600",
      features: [
        "Paint rubbing & polishing",
        "3M wax coating",
        "Interior dry cleaning",
        "Long-lasting shine"
      ],
      priceRange: "₹149 - ₹2799"
    },
   
  ];

  const handleSelect = (type: string) => {
    if (type === "monthly") {
      navigate('/monthly-pricing');
    } else {
      onServiceTypeSelect(type);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {serviceTypes.map((service, index) => {
          const Icon = service.icon;
          const isSelected = selectedServiceType === service.type;
          
          return (
            <motion.div
              key={service.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card 
                className={`cursor-pointer transition-all duration-300 h-full transform hover:scale-[1.02] hover:-translate-y-1 ${
                  isSelected
                    ? 'ring-2 ring-green-400 border-green-400 bg-gray-800' 
                    : 'bg-gray-800/60 border-gray-700 hover:border-green-400/50'
                }`}
                onClick={() => handleSelect(service.type)}
              >
                {/* Color bar at top */}
                <div className={`h-1.5 bg-gradient-to-r ${service.color} rounded-t-lg`} />
                
                <CardContent className="p-5 md:p-6 flex flex-col h-full">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg leading-tight">{service.title}</h3>
                      <p className="text-green-400 text-sm font-medium">{service.priceRange}</p>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 mb-4 flex-grow">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                
                  {/* Select Button */}
                  <Button 
                    className={`w-full font-semibold transition-all ${
                      isSelected
                        ? 'bg-green-400 hover:bg-green-500 text-black' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(service.type);
                    }}
                  >
                    {service.type === "monthly" ? "View Plans" : isSelected ? '✓ Selected' : 'Select This Service'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Selected indicator */}
      {selectedServiceType && selectedServiceType !== "monthly" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-400 text-sm">
            You selected: <span className="text-green-400 font-semibold">
              {serviceTypes.find(s => s.type === selectedServiceType)?.title}
            </span>
          </p>
          <p className="text-gray-500 text-xs mt-1">Click "Continue" to proceed</p>
        </motion.div>
      )}
    </div>
   
  );
};

export default ServiceTypeSelection;
