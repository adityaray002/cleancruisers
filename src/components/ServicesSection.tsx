
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Clock, MapPin, Star, Shield, Car, Sparkles, Calendar, CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
interface ServicesSectionProps {
  onScrollToPricing?: () => void;
}

const ServicesSection = ({ onScrollToPricing }: ServicesSectionProps) => {
  const navigate = useNavigate();

  const services = [
  
    { 
      id: "one-time",
      icon: Sparkles,
      title: "CAR WASH & CARE",
      tagline: "Deep clean when you need it",
      description: "Complete interior + exterior detailing at your doorstep",
      priceRange: "₹299 - ₹699",
      duration: "1-2 hours",
      bestFor: "Special occasions or monthly deep clean",
      features: [
        "Foam wash & rinse",
        "Interior vacuum & wipe",
        "Dashboard & seats care",
        "Tire dressing"
      ],
      popular: true,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: "premium-addons",
      icon: Star,
      title: "PREMIUM ADD-ONS",
      tagline: "Extra shine & protection",
      description: "Paint rubbing, waxing & deep interior cleaning",
      priceRange: "₹149 - ₹2799",
      duration: "2-3 hours",
      bestFor: "Restore your car's showroom look",
      features: [
        "Paint rubbing & polishing",
        "3M premium wax coating",
        "Interior dry cleaning",
        "Long-lasting protection"
      ],
      popular: false,
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: "complete-care",
      icon: Calendar,
      title: "CAR WASH MONTHLY PACKAGE",
      tagline: "3x premium washing",
      description: "Full interior & exterior detailing with polish, cleaning & freebies",
      priceRange: "₹1399 - ₹1599",
      duration: "1-2 hours × 3",
      bestFor: "Regular deep clean with complete protection",
      features: [
        "3 premium washes included",
        "Interior + exterior cleaning",
        "Tyre & black part polish",
        "Free dustbin & air freshener"
      ],
      popular: false,
      color: "from-purple-500 to-pink-600"
    },
    
  
    
  ];

  const bookingSteps = [
    {
      step: 1,
      icon: Car,
      title: "Choose Your Service",
      description: "Pick one-time wash, add-ons, or monthly plan"
    },
    {
      step: 2,
      icon: MapPin,
      title: "Select Car & Location",
      description: "Tell us your car type and where to come"
    },
    {
      step: 3,
      icon: Calendar,
      title: "Pick Date & Time",
      description: "Choose when you want us to arrive"
    },
    {
      step: 4,
      icon: CheckCircle2,
      title: "Confirm & Relax",
      description: "We'll come to you and do the rest!"
    }
  ];
  const handleServiceClick = (service: any) => {
    sessionStorage.setItem('selectedServiceType', service.id);
    navigate(`/booking?service=${service.id}`);

  };

  return (
    // <section id="services" className="py-12 md:py-20 px-4 md:px-6 bg-black">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
    //         Our Car Washing Services
    //       </h2>
    //       <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto">
    //         Professional car care services delivered right to your doorstep. Choose from our range of services designed to keep your car spotless and protected.
    //       </p>
    //       <div className="w-20 h-1 bg-green-400 mx-auto"></div>
    //     </div>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-8 mb-12 justify-items-center">
    //       {services.map((service, index) => (
    //         <Card 
    //           key={index} 
    //           className={`
    //             bg-gray-800/80 border-gray-700 backdrop-blur-sm hover:border-green-400 
    //             transition-all duration-300 cursor-pointer transform hover:scale-105 
    //             hover:shadow-xl hover:shadow-green-400/20 relative group
    //             ${service.popular ? 'ring-2 ring-green-400' : ''}
    //           `}
    //           onClick={() => handleServiceClick(service)}
    //         >
    //           {service.popular && (
    //             <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
    //               <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold">
    //                 MOST POPULAR
    //               </span>
    //             </div>
    //           )}
              
    //           <CardContent className="p-6 text-center h-full flex flex-col ">
    //             <div className="text-4xl mb-4">{service.icon}</div>
                
    //             <h3 className="text-green-400 font-bold text-lg mb-1">{service.title}</h3>
    //             <p className="text-gray-400 text-sm mb-3">{service.subtitle}</p>
                
    //             <div className="mb-4">
    //               <div className="flex items-center justify-center gap-2 mb-2">
    //                 <span className="text-2xl font-bold text-white">{service.priceRange}</span>
    //               </div>
    //               <div className="flex items-center justify-center gap-2">
    //                 <span className="text-sm text-gray-400 line-through">{service.originalPrice}</span>
    //                 <span className="text-sm text-green-400 font-semibold">{service.savings}</span>
    //               </div>
    //             </div>

    //             <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-grow">
    //               {service.description}
    //             </p>
                
    //             <div className="space-y-2 mb-4">
    //               {service.features.slice(0, 3).map((feature, i) => (
    //                 <div key={i} className="flex items-center text-xs text-gray-300 justify-center">
    //                   <span className="text-green-400 mr-2">✓</span>
    //                   {feature}
    //                 </div>
    //               ))}
    //               {service.features.length > 3 && (
    //                 <div className="text-xs text-green-400">
    //                   +{service.features.length - 3} more features
    //                 </div>
    //               )}
    //             </div>

    //             <div className="space-y-2 mb-6">
    //               {service.highlights.map((highlight, i) => (
    //                 <div key={i} className="flex items-center text-xs text-gray-400 justify-center">
    //                   <highlight.icon className="h-3 w-3 mr-2 text-green-400" />
    //                   {highlight.text}
    //                 </div>
    //               ))}
    //             </div>

    //             <Button 
    //               className="w-full bg-green-400 hover:bg-green-500 text-black font-semibold group-hover:bg-green-500 transition-colors"
    //               onClick={(e) => {
    //                 e.stopPropagation();
    //                 handleServiceClick(service);
    //               }}
    //             >
    //               Check Prices
    //             </Button>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>
    //   </div>
    // </section>

     <section id="services" className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-green-400/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚗 Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Car Washing Made <span className="text-green-400">Simple</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional car cleaning at your doorstep. No driving, no waiting — just a spotless car.
          </p>
        </motion.div>

        {/* How It Works - Booking Steps */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            How to Book in <span className="text-green-400">4 Easy Steps</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bookingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-4 md:p-6 text-center h-full hover:border-green-400/50 transition-all duration-300">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-400/20">
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-black" />
                  </div>
                  <div className="absolute -top-3 -left-2 w-7 h-7 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {step.step}
                  </div>
                  <h4 className="text-white font-semibold text-sm md:text-base mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-xs md:text-sm">{step.description}</p>
                </div>
                
                {/* Arrow connector (hidden on last item and mobile) */}
                {index < bookingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-green-400/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            Choose Your <span className="text-green-400">Service Type</span>
          </h3>
          
          <div className="grid gap-6 justify-center 
                grid-cols-[repeat(auto-fit,minmax(320px,1fr))]
                max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  className={`
                    bg-gray-800/60 backdrop-blur-sm border-gray-700/50 
                    hover:border-green-400/70 transition-all duration-300 
                    cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1
                    hover:shadow-2xl hover:shadow-green-400/10 relative overflow-hidden h-full
                    ${service.popular ? 'ring-2 ring-green-400 border-green-400/50' : ''}
                  `}
                  onClick={() => handleServiceClick(service)}
                >
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-green-400 text-black px-4 py-1 text-xs font-bold rounded-bl-lg">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  
                  {/* Gradient Top Bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${service.color}`} />
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                        <service.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-bold text-lg leading-tight">{service.title}</h3>
                        <p className="text-green-400 text-sm font-medium">{service.tagline}</p>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price & Duration */}
                    <div className="flex items-center justify-between mb-4 py-3 px-4 bg-gray-900/50 rounded-lg">
                      <div>
                        <p className="text-xs text-gray-400 mb-1">Starting from</p>
                        <p className="text-xl font-bold text-white">{service.priceRange}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-400 mb-1">Duration</p>
                        <p className="text-sm font-medium text-green-400 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {service.duration}
                        </p>
                      </div>
                    </div>
                    
                    {/* Best For */}
                    <div className="mb-4 py-2 px-3 bg-green-400/10 rounded-lg border border-green-400/20">
                      <p className="text-xs text-green-400 flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5" />
                        <span className="font-medium">Best for:</span> {service.bestFor}
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6 flex-grow">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      className="w-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-black font-bold py-6 rounded-xl shadow-lg shadow-green-400/20 transition-all duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleServiceClick(service);
                      }}
                    >
                      Book This Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Help CTA */}
        <motion.div
          className="text-center mt-12 py-8 px-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-white mb-2">
            Not sure which service to choose?
          </h3>
          <p className="text-gray-400 mb-4">
            Call us and we'll help you pick the perfect service for your car
          </p>
          <a 
            href="tel:8920230357"
            className="inline-flex items-center gap-2 bg-green-400 hover:bg-green-500 text-black font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Call: 8920230357
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
